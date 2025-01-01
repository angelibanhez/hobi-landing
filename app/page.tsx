// app/page.tsx

import Image from 'next/image'

export default function HomePage() {
  return (
    <section className="w-full px-4 py-8 mx-auto text-center">
      {/* HERO SECTION */}
      <div className="relative flex flex-col items-center justify-center mb-16 overflow-hidden rounded-lg h-[500px] sm:h-[600px]">
        
        {/* Imagen de fondo del Hero */}
        <Image
          src="/images/hero-section.JPEG"
          alt="Hero"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Capa oscura superpuesta */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Contenido por encima de la capa oscura */}
        <div className="relative z-10 flex flex-col items-center max-w-3xl px-4 text-white sm:px-6">
          <h1 className="mb-4 drop-shadow-lg">
            La forma más fácil de encontrar compañeros para tus actividades favoritas
          </h1>
          <p className="mb-6 leading-relaxed drop-shadow-lg">
            Conecta con personas que comparten tus mismos intereses y vive experiencias únicas con Hobi.
          </p>

          {/* Botón con estilos globales */}
          <button
            className="shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Descarga la App
          </button>
        </div>
      </div>

      {/* BENEFICIOS / CARDS */}
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {/* Card 1 */}
        <div className="max-w-xs p-6 mx-auto transition-transform bg-white border border-neutral-200 rounded-lg shadow hover:scale-105">
          <img
            src="images/easy-activities.JPEG"
            alt="Encuentra actividades"
            className="object-cover w-full mb-4 rounded h-52"
          />
          <h3 className="mb-2">Encuentra actividades fácilmente</h3>
          <p className="text-neutral-600">
            Accede a una comunidad con gustos similares para hacer ejercicio, ir al cine o simplemente tomar un café.
          </p>
        </div>

        {/* Card 2 */}
        <div className="max-w-xs p-6 mx-auto transition-transform bg-white border border-neutral-200 rounded-lg shadow hover:scale-105">
          <img
            src="/images/conexiones-reales.jpg"
            alt="Conexiones reales"
            className="object-cover w-full mb-4 rounded h-52"
          />
          <h3 className="mb-2">Crea conexiones reales</h3>
          <p className="text-neutral-600">
            Sal de la rutina y haz nuevos amigos mientras disfrutas tus pasatiempos favoritos.
          </p>
        </div>

        {/* Card 3 */}
        <div className="max-w-xs p-6 mx-auto transition-transform bg-white border border-neutral-200 rounded-lg shadow hover:scale-105">
          <img
            src="/images/flexibilidad-total.jpg"
            alt="Flexibilidad total"
            className="object-cover w-full mb-4 rounded h-52"
          />
          <h3 className="mb-2">Flexibilidad total</h3>
          <p className="text-neutral-600">
            Elige tu disponibilidad, ubicación y preferencias para que Hobi te muestre a las personas ideales.
          </p>
        </div>

        {/* Card 4 */}
        <div className="max-w-xs p-6 mx-auto transition-transform bg-white border border-neutral-200 rounded-lg shadow hover:scale-105">
          <img
            src="/images/seguridad-confianza.jpg"
            alt="Seguridad y confianza"
            className="object-cover w-full mb-4 rounded h-52"
          />
          <h3 className="mb-2">Seguridad y confianza</h3>
          <p className="text-neutral-600">
            Perfiles verificados y reseñas de la comunidad para que solo te enfoques en divertirte.
          </p>
        </div>
      </div>

      {/* CTA FINAL */}
      <div className="flex flex-col items-center mt-12">
        <h2 className="mb-4">¿Listo para conocer gente nueva?</h2>
        <p className="mb-6 text-neutral-700">
          Únete a nuestra comunidad y empieza a vivir experiencias inolvidables.
        </p>

        {/* Botón con estilos globales */}
        <button
          className="shadow-lg hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Únete Gratis
        </button>
      </div>
    </section>
  )
}
