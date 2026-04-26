const steps = [
  {
    number: "01",
    title: "We Talk",
    description:
      "A free 30-minute call. You tell us about your business, your customers, and what you need. We take it from there — no homework required.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We Build",
    description:
      "Your site is live in 1–2 weeks. We handle design, copywriting direction, setup, and testing. You review and approve. One DNS record is all you touch.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "You Grow",
    description:
      "Your site is live, leads are coming in, and we're watching everything. Need an update? Just send us a message. We handle it, usually same day.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[var(--color-sandstone-light)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
            The Process
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] mb-4">
            Simple from start to launch.
          </h2>
          <p className="text-lg text-[var(--color-stone)] max-w-xl mx-auto">
            Most of our clients are live within two weeks of our first call.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-[var(--color-sandstone)] z-0" />

          {steps.map((step) => (
            <div key={step.number} className="relative z-10 text-center flex flex-col items-center">
              {/* Number + icon */}
              <div className="w-20 h-20 rounded-full bg-[var(--color-canyon)] flex items-center justify-center mb-6 shadow-lg">
                <div className="text-[var(--color-rust-light)]">{step.icon}</div>
              </div>

              {/* Step number */}
              <span className="text-xs font-bold tracking-widest text-[var(--color-rust)] uppercase mb-2">
                Step {step.number}
              </span>

              <h3 className="text-xl font-bold text-[var(--color-canyon)] mb-3">{step.title}</h3>
              <p className="text-[var(--color-stone)] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Book Your Free Call
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
