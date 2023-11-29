/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-blue": "#00043c",
        "yellow": "	#fdbe34",
        "white": "#fff",
        "light-white": "#f5f5f5",
        "gray": "#808080"
      }
    },
  },
  plugins: [],
}