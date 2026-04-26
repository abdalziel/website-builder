"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I own my website?",
    answer:
      "You own your domain name and all your content. We own and operate the hosting infrastructure — that's what keeps your costs low and your site running reliably. If you ever want to leave, we'll package everything up for you. In practice, no one ever has.",
  },
  {
    question: "What does the monthly retainer actually include?",
    answer:
      "Hosting on our Vercel infrastructure, SSL certificate, content updates (new photos, text changes, hours, etc.), uptime monitoring, and priority support. For Ascent and Summit plans, it also includes the Google review automation pipeline.",
  },
  {
    question: "How do I update my website content?",
    answer:
      "Two ways: email or text us a change and we handle it (usually same day), or log into your Sanity dashboard and make the edit yourself. For things like reviews, team members, and service descriptions, the Sanity CMS is simple enough that most clients prefer doing it themselves.",
  },
  {
    question: "How long does it take to get a site live?",
    answer:
      "Typically 1–2 weeks from the time you sign and we have your content. The fastest we've ever shipped was 4 days. The timeline depends mostly on how quickly you can get us photos and copy — the technical side moves fast.",
  },
  {
    question: "What do I need to provide?",
    answer:
      "Your logo (or we can help you get a simple one made), photos of your business or team, and some basic info about what you do and who you serve. We'll ask you the right questions on the intake call. Most clients are surprised by how little we need.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Anytime, with 30 days notice. No penalties, no fees. We'll help you migrate your site if needed. We don't use contracts to keep clients — we use good service.",
  },
  {
    question: "Do you work with businesses outside Colorado?",
    answer:
      "Yes, though most of our clients are Colorado-based. The process works entirely remote — the only thing local is our knowledge of the Colorado market.",
  },
  {
    question: "What if I need something that isn't in a plan?",
    answer:
      "Ask us. Custom e-commerce, appointment booking, membership areas, Spanish-language versions — we've built all of it. Some things are included in Summit, some are add-ons. We'll give you a straight answer on cost before we do anything.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[var(--color-sandstone)] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-[var(--color-canyon)] group-hover:text-[var(--color-rust)] transition-colors pr-4">
          {question}
        </span>
        <span
          className={`text-[var(--color-rust)] transition-transform flex-shrink-0 ${open ? "rotate-45" : ""}`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="text-[var(--color-stone)] pb-5 leading-relaxed text-sm">{answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)]">
            Questions we get asked a lot.
          </h2>
        </div>

        <div className="bg-white border border-[var(--color-sandstone)] rounded-2xl px-8 py-2">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
