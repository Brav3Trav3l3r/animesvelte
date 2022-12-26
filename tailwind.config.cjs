/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      aspectRatio: {
        '3/4': ' 3/4',
      }
    },
    fontFamily:{
      sans:['Lexend', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
};