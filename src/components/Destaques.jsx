const itens = [
  "Entrega rápida",
  "Produção artesanal",
  "Qualidade premium",
  "Ingredientes frescos",
];

export default function Destaques() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
        {itens.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-xl text-center"
          >
            <div className="text-4xl mb-4">★</div>
            <h3 className="font-bold text-xl">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
