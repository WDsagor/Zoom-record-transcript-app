/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    daisyui: {
      themes: false,
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
