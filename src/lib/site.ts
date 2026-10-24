// Single source of truth for URLs and identity used across metadata, JSON-LD, sitemap and robots.
export const SITE_URL = "https://www.akhileshkumar.in";

export const SITE_NAME = "Akhilesh Kumar";

export const OG_IMAGE = {
  url: "https://res.cloudinary.com/docksqg0c/image/upload/v1785837882/Screenshot_2026-08-04_at_3.34.32_PM_hcxe09.png",
  width: 1200,
  height: 630,
  alt: "Akhilesh Kumar — freelance full-stack developer portfolio",
};

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
