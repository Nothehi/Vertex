const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazir'],
        spacemono: ['Space Mono'],
        montserrat: ['Montserrat']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant, e }) {
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
