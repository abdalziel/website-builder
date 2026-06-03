import Logo from "@/components/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-canyon)] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logo size={28} />
              <span className="text-white font-semibold">
                Red Rock <span className="text-[var(--color-rust-light)]">Digital</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Websites for Front Range remodelers &amp; contractors. Built, hosted, and managed by a local guy who answers the phone — and you own it.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {[
                ["Services", "#services"],
                ["How It Works", "#how-it-works"],
                ["Our Work", "#portfolio"],
                ["About", "#about"],
                ["FAQ", "#faq"],
                ["Get a Quote", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/70 hover:text-white text-sm transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@redrockdigital.ai"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  hello@redrockdigital.ai
                </a>
              </li>
              <li className="text-white/70 text-sm">Colorado, USA</li>
            </ul>
            <a
              href="#contact"
              className="inline-block mt-5 bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-xs">
            © {year} Red Rock Digital. All rights reserved.
          </p>
          <p className="text-white/55 text-xs">
            Front Range · You own it · No lock-in
          </p>
        </div>
      </div>
    </footer>
  );
}
