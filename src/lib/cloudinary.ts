import type { HeroImage } from "./services.types";

const BASE = "https://res.cloudinary.com/docksqg0c/image/upload";
const GRAVITY = { top: "north", center: "center", bottom: "south" } as const;

/** Cropped srcset for a portrait source: "wide" bands for desktop cards, "tall" for phones and tiles */
export function cropSrcSet(image: HeroImage, shape: "wide" | "tall", widths: number[]) {
  const ar = shape === "wide" ? "16:9" : "3:4";
  const g = GRAVITY[image.position];
  const url = (w: number) => `${BASE}/c_fill,ar_${ar},g_${g},w_${w},f_auto,q_auto/${image.id}`;
  return {
    src: url(widths[widths.length - 1]),
    srcSet: widths.map((w) => `${url(w)} ${w}w`).join(", "),
  };
}
