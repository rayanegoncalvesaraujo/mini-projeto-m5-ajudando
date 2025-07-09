export const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-4xl font-bold mb-4">Helping with<br />social issues</h2>
        <p className="text-gray-600">
          Working together to address critical social challenges through awareness and action.
        </p>
      </div>
      <img src="/globo.png" alt="Criança com globo" className="w-full max-w-sm mx-auto" />
    </section>
  );
};
