"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeIn from "../FadeIn";

const PROJECTS = [
  {
    title: "ORNOVIA",
    summary:
      "An ultra-premium headless e-commerce storefront for luxury handcrafted marble goods. Engineered with Sanity CMS v3 for 100% dynamic content control, featuring real-time webhook revalidation for instant updates. The UI boasts bespoke, editorial-style asymmetrical layouts, cinematic edge-to-edge imagery optimized via Cloudinary, and a custom responsive design system that breaks traditional web grids to deliver a high-end, magazine-like user experience.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Sanity CMS", "Cloudinary"],
    live: "https://www.ornovia.in/",
    image: "https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto/v1785525754/Screenshot_2026-08-01_at_12.52.23_AM_jpoupv.png",
  },
  {
    title: "EMONETISER",
    summary:
      "A premium, highly-interactive corporate website for a leading AdTech exchange platform bridging publishers and advertisers. Engineered with modern web design principles, featuring complex UI components like animated mockups, interactive device frames, and dynamic SVG beam flows. Built with a robust multi-page architecture including specialized routing, staggered Framer Motion reveal animations, and a fully integrated enterprise contact pipeline using React Hook Form, Zod validation, and Web3Forms.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Magic UI", "React Hook Form", "Zod", "Web3Forms"],
    live: "https://www.emonetiser.com/",
    image: "https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto/v1785525354/Screenshot_2026-08-01_at_12.45.44_AM_nr7kot.png",
  },
  {
    title: "MADDWORLD",
    summary:
      "A cinematic, full-stack creative agency portfolio website with GSAP + ScrollTrigger animations, Lenis smooth scroll, and a custom morphing cursor. Features 7 pages including a Brands showcase with clip-path image reveals, parallax scroll, multi-field contact form (React Hook Form + Zod + Web3Forms), and Vercel + Google Analytics integration.",
    stack: ["Next.js 14", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS", "Zod", "Web3Forms"],
    live: "https://www.madworldd.com",
    image: "https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto/v1783262625/Screenshot_2026-07-05_at_8.04.30_PM_cwy7pq.png",
  },
  {
    title: "TRAVEL NEPAL WITH US",
    summary:
      "A premium travel and expedition booking platform designed to deliver an immersive digital experience for Himalayan adventures. Built with a highly dynamic, responsive UI featuring smooth Framer Motion animations, custom horizontal scrolling carousels, and an out-of-the-box massive rounded hero layout. Integrated with Sanity CMS for seamless content management of treks, tours, and spiritual yatras, allowing real-time updates and dynamic categorization to boost user engagement and conversions.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Swiper", "SEO"],
    live: "https://www.travelnepalwithus.com/",
    image: "https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto/v1785525034/Screenshot_2026-08-01_at_12.39.55_AM_ui6okq.png",
  },
  {
    title: "LUSTRA SKIN",
    summary:
      "A responsive premium e-commerce website for skincare with seamless cart, checkout, and dynamic content management. Achieved 35% faster page loads and consistent responsiveness using Context API and JSON-based product management.",
    stack: ["Next.js", "React", "Tailwind CSS", "Context API"],
    github: "https://github.com/UserAkku/LustraSkin",
    live: "https://lustra-skin-t4vs.vercel.app/",
    image: "https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto/v1783262846/lustra_uev0ih.png",
  },
  {
    title: "MADDWORLD CREATIVE",
    summary:
      "A full-service creative agency SPA built for a real client. Features staggered GSAP text animations, animated SVG path drawing, count-up statistics, infinite marquee ticker, tabbed portfolio with category filters, masonry grid, fullscreen lightbox with keyboard navigation, and a Web3Forms-powered contact form with Zod validation.",
    stack: ["Next.js 14", "TypeScript", "Framer Motion", "Tailwind CSS", "React Hook Form", "Zod", "Web3Forms"],
    live: "https://maddworldcreative.com",
    image: "https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto/v1783262942/Screenshot_2026-07-05_at_8.18.24_PM_qsx6ht.png",
  },
  {
    title: "DR. HIMANSHU KRISHNA",
    summary:
      "A premium, highly dynamic medical portfolio built for a leading neurosurgeon. Features a fully custom headless CMS architecture using Sanity for real-time management of services, patient success stories, and SEO-optimized blogs. Designed with a modern glassmorphic UI, smooth scroll animations, dynamic routing, and an integrated Web3Forms appointment booking system for seamless patient conversion.",
    stack: ["Next.js 14", "TypeScript", "Sanity CMS", "Tailwind CSS", "Framer Motion", "Web3Forms", "Cloudinary"],
    live: "https://www.drhimanshukrishna.com/",
    image: "https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto/v1785525622/Screenshot_2026-08-01_at_12.50.09_AM_mshzky.png",
  },
  {
    title: "SCRUTIN",
    summary:
      "An automated website auditing platform running 200+ deep checks across Performance, SEO, Security, Accessibility, and UX. Built with Next.js 14, Tailwind CSS, PostgreSQL, Puppeteer, and Google Gemini AI for smart issue remediation. Delivers actionable PDF reports in minutes through a Neo-Brutalist UI.",
    stack: ["Next.js 14", "TypeScript", "PostgreSQL", "Puppeteer", "Gemini AI", "Tailwind"],
    github: "https://github.com/UserAkku/scrutin",
    live: "https://scrutin.akhileshkumar.in/",
    image: "https://res.cloudinary.com/docksqg0c/image/upload/f_auto,q_auto/v1783262800/scrutin_vpxukq.png",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 w-full border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto w-full">
        <FadeIn>
          <div className="mb-20">
            <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase tracking-widest leading-none mb-4">
              Things I've Built
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-medium tracking-wide">
              Each project is a problem I decided to solve.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;
            // First image gets priority loading to fix LCP
            const isPriority = index === 0;

            return (
              <FadeIn key={project.title} delay={100}>
                <div
                  className={`flex flex-col gap-12 lg:gap-20 ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center`}
                >
                  {/* IMAGE SIDE — aspect-[16/9] wrapper prevents CLS */}
                  <div className="w-full lg:w-1/2 overflow-hidden border border-black bg-gray-100">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        className="absolute inset-0 w-full h-full object-cover"
                        fetchPriority={isPriority ? "high" : "low"}
                        loading={isPriority ? "eager" : "lazy"}
                        decoding={isPriority ? "sync" : "async"}
                      />
                    </div>
                  </div>

                  {/* DETAILS SIDE */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h3 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-800 leading-relaxed mb-8">
                      {project.summary}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-semibold uppercase tracking-wider border border-gray-300 text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-center gap-2 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto"
                        >
                          GitHub
                          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto"
                      >
                        Live Demo
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
