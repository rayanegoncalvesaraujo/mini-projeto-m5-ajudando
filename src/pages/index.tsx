import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { VulnerabilidadeSection } from "../sections/VulnerabilidadeSection";
import { FomeSection } from "../sections/FomeSection";
import { AlfabetizacaoSection } from "../sections/AlfabetizacaoSection";

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