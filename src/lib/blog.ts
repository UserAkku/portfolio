import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  excerpt: string;
  tags: string[];
  readingTime: string;
  wordCount: number;
  featured?: boolean;
  status?: "published" | "draft";
  ogImage?: string;
  content: string;
}

export type BlogPostMeta = Omit<BlogPost, "content">;

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) {
    fs.mkdirSync(BLOG_DIR, { recursive: true });
  }
}

export function getAllPosts(): BlogPostMeta[] {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const slug = filename.replace(/\.mdx$/, "");
      const rt = readingTime(content);

      return {
        slug: data.slug || slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        updated: data.updated,
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readingTime: rt.text,
        wordCount: rt.words,
        featured: data.featured || false,
        status: data.status || "published",
        ogImage: data.ogImage || "",
      } as BlogPostMeta;
    })
    .filter((p) => p.status === "published");

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  ensureBlogDir();
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const fileSlug = data.slug || filename.replace(/\.mdx$/, "");

    if (fileSlug === slug) {
      // Drafts are excluded from listings and the sitemap, so they must not render either
      if ((data.status || "published") !== "published") return null;
      const rt = readingTime(content);
      return {
        slug: fileSlug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        updated: data.updated,
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readingTime: rt.text,
        wordCount: rt.words,
        featured: data.featured || false,
        status: data.status || "published",
        ogImage: data.ogImage || "",
        content,
      };
    }
  }

  return null;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
