/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FBEAEB",
        secondary: "#2F3C7E",
        third: "#A4B88F",
         nilla:"#00bef2",
        darknilla:"#002970",
        lightcolor:"#f5f5f5",
        lightnilla:"#00afe3",
        lightdarknilla:"#0f4a8a",
        bgcolor:"#f5f7fa",
      },
    },
  },
  plugins: [],
};
