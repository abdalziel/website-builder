import LogoF from "@/components/logos/LogoF";
import LogoG from "@/components/logos/LogoG";
import LogoH from "@/components/logos/LogoH";
import LogoI from "@/components/logos/LogoI";

const logos = [
  {
    id: "F",
    name: "Square Badge — Clean Strata",
    description:
      "Direct interpretation of your church logo reference. Red outer square, white interior, three diagonal parallelogram slabs in the lower portion. Clean, geometric, immediately reads as 'layered rock.'",
    component: <LogoF size={64} />,
    lightBg: true,
    recommended: true,
  },
  {
    id: "G",
    name: "Freeform Slabs — No Container",
    description:
      "Four separate rock columns, each with a jagged peak, arranged diagonally like the official Red Rocks logo. No bounding box — floats freely. Works well large but may lose detail at small nav sizes.",
    component: <LogoG size={64} />,
    lightBg: true,
    recommended: false,
  },
  {
    id: "H",
    name: "Square Badge — Layered Rock Face",
    description:
      "Three strata slabs that extend edge-to-edge inside the white square, each with an angular left face. The jagged left edges give it a more geological, hewn-from-rock feel.",
    component: <LogoH size={64} />,
    lightBg: true,
    recommended: false,
  },
  {
    id: "I",
    name: "Dark Badge — Canyon Edition",
    description:
      "Same strata slab concept on a deep canyon-dark background. The rust red pops strongly. Works well when the nav or hero is also dark.",
    component: <LogoI size={64} />,
    lightBg: false,
    recommended: false,
  },
];

export default function LogosPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <a href="/" className="text-[#C4442B] text-sm font-medium hover:underline">
            ← Back to site
          </a>
        </div>
        <div className="mb-14">
          <p className="text-[#C4442B] font-semibold text-sm tracking-widest uppercase mb-2">
            Logo Options · Round 2
          </p>
          <h1 className="text-4xl font-bold text-[#1C1208] mb-3">
            Diagonal Strata Direction
          </h1>
          <p className="text-[#8B7355] text-lg max-w-2xl">
            All four options use the same design language as your references —
            diagonal rock slabs with white negative-space gaps between them.
          </p>
        </div>

        <div className="space-y-6">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="bg-white border border-[#E8D0A0] rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="grid md:grid-cols-[300px_1fr]">
                {/* Preview — light bg */}
                <div
                  className={`flex items-center justify-center p-12 min-h-[160px] ${
                    logo.lightBg ? "bg-[#FAF7F2]" : "bg-[#1C1208]"
                  }`}
                >
                  {logo.component}
                </div>

                {/* Info */}
                <div className="p-8 border-t md:border-t-0 md:border-l border-[#E8D0A0] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[#8B7355] bg-[#FAF3E0] px-3 py-1 rounded-full border border-[#E8D0A0]">
                      Option {logo.id}
                    </span>
                    {logo.recommended && (
                      <span className="text-xs font-bold text-white bg-[#C4442B] px-3 py-1 rounded-full">
                        Closest to your reference
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-[#1C1208] mb-3">{logo.name}</h2>
                  <p className="text-[#8B7355] text-sm leading-relaxed">{logo.description}</p>
                </div>
              </div>

              {/* Both backgrounds side by side */}
              <div className="grid grid-cols-2 border-t border-[#E8D0A0]">
                <div className="bg-white flex items-center gap-4 px-8 py-4">
                  <span className="text-[#ccc] text-xs uppercase tracking-widest shrink-0">Light</span>
                  <div className="flex items-center gap-3">
                    {logo.component}
                    <div>
                      <p className="text-[#1C1208] font-semibold text-sm leading-tight">
                        Red Rock <span className="text-[#C4442B]">Digital</span>
                      </p>
                      <p className="text-[#8B7355] text-xs">Colorado Web Design</p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1C1208] flex items-center gap-4 px-8 py-4">
                  <span className="text-white/20 text-xs uppercase tracking-widest shrink-0">Dark</span>
                  <div className="flex items-center gap-3">
                    {logo.component}
                    <div>
                      <p className="text-white font-semibold text-sm leading-tight">
                        Red Rock <span className="text-[#E05A3A]">Digital</span>
                      </p>
                      <p className="text-white/40 text-xs">Colorado Web Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#8B7355] text-sm mt-10">
          Pick the closest direction — I&apos;ll refine the geometry, proportions, and drop it into the nav.
        </p>
      </div>
    </div>
  );
}
