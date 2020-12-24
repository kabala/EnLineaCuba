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
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  }
}