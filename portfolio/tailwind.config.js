/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        salmon: "salmon",
        "black-rgba": "rgba(0, 0, 0, 0.54)",
      },
    },
  },
  plugins: [],
};
