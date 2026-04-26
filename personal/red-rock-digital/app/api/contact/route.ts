import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, business, phone, message, plan } = await request.json();

  try {
    await resend.emails.send({
      from: "Red Rock Digital <hello@redrockdigital.ai>",
      to: ["hello@redrockdigital.ai"],
      replyTo: email,
      subject: `New quote request from ${business}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Business:</strong> ${business}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Plan interest:</strong> ${plan || "Not sure yet"}</p>
        <p><strong>Message:</strong><br>${message || "None"}</p>
      `,
    });

    // Confirmation to the lead
    await resend.emails.send({
      from: "Red Rock Digital <hello@redrockdigital.ai>",
      to: [email],
      subject: "We got your message — talk soon.",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out. We'll be in touch within one business day to schedule a free 30-minute call.</p>
        <p>— Blair<br>Red Rock Digital</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
