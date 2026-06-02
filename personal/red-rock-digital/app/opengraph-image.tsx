import { ImageResponse } from "next/og";

export const alt = "Red Rock Digital — Colorado Web Design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated at build time. Composed from simple flex blocks (satori-safe — no SVG
// paths or external fonts) so it renders reliably.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#1C1208",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Strata accent — three stacked bars suggesting layered rock */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ width: "220px", height: "18px", background: "#A33820", borderRadius: "4px" }} />
          <div style={{ width: "180px", height: "18px", background: "#C4442B", borderRadius: "4px" }} />
          <div style={{ width: "140px", height: "18px", background: "#E05A3A", borderRadius: "4px" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "30px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#E8D0A0",
              marginBottom: "20px",
            }}
          >
            Colorado Web Design
          </div>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            Websites that actually work.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", fontSize: "36px", fontWeight: 700, color: "#FFFFFF" }}>
            <span>Red Rock&nbsp;</span>
            <span style={{ color: "#E05A3A" }}>Digital</span>
          </div>
          <div style={{ fontSize: "28px", color: "rgba(255,255,255,0.6)" }}>redrockdigital.ai</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
