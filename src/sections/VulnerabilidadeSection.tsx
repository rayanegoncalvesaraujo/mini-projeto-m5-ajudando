import React from "react";
import { SectionTitle } from "../components/SectionTitle";

export const VulnerabilidadeSection = () => {
  return (
    <section id="vulnerabilidade" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle icon="🛡️" title="Vulnerabilidade" />
        <p className="text-gray-700 mb-6">
          Youth in vulnerable situations require targeted interventions and support.
        </p>
        <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
          <h4 className="font-bold mb-2">Crescimento de 2017 a 2021</h4>
          <img src="/grafico-vulnerabilidade.png" alt="Gráfico" className="w-full max-w-md" />
        </div>
      </div>
    </section>
  );
};
