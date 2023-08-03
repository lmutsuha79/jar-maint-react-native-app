/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#285482",
        "main-blue-light": "#28548250",
        "main-yellow": "#f4cc25",
        "main-dark": "#181818",
      },
    },
  },
  plugins: [],
};
