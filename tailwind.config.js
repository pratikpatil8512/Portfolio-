/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#22f7fc",
          purple: "#a855f7",
          pink: "#ec4899",
        }
      },
  dropShadow: {
    glow: "0 0 6px rgba(56, 189, 248, 0.6)", // cyan glow
  },
  animation: {
    blob: "blob 15s infinite",
  },
  keyframes: {
    blob: {
      "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
      "33%": { transform: "translate(30px, -50px) scale(1.1)" },
      "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
    },
  },
}
,
  },
  plugins: [],
}

