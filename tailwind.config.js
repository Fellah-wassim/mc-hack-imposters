/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",
      },
      fontFamily: {
        serif: ["'Merriweather'", "sans-serif"],
        sans: ["'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
