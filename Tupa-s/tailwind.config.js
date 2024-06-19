/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        "color_bg" : "#FFF8E9",
        "color_vinho" : "#380012",
        "colortxt_preto": "#2B2B2B",
        "colortxt_white": "#ffffff",
        "color_bege": "#DCCEB2",
        "color_verde": "#002500",
      },

      backgroundImage: {
        'Logo': "url('public/Logo.png')",
        'Fundo': "url('.//public/FundoLogin.png')",
        'Home' : "url('public/TelaFundoHome.png')"
      },



    },
  },
  plugins: [],
}