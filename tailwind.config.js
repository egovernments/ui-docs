const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      'indigo-lighter': '#b3bcf5',
      'indigo': '#5c6ac4',
      'indigo-dark': '#202e78',
      'nav' : '#0B0C0C',
      'border_color': '#D6D5D4',
      'placeholder_color': '#B1B4B6',
      'banner_bg': '#0B4B66',
      'white' : '#FFFFFF',
      'border' : '#F47738',
      'input_border' : '#505A5F',
      'text_input_code' : '#0B4B66',
      'codebg' : "#FAFAFA",
      'card_button_bg' : "#EEEEEE",
      'error_message_bg' : "#efc7c1",
      'panel_success' : "#00703C",
      'panel_error' : "#D4351C"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

