import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-20">
      <Container>
        <SectionHeading>Projects</SectionHeading>

        <Card>
          <h3 className="text-2xl font-bold">
            Sandium E-Commerce
          </h3>

          <p className="mt-3 text-gray-400">
            Full Stack MERN E-Commerce Application
          </p>
        </Card>
      </Container>
    </main>
  );
}