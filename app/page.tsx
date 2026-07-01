import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-6">
      <Button>Primary Button</Button>

      <Button variant="secondary">
        Secondary Button
      </Button>

      <Button variant="outline">
        Outline Button
      </Button>

      <Button variant="ghost">
        Ghost Button
      </Button>

      <Button size="lg">
        Large Button
      </Button>
    </main>
  );
}