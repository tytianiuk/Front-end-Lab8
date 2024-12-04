/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
        mvboli: ['MV Boli', 'sans-serif'],
      },
    },
    screens: {
      mini: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
