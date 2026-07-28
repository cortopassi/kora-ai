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
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050505',       // Matte Black
          surface: '#0F0F0F',  // Dark Grey for cards
          surfaceHighlight: '#1A1A1A', // Lighter grey for hovers
          primary: '#2952FF',  // Digital Blue (Vibrant)
          accent: '#E0E7FF',   // Soft White/Blue
          border: '#262626',   // Subtle border
          text: '#F3F4F6',     // High contrast text
          muted: '#A1A1AA',    // Zinc 400
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
