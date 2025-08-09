/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        swz: {
          yellow: "#FFD400",
          black: "#0B0B0B",
          off: "#F7F7F7",
          gray: "#9CA3AF"
        }
      },
      borderRadius: {
        md: "10px"
      }
    },
  },
  plugins: [],
}
