/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      'mobile': {'min': '320px', 'max': '425px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'tablet': {'min': '426px', 'max': '767px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }
      'laptop': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'laptop1': {'min': '1024px', 'max': '1440px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // 'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

