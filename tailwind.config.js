/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cerezo: {
          primary: "#f9d2db",
          secondary: "#450c23",
          light: "#FAD6D6",
          dark: "#9C252F",
        },
        "cerezo-gradient": {
          50: "#fcf5f4",
          100: "#fae8e6",
          200: "#f6d5d2",
          300: "#efb7b2",
          400: "#e48d85",
        },
      },
    },
  },
  plugins: [],
};
