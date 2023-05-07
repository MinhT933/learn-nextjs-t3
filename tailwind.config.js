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
    },
  },
  plugins: [],
};
