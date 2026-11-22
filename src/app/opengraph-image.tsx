import { ImageResponse } from "next/og";

export const alt = "Fabio Santos - Solucoes Digitais e Micro SaaS";
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
          padding: "72px",
          color: "#f5f7fb",
          background: "#08090b",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(rgba(79,124,255,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(79,124,255,.11) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "18px", position: "relative" }}>
          <div
            style={{
              width: "62px",
              height: "62px",
              borderRadius: "18px",
              background: "#4f7cff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "25px",
              fontWeight: 800,
            }}
          >
            FS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "28px", fontWeight: 800 }}>Fabio Santos</span>
            <span style={{ fontSize: "18px", color: "#a3a9b6" }}>Portfolio profissional</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "980px", position: "relative" }}>
          <span
            style={{
              color: "#79a0ff",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            Problemas reais. Solucoes digitais.
          </span>
          <span style={{ fontSize: "65px", fontWeight: 850, lineHeight: 1.06, letterSpacing: "-3px" }}>
            Solucoes digitais, automacoes e prototipos de Micro SaaS
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#a3a9b6", fontSize: "18px", position: "relative" }}>
          <span>Tecnologia • Logistica • IA aplicada</span>
          <span>ffssportfolio.vercel.app</span>
        </div>
      </div>
    ),
    size,
  );
}
