import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        background: "#4f7cff",
        borderRadius: "16px",
        fontSize: "25px",
        fontWeight: 850,
        letterSpacing: "-2px",
      }}
    >
      FS
    </div>,
    size,
  );
}
