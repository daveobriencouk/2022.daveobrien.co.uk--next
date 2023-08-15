import { WorkExperience } from '../workExperience/types'

export type MenuItem = {
  id: string
  children?: MenuItem[] | null
  text: string
}

export type GetMenuItemsParams = {
  workExperiences: WorkExperience[]
}
