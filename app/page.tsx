import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Acievements from "@/components/sections/Achievements";
export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Acievements />
      <Contact />
      <Footer />
    </main>
  );
}