/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['"Kanit"', "sans-serif"],
        // Add more custom font families as needed
      },
      colors: {
        baseColor: "#161618",
      },
    },
  },
  plugins: [],
};
