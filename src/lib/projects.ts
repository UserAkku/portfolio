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
      "A full-stack, custom-coded e-commerce platform for a quiet-luxury Indian apparel label. Features a cinematic Cloudinary video hero, color and size variants with per-size inventory, and a server-validated checkout engine handling coupons, free-shipping thresholds, Cash on Delivery and Razorpay payments. Includes passwordless email OTP and Google OAuth sign-in, wishlists, customer reviews with signed image uploads, live product search, a persistent Zustand cart, a private admin portal, and rich Product and Breadcrumb structured data for SEO.",
    stack: ["Next.js 16", "Tailwind CSS", "Zustand", "Zod", "Razorpay", "Cloudinary", "Google OAuth", "Vercel"],
    live: "https://www.maisonrivina.com/",
    image: cloudinary("v1792867285/Screenshot_2026-10-25_at_12.10.56_AM_yrkxst.png"),
    alt: "Maison Rivina — custom-coded Next.js e-commerce store for an Indian apparel label, showing its cinematic video hero",
  },
  {
    title: "Ornovia",
    summary:
      "An ultra-premium headless e-commerce storefront for luxury handcrafted marble goods. Engineered with Sanity CMS v3 for 100% dynamic content control, featuring real-time webhook revalidation for instant updates. The UI boasts bespoke, editorial-style asymmetrical layouts, cinematic edge-to-edge imagery optimized via Cloudinary, and a custom responsive design system that breaks traditional web grids to deliver a high-end, magazine-like user experience.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Sanity CMS", "Cloudinary"],
    live: "https://www.ornovia.in/",
    image: cloudinary("v1785525754/Screenshot_2026-08-01_at_12.52.23_AM_jpoupv.png"),
    alt: "Ornovia — headless Next.js and Sanity e-commerce storefront for luxury marble goods",
  },
  {
    title: "Emonetiser",
    summary:
      "A premium, highly-interactive corporate website for a leading AdTech exchange platform bridging publishers and advertisers. Engineered with modern web design principles, featuring complex UI components like animated mockups, interactive device frames, and dynamic SVG beam flows. Built with a robust multi-page architecture including specialized routing, staggered Framer Motion reveal animations, and a fully integrated enterprise contact pipeline using React Hook Form, Zod validation, and Web3Forms.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Magic UI", "React Hook Form", "Zod", "Web3Forms"],
    live: "https://www.emonetiser.com/",
    image: cloudinary("v1785525354/Screenshot_2026-08-01_at_12.45.44_AM_nr7kot.png"),
    alt: "Emonetiser — Next.js corporate website for an AdTech exchange platform",
  },
  {
    title: "Maddworld",
    summary:
      "A cinematic, full-stack creative agency portfolio website with GSAP + ScrollTrigger animations, Lenis smooth scroll, and a custom morphing cursor. Features 7 pages including a Brands showcase with clip-path image reveals, parallax scroll, multi-field contact form (React Hook Form + Zod + Web3Forms), and Vercel + Google Analytics integration.",
    stack: ["Next.js 14", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS", "Zod", "Web3Forms"],
    live: "https://www.madworldd.com",
    image: cloudinary("v1783262625/Screenshot_2026-07-05_at_8.04.30_PM_cwy7pq.png"),
    alt: "Maddworld — cinematic creative agency website built with Next.js and GSAP",
  },
  {
    title: "Travel Nepal With Us",
    summary:
      "A premium travel and expedition booking platform designed to deliver an immersive digital experience for Himalayan adventures. Built with a highly dynamic, responsive UI featuring smooth Framer Motion animations, custom horizontal scrolling carousels, and an out-of-the-box massive rounded hero layout. Integrated with Sanity CMS for seamless content management of treks, tours, and spiritual yatras, allowing real-time updates and dynamic categorization to boost user engagement and conversions.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Swiper", "SEO"],
    live: "https://www.travelnepalwithus.com/",
    image: cloudinary("v1785525034/Screenshot_2026-08-01_at_12.39.55_AM_ui6okq.png"),
    alt: "Travel Nepal With Us — Next.js and Sanity travel and trek booking website",
  },
  {
    title: "Lustra Skin",
    summary:
      "A responsive premium e-commerce website for skincare with seamless cart, checkout, and dynamic content management. Achieved 35% faster page loads and consistent responsiveness using Context API and JSON-based product management.",
    stack: ["Next.js", "React", "Tailwind CSS", "Context API"],
    github: "https://github.com/UserAkku/LustraSkin",
    live: "https://lustra-skin-t4vs.vercel.app/",
    image: cloudinary("v1783262846/lustra_uev0ih.png"),
    alt: "Lustra Skin — Next.js skincare e-commerce website with cart and checkout",
  },
  {
    title: "Maddworld Creative",
    summary:
      "A full-service creative agency SPA built for a real client. Features staggered GSAP text animations, animated SVG path drawing, count-up statistics, infinite marquee ticker, tabbed portfolio with category filters, masonry grid, fullscreen lightbox with keyboard navigation, and a Web3Forms-powered contact form with Zod validation.",
    stack: ["Next.js 14", "TypeScript", "Framer Motion", "Tailwind CSS", "React Hook Form", "Zod", "Web3Forms"],
    live: "https://maddworldcreative.com",
    image: cloudinary("v1783262942/Screenshot_2026-07-05_at_8.18.24_PM_qsx6ht.png"),
    alt: "Maddworld Creative — animated creative agency single-page website",
  },
  {
    title: "Dr. Himanshu Krishna",
    summary:
      "A premium, highly dynamic medical portfolio built for a leading neurosurgeon. Features a fully custom headless CMS architecture using Sanity for real-time management of services, patient success stories, and SEO-optimized blogs. Designed with a modern glassmorphic UI, smooth scroll animations, dynamic routing, and an integrated Web3Forms appointment booking system for seamless patient conversion.",
    stack: ["Next.js 14", "TypeScript", "Sanity CMS", "Tailwind CSS", "Framer Motion", "Web3Forms", "Cloudinary"],
    live: "https://www.drhimanshukrishna.com/",
    image: cloudinary("v1785525622/Screenshot_2026-08-01_at_12.50.09_AM_mshzky.png"),
    alt: "Dr. Himanshu Krishna — neurosurgeon website with Sanity CMS and appointment booking",
  },
  {
    title: "Krillo",
    summary:
      "An automated website auditing platform running 200+ deep checks across Performance, SEO, Security, Accessibility, and UX. Built with Next.js 14, Tailwind CSS, PostgreSQL, Puppeteer, and Google Gemini AI for smart issue remediation. Delivers actionable PDF reports in minutes through a Neo-Brutalist UI.",
    stack: ["Next.js 14", "TypeScript", "PostgreSQL", "Puppeteer", "Gemini AI", "Tailwind"],
    live: "https://www.krillo.tech/",
    image: cloudinary("v1792270491/Screenshot_2026-10-18_at_2.23.11_AM_riumsq.png"),
    alt: "Krillo — AI website audit SaaS built with Next.js, PostgreSQL, Puppeteer and Gemini",
  },
];

export const getProject = (title: string) => PROJECTS.find((p) => p.title === title);
