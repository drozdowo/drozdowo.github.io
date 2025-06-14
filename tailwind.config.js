/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matrix: {
          primary: '#00FF44',
          secondary: '#00AA33', 
          tertiary: '#00CC55',
          dark: '#000000',
          panel: 'rgba(0, 0, 0, 0.85)',
        }
      },
      textShadow: {
        'matrix-glow': '0 0 10px rgba(0, 255, 68, 0.5)',
        'matrix-glow-sm': '0 0 5px rgba(0, 255, 68, 0.3)',
        'matrix-glow-xs': '0 0 3px rgba(0, 255, 68, 0.2)',
      },
      boxShadow: {
        'matrix': '0 0 20px rgba(0, 255, 68, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-matrix-glow': {
          textShadow: '0 0 10px rgba(0, 255, 68, 0.5)',
        },
        '.text-shadow-matrix-glow-sm': {
          textShadow: '0 0 5px rgba(0, 255, 68, 0.3)',
        },
        '.text-shadow-matrix-glow-xs': {
          textShadow: '0 0 3px rgba(0, 255, 68, 0.2)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
