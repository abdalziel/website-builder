// Red Rock Digital brand mark — three diagonal rock-strata slabs (rust gradient).
// Containerless and on a transparent background so it reads on the dark nav/footer
// and anywhere else. Decorative: the adjacent "Red Rock Digital" wordmark is the
// accessible label, so this is aria-hidden.
export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bottom slab — widest, darkest */}
      <path d="M10 78 L66 78 L78 62 L22 62 Z" fill="#A33820" />
      {/* Middle slab */}
      <path d="M17 58 L63 58 L74 42 L28 42 Z" fill="#C4442B" />
      {/* Top slab — narrowest, lightest */}
      <path d="M25 38 L59 38 L69 22 L35 22 Z" fill="#E05A3A" />
    </svg>
  );
}
