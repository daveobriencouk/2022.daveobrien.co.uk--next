export type Skill = {
  areas: SkillArea[]
  categories: SkillCategory[]
  href: string
  text: string
}

export type FormattedSkill = {
  areas: SkillArea[]
  categories: SkillCategory[]
  href: Skill['href']
  key: string
  primaryArea: PrimaryArea
  text: Skill['text']
}

export type SkillArea = 'work' | 'personal' | 'past'

export type SkillCategory = 'frontend' | 'backend' | 'testing' | 'build' | 'data' | 'content'

export type PrimaryArea = 'work' | 'personal' | 'past' | undefined

export type Skills = Record<string, Skill>

export type SkillsByCategory = Record<SkillCategory | 'all', FormattedSkill[]>

export type FormatSkillParams = {
  key: string
  skill: Skill
}

export type GetSkillsByCategoryParams = {
  skills: Skills
}
