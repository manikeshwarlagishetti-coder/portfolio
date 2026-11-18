/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060a12',
          900: '#0a0f1d',
          850: '#0e162a',
          800: '#141e38',
          750: '#1a2646',
          700: '#23325c',
        },
        gold: {
          50: '#fdfbf7',
          100: '#f9f3e3',
          200: '#f2e4c2',
          300: '#e9d19a',
          400: '#dfba67',
          500: '#d4af37', // Champagne gold primary
          600: '#b89228',
          700: '#916f1a',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 40px -5px rgba(212, 175, 55, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(2, 6, 23, 0.7)',
      }
    },
  },
  plugins: [],
}
