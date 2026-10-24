import { ArrowRight, ArrowUpRight } from "lucide-react";
import FadeIn from "../FadeIn";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 w-full border-t border-white/10">
      <div className="max-w-[1200px] mx-auto w-full">
        <FadeIn>
          <div className="mb-20">
            <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase tracking-widest leading-none mb-4 text-foreground">
              Things I've Built
            </h2>
            <p className="text-xl md:text-2xl text-zinc-500 font-medium tracking-wide">
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
                  {/* IMAGE SIDE — aspect-[16/9] wrapper prevents CLS */}
                  <div className="w-full lg:w-1/2 overflow-hidden border border-white/10 bg-zinc-900">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="absolute inset-0 w-full h-full object-cover"
                        // Far below the fold: never compete with the hero (the real LCP image)
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>

                  {/* DETAILS SIDE */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h3 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                      {project.summary}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 mb-10">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-semibold uppercase tracking-wider border border-white/10 text-zinc-400"
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
                          className="group flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-foreground hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto"
                        >
                          GitHub
                          <span className="sr-only"> repository for {project.title}</span>
                          <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2 px-6 py-3 border border-white/20 text-foreground hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto"
                      >
                        Live Demo
                        <span className="sr-only"> of {project.title} ({new URL(project.live).hostname})</span>
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
