const differentiators = [
  {
    title: "You own it. No lock-in.",
    description:
      "Your site, your domain, your code — yours. Not rented from me, not held hostage. The big national outfits lock you in and own everything you paid for; walk away and you walk away empty-handed. Not here. Cancel anytime, keep all of it. I earn your business every month, or I don't keep it.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Talk to me, not a call center.",
    description:
      "I'm right here on the Front Range. Call or text and you get a person — me — not a ticket queue, not a script, not someone three time zones away who's never seen your jobsite. When something matters to your business, you shouldn't have to wait three days for a reply.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Built for remodelers, not everyone.",
    description:
      "This isn't a generic template with your logo dropped on it. Project galleries, before-and-afters, quote and financing CTAs, licensed-and-insured trust signals, service-area pages — a site that looks like your work and gets homeowners to ask for a quote.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Need a change? Text me, it's handled.",
    description:
      "New job photos for the gallery? Added a service? Updated your service area? Text me or email me — usually done the same day. No invoice, no change-order, no ticket number. That's what the monthly fee covers.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    title: "Gets you found. Books jobs.",
    description:
      "Local SEO and service-area pages so when a homeowner searches \"kitchen remodel near me\" or \"contractor in Denver,\" you show up — not just the big franchises. Then your site does the selling and turns that search into a quote request.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Your Google reviews, front and center.",
    description:
      "I pull your real Google reviews straight onto your site so homeowners see them the moment they land. You pick which ones to feature from a simple dashboard — no copy-pasting, no fakes. Your reputation does the convincing before they ever pick up the phone.",
    icon: (
      <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section aria-labelledby="why-heading" className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
              Why Red Rock Digital
            </p>
            <h2 id="why-heading" className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] leading-tight">
              More of the right jobs. None of the website hassle.
            </h2>
          </div>
          <div className="md:pt-12">
            <p className="text-lg text-[var(--color-stone)] leading-relaxed">
              You run a remodeling business, not a marketing department. I build,
              host, and manage a website that makes homeowners trust you and
              request a quote — a site you own outright, with no lock-in and a
              local guy who actually answers the phone.
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
