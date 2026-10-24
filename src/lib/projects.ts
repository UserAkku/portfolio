export interface Project {
  /** Natural case; the card headings apply CSS uppercase */
  title: string;
  summary: string;
  stack: string[];
  live: string;
  github?: string;
  image: string;
  alt: string;
}

// Screenshots are ~3000px wide; they never render wider than ~1200 device px, so cap at 1600
const cloudinary = (path: string) =>
  `https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto,c_limit,w_1600/${path}`;

export const PROJECTS: Project[] = [
  {
    title: "Maison Rivina",
    summary:
      "Custom-coded, full-stack e-commerce for an Indian apparel label: size-level inventory, a Razorpay and COD checkout with coupons, OTP and Google sign-in, reviews and an admin portal.",
    stack: ["Next.js 16", "Tailwind CSS", "Zustand", "Razorpay", "Cloudinary"],
    live: "https://www.maisonrivina.com/",
    image: cloudinary("v1792867285/Screenshot_2026-10-25_at_12.10.56_AM_yrkxst.png"),
    alt: "Maison Rivina — custom-coded Next.js e-commerce store for an Indian apparel label, showing its cinematic video hero",
  },
  {
    title: "Ornovia",
    summary:
      "A headless luxury e-commerce storefront for handcrafted marble goods, powered by Sanity CMS with instant webhook updates and editorial, magazine-style layouts.",
    stack: ["Next.js 14", "TypeScript", "Sanity CMS", "Tailwind CSS", "Cloudinary"],
    live: "https://www.ornovia.in/",
    image: cloudinary("v1785525754/Screenshot_2026-08-01_at_12.52.23_AM_jpoupv.png"),
    alt: "Ornovia — headless Next.js and Sanity e-commerce storefront for luxury marble goods",
  },
  {
    title: "Emonetiser",
    summary:
      "A premium corporate website for an AdTech exchange, with animated device mockups, SVG beam flows, Framer Motion reveals and a validated enterprise contact pipeline.",
    stack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Zod"],
    live: "https://www.emonetiser.com/",
    image: cloudinary("v1785525354/Screenshot_2026-08-01_at_12.45.44_AM_nr7kot.png"),
    alt: "Emonetiser — Next.js corporate website for an AdTech exchange platform",
  },
  {
    title: "Maddworld",
    summary:
      "A cinematic 7-page agency website with GSAP ScrollTrigger animations, Lenis smooth scroll, a morphing custom cursor and clip-path image reveals.",
    stack: ["Next.js 14", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS"],
    live: "https://www.madworldd.com",
    image: cloudinary("v1783262625/Screenshot_2026-07-05_at_8.04.30_PM_cwy7pq.png"),
    alt: "Maddworld — cinematic creative agency website built with Next.js and GSAP",
  },
  {
    title: "Travel Nepal With Us",
    summary:
      "A trek and tour booking platform for Himalayan adventures, with Sanity-managed tours, smooth Framer Motion animations and custom horizontal carousels.",
    stack: ["Next.js 14", "TypeScript", "Sanity CMS", "Framer Motion", "Swiper"],
    live: "https://www.travelnepalwithus.com/",
    image: cloudinary("v1785525034/Screenshot_2026-08-01_at_12.39.55_AM_ui6okq.png"),
    alt: "Travel Nepal With Us — Next.js and Sanity travel and trek booking website",
  },
  {
    title: "Lustra Skin",
    summary:
      "A responsive skincare e-commerce store with a seamless cart and checkout, built on Context API and JSON-based product management.",
    stack: ["Next.js", "React", "Tailwind CSS", "Context API"],
    github: "https://github.com/UserAkku/LustraSkin",
    live: "https://lustra-skin-t4vs.vercel.app/",
    image: cloudinary("v1783262846/lustra_uev0ih.png"),
    alt: "Lustra Skin — Next.js skincare e-commerce website with cart and checkout",
  },
  {
    title: "Maddworld Creative",
    summary:
      "A creative agency single-page site with staggered GSAP text, animated SVG paths, a filterable portfolio, a fullscreen lightbox and a validated contact form.",
    stack: ["Next.js 14", "TypeScript", "Framer Motion", "Tailwind CSS", "Zod"],
    live: "https://maddworldcreative.com",
    image: cloudinary("v1783262942/Screenshot_2026-07-05_at_8.18.24_PM_qsx6ht.png"),
    alt: "Maddworld Creative — animated creative agency single-page website",
  },
  {
    title: "Dr. Himanshu Krishna",
    summary:
      "A medical portfolio for a leading neurosurgeon, with Sanity-managed services, patient stories and SEO blogs, plus integrated appointment booking.",
    stack: ["Next.js 14", "TypeScript", "Sanity CMS", "Tailwind CSS", "Web3Forms"],
    live: "https://www.drhimanshukrishna.com/",
    image: cloudinary("v1785525622/Screenshot_2026-08-01_at_12.50.09_AM_mshzky.png"),
    alt: "Dr. Himanshu Krishna — neurosurgeon website with Sanity CMS and appointment booking",
  },
  {
    title: "Krillo",
    summary:
      "An AI website-audit SaaS running 200+ checks across performance, SEO, security, accessibility and UX, with Gemini-powered fixes and PDF reports in minutes.",
    stack: ["Next.js 14", "PostgreSQL", "Puppeteer", "Gemini AI", "Tailwind"],
    live: "https://www.krillo.tech/",
    image: cloudinary("v1792270491/Screenshot_2026-10-18_at_2.23.11_AM_riumsq.png"),
    alt: "Krillo — AI website audit SaaS built with Next.js, PostgreSQL, Puppeteer and Gemini",
  },
];

export const getProject = (title: string) => PROJECTS.find((p) => p.title === title);
