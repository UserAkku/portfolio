import FadeIn from "../FadeIn";

const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js", "Express.js", "Tailwind CSS", "Prisma ORM"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "GitHub", "Puppeteer", "RAG", "GenAI", "Analytics", "NumPy", "Pandas"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 w-full border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase tracking-widest mb-16 text-center md:text-left">
            What I Work With
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <FadeIn key={groupIdx} delay={groupIdx * 150} className="flex flex-col">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 border-b border-gray-200 pb-2">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-5 py-2.5 bg-black text-white border border-black rounded-full text-sm font-semibold tracking-wide cursor-default hover:bg-white hover:text-black transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
