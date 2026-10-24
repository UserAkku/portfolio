import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Akhilesh Kumar — Freelance Full-Stack Developer",
    short_name: "Akhilesh Kumar",
    description:
      "Freelance full-stack developer building Shopify stores, Next.js websites, SaaS tools, AI products and landing pages.",
    start_url: "/",
    display: "browser",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
