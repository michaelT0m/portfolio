/** @type {import('tailwindcss').Config} */
module.exports = {
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
        gridBg: "linear-gradient(to right, #33333346 1px, transparent 1px), linear-gradient(to bottom, #33333346 1px, transparent 1px)"
      },

      colors: {
        light: {
          background: "#ffffff",
          foreground: "#171717",
        },
        dark: {
          background: "#000000",
          foreground: "#ededed",
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
