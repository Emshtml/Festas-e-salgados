export default function Depoimentos() {
  return (
    <section className="py-24 px-6 bg-[#fff6e9]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <div className="text-[#d4af37] text-3xl">★★★★★</div>
          <p className="mt-5">Os melhores salgados da festa!</p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <div className="text-[#d4af37] text-3xl">★★★★★</div>
          <p className="mt-5">Entrega rápida e qualidade incrível.</p>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-xl">
          <div className="text-[#d4af37] text-3xl">★★★★★</div>
          <p className="mt-5">Todos elogiaram os salgados.</p>
        </div>
      </div>
    </section>
  );
}
