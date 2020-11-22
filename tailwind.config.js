const plugin = require('tailwindcss/plugin')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
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
