// apps/web/tailwind.config.js
const { join } = require("path");

module.exports = {
  content: [
    join(__dirname, "app/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "components/**/*.{js,ts,jsx,tsx}"),
    join(__dirname, "../../packages/ui/**/*.{js,ts,jsx,tsx}"),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
