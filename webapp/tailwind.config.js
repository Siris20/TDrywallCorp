/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Tu paleta real de TDrywall Corp
        "td-dark": "#132826",       // El fondo oscuro profundo de la captura
        "td-green": "#5DE619",      // El verde neón de "Contractor" y botones
        "td-white": "#F8F6F6",      // El blanco hueso para texto y superficies claras

        // Mantengo los de servicios por si la IA los inyectó en el contenido
        "srv-primary": "#006c49",
        "srv-accent": "#10b981",
        "srv-blue": "#0058be",

        "accent-lime": "#5DE619",

      },
      fontFamily: {
        // Establecemos Public Sans como la principal de diseño
        "sans": ["Public Sans", "sans-serif"],
        "display": ["Public Sans", "sans-serif"],
        "headline": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
      },
      borderRadius: {
        'xl': '20px', // El radio mandatory de tu Design System
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}