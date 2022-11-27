import fs from 'fs'
import matter from 'gray-matter'

export function getNotes() {
  const files = fs.readdirSync('_notes')

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '')
    const readFile = fs.readFileSync(`_notes/${fileName}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)

    return {
      slug,
      frontmatter,
    }
  })

  return posts
}

export function getNote(slug: string) {
  const fileName = fs.readFileSync(`_notes/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)

  return {
    frontmatter,
    content,
  }
}

export function getNotesStaticPaths() {
  const files = fs.readdirSync('_notes')

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  return paths
}
