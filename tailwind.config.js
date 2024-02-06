/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "15": "60px",
      },
      colors: {
        'primary': '#F1D204'
      },
      fontSize: {
        'h1-desktop': '100px',
        'h1-mobile': '52px',
        'h2-desktop': '32px',
        'h2-mobile': '26px',
        'h3-desktop': '24px',
        'h3-mobile': '20px',
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
      },
      backgroundImage: {
        'intro-background': "url('/assets/background.png')",
      },
    },
  },
  plugins: [],
}
