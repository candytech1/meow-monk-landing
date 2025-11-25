/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'monk-saffron': '#FF9933',
        'monk-cream': '#FFF8E7',
        'temple-red': '#D97777',
      },
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

