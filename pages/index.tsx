import Head from 'next/head'
import { ClockIcon, UserIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { sample } from 'lodash'

import Link from 'components/Link'
import { BALONY_SYNONYMS, NAV_LINKS_BY_HREF } from 'constants/'
import type { Link as LinkType } from 'constants/'
import useFeatureFlags from 'hooks/useFeatureFlags'

// TODO: #10 Add CV page
// TODO: #24 Add an about me page (like KCD's)

const INTRO_BULLETS = [
  {
    Icon: WrenchScrewdriverIcon,
    key: 'tools',
    Text: (
      <>
        <b>Tools & technology</b> used on my current contract projects: <Link href="https://reactjs.org/">React</Link>,{' '}
        <Link href="https://www.typescriptlang.org/">TypeScript</Link>, Express.JS, styled-components, React Query,
        MobX, React Router, <Link href="https://jestjs.io/">Jest</Link>, Cypress, Yarn, Yalc, Lerna, Workspaces,
        SonarQube, & ADO (this is what{' '}
        <Link href="/about#tooling-personal-projects">I&apos;m currently using on personal projects</Link>, and what{' '}
        <Link href="/about#tooling-past">I&apos;ve used in the past</Link>).
      </>
    ),
  },
  {
    Icon: ClockIcon,
    key: 'experience',
    Text: (
      <>
        With <b>over 20 years of experience</b>, I have a deep understanding of frontend development and a wealth of
        knowledge to draw upon.
      </>
    ),
  },
  {
    Icon: UserIcon,
    key: 'clients',
    Text: (
      <>
        Throughout my career, I have had the <b>opportunity to work with a diverse range of clients</b>, including
        household names like Vodafone, MMT Digital, Maersk, and Virgin Media, as well as smaller agencies and SMEs.
      </>
    ),
  },
]

type HomeProps = {
  readMoreLinks: LinkType[]
}

export default function Home({ readMoreLinks }: HomeProps) {
  const { linksByFeatureFlag, flags } = useFeatureFlags()

  return (
    <>
      {/* <FrontMatterHead frontmatter={frontmatter} /> */}
      <Head>
        <title>Dave O’Brien</title>
        {/* <meta name="description" content="" /> */}
      </Head>

      <main className="mx-two">
        <header>
          <h1 className="font-bold text-md mb-one">Hello. I&apos;m Dave, and I&apos;m a JavaScript engineer.</h1>
        </header>
        {/* TODO: #25 Create plugin to control vertical rhythm via tailwind - with prose etc... https://egghead.io/blog/write-a-plugin-for-tailwind-css */}
        <article className="max-w-2xl mb-three">
          <section>
            {/* TODO: #27 Redesign body content - font / rhythm */}
            {/* TODO: #12 Add v1 homepage copy */}
            {/* TODO: #13 Migrate homepage content to markdown */}
            {/* <div className="prose lg:prose-xl">
              <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
            </div> */}

            <p className="text-sm mb-one">
              I specialize in building user interfaces for web applications using technologies like React, JavaScript,
              HTML & CSS. I&apos;m passionate about finding creative solutions to design challenges and am always
              looking for ways to improve the user experience.
            </p>

            <aside>
              <ul className="text-sm list-inside mb-one ml-half">
                {/* TODO: #11 Add hero icons */}
                {INTRO_BULLETS.map((bullet) => (
                  <li className="flex gap-half" key={bullet.key}>
                    <span className="flex-shrink-0 w-5 mt-0.5">
                      <bullet.Icon className="" />
                    </span>
                    <span>{bullet.Text}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <p className="text-sm mb-one">
              In my free time, you can find me staying up to date on the latest frontend frameworks and tools, or
              tinkering with personal projects.
            </p>

            <footer>
              <h2 className="text-base font-bold mt-two mb-one">Read more...</h2>
              <button>Just want to download my CV?</button>
              <ul className="text-sm list-disc mb-one pl-one-and-half">
                {readMoreLinks.filter(linksByFeatureFlag).map((link) => (
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

export async function getServerSideProps() {
  const READ_MORE_LINKS: LinkType[] = [
    {
      text: `My CV - with 32% less ${sample(BALONY_SYNONYMS)}`,
      href: '/cv',
    },
    {
      text: 'Some projects I&apos;ve worked on',
      href: '/projects',
    },
    {
      text: 'An old(er) developer&apos;s handbook',
      href: '/notes',
    },
  ].map((link) => ({
    ...NAV_LINKS_BY_HREF[link.href],
    ...link,
  }))

  return {
    props: {
      readMoreLinks: READ_MORE_LINKS,
    },
  }
}
