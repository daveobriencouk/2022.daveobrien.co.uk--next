import fs from 'fs'
import matter from 'gray-matter'
import type { GrayMatterFile } from 'gray-matter'
import md from 'markdown-it'

type NotePageProps = {
  frontmatter: GrayMatterFile<string>['data']
  content: GrayMatterFile<string>['content']
}

export default function NotePage({ frontmatter, content }: NotePageProps) {
  return (
    <div className="prose mx-auto">
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync('_notes')

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

type GetStaticPropsParams = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params: { slug } }: GetStaticPropsParams) {
  const fileName = fs.readFileSync(`_notes/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}
