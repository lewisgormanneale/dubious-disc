module.exports = {
  preset: "jest-preset-angular",
  modulePathIgnorePatterns: ["<rootDir>/tests", "<rootDir>/tests-examples"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};
