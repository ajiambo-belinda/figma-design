import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import AIShowcasesection from "@/components/AIShowcasesection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Capabilities />
      <AIShowcasesection />
    </main>
  );
}