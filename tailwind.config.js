/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {
      colors: {
        'primary-dark-green': '#2A451D',
        'primary-dark-purple': '#451D43',
        'secondary-light-green': '#678559',
        'secondary-light-purple': '#9A7498',
        'accent-neutral-green': '#B4C4AD',
        'accent-lighter-green': '#6FFF00',
      },
    },
  },
  plugins: [],
}

