/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        bounceOnce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15%)" },
        },
      },
      animation: {
        "bounce-once": "bounceOnce 0.6s ease",
      },
    },
  },
  plugins: [],
};
