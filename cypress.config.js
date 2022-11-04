const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001/",
    specPattern: "test/e2e/**/*.test.js",
    fixturesFolder: "test/e2e/fixtures",
    supportFile: "test/e2e/support/index.js",
  },
});
