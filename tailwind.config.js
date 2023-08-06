/** @type {import('tailwindcss').Config} */
const { fontFamily, letterSpacing } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const spacingBase = 1.75

function spacing(n) {
  return n * spacingBase + 'rem'
}

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
        quarter: spacing(0.25),
        half: spacing(0.5),
        one: spacing(1),
        'one-and-half': spacing(1.5),
        two: spacing(2),
        three: spacing(3),
        four: spacing(4),
        five: spacing(5),
        six: spacing(6),
        eight: spacing(8),
        twelve: spacing(12),
        sixteen: spacing(16),
      },
      lineHeight: {
        one: '1.75rem',
        'one-and-half': '2.625rem',
        two: '3.5rem',
      },
      typography: {
        DEFAULT: {
          css: {
            p: {
              marginBottom: spacing(1),
              marginTop: spacing(1),
            },
            ul: {
              paddingLeft: spacing(1),
              marginBottom: spacing(1),
              marginTop: spacing(1),
            },
            li: {
              paddingLeft: 0,
              marginBottom: 0,
              marginTop: 0,
            },
            h4: {
              lineHeight: spacing(1),
              marginBottom: spacing(1),
              marginTop: spacing(1),
            },
            ':last-child': {
              marginBottom: '0px',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
