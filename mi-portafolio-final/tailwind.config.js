// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Para escanear el HTML principal de Vite
    "./src/**/*.{js,ts,jsx,tsx}", // Para escanear todos los archivos JS, TS, JSX, TSX en src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}