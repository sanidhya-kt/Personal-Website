import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { EducationProps } from "./education.types";

export default function Education({}: EducationProps) {
  return (
    <section id="education" className="py-24 bg-slate-950 text-white">
      <Container>
        <SectionHeading>Education</SectionHeading>

        <div className="mt-12 space-y-8">

          <Card>
            <h3 className="text-2xl font-bold">
              Indian Institute of Technology Patna
            </h3>

            <p className="mt-2 text-blue-400">
              M.Tech in Artificial Intelligence
            </p>

            <p className="mt-4 text-gray-400">
              2025 – Present
            </p>

            <p className="mt-4 text-gray-400">
              CPI : 8 / 10 or 85%
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-bold">
              Gautam Buddha University
            </h3>

            <p className="mt-2 text-blue-400">
              B.Tech in Computer Science & Engineering
            </p>

            <p className="mt-4 text-gray-400">
              2019 - 2023
            </p>

            <p className="mt-4 text-gray-400">
              CGPA: 8.77 / 10 or 87.7%
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-bold">
              Kendriye Vidyalaya Aliganj Lucknow
              
            </h3>

            <p className="mt-2 text-blue-400">
              Intermidiate (Class 12)
            </p>

            <p className="mt-4 text-gray-400">
              PCM with Computer Science
            </p>

            <p className="mt-4 text-gray-400">
              Percentage : 72.6%
            </p>
          </Card>
          <Card>
            <h3 className="text-2xl font-bold">
              Kendriye Vidyalaya Aliganj Lucknow
            </h3>

            <p className="mt-2 text-blue-400">
              Highschool (Class 10)
            </p>
            

            <p className="mt-4 text-gray-400">
              Percentage : 93.1%
            </p>
          </Card>
          

        </div>
      </Container>
    </section>
  );
}