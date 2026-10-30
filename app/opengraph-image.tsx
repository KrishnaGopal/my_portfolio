import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getPortfolio } from "@/lib/portfolio";

const { profile, stats } = getPortfolio();

const photoSrc = profile.photo
  ? `data:image/jpeg;base64,${(await readFile(join(process.cwd(), "public", profile.photo))).toString("base64")}`
  : null;

export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          padding: "72px",
          color: "white",
          background:
            "radial-gradient(circle at 15% 10%, rgba(139,92,246,0.55), transparent 45%), radial-gradient(circle at 90% 90%, rgba(34,211,238,0.4), transparent 45%), #070b1a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {photoSrc ? (
            <img
              src={photoSrc}
              alt=""
              width={88}
              height={88}
              style={{ borderRadius: "24px", objectFit: "cover", border: "3px solid #8b5cf6" }}
            />
          ) : (
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
              fontWeight: 700,
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            }}
          >
            {profile.initials}
          </div>
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "40px", fontWeight: 700 }}>{profile.name}</div>
            <div style={{ fontSize: "26px", color: "#c4b5fd" }}>{profile.title}</div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "60px", fontWeight: 700, lineHeight: 1.15, maxWidth: "1000px" }}>
          {profile.headline}
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          {stats.slice(0, 2).map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "18px 26px",
                borderRadius: "20px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ fontSize: "36px", fontWeight: 700, color: "#67e8f9" }}>{stat.value}</div>
              <div style={{ fontSize: "20px", color: "#94a3b8" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
