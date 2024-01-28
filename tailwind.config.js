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
    },
  },
  plugins: [],
}
