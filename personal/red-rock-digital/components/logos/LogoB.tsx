// Strata Badge — layered rock bands shaped into the Red Rocks silhouette
export default function LogoB({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* The silhouette clip shape — twin peaks profile */}
      <defs>
        <clipPath id="peaks-clip">
          <path d="M2 46 L2 28 L10 10 L16 18 L20 22 L24 24 L28 22 L32 16 L36 6 L44 22 L46 28 L46 46 Z" />
        </clipPath>
      </defs>

      {/* Background fill */}
      <path
        d="M2 46 L2 28 L10 10 L16 18 L20 22 L24 24 L28 22 L32 16 L36 6 L44 22 L46 28 L46 46 Z"
        fill="#1C1208"
      />

      {/* Strata bands clipped to the silhouette */}
      <g clipPath="url(#peaks-clip)">
        <rect x="0" y="36" width="48" height="12" fill="#C4442B" opacity="1" />
        <rect x="0" y="29" width="48" height="6" fill="#C4442B" opacity="0.8" />
        <rect x="0" y="23" width="48" height="5" fill="#E05A3A" opacity="0.7" />
        <rect x="0" y="17" width="48" height="5" fill="#C4442B" opacity="0.6" />
        <rect x="0" y="11" width="48" height="5" fill="#E8D0A0" opacity="0.5" />
        <rect x="0" y="5" width="48" height="5" fill="#E8D0A0" opacity="0.3" />
      </g>

      {/* Outline */}
      <path
        d="M2 46 L2 28 L10 10 L16 18 L20 22 L24 24 L28 22 L32 16 L36 6 L44 22 L46 28 L46 46 Z"
        stroke="#C4442B"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
