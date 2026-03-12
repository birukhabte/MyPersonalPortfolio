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
          DEFAULT: '#3E5566',
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#3E5566',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0E2433',
        },
        secondary: '#6E8391',
        accent: '#B7A999',
        text: '#F4F2EC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



