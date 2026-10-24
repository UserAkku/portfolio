import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { PROJECTS } from "@/lib/projects";
import { SERVICES } from "@/lib/services";
import { SITE_URL, SITE_UPDATED, PERSON } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latestPost = posts[0]?.updated ?? posts[0]?.date ?? SITE_UPDATED;

  const blogRoutes = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: post.ogImage ? [new URL(post.ogImage, SITE_URL).toString()] : undefined,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(SITE_UPDATED),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(SITE_UPDATED),
      changeFrequency: "monthly" as const,
      priority: 1,
      // Image sitemap entries: the portrait and every project screenshot
      images: [PERSON.image, ...PROJECTS.map((p) => p.image)],
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: new Date(SITE_UPDATED),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...serviceRoutes,
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(latestPost),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...blogRoutes,
  ];
}
