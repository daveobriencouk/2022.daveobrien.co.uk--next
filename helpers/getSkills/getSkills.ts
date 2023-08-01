import { SKILLS } from 'constants/'

export default function getSkills(array: (keyof typeof SKILLS)[]) {
  return array
    .map((item) => {
      const skill = SKILLS[item]

      if (!skill) {
        console.warn(`Skill missing in lookup "${item}"`)
      }

      return skill
    })
    .filter(Boolean)
}
