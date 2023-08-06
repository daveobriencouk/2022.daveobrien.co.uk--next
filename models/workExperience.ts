import fs from 'fs'
import matter from 'gray-matter'
import dayjs from 'dayjs'
import { z } from 'zod'
import { SKILLS } from 'constants/'
import kebabCase from 'lodash/kebabCase'

type WorkExperience = {
  frontmatter: {
    title: string
    startDate: string
    endDate: string
    company: string
    skills?: (keyof SKILLS)[]
    contract?: boolean
  }
  content: string
  fileName: string
}

const path = '_workExperiences'

function generateWorkExperienceId({ company, startDate }: { company: string; startDate: string }) {
  return company === 'Freelance' ? `freelance-${dayjs(startDate).format('YYYY')}` : kebabCase(company)
}

export function getWorkExperiences(): WorkExperience[] {
  const files = fs.readdirSync(path)

  const posts = files
    .filter((fileName) => {
      const stats = fs.statSync(`${path}/${fileName}`)
      return stats.isFile() && fileName.endsWith('.md')
    })
    .map((fileName) => {
      const readFile = fs.readFileSync(`_workExperiences/${fileName}`, 'utf-8')
      const { data: frontmatter, content } = matter(readFile)

      const FrontmatterValidator = z.object({
        title: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        company: z.string(),
        skills: z.array(z.string()).optional(),
        contract: z.boolean().optional(),
      })

      const validatedFrontmatter = FrontmatterValidator.parse(frontmatter)

      return {
        frontmatter: {
          ...validatedFrontmatter,
          startDate: dayjs(validatedFrontmatter.startDate).format('MMM YYYY'),
          endDate: validatedFrontmatter.endDate ? dayjs(validatedFrontmatter.endDate).format('MMM YYYY') : 'Current',
          id: generateWorkExperienceId({
            company: validatedFrontmatter.company,
            startDate: validatedFrontmatter.startDate,
          }),
        },
        content,
        fileName: fileName.replace(/\.md$/, ''),
      }
    })
    .sort((a, b) => dayjs(b.frontmatter.startDate).unix() - dayjs(a.frontmatter.startDate).unix())

  return posts
}
