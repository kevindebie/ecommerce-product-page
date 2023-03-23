/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    'index.html',
    'src/*.js'
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'orange': '#ff7d1a',
        'lightorange': '#ffede0',
        'midnight': '#1d2025',
        'grayblue': '#68707d',
        'gray': '#b6bcc8',
        'lightgray': '#f7f8fd',
      },
    },
  },
  plugins: [],
}