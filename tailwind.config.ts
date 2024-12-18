import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F8E91',
        // You can also add different shades of your primary color if needed
        'primary-light': '#13AAAE',
        'primary-dark': '#0C7477',
      }
    },
  },
  plugins: [],
} satisfies Config;
