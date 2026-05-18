import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destaques from "./components/Destaques";
import Produtos from "./components/Produtos";
import Sobre from "./components/Sobre";
import Depoimentos from "./components/Depoimentos";
import Galeria from "./components/Galeria";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#fff6e9] overflow-x-hidden text-zinc-900 selection:bg-[#d4af37] selection:text-[#7a1c1c]">
      
      {/* Background Premium */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7a1c1c]/10 rounded-full blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-[#d4af37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.15),_transparent_35%)]"></div>

        <Hero />
      </section>

      {/* Destaques */}
      <section className="relative py-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffffff40] to-transparent"></div>

        <div className="relative z-10">
          <Destaques />
        </div>
      </section>

      {/* Produtos */}
      <section className="relative py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(122,28,28,0.05),_transparent_45%)]"></div>

        <div className="relative z-10">
          <Produtos />
        </div>
      </section>

      {/* Sobre */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#d4af37]/10 blur-3xl rounded-full"></div>

        <Sobre />
      </section>

      {/* Depoimentos */}
      <section className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7a1c1c]/5 via-transparent to-[#d4af37]/5"></div>

        <div className="relative z-10">
          <Depoimentos />
        </div>
      </section>

      {/* Galeria */}
      <section className="relative py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(212,175,55,0.08),_transparent_50%)]"></div>

        <div className="relative z-10">
          <Galeria />
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7a1c1c] via-[#5a1010] to-[#220909]"></div>

        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#d4af37]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <CTA />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center text-white text-3xl shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition duration-300"
      >
        ✆
      </a>
    </div>
  );
}
