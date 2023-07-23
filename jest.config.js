module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!**/test/smoke/**",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
    "flags/(.*)": "<rootDir>/__mocks__/flagsMock.js",
    "^@/content/(.*)$": "<rootDir>/content/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/formatters/(.*)$": "<rootDir>/src/formatters/$1",
    "^@/gateways/(.*)$": "<rootDir>/src/gateways/$1",
    "^@/useCases/(.*)$": "<rootDir>/src/useCases/$1",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/test/smoke/",
  ],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
};
