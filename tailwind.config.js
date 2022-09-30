const plugin = require('tailwindcss/plugin')

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir'],
        spacemono: ['Space Mono'],
        montserrat: ['Montserrat']
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      addVariant('rtl', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.rtl .${e(`rtl${separator}${className}`)}`
        },
          {
            variants: ['responsive'],
          })
      })
    }),
  ],
}
