const { defineConfig } = require("cypress");

module.exports = defineConfig({
  browser: {
    userAgent:
      "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
  },
  e2e: {
    baseUrl: "http://localhost:3001/",
    specPattern: "**/*.test.js",
    fixturesFolder: "fixtures",
    supportFile: false,
  },
});
