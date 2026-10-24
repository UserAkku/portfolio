import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ogCard, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Blog post by Akhilesh Kumar";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

// A generated 1200x630 title card: the post hero is a 576x1024 portrait that previews crop badly
export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  return ogCard({ eyebrow: post.tags.slice(0, 3).join(" · ") || "Blog", title: post.title });
}
