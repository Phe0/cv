import { MainSection } from "./components/main-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { TechSection } from "./components/tech-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <MainSection />
        <TechSection />
      </main>
      <Footer />
    </div>
  );
}
