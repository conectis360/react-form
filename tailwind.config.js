/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Permite alternar o tema manualmente com classes
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purplePrimary: "#6b46c1",
        purpleDark: "#553c9a",
        purpleLight: "#9f7aea",
      },
    },
  },
  plugins: [],
};
