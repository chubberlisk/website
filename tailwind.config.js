module.exports = {
  purge: ["./src/components/**/*.js", "./pages/**/*.js"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "wtw-yellow": "#eac435",
    }),
    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {},
  plugins: [],
};
