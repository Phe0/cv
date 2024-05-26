import { CustomLink } from "@/components/custom-link";
import Image from "next/image";
import { MainSection } from "./components/main-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSection } from "./components/about-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6">
        <MainSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
