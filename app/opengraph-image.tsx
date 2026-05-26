import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Taha Zaidi — AI Engineer & Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 50% 40%, #141414 0%, #0a0a0a 70%)",
          color: "#ededed",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#7a7a7a",
            fontSize: 22,
            letterSpacing: 4,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              background: "#34f5a5",
              borderRadius: 999,
            }}
          />
          SIGNAL ACQUIRED · TAHAZAIDI.ME
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div
            style={{
              fontSize: 128,
              lineHeight: 0.95,
              letterSpacing: -4,
              fontFamily: "serif",
              color: "#ffffff",
            }}
          >
            Syed Taha Zaidi.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#9a9a9a",
              maxWidth: 920,
              lineHeight: 1.35,
            }}
          >
            AI Engineer · Co-founder, Vector. Shipping multi-agent systems,
            RAG pipelines, and full-stack MVPs out of Karachi.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 40,
            right: 80,
            color: "#34f5a5",
            fontSize: 22,
            letterSpacing: 3,
          }}
        >
          ◇ TZ_PORTFOLIO · v1.0
        </div>
      </div>
    ),
    { ...size }
  );
}
