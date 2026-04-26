export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-canyon)]">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Rock strata lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--color-rust)]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[var(--color-rust-dark)]/30 to-transparent" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-sandstone) 1px, transparent 1px), linear-gradient(90deg, var(--color-sandstone) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--color-rust)]/20 border border-[var(--color-rust)]/40 text-[var(--color-sandstone)] text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-[var(--color-rust-light)] inline-block" />
            Colorado-based · Websites that work as hard as you do
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6 animate-fade-up delay-100">
            Your business deserves a website{" "}
            <span className="text-[var(--color-rust-light)]">that actually works.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-10 max-w-2xl animate-fade-up delay-200">
            We build, host, and manage everything. You focus on your customers —
            we handle the rest. No tech headaches. Ever.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <a
              href="#contact"
              className="bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:scale-[1.02] text-center"
            >
              Get a Free Quote
            </a>
            <a
              href="#portfolio"
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all text-center"
            >
              See Our Work
            </a>
          </div>

          {/* Social proof strip */}
          <div className="flex flex-wrap items-center gap-6 mt-14 pt-10 border-t border-white/10 animate-fade-up delay-300">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">1–2 wks</p>
              <p className="text-white/50 text-sm mt-1">Typical launch time</p>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">$0</p>
              <p className="text-white/50 text-sm mt-1">Tech headaches</p>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-white/50 text-sm mt-1">Managed by us</p>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-white">5★</p>
              <p className="text-white/50 text-sm mt-1">Client rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/20" />
      </div>
    </section>
  );
}
