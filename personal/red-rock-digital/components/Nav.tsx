"use client";

import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const cbRef = useRef<HTMLInputElement>(null);

  // Sync React state when the CSS label toggles the checkbox
  useEffect(() => {
    const cb = cbRef.current;
    if (!cb) return;
    const sync = () => setOpen(cb.checked);
    cb.addEventListener("change", sync);
    return () => cb.removeEventListener("change", sync);
  }, []);

  const close = () => {
    setOpen(false);
    if (cbRef.current) cbRef.current.checked = false;
  };

  const links = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Our Work", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Hidden checkbox — only the hamburger label below toggles it */}
      <input ref={cbRef} type="checkbox" id="mobile-nav" className="sr-only" />

      {/* Backdrop at z-[1] — nav/menu sit at z-[2] so links are never covered */}
      {open && (
        <div
          className="fixed inset-0 md:hidden cursor-pointer"
          style={{ zIndex: 1 }}
          onClick={close}
          aria-hidden="true"
        />
      )}

      <nav className="bg-[var(--color-canyon)] shadow-sm" style={{ position: "relative", zIndex: 2 }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-end gap-[3px]">
              <div className="w-2 bg-[var(--color-rust)] rounded-sm" style={{ height: "60%" }} />
              <div className="w-2 bg-[var(--color-rust-light)] rounded-sm" style={{ height: "80%" }} />
              <div className="w-2 bg-[var(--color-sandstone)] rounded-sm" style={{ height: "100%" }} />
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              Red Rock <span className="text-[var(--color-rust-light)]">Digital</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-white/70 hover:text-white text-sm font-medium transition-colors">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors">
              Get a Free Quote
            </a>
          </div>

          {/* Hamburger / X — CSS label is the only tap target, proven reliable on iOS */}
          <label
            htmlFor="mobile-nav"
            className="md:hidden flex items-center justify-center w-12 h-12 -mr-2 cursor-pointer"
            style={{ WebkitTapHighlightColor: "transparent" }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <div className="relative w-6 h-5">
              <span className={`absolute left-0 block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${open ? "top-[9px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[9px] block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`absolute left-0 block h-0.5 w-6 bg-white rounded-full transition-all duration-300 ${open ? "bottom-[9px] -rotate-45" : "bottom-0"}`} />
            </div>
          </label>
        </div>
      </nav>

      {/* Mobile menu at z-[2], same level as nav — above the backdrop */}
      <div
        className={`flex flex-col bg-[var(--color-canyon)] border-t border-white/10 px-6 pb-6 gap-1 md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] opacity-100 pt-4" : "max-h-0 opacity-0"}`}
        style={{ position: "relative", zIndex: 2 }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={close}
            className="block text-white/80 text-base font-medium py-3 border-b border-white/5"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={close}
          className="block mt-3 bg-[var(--color-rust)] text-white text-center font-semibold px-5 py-3.5 rounded-lg"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
}
