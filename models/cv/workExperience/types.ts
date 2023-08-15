import type { Skill } from '../skillsAndTooling/types'

export type WorkExperience = {
  content: string
  fileName: string
  frontmatter: {
    company: string
    contract?: boolean
    endDate: string
    id: string
    startDate: string
    skills?: Pick<Skill, 'href' | 'text'>[] | null
    title: string
  }
}
