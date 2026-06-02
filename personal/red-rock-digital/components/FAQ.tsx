"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-[var(--color-sandstone)] last:border-0">
      <h3>
        <button
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <span className="font-semibold text-[var(--color-canyon)] group-hover:text-[var(--color-rust)] transition-colors pr-4">
            {question}
          </span>
          <span
            className={`text-[var(--color-rust)] transition-transform flex-shrink-0 ${open ? "rotate-45" : ""}`}
            aria-hidden="true"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span>
        </button>
      </h3>
      {open && (
        <p id={panelId} role="region" aria-labelledby={buttonId} className="text-[var(--color-stone)] pb-5 leading-relaxed text-sm">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
            FAQ
          </p>
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)]">
            Questions we get asked a lot.
          </h2>
        </div>

        <div className="bg-white border border-[var(--color-sandstone)] rounded-2xl px-8 py-2">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} index={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
