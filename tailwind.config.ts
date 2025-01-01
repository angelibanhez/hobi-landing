/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // si usas la App Router
    "./components/**/*.{js,ts,jsx,tsx}",
    // si tienes otras rutas o carpetas con componentes, agrégalas aquí
  ],
  theme: {
    extend: {
      // Aquí podrías sobreescribir o extender tu tema con variables custom
    },
  },
  plugins: [],
}
