import Head from 'next/head'
import Link, { LinkProps } from 'next/link'
import md from 'markdown-it'

import { getNote, getNotesStaticPaths } from 'models/note'

// TODO: [P2] Add feature flagging

export type ListLinkProps = {
  name: string
  href: LinkProps['href']
  // featureFlag?: FlagOptions
}

const readMoreLinks: ListLinkProps[] = [
  // TODO: [P2] Add CV
  {
    name: 'My CV - extended readme',
    href: '/cv',
    // featureFlag: 'section_cv',
  },
  // {
  //   name: "Some projects I've worked on",
  //   href: '/projects',
  //   featureFlag: 'section_project',
  // },
  {
    name: "An old(er) developer's handbook",
    href: '/notes',
    // featureFlag: 'section_notes',
  },
]

export default function Home() {
  return (
    <>
      {/* <FrontMatterHead frontmatter={frontmatter} /> */}
      <Head>
        <title>Dave O’Brien</title>
        {/* <meta name="description" content="" /> */}
      </Head>

      {/* TODO: [P2] Animate page content in (simple fade) */}
      <main className="mx-two">
        <article className="mb-three">
          <aside>
            <ul className="text-sm mb-two list-disc pl-one">
              {/* TODO: [P1] Add hero icons */}
              <li>React, JavaScript, HTML, CSS, ...</li>
              <li>20 years experience in frontend development</li>
              <li>
                Worked with companies such as Vodafone, MMT Digital, Maersk and Virgin Media as well as many smaller
                agencies
              </li>
            </ul>
          </aside>
          <section>
            {/* TODO: [P1] Add v1 homepage copy */}
            {/* TODO: [P3] Migrate homepage content to markdown */}
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
              <ul className="text-sm mb-one list-disc pl-one-and-half">
                {readMoreLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="underline-offset-2 hover:underline text-sky-600 hover:text-sky-900"
                    >
                      {link.name}
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
