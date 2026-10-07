import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";
import { BlogMDX } from "@/components/blog/BlogMDX";
import Link from "next/link";
import { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const siteUrl = "https://www.akhileshkumar.in";
  const ogImage = post.ogImage || `${siteUrl}/og-image.png`;

  return {
    title: `${post.title} | Akhilesh Kumar`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Akhilesh Kumar"],
      tags: post.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: "Akhilesh Kumar",
      url: "https://www.akhileshkumar.in",
    },
    datePublished: post.date,
    keywords: post.tags.join(", "),
    publisher: {
      "@type": "Person",
      name: "Akhilesh Kumar",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-background pt-28">
        
        {/* Premium Rounded Image Hero */}
        {post.ogImage && (
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mb-16">
            <div className="relative w-full h-[60vh] min-h-[500px] max-h-[700px] rounded-[24px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
              <div className="absolute inset-0">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src={post.ogImage} alt={post.title} className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>

              <div className="absolute top-0 left-0 p-6 md:p-10 w-full z-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white transition-all duration-300 group bg-black/20 hover:bg-white/10 px-5 py-2.5 rounded-full backdrop-blur-md border border-white/10 shadow-lg"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                  </svg>
                  Back to Blog
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10">
                <div className="max-w-[900px]">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white border border-white/20 bg-black/40 rounded-full backdrop-blur-md shadow-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="font-heading text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-[1.1] tracking-tight drop-shadow-2xl text-balance">
                    {post.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-[800px] mx-auto px-6 md:px-12 pb-24">

          {/* Article Header (Fallback if no image) */}
          {!post.ogImage && (
            <header className="mb-16 pt-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-300 transition-all duration-300 group mb-12"
              >
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Blog
              </Link>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[64px] font-bold text-zinc-100 leading-[1.05] tracking-tight mb-8">
                {post.title}
              </h1>
            </header>
          )}

          {/* Clean Flow: Metadata -> Excerpt -> Content */}
          <div className="mb-12 pt-4">
            <div className="flex flex-wrap items-center gap-4 text-[11px] text-zinc-500 font-mono mb-8 uppercase tracking-widest">
              <span>{formatDate(post.date)}</span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-zinc-800" />
              <span>{post.readingTime}</span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-zinc-800" />
              <div className="flex items-center gap-2 text-zinc-400">
                <div className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 font-medium text-[8px]">
                  AK
                </div>
                <span>Akhilesh</span>
              </div>
            </div>

            <p className="text-xl md:text-[22px] text-zinc-300/90 leading-[1.8] font-light">
              {post.excerpt}
            </p>
          </div>

          <div className="w-12 h-[1px] bg-zinc-800 mb-12" />


          {/* MDX Content */}
          <article className="prose-headings:tracking-tight">
            <BlogMDX source={post.content} />
          </article>

          {/* Footer */}
          <footer className="mt-20 pt-12 border-t border-zinc-800/80">
            {nextPost && (
              <div className="mb-12">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-4">Read Next</p>
                <Link href={`/blog/${nextPost.slug}`} className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-800/30 hover:border-zinc-700/50 transition-all duration-300">
                  <div className="flex-1">
                    <p className="font-heading text-xl font-bold text-zinc-200 group-hover:text-white transition-colors leading-snug mb-2">{nextPost.title}</p>
                    <p className="text-sm text-zinc-500">{nextPost.readingTime}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-zinc-800/50 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            )}
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-foreground transition-colors group">
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to all writing
            </Link>
          </footer>

        </div>
      </main>
    </>
  );
}
