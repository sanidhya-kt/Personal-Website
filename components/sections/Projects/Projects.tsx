import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProjectsProps } from "./projects.types";

export default function Projects({}: ProjectsProps) {
  return (
    <section id="projects" className="py-24 bg-slate-950 text-white">
      <Container>
        <SectionHeading>Projects</SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card>
            <h3 className="text-2xl font-bold">Sandium E-Commerce</h3>

            <p className="mt-4 text-gray-400">
              Full Stack MERN e-commerce platform with authentication,
              payments and admin dashboard.
            </p>

            <div className="mt-6 flex gap-3">
              <Button size="sm">GitHub</Button>
              <Button variant="outline" size="sm">
                Live Demo
              </Button>
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold">Blogging Platform</h3>

            <p className="mt-4 text-gray-400">
              Blog application with authentication, CRUD operations
              and comments.
            </p>

            <div className="mt-6 flex gap-3">
              <Button size="sm">GitHub</Button>
              <Button variant="outline" size="sm">
                Live Demo
              </Button>
            </div>
          </Card>

          <Card>
            <h3 className="text-2xl font-bold">
              Agentic AI Fall Detection
            </h3>

            <p className="mt-4 text-gray-400">
              AI-powered healthcare monitoring using Agentic AI,
              IoT and LLMs.
            </p>

            <div className="mt-6 flex gap-3">
              <Button size="sm">GitHub</Button>
              <Button variant="outline" size="sm">
                Live Demo
              </Button>
            </div>
          </Card>

        </div>
      </Container>
    </section>
  );
}