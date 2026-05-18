const produtos = [
  {
    nome: "Coxinha",
    imagem: "/src/assets/produtos/coxinha.jpg",
  },
  {
    nome: "Kibe",
    imagem: "/src/assets/produtos/kibe.jpg",
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-center text-[#7a1c1c] mb-16">
          Cardápio Gourmet
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className="bg-[#fff6e9] rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{produto.nome}</h3>

                <button className="w-full mt-6 bg-[#7a1c1c] text-white py-4 rounded-2xl">
                  Pedir Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
