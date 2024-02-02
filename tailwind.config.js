/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F1D204'
      },
      fontFamily: {
        'main': ['UpheavalPro', 'sans-serif']
      },
      container: {
        padding: {
          DEFAULT: '1.25rem',
          sm: '2.5rem',
          lg: '7.5rem',
          xl: '8.75rem',
        }
      }
    },
  },
  plugins: [],
}
