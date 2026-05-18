```jsx
export default function App() {
  return (
    <div className="bg-[#fff6e9] min-h-screen text-zinc-900 overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#7a1c1c] via-[#5a1010] to-[#220909] px-6 overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 py-32">

          {/* Text */}
          <div>
            <span className="bg-[#d4af37]/20 text-[#f5d26a] px-5 py-2 rounded-full border border-[#d4af37]/40 text-sm font-semibold">
              Premium Buffet Gourmet
            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mt-8">
              Os salgados mais saborosos para transformar sua festa
            </h1>

            <p className="text-zinc-200 text-xl mt-8 leading-relaxed">
              Centenas de clientes satisfeitos com salgados fresquinhos,
              crocantes e preparados artesanalmente.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="bg-[#d4af37] text-[#7a1c1c] px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Fazer Pedido
              </button>

              <button className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#7a1c1c] transition">
                Ver Cardápio
              </button>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop"
              alt="Mesa gourmet"
              className="rounded-[40px] shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-black text-[#7a1c1c]">
            Qualidade Premium
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="text-5xl mb-5">🚚</div>
              <h3 className="text-2xl font-bold">Entrega Rápida</h3>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="text-5xl mb-5">🥟</div>
              <h3 className="text-2xl font-bold">Produção Artesanal</h3>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="text-5xl mb-5">⭐</div>
              <h3 className="text-2xl font-bold">Qualidade Premium</h3>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center text-[#7a1c1c] mb-16">
            Cardápio Gourmet
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                nome: "Coxinha Gourmet",
                imagem:
                  "https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=1200&auto=format&fit=crop",
              },

              {
                nome: "Kibe Crocante",
                imagem:
                  "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
              },

              {
                nome: "Risoles Cremoso",
                imagem:
                  "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
              },

              {
                nome: "Bolinha de Queijo",
                imagem:
                  "https://images.unsplash.com/photo-1604908176997-4317db7f0d0f?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((produto, index) => (
              <div
                key={index}
                className="bg-[#fff6e9] rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition"
              >

                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-black text-[#7a1c1c]">
                    {produto.nome}
                  </h3>

                  <button className="w-full mt-6 bg-[#7a1c1c] text-white py-4 rounded-2xl font-bold">
                    Pedir Agora
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6 bg-[#7a1c1c] text-white text-center">

        <h2 className="text-5xl lg:text-6xl font-black">
          Garanta agora os melhores salgados
        </h2>

        <p className="text-zinc-200 text-xl mt-8">
          Faça seu pedido e surpreenda seus convidados.
        </p>

        <button className="mt-10 bg-[#d4af37] text-[#7a1c1c] px-10 py-5 rounded-full font-black text-xl">
          Chamar no WhatsApp
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#180404] text-zinc-300 py-16 px-6 text-center">

        <h2 className="text-[#d4af37] text-3xl font-black">
          Adriana Salgados
        </h2>

        <p className="mt-5">
          WhatsApp: (11) 99999-9999
        </p>

        <p className="mt-2">
          Instagram: @adrianasalgados
        </p>

        <p className="mt-10 text-zinc-500">
          © 2026 Todos os direitos reservados.
        </p>
      </footer>

    </div>
  );
}
```
