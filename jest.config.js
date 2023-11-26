module.exports = {
  preset: "jest-preset-angular",
  modulePathIgnorePatterns: ["<rootDir>/playwright"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};

// Only run setup-jest.ts if we are running ng test
if (!process.argv.some((item) => item.includes("ng"))) {
  module.exports.setupFilesAfterEnv = ["<rootDir>/setup-jest.ts"];
}
