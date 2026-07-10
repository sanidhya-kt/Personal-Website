import { FaCode, FaRobot, FaLaptopCode, FaAward } from "react-icons/fa";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { AchievementsProps } from "./achievements.types";

const achievements = [
  {
    icon: <FaRobot className="text-3xl text-blue-400" />,
    title: "Agentic AI Research",
    description:
      "Developing an AI-powered healthcare monitoring system using Agentic AI, LLMs, and IoT technologies.",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-blue-400" />,
    title: "Full Stack Development",
    description:
      "Built scalable MERN stack applications including E-Commerce and Blogging platforms.",
  },
  {
    icon: <FaCode className="text-3xl text-blue-400" />,
    title: "Data Structures & Algorithms",
    description:
      "Actively solving DSA problems and strengthening problem-solving skills using C++.",
  },
  {
    icon: <FaAward className="text-3xl text-blue-400" />,
    title: "Continuous Learning",
    description:
      "Continuously exploring Artificial Intelligence, Backend Development, and modern software engineering practices.",
  },
];

export default function Achievements({}: AchievementsProps) {
  return (
    <section id="achievements" className="py-24 bg-slate-900 text-white">
      <Container>
        <SectionHeading>Achievements & Certifications</SectionHeading>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <Card key={index}>
              <div className="flex items-start gap-5">
                {item.icon}

                <div>
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}