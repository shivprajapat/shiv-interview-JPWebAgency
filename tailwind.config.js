/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "14px",
      },
      colors: {
        primary: "#F78F42",
        success: "#41C55D",
        white: "#FFFFFF",
        error: "#DE634C",
        dark: {
          primary: "#374152",
        },
        secondary: {
          100: "#E59238",
        },
      },
    },
  },
  plugins: [],
};
