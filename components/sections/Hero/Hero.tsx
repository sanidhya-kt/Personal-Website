import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { HeroProps } from "./hero.types";

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

            <h1 className="mt-2 text-5xl lg:text-7xl font-bold text-white leading-tight">
              Sanidhya Kumar <br />
              Tiwari
            </h1>

            <h2 className="mt-4 text-2xl lg:text-3xl text-gray-300">
              AI Engineer & Full Stack Developer
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I build scalable software, AI-powered applications,
              and modern web experiences with clean architecture
              and production-ready code.
            </p>

            <div className="mt-10 flex gap-4">
              <Button size="lg">
                View Projects
              </Button>

              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-7xl">
                👨‍💻
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}