/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      keyframes: {
        popIn: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInTopRight: {
          '0%': { transform: 'translate(100%, -100%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.2)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'slideInLeft': 'slideInLeft 1s ease-out',
        'pop-in': 'popIn 1.0s ease-in-out',
        'zoomIn': 'zoomIn 1.5s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in-top': 'slideInTop 1.0s ease-out',
        'slide-in-top-right': 'slideInTopRight 1.5s ease-out',
        'slideInTop': 'slideInTop 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
}
