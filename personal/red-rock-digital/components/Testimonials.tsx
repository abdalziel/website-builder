const testimonials = [
  {
    quote:
      "I went from nothing to a fully running website in under two weeks. Blair handled literally everything — I just pointed my domain and sent a couple photos. The leads started coming in the first week.",
    name: "Client Name",
    title: "Owner, [Business Name]",
    location: "Denver, CO",
    stars: 5,
  },
  {
    quote:
      "I had a Squarespace site I built myself and it looked like I built it myself. Red Rock built us something that actually looks professional. Now when I send someone to our site I'm not embarrassed.",
    name: "Client Name",
    title: "Owner, [Business Name]",
    location: "Boulder, CO",
    stars: 5,
  },
  {
    quote:
      "The review automation alone was worth it. My Google reviews show up on the site automatically and I didn't have to do anything. Clients tell me all the time they found us because of those reviews.",
    name: "Client Name",
    title: "Owner, [Business Name]",
    location: "Fort Collins, CO",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[var(--color-rust-light)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] mb-4">
            What our clients say.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white border border-[var(--color-sandstone)] rounded-2xl p-7 flex flex-col"
            >
              <Stars count={t.stars} />
              <blockquote className="mt-4 text-[var(--color-charcoal)] leading-relaxed flex-1 text-sm">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-5 border-t border-[var(--color-sandstone)]">
                <p className="font-semibold text-[var(--color-canyon)] text-sm">{t.name}</p>
                <p className="text-[var(--color-stone)] text-xs mt-0.5">{t.title}</p>
                <p className="text-[var(--color-stone)] text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-[var(--color-stone)] mt-8">
          Testimonials from real clients. Names updated as we build our roster.
        </p>
      </div>
    </section>
  );
}
