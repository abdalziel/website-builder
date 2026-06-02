// ── Real client testimonials ────────────────────────────────────────────────
// Add verified quotes here as clients give permission. When this array has
// entries, the section automatically renders them as a testimonial grid instead
// of the honest "early days" content below. Keep these REAL — name, business,
// and quote should all be things the client actually said and approved.
type Testimonial = {
  quote: string;
  name: string;
  business: string;
  location: string;
};

const testimonials: Testimonial[] = [
  // {
  //   quote: "…",
  //   name: "Jane Doe",
  //   business: "Acme Co.",
  //   location: "Denver, CO",
  // },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[var(--color-rust-light)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

function RealTestimonials() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <div
          key={t.name}
          className="bg-white border border-[var(--color-sandstone)] rounded-2xl p-7 flex flex-col"
        >
          <Stars />
          <blockquote className="mt-4 text-[var(--color-charcoal)] leading-relaxed flex-1 text-sm">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="mt-6 pt-5 border-t border-[var(--color-sandstone)]">
            <p className="font-semibold text-[var(--color-canyon)] text-sm">{t.name}</p>
            <p className="text-[var(--color-stone)] text-xs mt-0.5">{t.business}</p>
            <p className="text-[var(--color-stone)] text-xs">{t.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function EarlyDays() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Honest founder note — a real, attributable statement, not a fake client */}
      <div className="bg-[var(--color-canyon)] rounded-2xl p-8 flex flex-col">
        <p className="text-[var(--color-rust-light)] text-xs font-bold tracking-widest uppercase mb-4">
          An honest note
        </p>
        <blockquote className="text-white/90 leading-relaxed flex-1">
          Red Rock Digital is young — I&apos;d rather tell you that than fill this page
          with reviews you can&apos;t verify. Being early is the upside for you: you get
          my full attention, founder pricing, and a person who answers when you call.
          I&apos;m building this roster carefully, one happy client at a time.
        </blockquote>
        <div className="mt-6 pt-5 border-t border-white/10">
          <p className="font-semibold text-white text-sm">Blair</p>
          <p className="text-white/50 text-xs mt-0.5">Founder, Red Rock Digital</p>
        </div>
      </div>

      {/* Real, verifiable proof — a live client site */}
      <div className="bg-white border border-[var(--color-sandstone)] rounded-2xl p-8 flex flex-col">
        <p className="text-[var(--color-rust)] text-xs font-bold tracking-widest uppercase mb-4">
          Live client work
        </p>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[var(--color-canyon)] mb-2">
            Elevated Apartment Locating
          </h3>
          <p className="text-[var(--color-stone)] text-sm leading-relaxed mb-5">
            A full marketing site for a Denver apartment-locating service — hero,
            neighborhood guides, an automated Google-review pipeline, and lead capture.
            Designed, built, and launched in nine days, and live today.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Launched in 9 days", "Automated reviews", "Mobile-first"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--color-sandstone-light)] text-[var(--color-charcoal)] border border-[var(--color-sandstone)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href="https://elevatedapartmentlocating.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[var(--color-rust)] hover:text-[var(--color-rust-dark)] transition-colors"
        >
          Visit the live site
          <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const hasReal = testimonials.length > 0;

  return (
    <section aria-labelledby="proof-heading" className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
            {hasReal ? "Client Stories" : "Straight Talk"}
          </p>
          <h2 id="proof-heading" className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] mb-4">
            {hasReal ? "What our clients say." : "We're early — and that's good news for you."}
          </h2>
          {!hasReal && (
            <p className="text-lg text-[var(--color-stone)] max-w-xl mx-auto">
              No invented reviews here. Just an honest look at where we are and real,
              live work you can click into.
            </p>
          )}
        </div>

        {hasReal ? <RealTestimonials /> : <EarlyDays />}
      </div>
    </section>
  );
}
