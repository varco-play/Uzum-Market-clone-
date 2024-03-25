/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
      colors: {
        purple: "#7000ff",
        lightPurple: "#7913ff",
        catalog: "#f0f0ff",
        buttonHoverPurple: "#d7d6ff",
        gray: "#f2f4f7",
        transparent: "rgba(14, 14, 15, 0.51)",
        white: "white",
        inputColor: "#1f2026",
        grayCategoryUnder: "#595b66",
        darkGray: "rgba(54,54,64,.2)",
        textGray: "#8b8e99"
      },
      screens: {
        ph: "550px",
        1292: "1292px",
        880: "880px",
      },
      fontFamily: {
        logo: ["Ubuntu", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        bottom: "0px 40px 40px rgba(0, 0, 0, 0.25)",
      },
      padding: {
        navInput: "0 calc(15% + 38px) 0 16px",
        auto: "auto",
      },
      borderRadius: {
        custom: "0 4px 4px 0",
      },
      borderColor: {
        custom: "rgba(54, 54, 64, .2)",
      },
      width: {
        calc: "calc(100% - 48px)",
      },
    },
  },
  plugins: [],
};
