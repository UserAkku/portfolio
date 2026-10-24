export interface Service {
  slug: string;
  /** Short display name, e.g. "Shopify Development" */
  name: string;
  /** One-line summary used on the /services hub and in contact links */
  summary: string;
  /** Label for compact link lists, e.g. "Shopify stores" */
  linkLabel: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  /** <= 60 chars, used as an absolute <title> */
  metaTitle: string;
  /** 140-160 chars */
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  overviewHeading: string;
  overview: string[];
  deliverables: { title: string; body: string }[];
  forWho: string[];
  stack: string[];
  process: { title: string; body: string }[];
  /** Titles from src/lib/projects.ts */
  projects: string[];
  whyMe: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
}
