import { generateWorkExperienceId } from '../workExperience/utils'
import type { GetMenuItemsParams, MenuItem } from './types'

const MENU_ITEMS = [
  {
    text: 'Intro',
    id: 'intro',
  },
  {
    text: 'Skills & Tooling',
    id: 'skills-and-tooling',
  },
  {
    text: 'Work Experience',
    id: 'work-experience',
  },
  {
    text: 'Education',
    id: 'education',
  },
]

export function getMenuItems({ workExperiences }: GetMenuItemsParams): MenuItem[] {
  return MENU_ITEMS.map((item) => {
    return {
      ...item,
      children:
        item.id === 'work-experience'
          ? workExperiences.map(({ frontmatter: { company, startDate } }) => ({
              id: generateWorkExperienceId({ company, startDate }),
              text: company,
            }))
          : null,
    }
  })
}
