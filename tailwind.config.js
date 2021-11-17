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
      height: (theme) => ({
        "screen-10": "10vh",
        "screen-20": "20vh",
        "screen-30": "30vh",
        "screen-40": "40vh",
        "screen-50": "50vh",
        "screen-60": "60vh",
        "screen-70": "70vh",
        "screen-80": "80vh",
        "screen-90": "90vh",
      }),
    },
  },
  variants: {},
  plugins: [],
};
