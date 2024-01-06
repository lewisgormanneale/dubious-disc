/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        byzantium: "#702f63 ",
        old_mauve: "#522248",
        male: "#6890cb",
        female: "#f15d69",
        genderless: "#4fc337",
        hp: "#fd0000",
        attack: "#f2802e",
        defense: "#f8d030",
        special_attack: "#6890eb",
        special_defense: "#75c853",
        speed: "#f6588b",
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
