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
                  Sites for Front Range Contractors
                </p>
              </div>
            </div>
            {/* Floating stat card — true, verifiable differentiator */}
            <div className="absolute -bottom-5 -right-5 bg-[var(--color-rust)] text-white rounded-2xl p-5 shadow-xl max-w-[170px]">
              <p className="text-2xl font-bold leading-tight">I answer</p>
              <p className="text-white/80 text-xs mt-1">Text me a change — handled same-day. No call center.</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[var(--color-rust-light)] font-semibold text-sm tracking-widest uppercase mb-4">
              About
            </p>
            <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              A local guy who builds for Front Range contractors.
            </h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                I&apos;m Blair — a Colorado web developer who got tired of watching good
                remodelers and contractors get burned. The national &ldquo;managed&rdquo;
                services lock you in and bury you in a call center. The cheap freelancers
                vanish the second something breaks.
              </p>
              <p>
                Red Rock Digital works on a simple idea: your site should have a real
                person behind it. Because it does. I build it to look like your work —
                project galleries, before-and-afters, quote requests — then I host it,
                manage it, and pick up the phone when you need a change. Text me, it&apos;s
                handled same-day.
              </p>
              <p>
                And it&apos;s yours. Your site, your domain, your code — no lock-in, no
                contract. Cancel anytime and keep everything. Built right here on the
                Front Range, for the guys doing the work here.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">You own it</p>
                <p className="text-white/60 text-sm mt-1">Your site, your domain — no lock-in</p>
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
