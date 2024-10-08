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
        yellowToOrange: "linear-gradient(to right, #ffd700, #ff8c00)",
        orangeToYellow: "linear-gradient(to left, #ffd700, #ff8c00)",
      },
      fontFamily: {
        digitalix: ["Digitalix", "sans-serif"],
        goodtimes: ["GoodTimes", "sans-serif"],
      },
      colors: {
        gallifreyanGold: "#FFD700",
        tardisOrange: "#FF8C00",
        tardisBlue: "#003262",
        spatialGrey: "#1A1C1C",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "FFD700",
          "base-100": "#242627",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
