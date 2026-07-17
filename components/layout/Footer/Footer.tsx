import Container from "@/components/ui/Container";
import { FooterProps } from "./footer.types";

export default function Footer({}: FooterProps) {
  return (
    <footer className="border-t border-card-border bg-background text-slate-400">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-6">

          <p>
            © {new Date().getFullYear()} Sanidhya Kumar Tiwari.
            All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="https://github.com/sanidhya-kt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-100 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sanidhya-kt/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-100 transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sanidhya21iitp@gmail.com"
              className="hover:text-slate-100 transition"
            >
              Gmail
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
}