const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#59C19B", // Green
        secondary: "#FFA048", // Orange
        accent: "#FFE222", // Yellow
        light: "#F5F5F5", // Light Gray
        dark: "#020202", // Black
      },
    },
  },
  plugins: [],
});
