import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    // Must match the canonical www host; the apex domain 308-redirects here
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
