/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards",
      },

      backgroundSize: {
        bgSize: "70px 70px",
      },

      backgroundImage: {
        gridBg:
          "linear-gradient(to right, #fafafa 1px, transparent 1px), linear-gradient(to bottom, #fafafa 1px, transparent 1px)",
        gridBgDark:
          "linear-gradient(to right, #33333346 1px, transparent 1px), linear-gradient(to bottom, #33333346 1px, transparent 1px)",
      },

      colors: {
        secondary: "#15161c",
        light: {
          background: "#ffffff",
          foreground: "#171717",
        },
        dark: {
          background: "#000000",
          foreground: "#ededed",
        },
      },
      scrollBehavior: ["smooth"],
    },
  },
  plugins: [require("tailwindcss-motion")],
};
