"use client";

import { useState } from "react";

const inputClass =
  "w-full border border-[var(--color-sandstone)] rounded-lg px-4 py-3 text-sm text-[var(--color-canyon)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)] focus:ring-offset-1 focus:border-[var(--color-rust)] transition-colors";
const labelClass =
  "block text-xs font-semibold text-[var(--color-canyon)] mb-1.5 uppercase tracking-wide";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    phone: "",
    message: "",
    plan: "",
    company: "", // honeypot — must stay empty
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        setError(
          (data && data.error) ||
            "Something went wrong. Please try again, or email hello@redrockdigital.ai."
        );
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[var(--color-sandstone-light)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — copy */}
          <div>
            <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] leading-tight mb-6">
              Let&apos;s build something worth showing off.
            </h2>
            <p className="text-[var(--color-stone)] text-lg leading-relaxed mb-8">
              Fill out the form and we&apos;ll reach out within one business day to
              schedule a free 30-minute call. No pressure, no pitch deck — just
              a conversation about your business.
            </p>

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="mailto:hello@redrockdigital.ai"
                className="flex items-center gap-3 text-[var(--color-charcoal)] hover:text-[var(--color-rust)] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-rust)]/10 flex items-center justify-center text-[var(--color-rust)]">
                  <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <span className="text-sm font-medium">hello@redrockdigital.ai</span>
              </a>
              <div className="flex items-center gap-3 text-[var(--color-charcoal)]">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-rust)]/10 flex items-center justify-center text-[var(--color-rust)]">
                  <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Colorado, USA</span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white border border-[var(--color-sandstone)] rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center h-full text-center py-12"
                role="status"
                aria-live="polite"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--color-rust)]/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[var(--color-rust)]" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-canyon)] mb-2">We&apos;ll be in touch.</h3>
                <p className="text-[var(--color-stone)] text-sm">
                  Expect a response within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Honeypot — hidden from users, catches bots */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company (leave blank)</label>
                  <input
                    id="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      placeholder="(720) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="you@yourbusiness.com"
                  />
                </div>

                <div>
                  <label htmlFor="business" className={labelClass}>Business Name *</label>
                  <input
                    id="business"
                    type="text"
                    required
                    autoComplete="organization"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className={inputClass}
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label htmlFor="plan" className={labelClass}>I&apos;m interested in</label>
                  <select
                    id="plan"
                    value={form.plan}
                    onChange={(e) => setForm({ ...form, plan: e.target.value })}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="">Not sure yet</option>
                    <option value="basecamp">Basecamp ($499 + $75/mo)</option>
                    <option value="ascent">Ascent ($999 + $125/mo)</option>
                    <option value="summit">Summit ($1,799 + $200/mo)</option>
                    <option value="custom">Something custom</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Tell us about your business</label>
                  <textarea
                    id="message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder="What do you do, who are your customers, what's your goal for the site?"
                  />
                </div>

                {error && (
                  <p className="text-sm text-[var(--color-rust-dark)] bg-[var(--color-rust)]/10 border border-[var(--color-rust)]/30 rounded-lg px-4 py-3" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors text-base"
                >
                  {loading ? "Sending…" : "Get My Free Quote"}
                </button>

                <p className="text-center text-xs text-[var(--color-stone)]">
                  No spam. We&apos;ll respond within 1 business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
