/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // If you want to define custom colors, do it here
      colors: {
        'neutral-30': '#CBD5E1', // example
      },
    },
  },
  plugins: [],
};
