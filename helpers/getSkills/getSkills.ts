import { SKILLS_INFO } from 'constants/'
import type { SKILLS } from 'constants/'

export default function getSkills(array: (keyof SKILLS)[]) {
  return array
    .map((item) => {
      const skill = SKILLS_INFO[item]

      if (!skill) {
        console.warn(`Skill missing in lookup "${item}"`)
      }

      return skill
    })
    .filter(Boolean)
}
