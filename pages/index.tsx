import Head from 'next/head'
import { ClockIcon, UserIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { random, sample } from 'lodash'

import type { ReactElement } from 'react'

import Link from 'components/Link'
import { BALONY_SYNONYMS, NAV_LINKS_BY_HREF } from 'constants/'
import type { Link as LinkType } from 'constants/'
import useFeatureFlags from 'hooks/useFeatureFlags'

import type { NextPageWithLayout } from './_app'
import BaseLayout from 'components/BaseLayout'

// TODO: #10 Add CV page
// TODO: #24 Add an about me page (like KCD's)

const CURRENT_TOOLS_AND_TECHNOLOGIES = [
  ['React', 'https://reactjs.org/'],
  ['TypeScript', 'https://www.typescriptlang.org/'],
  ['Express.JS', 'https://expressjs.com/'],
  ['styled-components', 'https://styled-components.com/'],
  ['React Query', 'https://tanstack.com/query/v4/'],
  ['MobX', 'https://mobx.js.org/'],
  ['Lerna', 'https://lerna.js.org/'],
  // ['React Router', 'https://reactrouter.com/'],
  // ['Jest', 'https://jestjs.io/'],
  ['Cypress', 'https://www.cypress.io/'],
  // ['Yarn', 'https://yarnpkg.com/'],
  // ['Yalc', 'https://github.com/wclr/yalc/'],
  // ['Yarn Workspaces', 'https://classic.yarnpkg.com/lang/en/docs/workspaces/'],
  // ['SonarQube', 'https://www.sonarsource.com/products/sonarqube/'],
  // ['Webpack', 'https://webpack.js.org/'],
  // ['ADO', 'https://azure.microsoft.com/en-us/products/devops/'],
]

const INTRO_BULLETS = [
  {
    Icon: WrenchScrewdriverIcon,
    key: 'tools',
    Text: (
      <>
        <b>Tools & technology</b> used on my current contract projects include{' '}
        {CURRENT_TOOLS_AND_TECHNOLOGIES.map(([tool, href], i) => {
          const isSecondToLast = i === CURRENT_TOOLS_AND_TECHNOLOGIES.length - 2
          const isLast = i === CURRENT_TOOLS_AND_TECHNOLOGIES.length - 1
          return (
            <>
              <Link key={tool} href={href}>
                {tool}
              </Link>
              {isSecondToLast ? ', and' : isLast ? '.' : ','}{' '}
            </>
          )
        })}
        Take a look at my <Link href="/about#tooling">full list of tooling I&apos;ve used in the past and present</Link>
        .
        {/* TODO: #33 Cut the list to 5/6 and replace below with a link to view full list and tooling over the years */}
        {/* This is what <Link href="/about#tooling-personal-projects">I&apos;m currently using on personal projects</Link>,
        and what <Link href="/about#tooling-past">I&apos;ve used in the past</Link>. */}
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

// TODO: #30 Set up correct domains for production

export default function Home({ readMoreLinks }: HomeProps) {
  const { checkSomeFeatureFlags, linksByFeatureFlag } = useFeatureFlags()

  return (
    <>
      {/* <FrontMatterHead frontmatter={frontmatter} /> */}
      <Head>
        <title>Dave O’Brien</title>
        {/* <meta name="description" content="" /> */}
      </Head>

      <main className="mx-one md:mx-one-and-half">
        <header>
          <h1 className="font-bold text-md mb-one">Hello. I&apos;m Dave, and I&apos;m a Frontend Engineer.</h1>
        </header>
        {/* TODO: #25 Create plugin to control vertical rhythm via tailwind - with prose etc... https://egghead.io/blog/write-a-plugin-for-tailwind-css */}
        <article className="max-w-2xl mb-three">
          <section>
            {/* TODO: #13 Migrate homepage content to markdown */}
            <p className="text-base mb-one">
              With a deep passion for frontend engineering and a strong understanding of the web, I am adept at creating
              intuitive and engaging user experiences using technologies like React, JavaScript, HTML, and CSS.
            </p>

            <aside>
              <ul className="text-base list-inside mb-one ml-quarter md:ml-half">
                {INTRO_BULLETS.map((bullet) => (
                  <li className="flex gap-half mb-one" key={bullet.key}>
                    <span className="flex-shrink-0 w-5 mt-0.5">
                      <bullet.Icon className="" />
                    </span>
                    <span>{bullet.Text}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <p className="text-base mb-one">
              As a front-end engineer, I am equally comfortable crafting user interfaces, integrating APIs, and building
              applications. In addition, I have a strong foundation in backend development, including experience with
              Express, Ruby, and PHP. My diverse skill set and adaptability allow me to tackle a wide range of projects
              and challenges with confidence.
            </p>

            <p className="text-base mb-one">
              I am well-versed in agile methodologies and thrive in collaborative environments where I can contribute to
              the growth and success of a product. I am flexible and adaptable, with a strong awareness of time-frames
              and constraints, and I am committed to delivering high-quality solutions that meet the needs of the
              customer.
            </p>

            {checkSomeFeatureFlags(['section_about', 'section_cv', 'section_notes', 'section_project']) && (
              <footer>
                <ul className="text-base list-disc mt-two mb-one pl-one-and-half">
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
            )}
          </section>
        </article>
      </main>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BaseLayout>{page}</BaseLayout>
}

export async function getServerSideProps() {
  // TODO: #34 Shift this on the client, so I can add bolding etc... just send down the random value and sampled BALONY_SYNONYMS
  const READ_MORE_LINKS: LinkType[] = [
    {
      text: `Have a gander at my CV - with ${random(20, 45)}% less ${sample(BALONY_SYNONYMS)}`,
      href: '/cv',
    },
    {
      text: 'Read a little more about me - with less polish, but more substance',
      // text: `More about me - with 32% less ${sample(BALONY_SYNONYMS)}`,
      href: '/about',
    },
    {
      text: 'Some projects I’ve worked on',
      // text: 'Here’s some projects I made earlier...',
      href: '/projects',
    },
    {
      text: 'My engineering daybook',
      // text: 'My engineering daybook (abridged)',
      // text: 'The (Old) Developer’s Handbook',
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
