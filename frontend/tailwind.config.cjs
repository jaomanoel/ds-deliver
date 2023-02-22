/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(0, 235px))",
        "auto-fill": "repeat(auto-fill, minmax(0, 235px))"
      },
    },
  },
  plugins: [],
}