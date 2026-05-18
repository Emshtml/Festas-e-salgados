import hero from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#7a1c1c] to-[#220909] px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pt-32">
        <div>
          <h2 className="text-5xl lg:text-7xl font-black text-white leading-tight">
            Os salgados mais saborosos para transformar sua festa
          </h2>

          <p className="text-zinc-200 text-xl mt-8">
            Centenas de clientes satisfeitos com salgados fresquinhos.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-[#d4af37] text-[#7a1c1c] px-8 py-4 rounded-full font-bold">
              Fazer Pedido
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-full">
              Ver Cardápio
            </button>
          </div>
        </div>

        <img
          src={hero}
          alt="Hero"
          className="rounded-[40px] shadow-2xl"
        />
      </div>
    </section>
  );
}
