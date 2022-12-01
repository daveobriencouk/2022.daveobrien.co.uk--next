import type { GrayMatterFile } from 'gray-matter'
import md from 'markdown-it'

import { getNote, getNotesStaticPaths } from 'models/note'

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
  const paths = getNotesStaticPaths()

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
  const { frontmatter, content } = getNote(slug)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}
