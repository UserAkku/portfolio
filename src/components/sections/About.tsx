import FadeIn from "../FadeIn";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 w-full border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase tracking-widest mb-12">
            The Story So Far
          </h2>
        </FadeIn>
        
        <FadeIn delay={200}>
          <div className="max-w-4xl">
            <p className="text-xl md:text-3xl leading-relaxed text-gray-800 font-medium">
              I'm Akhilesh Kumar, currently pursuing a B.Tech in AI at{" "}
              <span className="text-black font-bold">Newton School of Technology, Rishihood University (2024–2028)</span>. 
              I am passionate about clean architecture, user-facing impact, and shipping things that actually work. 
              For me, development isn't just about writing code it's about understanding why it's written that way and building experiences that feel effortless.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
