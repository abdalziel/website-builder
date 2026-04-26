// Square Badge — red container with diagonal rock strata (church logo style)
export default function LogoF({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Red outer square */}
      <rect width="100" height="100" rx="10" fill="#C4442B" />
      {/* White inner square */}
      <rect x="12" y="12" width="76" height="76" fill="white" />
      {/* Rock strata — 3 diagonal parallelograms, lower-left of white area */}
      {/* Formation 1 — bottom, widest */}
      <path d="M12 82 L67 82 L77 70 L22 70 Z" fill="#C4442B" />
      {/* Formation 2 — middle */}
      <path d="M17 66 L62 66 L71 54 L26 54 Z" fill="#C4442B" />
      {/* Formation 3 — top, narrowest */}
      <path d="M24 50 L56 50 L64 40 L32 40 Z" fill="#C4442B" />
    </svg>
  );
}
