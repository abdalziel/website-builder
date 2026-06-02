import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-cream)] px-6 text-center">
      <p className="text-[var(--color-rust)] font-semibold text-sm tracking-widest uppercase mb-3">
        404
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-canyon)] mb-4">
        We couldn&apos;t find that page.
      </h1>
      <p className="text-[var(--color-stone)] text-lg max-w-md mb-8">
        The page you&apos;re looking for moved or never existed. Let&apos;s get you back on solid ground.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-[var(--color-rust)] hover:bg-[var(--color-rust-dark)] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
