import React from 'react'
import Head from 'next/head'
import { ClockIcon, UserIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { TypeAnimation } from 'react-type-animation'
import { random, sample } from 'lodash'

import type { ReactElement } from 'react'

import BaseLayout from 'components/BaseLayout'
import CommaSeparatedList from 'components/CommaSeparatedList'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Link from 'components/Link'
import Main from 'components/Main'
import MainContentTransition from 'components/MainContentTransition'
import { BALONY_SYNONYMS, NAV_LINKS_BY_HREF } from 'constants/'
import type { Link as LinkType } from 'constants/'
import useFeatureFlags from 'hooks/useFeatureFlags'
import useInitialPageLoad from 'hooks/useInitialPageLoad'

// TODO: #10 Add CV page
// TODO: #24 Add an about me page (like KCD's)

const CURRENT_TOOLS_AND_TECHNOLOGIES = [
  { text: 'React', href: 'https://reactjs.org/' },
  { text: 'TypeScript', href: 'https://www.typescriptlang.org/' },
  { text: 'Express.JS', href: 'https://expressjs.com/' },
  { text: 'styled-components', href: 'https://styled-components.com/' },
  { text: 'React Query', href: 'https://tanstack.com/query/v4/' },
  { text: 'MobX', href: 'https://mobx.js.org/' },
  { text: 'Lerna', href: 'https://lerna.js.org/' },
  // {text: 'React Router', href: 'https://reactrouter.com/'},
  // {text: 'Jest', href: 'https://jestjs.io/'},
  { text: 'Cypress', href: 'https://www.cypress.io/' },
  // {text: 'Yarn', href: 'https://yarnpkg.com/'},
  // {text: 'Yalc', href: 'https://github.com/wclr/yalc/'},
  // {text: 'Yarn Workspaces', href: 'https://classic.yarnpkg.com/lang/en/docs/workspaces/'},
  // {text: 'SonarQube', href: 'https://www.sonarsource.com/products/sonarqube/'},
  // {text: 'Webpack', href: 'https://webpack.js.org/'},
  // {text: 'ADO', href: 'https://azure.microsoft.com/en-us/products/devops/'},
]

const INTRO_BULLETS = [
  {
    Icon: WrenchScrewdriverIcon,
    key: 'tools',
    Text: (
      <>
        <b>Tools & technology</b> used on my current contract projects include{' '}
        <CommaSeparatedList array={CURRENT_TOOLS_AND_TECHNOLOGIES} /> Take a look at my{' '}
        <Link href="/about#tooling">full list of tooling I&apos;ve used in the past and present</Link>.
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
  onAnimationComplete: () => void
  readMoreLinks: LinkType[]
}

export default function Home({ readMoreLinks }: HomeProps) {
  const { checkSomeFeatureFlags, linksByFeatureFlag } = useFeatureFlags()

  const { hasInitialPageLoaded, loading, setInitialPageLoad } = useInitialPageLoad()
  const [isHeaderShowing, setIsHeaderShowing] = React.useState(false)
  const [isMainContentShowing, setIsMainContentShowing] = React.useState(false)

  if (loading) return null

  return (
    <>
      {/* <FrontMatterHead frontmatter={frontmatter} /> */}
      <Head>
        <title>Dave O’Brien</title>
        {/* <meta name="description" content="" /> */}
      </Head>

      <Header
        onTransitionEnd={() => setIsMainContentShowing(true)}
        show={isHeaderShowing}
        skipAnimation={hasInitialPageLoaded}
      />

      <Main>
        <header>
          {hasInitialPageLoaded ? (
            <h1 className="text-xl mb-one heading">Hello. I’m Dave, and I’m a Frontend Engineer.</h1>
          ) : (
            <TypeAnimation
              sequence={[
                'Hello.',
                500,
                'Hello. I’m Dave,',
                300,
                'Hello. I’m Dave, and I’m a Frontend Developer.',
                200,
                'Hello. I’m Dave, and I’m a Frontend Engineer.',
                () => setIsHeaderShowing(true),
              ]}
              wrapper="h1"
              speed={55}
              cursor={false}
              className="text-xl mb-one heading"
            />
          )}
        </header>
        <MainContentTransition
          show={isMainContentShowing || hasInitialPageLoaded}
          onTransitionEnd={() => setInitialPageLoad(true)}
        >
          {/*
            // TODO: #36 Add navigational buttons to skip or display the CV
            <p>Me in 60 seconds 👇</p>
            <p>, or my CV</p>
          */}
          {/* TODO: #25 Create plugin to control vertical rhythm via tailwind - with prose etc... https://egghead.io/blog/write-a-plugin-for-tailwind-css */}
          {/* TODO: #13 Migrate homepage content to markdown */}
          <article className="max-w-2xl mb-three">
            <section>
              <p className="text-base mb-one">
                With a deep passion for frontend engineering and a strong understanding of the web, I am adept at
                creating intuitive and engaging user experiences using technologies like React, JavaScript, HTML, and
                CSS.
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
                As a front-end engineer, I am equally comfortable crafting user interfaces, integrating APIs, and
                building applications. In addition, I have a strong foundation in backend development, including
                experience with Express, Ruby, and PHP. My diverse skill set and adaptability allow me to tackle a wide
                range of projects and challenges with confidence.
              </p>

              <p className="text-base mb-one">
                I am well-versed in agile methodologies and thrive in collaborative environments where I can contribute
                to the growth and success of a product. I am flexible and adaptable, with a strong awareness of
                time-frames and constraints, and I am committed to delivering high-quality solutions that meet the needs
                of the customer.
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
        </MainContentTransition>
      </Main>

      <MainContentTransition show={isMainContentShowing || hasInitialPageLoaded}>
        <Footer />
      </MainContentTransition>
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
