export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--color-canyon)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-[var(--color-canyon-mid)] border border-white/10 overflow-hidden flex items-center justify-center">
              <div className="text-center text-white/20">
                <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <p className="text-sm">Your photo here</p>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-5 bg-[var(--color-rust)] text-white rounded-2xl p-5 shadow-xl">
              <p className="text-3xl font-bold">5★</p>
              <p className="text-white/70 text-xs mt-1">Average client rating</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[var(--color-rust-light)] font-semibold text-sm tracking-widest uppercase mb-4">
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Built by someone who actually knows Colorado.
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
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
                Every site I build uses the same professional stack that Fortune 500
                companies use — just delivered at small business pricing, with small
                business speed, and Colorado reliability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">Colorado</p>
                <p className="text-white/50 text-sm mt-1">Based &amp; operated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">1–2 wks</p>
                <p className="text-white/50 text-sm mt-1">Average launch time</p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
              >
                Let&apos;s Talk
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
