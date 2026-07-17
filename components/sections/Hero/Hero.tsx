import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { HeroProps } from "./hero.types";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero({}: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center py-16 bg-background"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

          {/* Left Side */}
          <div>

            <p className="text-primary text-lg font-medium">
              Hi, I&apos;m
            </p>

            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-sky-100 to-primary bg-clip-text text-transparent">
              Sanidhya Kumar <br />
              Tiwari
            </h1>

            <h2 className="mt-4 text-xl sm:text-2xl lg:text-3xl text-slate-300">
              Software Engineer | AI Engineer
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-slate-400 max-w-xl">
              I build scalable software, AI-powered applications,
              and modern web experiences with clean architecture
              and production-ready code.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects">
                <Button size="lg">
                  View Projects
                </Button>
              </a>

              <a href="#contact">
                <Button variant="outline" size="lg">
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-6 text-2xl text-slate-400">

              <a
                href="https://github.com/sanidhya-kt"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-slate-100"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sanidhya-kt/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-primary"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:sanidhya21iitp@gmail.com"
                className="transition hover:text-rose-400"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            <div className="absolute h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-80 sm:w-80"></div>

            <Image
              src="/images/profile.jpg"
              alt="Sanidhya Kumar Tiwari"
              width={320}
              height={320}
              priority
              className="relative h-72 w-72 rounded-full border-4 border-card-border object-cover shadow-2xl sm:h-90 sm:w-80 lg:h-[350px] lg:w-[350px]"
            />

          </div>

        </div>
      </Container>
    </section>
  );
}