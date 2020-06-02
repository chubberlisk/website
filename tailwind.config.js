module.exports = {
  purge: ["./src/components/**/*.js", "./src/pages/**/*.js"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "wtw-yellow": "#eac435",
      "wtw-dark-grey": "#343a40",
      "wtw-turquoise": "#17a2b8",
    }),
    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {},
  plugins: [],
};
