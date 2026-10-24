"use client";

import React, { useId, useState } from "react";
import { motion } from "framer-motion";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rounded-[16px] border border-white/5 bg-[#0a0a0a] overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left focus:outline-none"
      >
        <span className="font-heading text-lg font-semibold text-zinc-200">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "anticipate" }}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5 text-zinc-400 shrink-0 ml-4"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>

      {/* Always rendered (collapsed when closed) so the answer is in the server HTML for search
          engines; it used to mount only on open, leaving every FAQ answer out of the page. */}
      <motion.div
        id={panelId}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "anticipate" }}
        style={{ overflow: "hidden" }}
        inert={!isOpen}
      >
        <div className="px-6 pb-6 pt-1 text-zinc-400 prose-p:mb-4 prose-p:last:mb-0">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
