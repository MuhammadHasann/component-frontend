/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FFEB36",
        primaryHover: "#ca8a04",
        primaryOpacity: "#FFEB3621",
        paragraph: "#64748b",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
      width: {
        86: "344px",
      },
    },
  },
  plugins: [],
};
