// Open Strata — freeform diagonal slabs, no container (Red Rocks logo style, geometric)
export default function LogoG({ size = 48 }: { size?: number }) {
  return (
    <svg width={size * 1.6} height={size} viewBox="0 0 96 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 4 diagonal rock slabs angled ~30° — each slab has a jagged upper edge */}
      {/* Slab 1 — leftmost, tallest */}
      <path
        d="M0 56 L0 36 L4 28 L10 20 L14 24 L16 30 L18 34 L20 56 Z"
        fill="#C4442B"
      />
      {/* Slab 2 */}
      <path
        d="M24 56 L22 38 L26 26 L32 14 L36 18 L38 26 L40 34 L42 56 Z"
        fill="#C4442B"
      />
      {/* Slab 3 */}
      <path
        d="M46 56 L44 40 L48 28 L52 16 L56 8 L60 14 L62 24 L64 36 L66 56 Z"
        fill="#C4442B"
      />
      {/* Slab 4 — rightmost */}
      <path
        d="M70 56 L68 42 L72 30 L76 18 L80 10 L84 4 L88 10 L90 22 L92 36 L96 56 Z"
        fill="#C4442B"
      />
    </svg>
  );
}
