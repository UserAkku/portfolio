import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/lib/services";
import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Akhilesh Kumar — freelance full-stack developer services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return ogCard({ eyebrow: service.eyebrow, title: service.h1 });
}
