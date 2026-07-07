import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { HeroProps } from "./hero.types";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero({}: HeroProps) {
  return (
    <section className="min-h-[90vh] flex items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* Left Side */}
          <div>
            <p className="text-blue-400 text-lg font-medium">
              Hi, I'm
            </p>

            <h1 className="mt-2 text-5xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-blue-200 to-cyan-400 bg-clip-text text-transparent">
                Sanidhya Kumar <br />
              Tiwari
            </h1>

            <h2 className="mt-4 text-2xl lg:text-3xl text-gray-300">
              Software Engineer
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I build scalable software, AI-powered applications,
              and modern web experiences with clean architecture
              and production-ready code.
            </p>

            <div className="mt-10 flex gap-4">
              <div className="mt-8 flex gap-6 text-2xl text-gray-400">
  <FaGithub className="cursor-pointer hover:text-white transition" />
  <FaLinkedin className="cursor-pointer hover:text-blue-400 transition" />
  <FaEnvelope className="cursor-pointer hover:text-red-400 transition" />
</div>
              <Button size="lg">
                View Projects
              </Button>

              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Side */}
          {/* Right Side */}
<div className="relative flex justify-center">
  <div className="absolute w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"></div>

  <Image
    src="/images/profile.jpg"
    alt="Sanidhya Kumar Tiwari"
    width={350}
    height={350}
    priority
    className="relative rounded-full object-cover border-4 border-slate-700 shadow-2xl"
  />
</div>

        </div>
      </Container>
    </section>
  );
}