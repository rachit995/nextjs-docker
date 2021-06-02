const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-1': {
          DEFAULT: '#377DFF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#D0E0FF',
          '300': '#9DBFFF',
          '400': '#6A9EFF',
          '500': '#377DFF',
          '600': '#045CFF',
          '700': '#0049D0',
          '800': '#00379D',
          '900': '#00256A'
        },
        'secondary-1': {
          DEFAULT: '#EBF2FF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#EBF2FF',
          '600': '#B8D1FF',
          '700': '#85B0FF',
          '800': '#528FFF',
          '900': '#1F6DFF'
        },
        'primary-2': {
          DEFAULT: '#38CB89',
          '50': '#EEFBF5',
          '100': '#DAF5E9',
          '200': '#B1EBD1',
          '300': '#89E0B9',
          '400': '#60D6A1',
          '500': '#38CB89',
          '600': '#2BA56E',
          '700': '#217C53',
          '800': '#165438',
          '900': '#0B2C1D'
        },
        'secondary-2': {
          DEFAULT: '#E5F6EF',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#E5F6EF',
          '600': '#BFE9D8',
          '700': '#99DCC0',
          '800': '#73CFA9',
          '900': '#4DC292'
        },
        'primary-3': {
          DEFAULT: '#FFAB00',
          '50': '#FFF7E5',
          '100': '#FFEECC',
          '200': '#FFDD99',
          '300': '#FFCD66',
          '400': '#FFBC33',
          '500': '#FFAB00',
          '600': '#CC8900',
          '700': '#996700',
          '800': '#664400',
          '900': '#332200'
        },
        'secondary-3': {
          DEFAULT: '#FDF4E0',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#FDF4E0',
          '600': '#FAE3B0',
          '700': '#F7D280',
          '800': '#F4C150',
          '900': '#F1B020'
        },
        'primary-4': {
          DEFAULT: '#FF5630',
          '50': '#FFFFFF',
          '100': '#FFFDFC',
          '200': '#FFD3C9',
          '300': '#FFA996',
          '400': '#FF8063',
          '500': '#FF5630',
          '600': '#FC2E00',
          '700': '#C92500',
          '800': '#961C00',
          '900': '#631200'
        },
        'secondary-4': {
          DEFAULT: '#FFEFEB',
          '50': '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FFFFFF',
          '500': '#FFEFEB',
          '600': '#FFC6B8',
          '700': '#FF9D85',
          '800': '#FF7552',
          '900': '#FF4C1F'
        },
      },
      borderRadius: {
        DEFAULT: '15px'
      },
      boxShadow: {
        DEFAULT: '0px 23px 44px 0px rgba(176,183,195,0.14)',
        'sidebar': '23px 0px 44px 0px rgba(176,183,195,0.14)'
      },
      width: {
        'sidebar': '300px'
      },
      height: {
        'card': '200px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
