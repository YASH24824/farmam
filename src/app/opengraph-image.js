import { ImageResponse } from "next/og";

export const alt = "FARMAM ORGANIC: From Farm to Food";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded share card, generated at build time.
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
          padding: "72px 80px",
          background: "#073B20",
          color: "#FFF7E6",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: 8, color: "#E9A51A" }}>FARMAM ORGANIC</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.05 }}>From Farm to Food,</div>
          <div style={{ fontSize: 84, lineHeight: 1.05, fontStyle: "italic", color: "#E9A51A" }}>
            with nature in every grain.
          </div>
        </div>
        <div style={{ fontSize: 28, opacity: 0.75 }}>
          Jeera · Bajri Atta · Whole Bajra · Mung · Mung Dal · Mungafali
        </div>
      </div>
    ),
    size
  );
}
