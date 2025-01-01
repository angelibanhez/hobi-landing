// app/planes/page.tsx

export default function PlanesPage() {
    return (
      <section style={{ padding: '2rem' }}>
        <h1>Nuestros Planes</h1>
        
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ border: '1px solid #ccc', padding: '1rem', flex: '1' }}>
            <h2>Plan Free</h2>
            <p>Participa en actividades, únete a grupos y chatea de manera gratuita.</p>
            <button>Obtener</button>
          </div>
  
          <div style={{ border: '1px solid #ccc', padding: '1rem', flex: '1' }}>
            <h2>Plan Pro</h2>
            <p>Destácate y obtén prioridad en sugerencias de actividades.</p>
            <button>Obtener</button>
          </div>
  
          <div style={{ border: '1px solid #ccc', padding: '1rem', flex: '1' }}>
            <h2>Plan Premium</h2>
            <p>Funciones avanzadas, soporte prioritario y eventos exclusivos.</p>
            <button>Obtener</button>
          </div>
        </div>
      </section>
    )
  }
  