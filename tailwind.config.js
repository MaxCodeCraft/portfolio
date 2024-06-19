/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        digitalix: ["Digitalix", "sans-serif"],
        goodtimes: ["GoodTimes", "sans-serif"],
      },
      colors: {
        gallifreyanGold: "#FFD700",
        tardisOrange: "#FF8C00",
        tardisBlue: "#003B73",
        spatialGrey: "#242627",
      },
    },
  },
  plugins: [],
};
