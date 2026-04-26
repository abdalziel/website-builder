// Flat Horizon — wide cinematic crop of the twin-peak skyline, minimal
export default function LogoE({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size * 2.5}
      height={size}
      viewBox="0 0 120 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sky gradient suggestion */}
      <rect x="0" y="0" width="120" height="48" fill="#1C1208" rx="4" />

      {/* Ground/floor line */}
      <rect x="0" y="38" width="120" height="10" fill="#2D1E10" />

      {/* Left rock formation */}
      <path
        d="M0 38 L0 24 L8 12 L16 4 L22 10 L26 18 L28 26 L28 38 Z"
        fill="#C4442B"
      />
      <line x1="2"  y1="32" x2="27" y2="32" stroke="#8B2010" strokeWidth="1" opacity="0.5" />
      <line x1="4"  y1="26" x2="27" y2="26" stroke="#8B2010" strokeWidth="1" opacity="0.5" />
      <line x1="9"  y1="20" x2="26" y2="20" stroke="#8B2010" strokeWidth="1" opacity="0.4" />

      {/* Center valley — low silhouette / rolling terrain */}
      <path
        d="M28 38 L28 28 L36 30 L44 32 L52 32 L60 30 L68 30 L76 32 L82 30 L88 28 L92 38 Z"
        fill="#2D1E10"
      />

      {/* Right rock formation (taller) */}
      <path
        d="M92 38 L92 22 L96 14 L100 4 L106 0 L110 6 L114 14 L118 24 L120 30 L120 38 Z"
        fill="#C4442B"
      />
      <line x1="94" y1="32" x2="119" y2="32" stroke="#8B2010" strokeWidth="1" opacity="0.5" />
      <line x1="94" y1="26" x2="118" y2="26" stroke="#8B2010" strokeWidth="1" opacity="0.5" />
      <line x1="96" y1="20" x2="116" y2="20" stroke="#8B2010" strokeWidth="1" opacity="0.4" />
      <line x1="99" y1="14" x2="112" y2="14" stroke="#E8D0A0" strokeWidth="1" opacity="0.25" />

      {/* Stars */}
      <circle cx="40" cy="12" r="1" fill="white" opacity="0.4" />
      <circle cx="60" cy="8"  r="1" fill="white" opacity="0.3" />
      <circle cx="78" cy="14" r="1" fill="white" opacity="0.4" />
      <circle cx="50" cy="18" r="0.75" fill="white" opacity="0.25" />
    </svg>
  );
}
