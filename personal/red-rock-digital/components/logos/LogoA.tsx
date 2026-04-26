// Twin Rocks Silhouette — full amphitheater profile view from the stage
export default function LogoA({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size * 1.75}
      height={size}
      viewBox="0 0 84 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left rock (Creation Rock) */}
      <path
        d="M0 48 L0 30 L6 22 L14 8 L20 14 L24 20 L26 24 L26 48 Z"
        fill="#C4442B"
      />
      {/* Strata lines on left rock */}
      <line x1="2" y1="36" x2="24" y2="36" stroke="#A33820" strokeWidth="1" opacity="0.4" />
      <line x1="4" y1="30" x2="24" y2="30" stroke="#A33820" strokeWidth="1" opacity="0.4" />
      <line x1="8" y1="24" x2="24" y2="24" stroke="#A33820" strokeWidth="1" opacity="0.4" />

      {/* Center stage area (low valley) */}
      <path
        d="M26 48 L26 28 L32 32 L42 34 L52 32 L58 28 L58 48 Z"
        fill="#1C1208"
      />

      {/* Right rock (Ship Rock — taller) */}
      <path
        d="M58 48 L58 24 L60 20 L64 10 L70 2 L76 10 L80 18 L84 26 L84 48 Z"
        fill="#C4442B"
      />
      {/* Strata lines on right rock */}
      <line x1="60" y1="36" x2="82" y2="36" stroke="#A33820" strokeWidth="1" opacity="0.4" />
      <line x1="60" y1="30" x2="82" y2="30" stroke="#A33820" strokeWidth="1" opacity="0.4" />
      <line x1="62" y1="24" x2="80" y2="24" stroke="#A33820" strokeWidth="1" opacity="0.4" />
      <line x1="64" y1="18" x2="78" y2="18" stroke="#A33820" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
