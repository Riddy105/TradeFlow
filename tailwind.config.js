/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#F5F5F5",
        blue: {
          50: "#1245A8",
          100: "#2F327D",
          200: "rgba(0, 0, 254, 0.03)",
          300: "#2F327D",
          400: "#F2F2FF",
          500: "#ADC8E6",
        },
        red: {
          50: "#FF0000",
          100: "#190ED7",
        },
        black: {
          100: "#121212",
        },
        grey: {
          50: "#646569",
          100: "#03292d",
        },
      },
      boxShadow: {
        custom1: "0px 10px 60px rgba(38, 45, 118, 0.08)",
      },
      fontFamily: {
        custom: "Raleway",
      },
      backgroundImage: {
        map: "url('/src/assets/images/Africa-map.png')",
        franchising:
          'linear-gradient( to bottom, transparent 0%, black 100% ), url("/src/assets/images/franchising.jpg")',
        licensing:
          'linear-gradient( to bottom, transparent 0%, black 100% ), url("/src/assets/images/licensing.jpg")',
        distributorship:
          'linear-gradient( to bottom, transparent 0%, black 100% ), url("/src/assets/images/distributorship.jpg")',
        partnership:
          'linear-gradient( to bottom, transparent 0%, black 100% ), url("/src/assets/images/Partnership.jpg")',
        agent:
          'linear-gradient( to bottom, transparent 0%, black 100% ), url("/src/assets/images/Agent Network.jpg")',
      },
    },
  },
  plugins: [],
};
