export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-24 px-6 bg-[#7a1c1c] text-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-black">
            Produção artesanal premium
          </h2>

          <p className="text-zinc-200 mt-8 text-lg">
            Ingredientes selecionados e sabor inesquecível.
          </p>
        </div>

        <img
          src="/src/assets/galeria/festa-1.jpg"
          alt="Sobre"
          className="rounded-[40px]"
        />
      </div>
    </section>
  );
}
