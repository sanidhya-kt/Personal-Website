import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/src/data/education";
import { EducationProps } from "./education.types";

export default function Education({}: EducationProps) {
  return (
    <section id="education" className="py-24 bg-background text-slate-100">
      <Container>
        <SectionHeading>Education</SectionHeading>

        <div className="mt-16 space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-card/60 backdrop-blur-md p-8 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/5"
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Logo */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-md border border-card-border">
                  <Image
                    src={item.logo}
                    alt={item.institute}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-3xl font-bold text-slate-100">
                      {item.institute}
                    </h3>

                    <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-3 text-xl font-semibold text-primary">
                    {item.degree}
                  </p>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}