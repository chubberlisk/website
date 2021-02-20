const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV != "production",
  },
  future: {
    webpack5: true
  }
});
