const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://wentingwang.co.uk/",
    specPattern: "**/*.test.js",
    fixturesFolder: "fixtures",
    supportFile: false,
  },
});
