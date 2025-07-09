import { SectionTitle } from "../components/SectionTitle";

export const FomeSection = () => {
  return (
    <section id="fome" className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle icon="🍎" title="Fome" />
        <p className="text-gray-700 mb-6">
          Milhões de pessoas sofrem com a fome devido à falta de recursos e oportunidades.
        </p>
        <img src="/fome.png" alt="Pessoa com fome" className="rounded-xl shadow-md w-full max-w-sm" />
      </div>
    </section>
  );
};
