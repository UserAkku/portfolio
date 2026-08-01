import FadeIn from "../FadeIn";

const EXPERIENCES = [
  {
    title: "Full-Stack Developer Intern",
    company: "Maddworld",
    location: "Remote",
    duration: "June 2026 – Present",
    points: [
      "Designing, building & shipping websites across multiple business domains.",
      "Contributing to end-to-end development of large-scale tech products.",
      "Shaping product & business strategy features, priorities, and direction.",
      "Working on technical architecture for scalable systems.",
    ],
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Nocage (formerly Bridein)",
    location: "New Delhi",
    duration: "June 2025 – December 2025",
    points: [
      "Built and optimized public-facing pages using Next.js and TypeScript.",
      "Improved Technical SEO, performance, and overall UI/UX.",
      "Worked on real-world frontend features and product updates.",
      "Researched marketing, competitors, and user behaviour.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-12 w-full border-t border-white/10">
      <div className="max-w-[1200px] mx-auto w-full">
        <FadeIn>
          <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase tracking-widest mb-16 text-foreground">
            Where I've Worked
          </h2>
        </FadeIn>

        <div className="max-w-4xl border-l border-white/10 ml-2 md:ml-4">
          {EXPERIENCES.map((exp, index) => (
            <FadeIn key={index} delay={index * 200}>
              <div className={`relative pl-8 md:pl-12 ${index === EXPERIENCES.length - 1 ? 'pb-0' : 'pb-24'}`}>
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] bg-white rounded-full" />
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-base md:text-xl text-zinc-300 mt-1">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-zinc-500 mt-2 md:mt-0 whitespace-nowrap md:ml-4">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3 mt-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex text-base md:text-lg text-zinc-400">
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
