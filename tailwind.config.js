/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 11px 35px 2px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
};
