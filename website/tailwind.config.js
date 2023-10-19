/** @type {import('tailwindcss').Config} */
// @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,600&family=Montserrat&family=Volkhov:wght@700&display=swap');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Volkhov: ['Volkhov', 'serif'],
        DancingScript: ['Dancing Script', 'cursive'],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ['Poppins', 'sans-serif']
      },
      borderRadius: {
        sm: '5px',
        md: '10px',
        lg: '15px',
        xl: '20px',

      },
      boxShadow: {
        cardShadowGray: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        cardShadowOrange: 'rgba(255, 83, 0, 0.7) 0px 0px 0.25em, rgba(255, 83, 0, 0.2) 0px 0.25em 1em',
      },
      backgroundImage: {
        buttonGradient: 'linear-gradient(90deg, rgba(255,186,10,1) 0%, rgba(249,149,22,1) 50%, rgba(243,113,33,1) 100%)',
      },
      backgroundColor: {
        lightGray: '#515151',
        orangishYellow: '#FEB30D',
      },
      colors: {
        colorGradient: 'linear-gradient(90deg, rgba(255,186,10,1) 0%, rgba(249,149,22,1) 50%, rgba(243,113,33,1) 100%)',
        black: 'black',
        darkOrange: '#FF5300',
        lightGray: '#515151',
        orangishYellow: '#FEB30D',
        starColor: '#D3D3D3',
      },
      fontSize: {
        sm: '16px',
        lg: '20px',
        xl: '24px',
        xxl: '50px',
        "3xl": '84px'
      },
      screens: {
        xsm: "360px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        "2xl": "1440px",
        "3xl": "1990px",
      },

    },
  },
  plugins: [],
}

