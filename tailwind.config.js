const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '980px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1024px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1135px',
        // => @media (min-width: 1536px) { ... }
      }
    },
    colors: {
      cyan: "#2376B2",
      blue: "#0B1670",
      sky: "#DCF0FF",
      pink: "#B22345",
      gray: "#C2CFD9",
      textGray: "#648CA9",
      white: colors.white
    },
    fontFamily: {
      sans: ['PT Sans']
    }
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  }
}