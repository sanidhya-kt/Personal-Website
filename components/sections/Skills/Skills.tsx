import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { SkillsProps } from "./skills.types";

export default function Skills({}: SkillsProps) {
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white">
      <Container>
        <SectionHeading>Skills</SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Card>
            <h3 className="text-xl font-bold text-blue-400">Programming</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• C++</li>
              <li>• Python</li>
              <li>• JavaScript</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-blue-400">Frontend</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• React</li>
              <li>• Next.js</li>
              <li>• Tailwind CSS</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-blue-400">Backend</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Node.js</li>
              <li>• Express.js</li>
              <li>• MongoDB</li>
              <li>• REST APIs</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-blue-400">AI / ML</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Machine Learning</li>
              <li>• Deep Learning</li>
              <li>• LLMs</li>
              <li>• Agentic AI</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-blue-400">Database</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• MongoDB</li>
              <li>• MySQL</li>
            </ul>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-blue-400">Tools</h3>
            <ul className="mt-4 space-y-2 text-gray-300">
              <li>• Git</li>
              <li>• GitHub</li>
              <li>• Docker</li>
              <li>• AWS</li>
            </ul>
          </Card>

        </div>
      </Container>
    </section>
  );
}