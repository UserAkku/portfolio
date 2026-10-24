import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

// Static Space Grotesk / Inter files (Satori can't read woff2 or next/font output)
const fontPath = (file: string) => join(process.cwd(), "src/assets/fonts", file);

interface OgCardProps {
  eyebrow: string;
  title: string;
}

/** Branded 1200x630 share card in the site's look: black, white Space Grotesk, the yellow circle. */
export async function ogCard({ eyebrow, title }: OgCardProps) {
  const [grotesk, inter] = await Promise.all([
    readFile(fontPath("SpaceGrotesk-Bold.woff")),
    readFile(fontPath("Inter-Medium.woff")),
  ]);

  // Keep the text column clear of the circle (it starts at x≈890)
  const titleSize = title.length > 60 ? 52 : title.length > 40 ? 62 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: "64px 72px",
          position: "relative",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -230,
            top: 90,
            width: 540,
            height: 540,
            borderRadius: 9999,
            background: "#facc15",
          }}
        />
        <div style={{ display: "flex", fontSize: 26, color: "#f4f4f5", fontFamily: "Space Grotesk" }}>akku.</div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 740 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#a1a1aa",
              marginBottom: 24,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Space Grotesk",
              fontSize: titleSize,
              lineHeight: 1.02,
              letterSpacing: -1,
              textTransform: "uppercase",
              color: "#f4f4f5",
            }}
          >
            {title}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa", letterSpacing: 1 }}>
          akhileshkumar.in · Freelance Full-Stack Developer
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Space Grotesk", data: grotesk, weight: 700, style: "normal" },
        { name: "Inter", data: inter, weight: 500, style: "normal" },
      ],
    }
  );
}
