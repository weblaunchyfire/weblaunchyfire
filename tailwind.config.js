/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        base:    "#ffffff",
        surface: "#f7f8fc",
        card:    "#ffffff",
        ink:     "#0f1120",
        muted:   "#8891b4",
        subtle:  "#4a5177",
        accent:  "#5b5ef4",
        "accent-2": "#7c6ff7",
        border:  "rgba(17,24,60,0.08)",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "Arial", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
      boxShadow: {
        card:   "0 2px 16px rgba(17,24,60,0.07)",
        "card-lg": "0 8px 48px rgba(17,24,60,0.12)",
        glow:   "0 4px 20px rgba(91,94,244,0.28)",
        "glow-lg": "0 8px 32px rgba(91,94,244,0.4)",
      },
    },
  },
  plugins: [],
};
