import fs from 'fs'
import matter from 'gray-matter'
import dayjs from 'dayjs'

export function getWorkExperiences() {
  const files = fs.readdirSync('_workExperiences')

  const posts = files.map((fileName) => {
    const readFile = fs.readFileSync(`_workExperiences/${fileName}`, 'utf-8')
    const { data: frontmatter, content } = matter(readFile)

    return {
      frontmatter: {
        ...frontmatter,
        startDate: frontmatter.startDate ? dayjs(frontmatter.startDate).format('MMM YYYY') : null,
        endDate: frontmatter.endDate ? dayjs(frontmatter.endDate).format('MMM YYYY') : 'Current',
      },
      content,
    }
  })

  return posts
}
