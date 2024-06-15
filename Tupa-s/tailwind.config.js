/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        "Fundo" : "#FFF8E9",
        "Vinho" : "#380012"
      },

      backgroundImage: {
        'Logo': "url('public/Logo.png')",
        'FundoLogin': "url('public/FundoLogin.png')",
      },



    },
  },
  plugins: [],
}