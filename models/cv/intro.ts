import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getIntro() {
  const notesDir = path.join(process.cwd(), '_notes')
  const readFile = fs.readFileSync(`${notesDir}/intro.md`, 'utf-8')
  const { content } = matter(readFile)

  return content
}
