"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeIn from "../FadeIn";

const PROJECTS = [
  {
    title: "SCRUTIN",
    date: "April 2026",
    summary:
      "An automated website auditing platform running 200+ deep checks across Performance, SEO, Security, Accessibility, and UX. Built with Next.js 14, Tailwind CSS, PostgreSQL, Puppeteer, and Google Gemini AI for smart issue remediation. Delivers actionable PDF reports in minutes through a Neo-Brutalist UI.",
    stack: ["Next.js 14", "TypeScript", "PostgreSQL", "Puppeteer", "Gemini AI", "Tailwind"],
    github: "https://github.com/UserAkku/scrutin",
    live: "https://scrutin.vercel.app/",
    image: "scrutin.png",
  },
  {
    title: "SHADOWSCALE",
    date: "February 2026",
    summary:
      "A distributed URL shortener with microservices architecture, JWT auth, database sharding, and real-time analytics (clicks, devices, countries). Features an anonymous link-claiming system with circuit breaker pattern and abuse detection.",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Next.js", "JWT"],
    github: "https://github.com/UserAkku/shadowscale",
    live: "https://shadowscale.vercel.app/",
    image: "shadowscale.png",
  },
  {
    title: "LUSTRA SKIN",
    date: "May 2025",
    summary:
      "A responsive premium e-commerce website for skincare with seamless cart, checkout, and dynamic content management. Achieved 35% faster page loads and consistent responsiveness using Context API and JSON-based product management.",
    stack: ["Next.js", "React", "Tailwind CSS", "Context API"],
    github: "https://github.com/UserAkku/LustraSkin",
    live: "https://lustra-skin-t4vs.vercel.app/",
    image: "lustra.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 w-full border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto">
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

            return (
              <FadeIn key={project.title} delay={100}>
                <div
                  className={`flex flex-col gap-12 lg:gap-20 ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  } items-center`}
                >
                  {/* IMAGE SIDE */}
                  <div className="w-full lg:w-1/2 overflow-hidden border border-black group bg-white">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '0';
                      }}
                      onLoad={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '1';
                      }}
                    />
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
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2 px-6 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto"
                      >
                        GitHub
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
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
