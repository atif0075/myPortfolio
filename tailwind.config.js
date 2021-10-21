const colors = require("tailwindcss/colors");
module.exports = {
  purge: [],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
