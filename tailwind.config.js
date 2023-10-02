/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {},
    screens: {
      sm: "480px",
      md: "768px",
    }},
  plugins: [],
}