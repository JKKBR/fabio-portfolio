import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          background: "#4f7cff",
          borderRadius: "40px",
          fontSize: "70px",
          fontWeight: 850,
          letterSpacing: "-6px",
        }}
      >
        FS
      </div>
    ),
    size,
  );
}
