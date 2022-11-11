/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [require("daisyui")],

  theme: {
    extend: {
      colors: {
        // 'button-blue': '#539a4d'
      }
    }
  },

  daisyui: {
    themes: false,
  }
}
