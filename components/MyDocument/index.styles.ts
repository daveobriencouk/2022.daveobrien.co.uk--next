import { StyleSheet, Font } from '@react-pdf/renderer'
import { ColorSet, RalewayHeadingParams } from './index.styles.types'

/**
 * Setup fonts
 * See: https://stackoverflow.com/questions/70126411/how-to-add-custom-font-in-react-pdf-pdf/70577891#70577891
 */
Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'http://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4nY1M2xLER.ttf',
      fontWeight: 300,
    },
    {
      src: 'http://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4nY1M2xLER.ttf',
      fontWeight: 400,
    },
    {
      src: 'http://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4nY1M2xLER.ttf',
      fontWeight: 700,
    },
    {
      src: 'http://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4nY1M2xLER.ttf',
      fontWeight: 800,
    },
  ],
})
Font.register({
  family: 'Raleway',
  fonts: [
    {
      src: 'http://fonts.gstatic.com/s/raleway/v28/1Ptxg8zYS_SKggPN4iEgvnHyvveLxVtzpYCPNLA3JC9c.ttf',
    },
  ],
})
// Remove hyphenation
Font.registerHyphenationCallback((word) => [word])

/**
 * Setup base values
 */
const baseFontSize = 8
const baseLineHeight = 1.5

const colors: Record<string, ColorSet> = {
  primary: {
    900: 'rgb(55, 65, 81)',
    800: 'rgb(68, 64, 60)',
    600: 'rgb(87 83 78)',
    500: 'rgb(120 113 108)',
    400: 'rgb(168 162 158)',
  },
}

/**
 * Define helper functions
 */
export function toPt(num: number) {
  return `${num}pt`
}

export function spacing(multiplier: number) {
  return toPt(multiplier * baseFontSize)
}

export function ralewayHeading({
  fontSize = 1.5,
  lineHeight = baseLineHeight / 2,
  primaryColor = 400,
}: RalewayHeadingParams = {}) {
  return {
    fontFamily: 'Raleway',
    fontSize: spacing(fontSize),
    letterSpacing: '-1pt',
    lineHeight: toPt(lineHeight),
    fontWeight: 400,

    color: colors.primary[primaryColor],
  }
}

export const styles = StyleSheet.create({
  /**
   * Page styles
   */
  page: {
    color: colors.primary[900],
    fontFamily: 'Open Sans',
    fontSize: toPt(baseFontSize),
    fontWeight: 300,
    lineHeight: toPt(baseLineHeight),

    padding: '10mm',
  },

  /**
   * Top header styles
   */
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginBottom: spacing(2),
  },
  logo: {
    width: '105mm',
    paddingBottom: spacing(0.333),
  },
  contact: {
    display: 'flex',
    flexDirection: 'column',
  },
  contactDetail: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing(0.75),
  },
  contactIcon: {
    width: spacing(1.25),
    height: spacing(1.25),
  },
  contactLink: {
    color: colors.primary[900],
    textDecoration: 'none',
  },

  /**
   * Intro and skills styles
   */
  introAndSkills: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing(2),
    justifyContent: 'space-between',

    marginBottom: spacing(1.5),
  },
  intro: {
    width: '50%',
  },
  skills: {
    width: '50%',
  },
  skillsList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {},
  skillCategory: {
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  /**
   * Work experience and education styles
   */
  workExperiencesAndEducation: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  /**
   * Work experience styles
   */
  workExperiencesMain: {
    width: '100%',
  },
  workExperience: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing(2),

    marginBottom: spacing(2),
  },
  workExperienceHeading: {
    textAlign: 'right',
    width: '25%',
  },
  workExperienceDate: {
    ...ralewayHeading(),
  },
  workExperienceJobTitle: {
    ...ralewayHeading({ fontSize: 2.5, primaryColor: 600 }),

    marginBottom: spacing(1),
  },
  workExperienceCompany: {
    ...ralewayHeading({ primaryColor: 500 }),

    marginBottom: spacing(2),
  },
  workExperienceContent: {
    width: '75%',

    paddingTop: spacing(0.667),
  },
  workExperienceSkills: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  /**
   * Secondary work experience styles
   */
  secondaryWorkExperiences: {
    width: '75%',

    marginBottom: spacing(0.667),
  },
  secondaryWorkExperience: {
    display: 'flex',
    flexDirection: 'row',
    gap: spacing(2),
    justifyContent: 'space-between',
  },
  secondaryWorkExperienceLeft: {
    textAlign: 'right',
    width: '33.33%',
    paddingTop: spacing(0.333),
  },
  secondaryWorkExperienceRight: {
    width: '66.67%',
  },
  secondaryWorkExperienceDate: {
    ...ralewayHeading(),
  },
  secondaryWorkExperienceJobTitle: {
    ...ralewayHeading({ fontSize: 2, primaryColor: 600 }),

    marginBottom: spacing(1),
  },
  secondaryWorkExperienceCompany: {
    ...ralewayHeading({ primaryColor: 500 }),
  },

  /**
   * Education styles
   */
  education: {},
  educationAndContact: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  secondaryContact: {},
  smallLogo: {
    width: '47.5mm',

    marginBottom: spacing(1),
  },
  educationPeriod: {
    marginBottom: spacing(1),
  },
  educationYears: {},
  educationInstitution: { fontWeight: 400 },
  educationQualification: {},

  /**
   * General styles
   */
  sectionHeading: {
    fontSize: spacing(1.5),
    fontWeight: 800,
    textTransform: 'uppercase',
    color: colors.primary[900],

    borderBottom: `1px solid ${colors.primary[900]}`,

    marginBottom: spacing(1.5),
  },
  h4: {
    fontWeight: 700,
    textTransform: 'uppercase',

    marginBottom: spacing(1.5),
  },
  para: {
    marginBottom: spacing(1.5),
  },
  list: {
    marginBottom: spacing(1.5),
  },
  listItem: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',

    marginLeft: spacing(2),
  },
  listItemBullet: {
    position: 'absolute',
    left: spacing(-2),
    width: spacing(2),

    textAlign: 'center',
  },
})
