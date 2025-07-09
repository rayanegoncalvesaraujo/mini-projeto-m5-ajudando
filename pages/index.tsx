import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { Hero } from "../src/components/Hero";
import VulnerabilidadeSection from "../src/sections/VulnerabilidadeSection";
import { FomeSection } from "../src/sections/FomeSection";
import { AlfabetizacaoSection } from "../src/sections/AlfabetizacaoSection";

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      <Header />
      <Hero />
      <VulnerabilidadeSection />
      <FomeSection />
      <AlfabetizacaoSection />
      <Footer />
    </main>
  );
}
