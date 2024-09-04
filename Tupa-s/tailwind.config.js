/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
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
        'Logo': "url('/Logo.png')",
        'Fundo': "url('/FundoLogin.png')",
      },



    },
  },
  plugins: [],
}