const tiers = [
  {
    name: "Basecamp",
    tagline: "Get online, look professional.",
    setup: "$499",
    monthly: "$75/mo",
    description:
      "Everything a small business needs to have a clean, credible presence online.",
    features: [
      "Up to 5 pages",
      "Mobile-optimized design",
      "Contact form + lead capture",
      "Google Analytics setup",
      "Fast hosting (your domain)",
      "Monthly support & updates",
      "SSL certificate",
    ],
    cta: "Start with Basecamp",
    highlight: false,
  },
  {
    name: "Ascent",
    tagline: "Grow your online presence.",
    setup: "$999",
    monthly: "$125/mo",
    description:
      "Custom design, SEO foundation, and Google review automation that builds trust on autopilot.",
    features: [
      "Up to 10 pages",
      "Custom design (your brand)",
      "SEO-optimized structure",
      "Google review automation",
      "Sanity CMS — edit your content",
      "Priority email support",
      "Everything in Basecamp",
    ],
    cta: "Start with Ascent",
    highlight: true,
  },
  {
    name: "Summit",
    tagline: "Full-service, zero effort.",
    setup: "$1,799",
    monthly: "$200/mo",
    description:
      "Online booking, advanced integrations, and hands-on management. We handle everything.",
    features: [
      "Unlimited pages",
      "Online booking system",
      "Advanced lead automation",
      "Monthly content updates",
      "Priority phone + email support",
      "Performance reporting",
      "Everything in Ascent",
    ],
    cta: "Start with Summit",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-lg text-[var(--color-stone)] max-w-xl mx-auto">
            A one-time setup fee to get you live. A monthly retainer so we
            handle everything after that.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "bg-[var(--color-canyon)] text-white shadow-2xl md:scale-[1.02]"
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
          All plans include hosting, SSL, and ongoing support. No contracts — cancel anytime.
        </p>
      </div>
    </section>
  );
}
