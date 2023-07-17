import fs from 'fs'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import { z } from 'zod'
import { SKILLS } from 'constants/'

type WorkExperience = {
  frontmatter: {
    title: string
    startDate: string
    endDate: string
    company: string
    skills: (keyof SKILLS)[]
  }
  content: string
}

export function getWorkExperiences(): WorkExperience[] {
  const files = fs.readdirSync('_workExperiences')

  const posts = files.map((fileName) => {
    const readFile = fs.readFileSync(`_workExperiences/${fileName}`, 'utf-8')
    const { data: frontmatter, content } = matter(readFile)

    const FrontmatterValidator = z.object({
      title: z.string(),
      startDate: z.string(),
      endDate: z.string().optional(),
      company: z.string(),
      skills: z.array(z.string()),
    })

    const validatedFrontmatter = FrontmatterValidator.parse(frontmatter)

    return {
      frontmatter: {
        ...validatedFrontmatter,
        startDate: dayjs(validatedFrontmatter.startDate).format('MMM YYYY'),
        endDate: validatedFrontmatter.endDate ? dayjs(validatedFrontmatter.endDate).format('MMM YYYY') : 'Current',
      },
      content,
    }
  })

  return posts
}
