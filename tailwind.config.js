/** @type {import('tailwindcss').Config} */
const { fontFamily, letterSpacing } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.red,
        neutral: colors.stone,
      },
      fontFamily: {
        display: ['var(--font-raleway)', ...fontFamily.sans],
        sans: ['var(--font-open-sans)', ...fontFamily.sans],
      },
      letterSpacing: {
        ...letterSpacing,
        tightest: '-0.125em',
        widest: '0.5em',
      },
      // https://samuelhorn.com/leverage-vertical-rhythm-with-tailwind-and-tailbase/
      fontSize: {
        '6xl': ['15.98117223rem', '17.5rem'],
        '5xl': ['11.302102rem', '12.25rem'],
        '4xl': ['7.993rem', '8.75rem'],
        '3.5xl': ['6.823rem', '7rem'],
        '3xl': ['5.653rem', '7rem'],
        '2xl': ['3.998rem', '5.25rem'],
        xl: ['2.827rem', '3.5rem'],
        lg: ['1.999rem', '3.5rem'],
        md: ['1.414rem', '1.75rem'],
        base: ['1rem', '1.75rem'],
        sm: ['0.854rem', '1.75rem'],
        xs: ['0.707rem', '1.75rem'],
      },
      spacing: {
        quarter: '0.4375rem',
        half: '0.875rem',
        one: '1.75rem',
        'one-and-half': '2.625rem',
        two: '3.5rem',
        three: '5.25rem',
        four: '7rem',
        five: '8.75rem',
        six: '10.5rem',
        eight: '14rem',
        twelve: '21rem',
        sixteen: '28rem',
      },
      lineHeight: {
        one: '1.75rem',
        'one-and-half': '2.625rem',
        two: '3.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
