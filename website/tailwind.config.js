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
        Volkhov: ['Volkhov', 'serif']
      },
      colors: {
        black: 'black',
        darkOrange: '#DF6951',
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

