// app/contacto/page.tsx

'use client' // para manejar eventos en cliente
import { useState } from 'react'

export default function ContactoPage() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes manejar el envío de datos a tu API o servicio de correo
    alert(`Gracias por tu mensaje, ${nombre}! Te contactaremos pronto.`)
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
          rows={5}
        />
        <button type="submit" style={{ background: '#000', color: '#fff', padding: '0.75rem', cursor: 'pointer' }}>
          Enviar
        </button>
      </form>
    </section>
  )
}
