import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import SectionIndicator from "@/components/SectionIndicator";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <SectionIndicator />
      
      <main className="flex flex-col w-full relative bg-transparent">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
