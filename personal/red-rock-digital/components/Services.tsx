const tiers = [
  {
    name: "Basecamp",
    tagline: "Get found, look the part.",
    setup: "$499",
    monthly: "$75/mo",
    description:
      "Everything a remodeler needs to look licensed, credible, and ready to quote the job.",
    features: [
      "Up to 5 pages",
      "Project gallery with before-and-afters",
      "Quote request form + lead capture",
      "\"Licensed & insured\" trust signals",
      "Fast hosting (your domain — you own it)",
      "Same-day edits, no call center",
      "SSL certificate",
    ],
    cta: "Start with Basecamp",
    highlight: false,
  },
  {
    name: "Ascent",
    tagline: "Win more of the right jobs.",
    setup: "$999",
    monthly: "$125/mo",
    description:
      "Custom design, local SEO, and Google reviews so homeowners searching \"kitchen remodel near me\" find you and trust you.",
    features: [
      "Up to 10 pages",
      "Custom design that looks like your work",
      "Service-area pages + local SEO",
      "Google review collection on autopilot",
      "Edit your own galleries & pages",
      "A local human who answers the phone",
      "Everything in Basecamp",
    ],
    cta: "Start with Ascent",
    highlight: true,
  },
  {
    name: "Summit",
    tagline: "Book jobs, none of the hassle.",
    setup: "$1,799",
    monthly: "$200/mo",
    description:
      "Financing CTAs, quote automation, and hands-on management. You run the jobsite — I run the website.",
    features: [
      "Unlimited pages + service areas",
      "Financing CTA to close bigger jobs",
      "Quote + lead automation",
      "Monthly gallery & content updates",
      "Priority phone — talk to me, not a queue",
      "Found-online performance reporting",
      "Everything in Ascent",
    ],
    cta: "Start with Summit",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-lg text-[var(--color-stone)] max-w-xl mx-auto">
            One setup fee to get you live. A flat monthly so I handle
            everything after that. You own the site — cancel anytime.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              aria-label={tier.highlight ? `${tier.name} — most popular plan` : tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "bg-[var(--color-canyon)] text-white shadow-2xl md:scale-[1.02] ring-2 ring-[var(--color-rust)]"
                  : "bg-white border border-[var(--color-sandstone)] text-[var(--color-canyon)]"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-rust)] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide uppercase">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-xl font-bold mb-1 ${
                    tier.highlight ? "text-white" : "text-[var(--color-canyon)]"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-5 ${
                    tier.highlight ? "text-white/60" : "text-[var(--color-stone)]"
                  }`}
                >
                  {tier.tagline}
                </p>

                <div className="flex items-end gap-2 mb-1">
                  <span className="text-4xl font-bold">{tier.setup}</span>
                  <span
                    className={`text-sm mb-1.5 ${
                      tier.highlight ? "text-white/50" : "text-[var(--color-stone)]"
                    }`}
                  >
                    setup
                  </span>
                </div>
                <p
                  className={`text-sm font-medium ${
                    tier.highlight ? "text-[var(--color-rust-light)]" : "text-[var(--color-rust)]"
                  }`}
                >
                  + {tier.monthly} after launch
                </p>
              </div>

              <p
                className={`text-sm leading-relaxed mb-6 ${
                  tier.highlight ? "text-white/70" : "text-[var(--color-stone)]"
                }`}
              >
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      aria-hidden="true"
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        tier.highlight ? "text-[var(--color-rust-light)]" : "text-[var(--color-rust)]"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={tier.highlight ? "text-white/80" : "text-[var(--color-charcoal)]"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold py-3.5 px-6 rounded-lg transition-all text-sm ${
                  tier.highlight
                    ? "bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] text-white"
                    : "bg-[var(--color-canyon)] hover:bg-[var(--color-charcoal)] text-white"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-sm text-[var(--color-stone)] mt-8">
          Every plan: hosting, SSL, same-day edits, and a site you own. No contracts — cancel anytime, keep everything.
        </p>
      </div>
    </section>
  );
}
