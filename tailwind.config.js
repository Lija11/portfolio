/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c5d0de",
        secondary: "#0080ff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif;"],
      },
    },
  },
  plugins: [],
};
