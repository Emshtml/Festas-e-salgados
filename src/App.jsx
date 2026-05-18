export default function App() {
  return (
    <div>

      <header
        style={{
          background: '#f97316',
          color: '#fff',
          padding: '30px',
          textAlign: 'center'
        }}
      >
        <h1>Festas & Salgados</h1>

        <p>Os melhores salgados da região</p>
      </header>

      <section
        style={{
          padding: '40px',
          textAlign: 'center'
        }}
      >
        <h2>Nosso Cardápio</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: '20px',
            marginTop: '40px'
          }}
        >

          <div
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              borderRadius: '12px'
            }}
          >
            <img
              src="/images/coxinha.jpg"
              alt="Coxinha"
              style={{
                width: '100%',
                borderRadius: '10px'
              }}
            />

            <h3>Coxinha</h3>

            <p>Massa crocante e recheio especial.</p>
          </div>

          <div
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              borderRadius: '12px'
            }}
          >
            <img
              src="/images/kibe.jpg"
              alt="Kibe"
              style={{
                width: '100%',
                borderRadius: '10px'
              }}
            />

            <h3>Kibe</h3>

            <p>Sabor irresistível para festas.</p>
          </div>

          <div
            style={{
              border: '1px solid #ddd',
              padding: '20px',
              borderRadius: '12px'
            }}
          >
            <img
              src="/images/bolinha-queijo.jpg"
              alt="Bolinha de queijo"
              style={{
                width: '100%',
                borderRadius: '10px'
              }}
            />

            <h3>Bolinha de queijo</h3>

            <p>Cremosa e deliciosa.</p>
          </div>

        </div>
      </section>

      <section
        style={{
          textAlign: 'center',
          padding: '50px'
        }}
      >
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          style={{
            background: '#22c55e',
            color: '#fff',
            padding: '18px 40px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
          Fazer Pedido no WhatsApp
        </a>
      </section>

    </div>
  )
}
