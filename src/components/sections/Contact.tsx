"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import FadeIn from "../FadeIn";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // REPLACE WITH YOUR FORMSPREE ID
      const response = await fetch("https://formspree.io/f/xlgvwdny", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 w-full border-t border-gray-200 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <div className="mb-20 text-center md:text-left">
            <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase tracking-widest leading-none mb-4">
              Let's Build Something
            </h2>
            <p className="text-xl md:text-2xl text-gray-500 font-medium tracking-wide">
              Got a project, a question, or just want to say hi?
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-16 md:gap-0">
          {/* LEFT SIDE: Form */}
          <FadeIn delay={100} className="w-full md:w-1/2 md:pr-16 md:border-r border-gray-200">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border-b border-black py-3 bg-transparent text-lg focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-300 rounded-none"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-b border-black py-3 bg-transparent text-lg focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-300 rounded-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full border-b border-black py-3 bg-transparent text-lg focus:outline-none focus:border-gray-500 transition-colors placeholder:text-gray-300 resize-none rounded-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-black text-white border border-black hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-widest text-sm font-semibold self-start disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting"
                  ? "Sending..."
                  : status === "success"
                  ? "Sent!"
                  : "Send Message"}
                {status !== "submitting" && status !== "success" && (
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              {status === "success" && (
                <p className="text-sm font-semibold text-black tracking-wide">
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-semibold text-red-600 tracking-wide">
                  Oops! There was a problem submitting your form.
                </p>
              )}
            </form>
          </FadeIn>

          {/* RIGHT SIDE: Links */}
          <FadeIn delay={200} className="w-full md:w-1/2 md:pl-16 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                Email
              </span>
              <a
                href="mailto:akhileshkumaroffical@gmail.com"
                className="group flex items-start sm:items-center gap-2 text-xl md:text-2xl font-bold text-black max-w-full"
              >
                <span className="relative overflow-hidden break-all sm:break-normal">
                  akhileshkumaroffical@gmail.com
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </span>
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 mt-1 sm:mt-0" />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/akhilesh-kumar-736794313"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start sm:items-center gap-2 text-xl md:text-2xl font-bold text-black max-w-full"
              >
                <span className="relative overflow-hidden break-all sm:break-normal">
                  https://linkedin.com/in/akhilesh-kumar-736794313
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </span>
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 mt-1 sm:mt-0" />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">
                GitHub
              </span>
              <a
                href="https://github.com/UserAkku"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start sm:items-center gap-2 text-xl md:text-2xl font-bold text-black max-w-full"
              >
                <span className="relative overflow-hidden break-all sm:break-normal">
                  https://github.com/UserAkku
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </span>
                <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0 mt-1 sm:mt-0" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
