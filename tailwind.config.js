/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Test Founders Grotesk X-Cond SmBd"', 'sans-serif'],
        custom2:['"Neue Montreal"','sans-serif'],
      },
    },
  },
  plugins: [],
}