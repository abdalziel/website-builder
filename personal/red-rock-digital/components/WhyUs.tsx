const differentiators = [
  {
    title: "We own the infrastructure.",
    description:
      "Your site runs on our Vercel account, our GitHub, our Sanity. You're never left holding a server you don't understand or a bill you didn't expect. If something breaks, it's our problem — we fix it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Live in 1–2 weeks.",
    description:
      "We've built the process. Design decisions are made, templates are ready, hosting is configured. A new site goes from first call to live URL faster than most agencies schedule their kick-off meetings.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Updates included, no invoice needed.",
    description:
      "Changed your hours? New service to add? Hero photo that finally looks right? Text us or email us. It's handled — usually same day. That's what the monthly retainer covers.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Google reviews on autopilot.",
    description:
      "We connect your Google Business Profile to your site. New 4–5 star reviews get pulled nightly and appear automatically after you approve them in a simple dashboard. Your reputation builds itself.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "No contract. No lock-in.",
    description:
      "We earn your business every month. Cancel anytime with 30 days notice. We'll even help you migrate your site if you leave — though in two years of business, no one has.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Colorado-based, reachable humans.",
    description:
      "We're in Colorado. You can call us. You can text us. When something matters to your business, you don't want to wait 3 business days for a ticket response from a team in another timezone.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
              Why Red Rock Digital
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] leading-tight">
              You never have to think about your website again.
            </h2>
          </div>
          <div className="md:pt-12">
            <p className="text-lg text-[var(--color-stone)] leading-relaxed">
              Most web agencies hand you the keys and disappear. We stay. Your
              site is our responsibility — the hosting, the updates, the
              performance, all of it. You run your business. We run your website.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[var(--color-sandstone)] rounded-2xl p-7 hover:border-[var(--color-rust)]/40 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[var(--color-rust)]/10 flex items-center justify-center mb-5 text-[var(--color-rust)] group-hover:bg-[var(--color-rust)] group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="font-bold text-[var(--color-canyon)] text-lg mb-3">{item.title}</h3>
              <p className="text-[var(--color-stone)] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
