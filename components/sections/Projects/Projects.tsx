import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/src/data/projects";
import { ProjectsProps } from "./projects.types";

export default function Projects({}: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-background text-slate-100">
      <Container>
        <SectionHeading>Projects</SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index}>
              <h3 className="text-2xl font-bold text-slate-100">
                {project.title}
              </h3>

              <p className="mt-4 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm">
                      GitHub
                    </Button>
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}