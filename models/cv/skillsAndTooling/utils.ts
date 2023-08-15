import type { PrimaryArea, SkillArea, SkillsByCategory, FormatSkillParams, GetSkillsByCategoryParams } from './types'

function formatSkill({ key, skill }: FormatSkillParams) {
  return {
    ...skill,
    key,
    primaryArea: getPrimaryArea(skill.areas),
  }
}

function getPrimaryArea(areas: SkillArea[]): PrimaryArea {
  if (areas.includes('work')) return 'work'
  if (areas.includes('personal')) return 'personal'
  // if (areas.includes('play')) return 'puzzle-piece'
  if (areas.includes('past')) return 'past'
}

export function getSkillsByCategory({ skills }: GetSkillsByCategoryParams) {
  return Object.entries(skills).reduce<SkillsByCategory>(
    (acc, [key, skill]) => {
      const formattedSkill = formatSkill({ key, skill })
      acc.all.push(formattedSkill)

      skills[key].categories.forEach((category) => {
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(formattedSkill)
      })

      return acc
    },
    { all: [] } as unknown as SkillsByCategory
  )
}
