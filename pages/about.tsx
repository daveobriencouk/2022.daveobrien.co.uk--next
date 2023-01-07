import Head from 'next/head'

import { generateMetaTitle } from 'utils/generateMetaTitle'

// TODO: #29 Add about page

export default function About() {
  // TODO: #28 Trigger a 404 for pages that should not be accessbile via Feature Flags

  return (
    <>
      <Head>
        <title>{generateMetaTitle('About me')}</title>
      </Head>

      <main className="mx-two">
        <article className="mb-three">
          <h1>About me</h1>
        </article>
      </main>
    </>
  )
}
