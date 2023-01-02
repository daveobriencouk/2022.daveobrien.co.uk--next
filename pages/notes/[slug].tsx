import type { GrayMatterFile } from 'gray-matter'
import md from 'markdown-it'

import FrontMatterHead from 'components/FrontMatterHead'

import { getNote, getNotesStaticPaths } from 'models/note'

type NotePageProps = {
  frontmatter: GrayMatterFile<string>['data']
  content: GrayMatterFile<string>['content']
}

export default function NotePage({ frontmatter, content }: NotePageProps) {
  {
    /* TODO: #14 Style note page */
  }
  return (
    <>
      <FrontMatterHead frontmatter={frontmatter} />
      <div className="mx-auto prose">
        {/* TODO: #15 Add breadcrumb on notes page */}
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </>
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
