"use client";

import { useEffect, useState } from "react";
import FadeIn from "../FadeIn";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  const fullText = "Full-Stack Developer I don't just write code, I think about why it's written that way.";
  const [text, setText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setIsTypingComplete(true);
      }
    }, 40); // typing speed
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 w-full"
    >
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center text-center">
        <FadeIn delay={100}>
          <h1 className="font-heading text-[clamp(48px,8vw,100px)] font-bold uppercase tracking-tighter leading-none mb-6">
            Akhilesh Kumar
          </h1>
        </FadeIn>
        
        <FadeIn delay={300}>
          <p className="text-lg md:text-2xl text-gray-800 max-w-3xl mb-12 h-16 md:h-8 flex items-center justify-center">
            {text}
          </p>
        </FadeIn>
        
        <FadeIn delay={500}>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-semibold"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black border border-black hover:bg-black hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold"
            >
              Download Resume
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-black" />
      </div>
    </section>
  );
}
