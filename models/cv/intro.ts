import fs from 'fs'
import matter from 'gray-matter'

export function getIntro() {
  const readFile = fs.readFileSync(`_notes/intro.md`, 'utf-8')
  const { content } = matter(readFile)

  return content
}
