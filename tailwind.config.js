/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        sm: ["0.875rem", "1.154rem"],
        base: ["1rem", "1.6rem"],
        lg: ["1.125rem", "1.5rem"],
        xl: "2.5rem",
      },

      colors: {
        "custom-black-100": "#383854",
        "custom-black-200": "#2E2E48",
        "custom-blue-100": "#475BE8",
        "custom-white-100": "#F3F3F3",
      },
    },
  },

  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
}
