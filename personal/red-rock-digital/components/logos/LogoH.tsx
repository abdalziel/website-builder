// Square Badge Variant — white cutout gaps between slabs, rock face more visible
export default function LogoH({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="badge-h">
          <rect x="8" y="8" width="84" height="84" rx="4" />
        </clipPath>
      </defs>

      {/* Red outer square */}
      <rect width="100" height="100" rx="12" fill="#C4442B" />

      {/* White inner */}
      <rect x="8" y="8" width="84" height="84" rx="4" fill="white" />

      {/* Rock slabs clipped to white area — diagonal, with visible white gaps */}
      <g clipPath="url(#badge-h)">
        {/* Slab 1 — widest, bottom */}
        <path d="M8 92 L8 68 L16 56 L22 60 L24 66 L26 72 L92 72 L92 92 Z" fill="#C4442B" />
        {/* Slab 2 — gap above slab 1 */}
        <path d="M8 64 L8 46 L18 32 L24 36 L26 44 L28 52 L92 52 L92 64 Z" fill="#C4442B" />
        {/* Slab 3 — top, narrowest */}
        <path d="M12 42 L14 26 L22 14 L28 18 L30 28 L32 36 L88 36 L88 42 Z" fill="#C4442B" />
      </g>
    </svg>
  );
}
