import { getAllPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Akhilesh Kumar",
  description:
    "Deeply researched writing on systems engineering, Rust, Bitcoin, API design, and building things that last.",
  openGraph: {
    title: "Blog — Akhilesh Kumar",
    description:
      "Deeply researched writing on systems engineering, Rust, Bitcoin, API design, and building things that last.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);
  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors mb-8 group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back home
          </Link>

          <h1 className="font-heading text-[clamp(42px,7vw,80px)] font-bold text-foreground leading-none tracking-tight mb-4">
            Writing.
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Deep-dives into systems engineering, Rust, Bitcoin, and the design decisions that shape software.
          </p>
        </div>

        {/* Tags */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-16 border-b border-zinc-800/80 pb-8">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-[11px] font-medium tracking-widest uppercase border border-zinc-800/80 rounded-full text-zinc-400 bg-zinc-900/30 hover:bg-zinc-800/50 hover:text-white cursor-pointer transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Featured Post */}
        {featured && (
          <div className="mb-10">
            <BlogCard post={featured} featured />
          </div>
        )}

        {/* Post Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <div className="text-center py-24 text-zinc-600">
            <p className="text-lg">No posts yet. Check back soon.</p>
          </div>
        )}
      </div>
    </main>
  );
}
