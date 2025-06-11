/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01bf71",
        dark: "#010606",
        darkBg: "#0d0d0d",
        footer: "#101522"
      }
    },
  },
  plugins: [],
}