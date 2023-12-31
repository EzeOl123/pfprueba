/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      fondo: "#0D1729",
      spotify: "#1DB954",
    },
    extend: {
      zIndex: {
        9999: "9999",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
    fontFamily: {
      bebas: ["Bebas Neue", "cursive"],
    },
  },
  plugins: [],
};
