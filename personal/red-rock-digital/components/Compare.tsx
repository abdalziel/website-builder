const rows = [
  {
    feature: "Site goes live",
    diy: "Weeks of tutorials",
    freelancer: "4–8 weeks",
    agency: "2–4 months",
    us: "1–2 weeks",
  },
  {
    feature: "Ongoing updates",
    diy: "You figure it out",
    freelancer: "Hourly billing",
    agency: "Expensive retainer",
    us: "Included",
  },
  {
    feature: "When something breaks",
    diy: "You're on your own",
    freelancer: "Hope they're available",
    agency: "Open a ticket",
    us: "We fix it same day",
  },
  {
    feature: "Monthly cost",
    diy: "$20–50 tools",
    freelancer: "Nothing (you own it)",
    agency: "$500+/mo",
    us: "$75–200/mo",
  },
  {
    feature: "SEO setup",
    diy: "Manual, inconsistent",
    freelancer: "Sometimes",
    agency: "Extra cost",
    us: "Included",
  },
  {
    feature: "Google reviews on site",
    diy: "Plugin + manual",
    freelancer: "Rarely",
    agency: "Extra cost",
    us: "Automated",
  },
  {
    feature: "You own the domain",
    diy: "✓",
    freelancer: "✓",
    agency: "✓",
    us: "✓",
  },
];

export default function Compare() {
  return (
    <section className="py-24 bg-[var(--color-canyon)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-rust-light)] font-semibold text-sm tracking-widest uppercase mb-3">
            How We Stack Up
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We built this for people who just want it handled.
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            There are a lot of ways to get a website. Here's an honest look at
            how they compare.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 text-white/50 text-sm font-medium w-1/4">
                  Feature
                </th>
                <th className="py-4 px-4 text-white/50 text-sm font-medium text-center">DIY</th>
                <th className="py-4 px-4 text-white/50 text-sm font-medium text-center">Freelancer</th>
                <th className="py-4 px-4 text-white/50 text-sm font-medium text-center">Agency</th>
                <th className="py-4 px-6 text-[var(--color-rust-light)] text-sm font-bold text-center bg-white/5 rounded-t-xl">
                  Red Rock Digital
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}
                >
                  <td className="py-4 px-6 text-white/80 text-sm font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-white/40 text-sm text-center">{row.diy}</td>
                  <td className="py-4 px-4 text-white/40 text-sm text-center">{row.freelancer}</td>
                  <td className="py-4 px-4 text-white/40 text-sm text-center">{row.agency}</td>
                  <td className="py-4 px-6 text-[var(--color-sandstone)] text-sm font-semibold text-center bg-white/[0.04]">
                    {row.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
