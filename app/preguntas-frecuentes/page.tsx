// app/preguntas-frecuentes/page.tsx

export default function PreguntasFrecuentesPage() {
    return (
      <section style={{ padding: '2rem' }}>
        <h1>Preguntas Frecuentes</h1>
        <details style={{ margin: '1rem 0' }}>
          <summary>¿Es gratuita la app?</summary>
          <p>Sí, Hobi cuenta con una versión gratuita con todas las funciones básicas.</p>
        </details>
        <details style={{ margin: '1rem 0' }}>
          <summary>¿Cómo me registro y creo mi perfil?</summary>
          <p>Descarga la app, regístrate con tu correo o redes sociales y completa tu información básica.</p>
        </details>
      </section>
    )
  }
  