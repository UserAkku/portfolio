import { SERVICES_HUB } from "@/lib/services";
import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Freelance web development services by Akhilesh Kumar";

export default function Image() {
  return ogCard({ eyebrow: "Services", title: SERVICES_HUB.h1 });
}
