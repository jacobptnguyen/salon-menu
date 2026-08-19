/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FDFBF9",
        surface: "#FFFFFF",
        red: "#E8949A",
        "red-soft": "#F5D4D7",
        green: "#A8BFA0",
        "green-soft": "#DCE6D8",
      },
      boxShadow: {
        card: "0 4px 16px rgba(46, 42, 40, 0.08)",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
      },
    },
  },
  plugins: [],
};
