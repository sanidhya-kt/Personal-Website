import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Education from "@/components/sections/Education";

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
    </main>
  );
}