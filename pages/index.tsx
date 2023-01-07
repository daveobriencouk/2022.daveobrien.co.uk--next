import Head from 'next/head'
import { ClockIcon, UserIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { sample } from 'lodash'

import Link from 'components/Link'
import { BALONY_SYNONYMS, NAV_LINKS_BY_HREF } from 'constants/'
import type { Link as LinkType } from 'constants/'
import useFeatureFlags from 'hooks/useFeatureFlags'

// TODO: #10 Add CV page
// TODO: #24 Add an about me page (like KCD's)

const CURRENT_TOOLS_AND_TECHNOLOGIES = [
  ['React', 'https://reactjs.org/'],
  ['TypeScript', 'https://www.typescriptlang.org/'],
  ['Express.JS', 'https://expressjs.com/'],
  ['styled-components', 'https://styled-components.com/'],
  ['React Query', 'https://tanstack.com/query/v4/'],
  ['MobX', 'https://mobx.js.org/'],
  ['React Router', 'https://reactrouter.com/'],
  ['Jest', 'https://jestjs.io/'],
  ['Cypress', 'https://www.cypress.io/'],
  ['Yarn', 'https://yarnpkg.com/'],
  ['Yalc', 'https://github.com/wclr/yalc/'],
  ['Lerna', 'https://lerna.js.org/'],
  ['Yarn Workspaces', 'https://classic.yarnpkg.com/lang/en/docs/workspaces/'],
  ['SonarQube', 'https://www.sonarsource.com/products/sonarqube/'],
  ['Webpack', 'https://webpack.js.org/'],
  ['ADO', 'https://azure.microsoft.com/en-us/products/devops/'],
]

const INTRO_BULLETS = [
  {
    Icon: WrenchScrewdriverIcon,
    key: 'tools',
    Text: (
      <>
        <b>Tools & technology</b> used on my current contract projects:{' '}
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
        This is what <Link href="/about#tooling-personal-projects">I&apos;m currently using on personal projects</Link>,
        and what <Link href="/about#tooling-past">I&apos;ve used in the past</Link>.
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
// TODO: #31 Set up analytics

export default function Home({ readMoreLinks }: HomeProps) {
  const { checkSomeFeatureFlags, linksByFeatureFlag } = useFeatureFlags()

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
            {/* TODO: #13 Migrate homepage content to markdown */}
            <p className="text-sm mb-one">
              I have a strong focus on building user interfaces for web applications using technologies like React,
              JavaScript, HTML, and CSS. I am passionate about finding creative solutions to challenges and am dedicated
              to improving both the user and developer experience.
            </p>

            <aside>
              <ul className="text-sm list-inside mb-one ml-half">
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
              My ability to write clear and intuitive code and architect reusable components and modules, combined with
              my extensive experience in building user interfaces, integrating APIs, and working with{' '}
              <Link href="https://expressjs.com/">Express</Link>, gives me a comprehensive understanding of both the
              frontend and backend.
            </p>

            <p className="text-sm mb-one">
              I am well-versed in agile methodologies and thrive in collaborative environments where I can contribute to
              the growth and success of a product. I am flexible and adaptable, with a strong awareness of time-frames
              and constraints, and I am committed to delivering high-quality solutions that meet the needs of the
              customer.
            </p>

            <p className="text-sm mb-one">
              In my free time, you can find me staying up to date on the latest tooling and techniques or tinkering with
              personal projects.
            </p>

            {checkSomeFeatureFlags(['section_about', 'section_cv', 'section_notes', 'section_project']) && (
              <footer>
                <h2 className="text-base font-bold mt-two mb-one">Want to find out more?</h2>
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
            )}
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
      text: 'More about me',
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
