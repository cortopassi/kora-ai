/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sites/**/*.html',
    './sites/**/*.{ts,tsx}',
    './cases/**/*.html',
    './cases/**/*.{ts,tsx}',
    './atuacoes/**/*.html',
    './atuacoes/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0A1526',       // Navy profundo
          surface: '#0F1E33',  // Navy dos cards
          surfaceHighlight: '#16283F', // Hover
          primary: '#2F6BFF',  // Azul de acao
          accent: '#DCE8FF',   // Azul claro
          border: '#1E3350',   // Borda sutil
          text: '#F1F5F9',     // Texto principal
          muted: '#8FA5C0',    // Texto secundario
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        display: ['Bricolage Grotesque', 'sans-serif'],
        serifdemo: ['Fraunces', 'serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        section: '120px',
      },
      borderRadius: {
        brand: '24px',
        pill: '9999px',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        scroll: 'scroll 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
