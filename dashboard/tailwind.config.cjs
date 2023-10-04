/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xsm': {'max': '440px'},
      'md': {'min': '768px'},
    },
  },
  plugins: [],
}
