// Amphitheater Arc — the curved seating bowl view from above, with rock walls
export default function LogoD({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer rock wall arc */}
      <path
        d="M4 44 Q4 8 24 4 Q44 8 44 44"
        stroke="#C4442B"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
      />

      {/* Second strata ring */}
      <path
        d="M10 44 Q10 14 24 11 Q38 14 38 44"
        stroke="#E05A3A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />

      {/* Third strata ring */}
      <path
        d="M16 44 Q16 20 24 18 Q32 20 32 44"
        stroke="#E8D0A0"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Stage dot */}
      <circle cx="24" cy="40" r="3" fill="#C4442B" />

      {/* Left peak */}
      <path d="M4 44 L4 28 L0 16 L6 24 L8 32" fill="#C4442B" opacity="0.9" />
      {/* Right peak */}
      <path d="M44 44 L44 28 L48 14 L42 22 L40 32" fill="#C4442B" opacity="0.9" />
    </svg>
  );
}
