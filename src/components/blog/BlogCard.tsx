import Link from "next/link";
import { BlogPostMeta, formatDate } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMeta;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative border border-zinc-800/80 rounded-[32px] p-8 md:p-12 bg-zinc-900/20 hover:border-zinc-700/80 transition-all duration-500 hover:bg-zinc-800/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-4 py-1 text-[11px] font-bold uppercase tracking-widest bg-white text-black rounded-full">
              Featured
            </span>
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[11px] font-medium tracking-widest uppercase border border-zinc-800 rounded-full text-zinc-400 bg-zinc-900/50"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[44px] font-bold text-zinc-100 leading-[1.15] mb-5 group-hover:text-white transition-colors duration-300 tracking-tight">
            {post.title}
          </h2>
          <p className="text-zinc-400/90 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl font-light">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-zinc-500 border-t border-zinc-800/50 pt-6">
            <span>{formatDate(post.date)}</span>
            <span className="text-zinc-700">•</span>
            <span>{post.readingTime}</span>
            <span className="ml-auto flex items-center gap-2 text-white font-semibold text-sm group-hover:gap-3 transition-all duration-300">
              Read article
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article className="h-full flex flex-col border border-zinc-800/80 rounded-3xl p-8 bg-zinc-900/20 hover:border-zinc-700/80 transition-all duration-500 hover:bg-zinc-800/20 backdrop-blur-sm">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[10px] font-medium tracking-widest uppercase border border-zinc-800 rounded-full text-zinc-400 bg-zinc-900/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="font-heading text-2xl font-bold text-zinc-200 leading-snug mb-4 flex-1 group-hover:text-white transition-colors duration-300 tracking-tight">
          {post.title}
        </h2>
        <p className="text-zinc-400/80 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between border-t border-zinc-800/50 pt-5 mt-auto">
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <span>{formatDate(post.date)}</span>
            <span className="text-zinc-700">•</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
