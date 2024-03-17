const { Primary } = require("@storybook/blocks");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        light_primary: "#f5f5f5",
        light_secondary: "#e5e5e5",
        light_tertiary: "#d5d5d5",
        dark_primary: "#18181b",
        dark_secondary: "#09090b",
        dark_tertiary: "#3a3a3a",
        porygon_blue: "#4b839c",
        porygon_blue_darker: "#4a849f",
        porygon_red: "#ae495b",
        porygon_red_darker: "#b04a5e",
        disc: "#3f8eca",
        disc_darker: "#522248",
        male: "#6890cb",
        female: "#f15d69",
        genderless: "#4fc337",
        hp: "#fd0000",
        attack: "#f2802e",
        defense: "#f8d030",
        special_attack: "#6890eb",
        special_defense: "#75c853",
        speed: "#f6588b",
        good_stat: "#94D710",
        medium_stat: "#F7D343",
        bad_stat: "#F3790F",
      },
    },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      "sans-light": ["Noto Sans Light", "sans-serif"],
      "sans-semi-bold": ["Noto Sans Semi-Bold", "sans-serif"],
      "sans-bold": ["Noto Sans Bold", "sans-serif"],
      serif: ["serif"],
      righteous: ["Righteous", "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
