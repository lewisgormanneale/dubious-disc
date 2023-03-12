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
        normaldarker: "#848471",
        fighting: "#BB5544",
        fightingdarker: "#903a2b",
        flying: "#8899FF",
        flyingdarker: "#475ee8",
        poison: "#AA5599",
        poisondarker: "#822b74",
        ground: "#DDBB55",
        grounddarker: "#b69532",
        rock: "#BBAA66",
        rockdarker: "#958453",
        bug: "#AABB22",
        bugdarker: "#82900e",
        ghost: "#6666BB",
        ghostdarker: "#484890",
        steel: "#AAAABB",
        steeldarker: "#7f7f94",
        fire: "#FF4422",
        firedarker: "#ca2b0e",
        water: "#3399FF",
        waterdarker: "#1174d7",
        grass: "#77CC55",
        grassdarker: "#579F3A",
        electric: "#FFCC33",
        electricdarker: "#d7a511",
        psychic: "#FF5599",
        psychicdarker: "#ea1a6d",
        ice: "#66CCFF",
        icedarker: "#29a9ea",
        dragon: "#8C7DF1",
        dragondarker: "#5643d7",
        dark: "#775544",
        darkdarker: "#573a2b",
        fairy: "#EE99EE",
        fairydarker: "#d15ed1",
        unknown: "grey",
        unknowndarker: "darkgrey",
        shadow: "black",
        shadowdarker: "black",
      },
      fontSize: {
        xxs: "0.6rem",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  safelist: [
    "bg-normal",
    "bg-normaldarker",
    "bg-fighting",
    "bg-fightingdarker",
    "bg-flying",
    "bg-flyingdarker",
    "bg-poison",
    "bg-poisondarker",
    "bg-ground",
    "bg-grounddarker",
    "bg-rock",
    "bg-rockdarker",
    "bg-bug",
    "bg-bugdarker",
    "bg-ghost",
    "bg-ghostdarker",
    "bg-steel",
    "bg-steeldarker",
    "bg-fire",
    "bg-firedarker",
    "bg-water",
    "bg-waterdarker",
    "bg-grass",
    "bg-grassdarker",
    "bg-electric",
    "bg-electricdarker",
    "bg-psychic",
    "bg-psychicdarker",
    "bg-ice",
    "bg-icedarker",
    "bg-dragon",
    "bg-dragondarker",
    "bg-dark",
    "bg-darkdarker",
    "bg-fairy",
    "bg-fairydarker",
    "bg-unknown",
    "bg-unknowndarker",
    "bg-shadow",
    "bg-shadowdarker",
  ],
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
