import { Resend } from "resend";
import { NextResponse } from "next/server";
import { SITE } from "@/lib/site";

// Escape user input before interpolating into HTML email bodies.
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );
}

// Strip CR/LF (header-injection vector) and cap length for the subject line.
function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, 150);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

// Simple in-memory rate limit. Adequate for a single low-traffic deployment;
// for multi-region scale, swap for a shared store (e.g. Upstash Redis).
const RATE_LIMIT = 4;
const RATE_WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now > rec.reset) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  if (rec.count >= RATE_LIMIT) return true;
  rec.count++;
  return false;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const business = typeof body.business === "string" ? body.business.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const plan = typeof body.plan === "string" ? body.plan.trim() : "";
  const honeypot = typeof body.company === "string" ? body.company.trim() : "";

  // Honeypot: real users never fill the hidden "company" field. Pretend success.
  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (!name || name.length > 100) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (!business || business.length > 100) {
    return NextResponse.json({ error: "Please enter your business name." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Lead notification to us.
    await resend.emails.send({
      from: `${SITE.name} <${SITE.email}>`,
      to: [SITE.email],
      replyTo: email,
      subject: `New quote request from ${sanitizeHeader(business)}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Business:</strong> ${escapeHtml(business)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Plan interest:</strong> ${escapeHtml(plan || "Not sure yet")}</p>
        <p><strong>Message:</strong><br>${escapeHtml(message || "None").replace(/\n/g, "<br>")}</p>
      `,
    });

    // Confirmation to the lead (email already validated above).
    await resend.emails.send({
      from: `${SITE.name} <${SITE.email}>`,
      to: [email],
      subject: "We got your message — talk soon.",
      html: `
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for reaching out. We'll be in touch within one business day to schedule a free 30-minute call.</p>
        <p>— ${SITE.founder}<br>${SITE.name}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 }
    );
  }
}
