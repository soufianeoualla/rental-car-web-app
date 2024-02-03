/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'dark': '#161d03',
      'blue': '#3A80F4',
      'gray-off': '#F3F3F3',
      'gray': '#8D919F',
      'white': '#ffffff',
      'green':'#03C988',
      'red':'#FF014D'
      
    },
    borderRadius: {
      'sm':'8px',
      'md':'12px',
      'lg':'20px',
      'xl':'30px',
      '2xl':'35px',
      'full':'50%'

    },

    screens: {
    
      'xl': {'max': '1242px'},
      // => @media (max-width: 1242px) { ... }

     

      'md': {'max': '801px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'xs': {'max': '532px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}