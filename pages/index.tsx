import Head from 'next/head'
import Link from 'next/link'

import { READ_MORE_LINKS } from 'constants/'
import useFeatureFlags from 'hooks/useFeatureFlags'

// TODO: #10 Add CV page

export default function Home() {
  const { linksByFeatureFlag, flags } = useFeatureFlags()

  return (
    <>
      {/* <FrontMatterHead frontmatter={frontmatter} /> */}
      <Head>
        <title>Dave O’Brien</title>
        {/* <meta name="description" content="" /> */}
      </Head>

      <main className="mx-two">
        <article className="mb-three">
          <aside>
            <ul className="text-sm list-disc mb-two pl-one">
              {/* TODO: #11 Add hero icons */}
              <li>React, JavaScript, HTML, CSS, ...</li>
              <li>20 years experience in frontend development</li>
              <li>
                Worked with companies such as Vodafone, MMT Digital, Maersk and Virgin Media as well as many smaller
                agencies
              </li>
            </ul>
          </aside>
          <section>
            {/* TODO: #12 Add v1 homepage copy */}
            {/* TODO: #13 Migrate homepage content to markdown */}
            {/* <div className="prose lg:prose-xl">
              <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div> */}
            <header>
              <h1 className="text-base font-bold mb-one">Ahoy 👋. I&apos;m Dave, and I&apos;m a Frontend engineer.</h1>
            </header>
            <p className="text-sm mb-one">
              I&apos;m currently in contract with MMT Digital, working at Vodafone. I&apos;ve been writing code since
              font tags were all the rage.
            </p>
            <p className="text-sm mb-one">
              I&apos;ve seen lots of things come, go and stick. I&apos;ve seen lots of things work well, and lots of
              things break. And when I’m not seeing things, I love to code.
            </p>
            <footer>
              <h2 className="text-base font-bold mt-two mb-one">Read more...</h2>
              <ul className="text-sm list-disc mb-one pl-one-and-half">
                {READ_MORE_LINKS.filter(linksByFeatureFlag).map((link) => (
                  <li key={link.text}>
                    <Link
                      href={link.href}
                      className="underline-offset-2 hover:underline text-sky-600 hover:text-sky-900"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </footer>
          </section>
        </article>
      </main>
    </>
  )
}

// export async function getStaticProps() {
//   const { frontmatter, content } = getNote('home')
//   return {
//     props: {
//       frontmatter,
//       content,
//     },
//   }
// }
