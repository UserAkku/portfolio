"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["hero", "about", "experience", "skills", "projects", "contact"];

export default function SectionIndicator() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% of the section must be visible
      }
    );

    SECTIONS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
      {SECTIONS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={`Scroll to ${id}`}
          className="relative flex items-center justify-center w-4 h-4 group"
        >
          <span
            className={`w-2 h-2 rounded-full border border-black transition-all duration-300 ${
              activeSection === id ? "bg-black scale-150" : "bg-transparent group-hover:scale-150"
            }`}
          />
        </a>
      ))}
    </div>
  );
}
