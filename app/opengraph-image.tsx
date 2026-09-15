import { ImageResponse } from "next/og";

export const alt = "Cumberland Acre — we buy land and houses in Middle Tennessee";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F8F8F3",
          color: "#17251C",
          padding: "64px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          Cumberland Acre
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              lineHeight: 1.12,
              maxWidth: 920,
            }}
          >
            We buy land and houses in Middle Tennessee, exactly as they are.
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#2A6247" }}>
            Cash offers · As-is · Locally owned
          </div>
        </div>
      </div>
    ),
    size,
  );
}
