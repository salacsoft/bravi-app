module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'winter-white': "#EFFFFB",
        'winter-green': "#50D890",
        'winter-blue': "#4F98CA",
        'winter-black': "#272727"
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
