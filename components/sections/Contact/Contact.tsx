import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ContactProps } from "./contact.types";

export default function Contact({}: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-background text-slate-100">
      <Container>
        <SectionHeading>Contact Me</SectionHeading>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left */}
          <Card>
            <h3 className="text-2xl font-bold text-slate-100">Let&apos;s Connect</h3>

            <p className="mt-4 text-slate-400">
              I&apos;m always interested in Software Engineering, AI Engineering, internship opportunities,
               and meaningful collaborations.
            </p>

            <div className="mt-8 space-y-4 text-slate-300">
              <p>
                <strong className="text-slate-200">Email:</strong>{" "}
                <a
                  href="mailto:sanidhya21iitp@gmail.com"
                  className="text-primary hover:text-indigo-400 hover:underline transition duration-200"
                >
                  sanidhya21iitp@gmail.com
                </a>
              </p>

              <p>
                <strong className="text-slate-200">Location:</strong> Patna, India
              </p>

              <p>
                <strong className="text-slate-200">GitHub:</strong>{" "}
                <a
                  href="https://github.com/sanidhya-kt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-indigo-400 hover:underline transition duration-200"
                >
                  github.com/sanidhya-kt
                </a>
              </p>

              <p>
                <strong className="text-slate-200">LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/sanidhya-kt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-indigo-400 hover:underline transition duration-200"
                >
                  linkedin.com/in/sanidhya-kt
                </a>
              </p>
            </div>
          </Card>

          {/* Right */}
          <Card>
            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg bg-slate-900/80 border border-slate-700 p-3 text-white placeholder-slate-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-lg bg-slate-900/80 border border-slate-700 p-3 text-white placeholder-slate-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full rounded-lg bg-slate-900/80 border border-slate-700 p-3 text-white placeholder-slate-400 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
              />

              <Button type="submit">
                Send Message
              </Button>

            </form>
          </Card>

        </div>
      </Container>
    </section>
  );
}