export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#7a1c1c]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-[#d4af37] font-black text-2xl">
          Adriana Salgados
        </h1>

        <nav className="hidden md:flex gap-8 text-white">
          <a href="#inicio">Início</a>
          <a href="#produtos">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <button className="bg-[#d4af37] text-[#7a1c1c] px-5 py-3 rounded-full font-bold">
          WhatsApp
        </button>
      </div>
    </header>
  );
}
