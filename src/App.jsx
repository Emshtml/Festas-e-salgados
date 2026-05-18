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
    <>
      <Navbar />
      <Hero />
      <Destaques />
      <Produtos />
      <Sobre />
      <Depoimentos />
      <Galeria />
      <CTA />
      <Footer />
    </>
  );
}
