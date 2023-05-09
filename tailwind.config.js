/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/componets/*.{js,ts,jsx,tsx",
  ],
  theme: {
    extend: {
      spacing: {
        18: "4.5rem",
      },
      transitionDelay: {
        2000: "4000ms",
      },
      animation: {
        tilt: "tilt 10s infinite linear ",
        fullSpin: "fullSpin 4s infinite linear ",
      },
      keyframes: {
        tilt: {
          "0%,50%,100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(5deg)",
          },
          "75%": {
            transform: "rotate(-5deg)",
          },
        },
        fullSpin: {
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [],
};
