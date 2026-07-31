"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "../FadeIn";
import { ArrowRight } from "lucide-react";

// Split into two parts so the static "Full-Stack Developer" is visible instantly
const STATIC_TEXT = "Full-Stack Developer";
const TYPED_TEXT = " I don't just write code, I think about why it's written that way.";

export default function Hero() {
  const [typedPart, setTypedPart] = useState("");
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const charSpeedMs = 40; // ms per character

  useEffect(() => {
    // Use requestAnimationFrame instead of setInterval — doesn't block main thread
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const charsToShow = Math.min(
        Math.floor(elapsed / charSpeedMs),
        TYPED_TEXT.length
      );
      setTypedPart(TYPED_TEXT.substring(0, charsToShow));
      if (charsToShow < TYPED_TEXT.length) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    // Delay start by 800ms to let FCP happen first
    const timer = setTimeout(() => {
      rafRef.current = requestAnimationFrame(animate);
    }, 800);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 md:px-12 w-full"
    >
      <div className="max-w-[1200px] mx-auto w-full flex flex-col items-center text-center">
        <FadeIn delay={100}>
          <h1 className="font-heading text-[clamp(36px,10vw,100px)] font-bold uppercase tracking-tighter leading-none mb-6 break-words">
            Akhilesh Kumar
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          {/* Static part renders immediately — never hidden, great for LCP */}
          <p className="text-lg md:text-2xl text-gray-800 max-w-3xl mb-12 min-h-[4rem] md:min-h-[2rem]">
            <span>{STATIC_TEXT}</span>
            <span aria-live="polite">{typedPart}</span>
          </p>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a
              href="#projects"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-semibold w-full sm:w-auto"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center gap-2 opacity-50"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-black" />
      </div>
    </section>
  );
}
