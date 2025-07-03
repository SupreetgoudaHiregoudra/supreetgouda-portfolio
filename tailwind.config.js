/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      height: {
    'screen-minus-nav': 'calc(100vh - 4rem)', // if your navbar is 4rem
  },
    },
  },
  plugins: [],
}
