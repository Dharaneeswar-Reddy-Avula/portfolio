/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Add all files with JS, JSX, TS, TSX extensions
  ],
  theme: {
    extend: {
      backgroundImage: {
        'steel-gradient': 'linear-gradient(135deg, #434343, #3a3a3a, #888888)',
      },
    },
  },
  plugins: [],
};
