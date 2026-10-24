// Single source of truth for URLs and identity used across metadata, JSON-LD, sitemap and robots.
export const SITE_URL = "https://www.akhileshkumar.in";

export const SITE_NAME = "Akhilesh Kumar";

/** Bump when home/services content changes; used as sitemap lastmod (new Date() would change every build) */
export const SITE_UPDATED = "2026-10-25";

export const OG_IMAGE = {
  // Real 1200x630 crop (~70KB); the original is a 3024x1658, 2.4MB PNG that chat apps may skip
  url: "https://res.cloudinary.com/docksqg0c/image/upload/c_fill,g_north,w_1200,h_630,q_auto,f_jpg/v1785837882/Screenshot_2026-08-04_at_3.34.32_PM_hcxe09.png",
  width: 1200,
  height: 630,
  alt: "Akhilesh Kumar — freelance full-stack developer portfolio",
};

/** openGraph is replaced (not merged) per route segment, so every page spreads these in */
export const BASE_OPEN_GRAPH = { siteName: SITE_NAME, locale: "en_IN" } as const;

export const PERSON = {
  name: "Akhilesh Kumar",
  alternateName: "akku",
  jobTitle: "Freelance Full-Stack Developer",
  email: "akhileshkumaroffical@gmail.com",
  image:
    "https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto,w_1024/v1785567791/ChatGPT_Image_Aug_1_2026_12_32_29_PM_q2nhcp.png",
  linkedin: "https://www.linkedin.com/in/akhilesh-kumar-736794313",
  github: "https://github.com/UserAkku",
};

export const SAME_AS = [PERSON.github, PERSON.linkedin];

// Stable @id anchors so every page's JSON-LD points at the same entities
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const BUSINESS_ID = `${SITE_URL}/#business`;

// JSON.stringify does not escape "<", so a "</script>" inside a string could break out of the tag
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
