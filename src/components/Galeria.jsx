export default function Galeria() {
  const imagens = [
    "/src/assets/galeria/festa-1.jpg",
    "/src/assets/galeria/festa-2.jpg",
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {imagens.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Galeria"
            className="rounded-3xl shadow-xl"
          />
        ))}
      </div>
    </section>
  );
}
