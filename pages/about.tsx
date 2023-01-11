import Head from 'next/head'

import Main from 'components/Main'
import { generateMetaTitle } from 'utils/generateMetaTitle'

// TODO: #29 Add about page
// TODO: #28 Trigger a 404 for pages that should not be accessbile via Feature Flags

export default function About() {
  return (
    <>
      <Head>
        <title>{generateMetaTitle('About me')}</title>
      </Head>

      <Main>
        <article className="mb-three">
          <h1>About me</h1>
        </article>
      </Main>
    </>
  )
}
