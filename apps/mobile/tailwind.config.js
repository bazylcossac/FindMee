/** @type {import('tailwindcss').Config} */
const { nativewind } = require("nativewind/preset");
export default {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [nativewind],
  theme: {
    extend: {},
  },
  plugins: [],
};
