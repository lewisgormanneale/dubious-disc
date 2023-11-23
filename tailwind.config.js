/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        shaymin: "#30c767",
        shaymin_darker: "#2bae5a",
        male: "#6890cb",
        female: "#f15d69",
        genderless: "#4fc337",
        gracidea: "#ff5c74",
        hp: "#fd0000",
        attack: "#f2802e",
        defense: "#f8d030",
        "special-attack": "#6890eb",
        "special-defense": "#75c853",
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
  plugins: [],
};
