/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      aspectRatio: {
        '3/4': ' 3/4',
      },
      fontFamily:{
        sans:['Lexend', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },

  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@vidstack/player/tailwind.cjs'),
    require('tailwind-scrollbar-hide')
  ]
};