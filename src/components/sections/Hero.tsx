"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../Icons";

const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/UserAkku" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/akhilesh-kumar-736794313" },
  { icon: TwitterIcon, href: "https://twitter.com/akhileshkumar" }, // Update if real link exists
  { icon: Mail, href: "mailto:akhileshkumaroffical@gmail.com" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      className="relative h-screen w-full overflow-hidden bg-background px-6 md:px-12"
    >
      {/* Yellow Circle (Behind) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="absolute top-[54%] lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[400px] w-[400px] md:h-[800px] md:w-[800px] lg:h-[550px] lg:w-[550px] rounded-full bg-yellow-400"
      />

      {/* Main Container for positioned content */}
      <div className="relative w-full h-full max-w-[1200px] mx-auto flex items-center justify-center">
        
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute left-0 z-20 max-w-xs hidden lg:block"
        >
          <p className="text-sm md:text-base leading-relaxed text-foreground/80 font-medium mb-4">
            Engineering digital experiences with precision. I focus on clean architecture, scalable systems, and pixel-perfect design to bring ideas to life.
          </p>
          <a href="#about" className="text-sm font-bold tracking-widest uppercase border-b border-foreground/30 hover:border-foreground transition-colors pb-1">
            Read More
          </a>
        </motion.div>

        {/* Right Text - z-10 so it's behind the image but above the circle */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute left-[65%] top-[50%] -translate-y-1/2 -mt-2 z-10 hidden lg:block pointer-events-none"
        >
          <h1 className="text-7xl lg:text-[150px] font-extrabold text-foreground tracking-tighter leading-[0.85] font-heading lowercase whitespace-nowrap">
            code is
            <br />
            art.
          </h1>
        </motion.div>

        {/* Center Image - z-20 so it's above the right text */}
        <motion.img
          src="https://res.cloudinary.com/docksqg0c/image/upload/v1785567791/ChatGPT_Image_Aug_1_2026_12_32_29_PM_q2nhcp.png"
          alt="Akhilesh Kumar"
          // We anchor to the absolute bottom. h-[115vh] makes it overflow the top on desktop.
          className="absolute bottom-0 lg:-bottom-10 left-1/2 -translate-x-1/2 lg:-translate-x-[55%] z-20 h-[75vh] md:h-[85vh] lg:h-[115vh] w-auto object-cover object-bottom drop-shadow-2xl pointer-events-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        />

        {/* Mobile / Tablet Stacked Layout */}
        <div className="w-full h-full flex flex-col items-center justify-between pt-[15vh] pb-16 md:pb-12 z-30 lg:hidden relative pointer-events-none">
            <motion.h1 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="text-7xl md:text-8xl font-extrabold text-foreground tracking-tighter leading-[0.85] font-heading lowercase text-center whitespace-nowrap pointer-events-auto drop-shadow-lg">
              code is<br className="md:hidden" /><span className="hidden md:inline"> </span>art.
            </motion.h1>
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center max-w-[90%] md:max-w-md mx-auto mt-auto pointer-events-auto bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl"
            >
              <p className="text-sm md:text-base leading-relaxed text-foreground/90 font-medium mb-4">
                Engineering digital experiences with precision. I focus on clean architecture, scalable systems, and pixel-perfect design to bring ideas to life.
              </p>
              <a href="#about" className="text-sm font-bold tracking-widest uppercase border-b border-foreground/30 hover:border-foreground transition-colors pb-1">
                Read More
              </a>
            </motion.div>
        </div>

      </div>

    </section>
  );
}
