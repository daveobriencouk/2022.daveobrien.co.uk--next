import Head from 'next/head'
import type { GrayMatterFile } from 'gray-matter'

import { generateMetaTitle } from 'utils/generateMetaTitle'

type FrontMatterHeadProps = {
  frontmatter: GrayMatterFile<string>['data']
  children?: React.ReactNode
}

export default function FrontMatterHead({ children, frontmatter }: FrontMatterHeadProps) {
  return (
    <Head>
      {frontmatter.metaTitle && <title>{generateMetaTitle(frontmatter.metaTitle)}</title>}
      {frontmatter.metaDesc && <meta name="description" content={frontmatter.metaDesc} />}
      {children}
    </Head>
  )
}
