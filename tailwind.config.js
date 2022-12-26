/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#F5F5F5",
        blue: {
          50: "#0000DC",
          100: "#2F327D",
          200: "rgba(0, 0, 254, 0.03)",
          300: "#2F327D",
          400: "#F2F2FF",
        },
        red: {
          50: "#FF0000",
          100: "#190ED7",
        },
        black: {
          100: "#121212",
        },
        grey: {
          50: "",
        },
      },
      boxShadow: {
        custom1: "0px 10px 60px rgba(38, 45, 118, 0.08)",
      },
    },
  },
  plugins: [],
};
