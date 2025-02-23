/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc6fc',
          400: '#36a7f8',
          500: '#0c87eb',
          600: '#0066cc',
          700: '#0054a6',
          800: '#004688',
          900: '#003972',
        },
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'scroll': 'scroll 20s linear infinite',
        'gradient': 'gradient 4s linear infinite',
      },
    },
  },
  plugins: [],
};