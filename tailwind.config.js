/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 11px 35px 2px rgba(0, 0, 0, 0.14)",
      },
      colors: {
        "custom-gray": "rgba(0, 0, 0, 0.02)",
        "dark-gray": "rgba(136, 126, 126, 0.04)",
        "soft-pink": "rgba(255, 247, 247, 0.299)",
        "light-black": "rgba(0, 0, 0, 0.18)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
