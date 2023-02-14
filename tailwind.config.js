/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        cobalt_coastlands: "url('../public/cobalt-coastlands.png')",
      },
      colors: {
        /* type colours */
        normal: "#AAAA99",
        fighting: "#BB5544",
        flying: "#8899FF",
        poison: "#AA5599",
        ground: "#DDBB55",
        rock: "#BBAA66",
        bug: "#AABB22",
        ghost: "#6666BB",
        steel: "#AAAABB",
        fire: "#FF4422",
        water: "#3399FF",
        grass: "#77CC55",
        electric: "#FFCC33",
        psychic: "#FF5599",
        ice: "#66CCFF",
        dragon: "#8C7DF1",
        dark: "#775544",
        fairy: "#EE99EE",
        unknown: "grey",
        shadow: "black",
      },
      fontSize: {
        xxs: "0.6rem",
      },
    },
  },
  plugins: [],
};
