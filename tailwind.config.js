/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#31333F",
        light: "#2B99D4",
        lighter: "#5EBF40",
      },
      fontFamily: {
        poppins: ["Poppins", "sans"],
        lato: ["Lato", "sans"],
      },
    },
  },
  plugins: [],
};
