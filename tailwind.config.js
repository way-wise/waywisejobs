/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ["Rajdhani", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "960px",
          xl: "1172px",
        },
      },
    },
  },
  plugins: [],
};
