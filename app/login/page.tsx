// app/login/page.tsx
'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Llamar a tu servicio de autenticación
    alert(`Iniciando sesión con ${email}`)
  }

  return (
    <section style={{ padding: '2rem' }}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem', background: '#000', color: '#fff' }}>
          Entrar
        </button>
      </form>
    </section>
  )
}
