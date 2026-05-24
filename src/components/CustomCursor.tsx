"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on fine pointer devices
    if (!window.matchMedia("(pointer: fine)").matches) return;
    
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Update dot immediately
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }

      // Update circle with slight lag
      if (circleRef.current) {
        // use requestAnimationFrame for smoother lag effect or just let CSS transition handle it.
        // We'll use a small timeout or just direct translation with CSS transition.
        circleRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Larger outlined circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-8 h-8 border border-black rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
      />
    </>
  );
}
