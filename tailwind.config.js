/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        primaryGreen: "#74F06B",
        accentGray: "#959595",
        accentBlack: "rgb(15, 15, 15)",
        cardBg: "#191919",
        cardBorder: "#2B2B2B",
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Fira Sans", "sans-serif"],
      },
      backgroundImage: {
        mainBg: "url('https://res.cloudinary.com/db1nlq5lv/image/upload/v1663166366/mainBg_n6739y.webp')",
        cardGradient: "linear-gradient(135deg, rgba(25, 25, 25, 0.4), rgba(30, 30, 30, 0.4))",
        preloaderBefore: "linear-gradient(180deg, rgba(5, 5, 5, 0.5) 20%, rgba(0,0,0,0) 40%)",
        preloaderAfter: "linear-gradient(360deg, rgba(5, 5, 5, 0.5) 10%, rgba(0,0,0,0) 30%)"
      },
      backgroundPosition: {
        "right": "80%",
      },
      borderRadius: {
        "2rem": "2rem",
        "5rem": "5rem"
      },
      screens: {
        "short": { 'raw': '(max-height: 680px) and (min-width: 976px)' },
      }
    },
  },
  plugins: [],
}