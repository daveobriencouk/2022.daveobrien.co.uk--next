/** @type {import('tailwindcss').Config} */
const { fontFamily, letterSpacing } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-raleway)', ...fontFamily.sans],
        sans: ['var(--font-yrsa)', ...fontFamily.serif],
      },
      // https://samuelhorn.com/leverage-vertical-rhythm-with-tailwind-and-tailbase/
      fontSize: {
        '8xl': ['9.314rem', '10.5rem'],
        '7xl': ['7.451rem', '7.5rem'],
        '6xl': ['5.961rem', '6rem'],
        '5xl': ['4.769rem', '6rem'],
        '4xl': ['3.815rem', '4.5rem'],
        '3xl': ['3.052rem', '4.5rem'],
        '2xl': ['2.441rem', '3rem'],
        xl: ['1.953rem', '3rem'],
        lg: ['1.563rem', '3rem'],
        md: ['1.25rem', '3rem'],
        base: ['1rem', '1.5rem'],
        sm: ['0.8rem', '1.5rem'],
        xs: ['0.64rem', '1.5rem'],
      },
      letterSpacing: {
        ...letterSpacing,
        tightest: '-0.125em',
      },
      spacing: {
        quarter: '0.375rem',
        half: '0.75rem',
        one: '1.5rem',
        'one-and-half': '2.25rem',
        two: '3rem',
        three: '4.5rem',
        four: '6rem',
        five: '7.5rem',
        six: '9rem',
        eight: '12rem',
        twelve: '18rem',
        sixteen: '24rem',
      },
    },
  },
  plugins: [],
}
