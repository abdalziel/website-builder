import Logo from "@/components/Logo";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 bg-[var(--color-canyon)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Branded strata panel */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-[var(--color-canyon-mid)] border border-white/10 overflow-hidden flex items-center justify-center relative">
              {/* Layered rock strata backdrop */}
              <svg
                className="absolute bottom-0 left-0 w-full h-2/3"
                preserveAspectRatio="none"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
              >
                <polygon points="0,400 0,250 150,180 280,250 400,170 400,400" fill="#1C1208" />
                <polygon points="0,400 0,310 140,250 300,320 400,270 400,400" fill="#A33820" opacity="0.35" />
                <polygon points="0,400 0,350 200,310 400,350 400,400" fill="#2D1E10" />
              </svg>
              <div className="relative flex flex-col items-center text-center px-6">
                <Logo size={72} />
                <p className="mt-5 text-white font-semibold text-lg">
                  Red Rock <span className="text-[var(--color-rust-light)]">Digital</span>
                </p>
                <p className="text-white/50 text-sm mt-1 tracking-wide uppercase">
                  Colorado Web Design
                </p>
              </div>
            </div>
            {/* Floating stat card — true, verifiable differentiator */}
            <div className="absolute -bottom-5 -right-5 bg-[var(--color-rust)] text-white rounded-2xl p-5 shadow-xl max-w-[170px]">
              <p className="text-2xl font-bold leading-tight">Founder-led</p>
              <p className="text-white/80 text-xs mt-1">You work straight with me — no ticket queue.</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[var(--color-rust-light)] font-semibold text-sm tracking-widest uppercase mb-4">
              About
            </p>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Built by someone who actually knows Colorado.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                I&apos;m Blair — a Colorado-based web developer who got tired of watching
                small business owners get burned by agencies that disappear after launch
                or freelancers who can&apos;t be reached when something breaks.
              </p>
              <p>
                Red Rock Digital is built around a simple idea: your website should
                feel like it has a dedicated person behind it. Because it does. I
                handle the hosting, the updates, the performance — and I&apos;m available
                when you actually need me.
              </p>
              <p>
                Every site I build uses the same professional stack that powers some of
                the fastest sites on the web — just delivered at small business pricing,
                with small business speed, and Colorado reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">Colorado</p>
                <p className="text-white/60 text-sm mt-1">Based &amp; operated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">1–2 wks</p>
                <p className="text-white/60 text-sm mt-1">Typical launch time</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Let&apos;s Talk
                <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
