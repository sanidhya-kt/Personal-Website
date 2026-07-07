import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { AboutProps } from "./about.types";

export default function About({}: AboutProps) {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">
      <Container>
        <SectionHeading>About Me</SectionHeading>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <p className="text-lg text-gray-400 leading-8">
              I'm <span className="text-white font-semibold">Sanidhya Kumar Tiwari</span>,
              an M.Tech Artificial Intelligence student at IIT Patna with a
              strong interest in Full Stack Development, Artificial Intelligence,
              and scalable software systems.
            </p>

            <p className="mt-6 text-lg text-gray-400 leading-8">
              I enjoy solving real-world problems through clean architecture,
              efficient algorithms, and modern technologies. My goal is to
              build impactful AI-powered applications that are scalable and
              production-ready.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
              <h3 className="text-blue-400 font-semibold">Education</h3>
              <p className="mt-2 text-gray-300">
                M.Tech AI<br />
                IIT Patna
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
              <h3 className="text-blue-400 font-semibold">Experience</h3>
              <p className="mt-2 text-gray-300">
                MERN Stack<br />
                AI Projects
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
              <h3 className="text-blue-400 font-semibold">Interests</h3>
              <p className="mt-2 text-gray-300">
                AI, Backend,<br />
                System Design
              </p>
            </div>

            <div className="rounded-xl bg-slate-900 p-6 border border-slate-800">
              <h3 className="text-blue-400 font-semibold">Location</h3>
              <p className="mt-2 text-gray-300">
                Patna,<br />
                India
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}