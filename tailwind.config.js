/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit","sans-serif"],
        Ovo: ["Ovo", "serif"],
        Cursive: ["Cedarville Cursive","serif"]
      },
      colors: {
        primary: '#0ea5e9',
        primaryDull: '#0c4a6e',
      },
    },
  },
  plugins: [],
}