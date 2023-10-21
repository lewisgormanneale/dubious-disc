module.exports = {
  preset: "jest-preset-angular",
  modulePathIgnorePatterns: ["<rootDir>/tests", "<rootDir>/tests-examples"],
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
};
