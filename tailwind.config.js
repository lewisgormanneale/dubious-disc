/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        shaymin: "#30c767",
        male: "#6890cb",
        female: "#f15d69",
        genderless: "#4fc337",
        gracidea: "#ff5c74",
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
