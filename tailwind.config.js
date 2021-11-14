const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        "wtw-yellow": "#eac435",
        "wtw-orange": "#e46f06",
        "wtw-black": "#121212",
        "wtw-white": "#F3F4F6",
        "made-tech": "#40c842",
      },
    },
  },
  variants: {},
  plugins: [],
};
