import { SectionTitle } from "../components/SectionTitle";

export const AlfabetizacaoSection = () => {
  return (
    <section id="alfabetizacao" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle icon="📖" title="Alfabetização" />

        <p className="text-gray-700 mb-6">
          A educação é essencial para quebrar o ciclo da pobreza e promover a igualdade.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-4xl font-bold text-gray-900">92,5%</p>
            <p className="text-base text-gray-500">
              Taxa de alfabetização (idades 15–24)
            </p>
          </div>

          <div>
            <p className="text-4xl font-bold text-gray-900">78,1%</p>
            <p className="text-base text-gray-500">
              Taxa de alfabetização (25+)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};