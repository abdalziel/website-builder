const projects = [
  {
    name: "Elevated Apartment Locating",
    category: "Apartment Locating · Denver, CO",
    description:
      "Full-service site for a Denver apartment locator — hero, how it works, neighborhood guides, Google review automation, and a lead capture form.",
    results: [
      "Live in 9 days",
      "Automated review pipeline",
      "Mobile-first design",
    ],
    url: "https://elevatedapartmentlocating.com",
    accentColor: "var(--color-sky)",
  },
  {
    name: "Your Business Here",
    category: "Your Industry · Your City, CO",
    description:
      "We're actively taking on new clients. Your site could be next — live in 1–2 weeks with everything set up and running.",
    results: ["Book a free call", "Launch in 2 weeks", "Fully managed"],
    url: "#contact",
    accentColor: "var(--color-rust)",
    isPlaceholder: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[var(--color-sandstone-light)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] mb-4">
            Built in Colorado. Built to last.
          </h2>
          <p className="text-lg text-[var(--color-stone)] max-w-xl mx-auto">
            Every site we build is custom to your business, fast to launch, and
            managed by us going forward.
          </p>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`rounded-2xl overflow-hidden border ${
                project.isPlaceholder
                  ? "border-dashed border-[var(--color-sandstone)] bg-white/50"
                  : "border-[var(--color-sandstone)] bg-white shadow-sm"
              }`}
            >
              {/* Preview area */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: project.isPlaceholder ? "var(--color-sandstone-light)" : "var(--color-canyon)" }}
              >
                {project.isPlaceholder ? (
                  <div className="flex flex-col items-center gap-3 text-[var(--color-stone)]">
                    <svg className="w-10 h-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span className="text-sm font-medium opacity-60">Your site here</span>
                  </div>
                ) : (
                  <div className="text-center px-8">
                    <div
                      className="text-4xl font-bold tracking-tight mb-2"
                      style={{ color: `var(--color-sandstone)` }}
                    >
                      {project.name.split(" ")[0]}
                    </div>
                    <div className="text-white/40 text-sm">{project.url}</div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: `${project.accentColor}` }}>
                  {project.category}
                </p>
                <h3 className="text-xl font-bold text-[var(--color-canyon)] mb-3">{project.name}</h3>
                <p className="text-[var(--color-stone)] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.results.map((result) => (
                    <span
                      key={result}
                      className="text-xs font-medium px-3 py-1.5 rounded-full bg-[var(--color-sandstone-light)] text-[var(--color-charcoal)] border border-[var(--color-sandstone)]"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target={project.isPlaceholder ? undefined : "_blank"}
                  rel={project.isPlaceholder ? undefined : "noopener noreferrer"}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: `${project.accentColor}` }}
                >
                  {project.isPlaceholder ? "Get Started" : "View Site"}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
