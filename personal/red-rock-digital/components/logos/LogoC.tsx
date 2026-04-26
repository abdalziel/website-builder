// Single Rock Mark — Ship Rock's angular triangular profile, bold and simple
export default function LogoC({ size = 48 }: { size?: number }) {
  return (
    <svg
      width={size * 0.75}
      height={size}
      viewBox="0 0 36 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main rock body */}
      <path
        d="M2 46 L2 32 L8 18 L14 6 L18 0 L22 8 L28 20 L34 34 L34 46 Z"
        fill="#C4442B"
      />

      {/* Strata lines */}
      <line x1="4"  y1="40" x2="32" y2="40" stroke="#8B2010" strokeWidth="1.5" />
      <line x1="5"  y1="34" x2="31" y2="34" stroke="#8B2010" strokeWidth="1.5" />
      <line x1="8"  y1="28" x2="28" y2="28" stroke="#8B2010" strokeWidth="1.5" />
      <line x1="11" y1="22" x2="25" y2="22" stroke="#8B2010" strokeWidth="1.5" />
      <line x1="14" y1="16" x2="22" y2="16" stroke="#E8D0A0" strokeWidth="1" opacity="0.5" />

      {/* Light face on right side */}
      <path
        d="M22 8 L28 20 L34 34 L34 46 L28 46 L28 28 L24 16 Z"
        fill="#E05A3A"
        opacity="0.4"
      />
    </svg>
  );
}
