// Rounded Badge — softer shape, 3 clean strata slabs, centered composition
export default function LogoI({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id="badge-i">
          <rect x="0" y="0" width="100" height="100" rx="20" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="100" height="100" rx="20" fill="#1C1208" />

      {/* 3 rock slabs — diagonal, tight white gaps, centered in square */}
      {/* Slab 1 — bottom */}
      <path
        d="M10 78 L10 62 L22 44 L28 48 L30 56 L32 64 L90 64 L90 78 Z"
        fill="#C4442B"
        clipPath="url(#badge-i)"
      />
      {/* Gap: white 4px */}
      {/* Slab 2 — middle */}
      <path
        d="M14 58 L16 40 L28 22 L34 26 L36 36 L38 46 L90 46 L90 58 Z"
        fill="#C4442B"
        clipPath="url(#badge-i)"
      />
      {/* Gap: white 4px */}
      {/* Slab 3 — top */}
      <path
        d="M20 40 L24 22 L34 8 L40 12 L42 24 L44 32 L90 32 L90 40 Z"
        fill="#C4442B"
        clipPath="url(#badge-i)"
      />

      {/* Subtle highlight line on top slab edge */}
      <path
        d="M24 22 L34 8 L40 12"
        stroke="#E05A3A"
        strokeWidth="1.5"
        fill="none"
        clipPath="url(#badge-i)"
        opacity="0.6"
      />
    </svg>
  );
}
