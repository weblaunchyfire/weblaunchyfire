import { ImageResponse } from "next/og";

export const alt = "Web Launchy Fire - Website Builder and Custom Website Launch Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #151515 0%, #2a1711 46%, #4b160f 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #ff9a2f 0%, #ff5a1f 52%, #e72f2f 100%)",
              borderRadius: "14px",
            }}
          >
            <span style={{ fontSize: "40px", fontWeight: 900, color: "#151515" }}>W</span>
          </div>
          <span style={{ fontSize: "48px", fontWeight: 800, color: "#fff" }}>Web Launchy Fire</span>
        </div>
        <div
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Build, Customize & Launch Your Business Website
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {["50+ Templates", "48hr Delivery", "Mobile-First"].map((text) => (
            <div
              key={text}
              style={{
                padding: "10px 24px",
                borderRadius: "999px",
                background: "rgba(255,106,22,0.2)",
                border: "1px solid rgba(255,106,22,0.4)",
                color: "#ff8a3d",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
