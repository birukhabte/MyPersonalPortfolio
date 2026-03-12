/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E2433',
        primary: {
          DEFAULT: '#D4A373',
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#D4A373',
          500: '#D4A373',
          600: '#B8956A',
          700: '#9C8761',
          800: '#807958',
          900: '#0A065D',
        },
        secondary: '#6E8391',
        accent: '#D4A373',
        text: '#F5E9E2',
        cream: '#F5E9E2',
        golden: '#D4A373',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



