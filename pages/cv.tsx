import Head from 'next/head'
import kebabCase from 'lodash/kebabCase'
import NextLink from 'next/link'
import Main from 'components/Main'
import type { GrayMatterFile } from 'gray-matter'
import md from 'markdown-it'
import { MegaphoneIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

import CommaSeparatedList from 'components/CommaSeparatedList'
import getSkills from 'helpers/getSkills'
import useFeatureFlags from 'hooks/useFeatureFlags'
import { generateMetaTitle } from 'utils/generateMetaTitle'

import { getWorkExperiences } from 'models/workExperience'
import { SKILLS_INFO } from 'constants/'
import dayjs from 'dayjs'
import classNames from 'classnames'

// TODO: #10 Add CV page

type MenuItem = {
  text: string
  children?: MenuItem[]
}

const MENU_ITEMS: MenuItem[] = [
  {
    text: 'Intro',
  },
  {
    text: 'Skills & Tooling',
  },
  {
    text: 'Work Experience',
    children: [
      {
        text: 'Vodafone / MMT Digital',
      },
      {
        text: 'Maersk',
      },
      {
        text: 'Ego Creative',
      },
      {
        text: 'Freelance',
      },
      {
        text: '50Connect',
      },
      {
        text: 'Virgin Media',
      },
      {
        text: 'Telewest',
      },
      {
        text: '10Media',
      },
      {
        text: 'Freelance',
      },
      {
        text: 'Xtreme Magazine',
      },
    ],
  },
  {
    text: 'Education',
  },
]

// see first work experience skills
const SKILLS_WORK = ['react']

const SKILLS_PLAY = [
  'react',
  'typescript',
  'jest',
  'cypress',
  'reactTestingLibrary',

  'nextjs',
  'remix',
  'tailwindcss',
  'prisma',
  'github',
  'zod',
]

const SKILL_CATEGORY = {
  backend: 'Backend',
}

const SKILLS_ALL = [
  {
    skill: 'html',
    category: SKILL_CATEGORY.backend,
    startYear: 2002,
  },
  {
    skill: 'haml',
    category: SKILL_CATEGORY.backend,
    startYear: 2002,
  },
  {
    skill: 'jade',
    category: SKILL_CATEGORY.backend,
    startYear: 2002,
  },
  {
    skill: 'css',
    category: SKILL_CATEGORY.backend,
    startYear: 2002,
  },
  {
    skill: 'less',
    category: SKILL_CATEGORY.backend,
    startYear: 2003,
  },
  {
    skill: 'sass',
    category: SKILL_CATEGORY.backend,
    startYear: 2003,
  },
  {
    skill: 'bootstrap',
    category: SKILL_CATEGORY.backend,
    startYear: 2003,
  },
  {
    skill: 'foundation',
    category: SKILL_CATEGORY.backend,
    startYear: 2003,
  },
  {
    skill: 'bootstrap',
    category: SKILL_CATEGORY.backend,
    startYear: 2003,
  },
  {
    skill: 'bem',
    category: SKILL_CATEGORY.backend,
    startYear: 2003,
  },
  {
    skill: 'tailwind',
    category: SKILL_CATEGORY.backend,
    startYear: 2022,
  },

  {
    skill: 'php',
    category: SKILL_CATEGORY.backend,
    startYear: 2004,
    endYear: 2016,
  },
  {
    skill: 'rubyOnRails',
    category: SKILL_CATEGORY.backend,
    startYear: 2005,
    endYear: 2008,
  },
]

type WorkExperience = {
  frontmatter: GrayMatterFile<string>['data']
  content: GrayMatterFile<string>['content']
  fileName: string
}

type HomeProps = {
  workExperiences: WorkExperience[]
}

function CvSection({ title, children, id }: { title: string; children: React.ReactNode; id: string }) {
  return (
    <section id={id} className="pl-6 border-l-[20px] py-half border-l-neutral-200 mb-10">
      <h2 className="relative flex items-center gap-2 uppercase text-md heading mb-one">
        <span className="absolute block p-3 text-white bg-neutral-500 -left-[57px]">
          {id === 'intro' && <MegaphoneIcon className="block w-5 h-5" aria-hidden="true" />}
          {id === 'skills-tooling' && <WrenchScrewdriverIcon className="block w-5 h-5" aria-hidden="true" />}
          {id === 'work-experience' && <WrenchScrewdriverIcon className="block w-5 h-5" aria-hidden="true" />}
          {id === 'education' && <WrenchScrewdriverIcon className="block w-5 h-5" aria-hidden="true" />}
        </span>
        {title}
      </h2>
      <div className="text-base pl-xxx">{children}</div>
    </section>
  )
}

export default function CV({ workExperiences }: HomeProps) {
  const { linksByFeatureFlag, flags } = useFeatureFlags()

  console.log({ workExperiences })

  return (
    <>
      <Head>
        <title>{generateMetaTitle('CV')}</title>
        {/* <meta name="description" content="" /> */}
      </Head>

      <Main>
        <article className="mb-three">
          {/* flex flex-col items-start justify-between md:items-end md:flex-row mb-one gap-one */}
          <header className="flex flex-col max-w-2xl mb-one gap-one">
            <h1 className="text-xl heading">Curriculum Vitae</h1>

            {/* 'bg-neutral-500 text-neutral-100 pl-quarter pr-half text-2xl heading uppercase focus:outline-none',
              { 'bg-primary-700 hover:bg-primary-900 focus:bg-primary-900': router.pathname === href },
              { 'focus:bg-neutral-700 hover:bg-neutral-700': router.pathname !== href } */}
          </header>

          {/*
            // 07590 674384
            // me@daveobrien.co.uk
            linkedin.com/in/daveobriencouk
          */}

          <div className="flex flex-wrap gap-three">
            <section className="max-w-2xl basis-96 shrink grow">
              <CvSection title="Intro" id="intro">
                <p className="text-base mb-one">
                  Hello, I&rsquo;m Dave, a seasoned Frontend Engineer with over 20 years of experience, based in Surrey
                  near J3 on the M3. I am proficient in web technologies like React, TypeScript, JavaScript, HTML, and
                  CSS, among others. With a deep passion for frontend engineering, I excel at designing intuitive user
                  experiences, crafting interfaces, integrating APIs, and building applications.
                </p>
                <p className="text-base mb-one">
                  My experience spans working with prominent clients like Vodafone, MMT Digital, Maersk, Virgin Media,
                  to smaller agencies and SMEs. Accustomed to agile methodologies, I thrive in collaborative settings,
                  effectively navigating time constraints, and am devoted to delivering high-quality solutions catered
                  to the end-user&rsquo;s needs.
                </p>
              </CvSection>

              <CvSection title="Skills & tooling" id="skills-tooling">
                <h3 className="uppercase heading">At work</h3>
                <CommaSeparatedList array={getSkills(SKILLS_WORK)} as="ul" className="mb-one" />

                <h3 className="text-base uppercase heading">At play</h3>
                <CommaSeparatedList array={getSkills(SKILLS_PLAY)} as="ul" className="mb-one" />
              </CvSection>

              <CvSection title="Work experience" id="work-experience">
                <ol>
                  {workExperiences
                    .sort((a, b) => dayjs(b.frontmatter.startDate).unix() - dayjs(a.frontmatter.startDate).unix())
                    .map(({ frontmatter, content, fileName }) => (
                      <li key={frontmatter.title} className="mb-one" id={fileName}>
                        {/* Correct tags? */}
                        <header className="flex flex-wrap mb-one gap-x-one">
                          <h3 className="text-lg uppercase heading basis-full shrink-0">{frontmatter.title}</h3>
                          <h4 className="uppercase text-md heading text-neutral-500">{frontmatter.company}</h4>
                          {frontmatter.contract && <span className="text-md heading text-neutral-500">[Contract]</span>}
                          {frontmatter.startDate && (
                            <p className="text-md heading text-neutral-400">
                              <time>{frontmatter.startDate}</time> - <time>{frontmatter.endDate}</time>
                            </p>
                          )}
                        </header>
                        <div
                          dangerouslySetInnerHTML={{ __html: md().render(content) }}
                          className="text-base prose mb-one prose-h4:font-black prose-h4:uppercase prose-h4:text-neutral-600"
                        />
                        {frontmatter.skills && (
                          <div className="text-base">
                            <h4 className="font-black uppercase">Skills & Tooling</h4>
                            <CommaSeparatedList array={getSkills(frontmatter.skills)} as="ul" />
                          </div>
                        )}
                      </li>
                    ))}
                </ol>
              </CvSection>

              <CvSection title="Education" id="education">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas provident voluptatem reprehenderit
                  accusamus pariatur nesciunt tenetur aspernatur vel voluptatum. Autem modi facere dignissimos labore
                  pariatur accusamus quod nesciunt necessitatibus exercitationem.
                </p>
              </CvSection>
            </section>
            <aside className="sticky top-0 self-start basis-60 pt-half -mt-half">
              <h2 className="uppercase text-md heading mb-one">CV Contents</h2>

              <ul className="text-sm mb-one">
                {/* ICONS? And on the headings in the content */}
                {/*
                  workExperiences...

                */}
                {MENU_ITEMS.map(({ text, children }) => {
                  const isActive = window.location.hash.slice(1) === kebabCase(text)
                  console.log({ isActive, hash: window.location.hash.slice(1), text, kebabCase: kebabCase(text) })

                  return (
                    <li key={text}>
                      <NextLink
                        href={`#${kebabCase(text)}`}
                        className={classNames(
                          'inline-block font-black uppercase  hover:bg-primary-600 text-neutral-100 pl-quarter px-quarter',
                          { 'bg-primary-700': isActive },
                          { 'bg-neutral-400': !isActive }
                        )}
                      >
                        {text}
                      </NextLink>
                      {text === 'Work Experience' && (
                        <ul className="pl-quarter">
                          {workExperiences.map(({ fileName, frontmatter }) => {
                            const isActive = window.location.hash.slice(1) === fileName

                            return (
                              <li key={text}>
                                <NextLink
                                  href={`#${fileName}`}
                                  className={classNames(
                                    'inline-block font-black uppercase hover:bg-primary-600  hover:text-white px-quarter',
                                    { 'bg-primary-700 text-white': isActive },
                                    { 'text-neutral-400': !isActive }
                                  )}
                                >
                                  {frontmatter.company}
                                </NextLink>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
              <a
                download
                href="/api/pages.pdf"
                className="block w-full text-base text-white uppercase rounded-sm heading bg-primary-700 px-one grow-0 hover:bg-primary-900 focus-ring leading-one-and-half my-quarter"
              >
                Download CV
              </a>
            </aside>

            {/*
          I write clear & intuitive code, I architect reusable components & modules, and am as comfortable building user interfaces & integrating APIs as I am writing backends in Node.js. I possess a problem-solving mindset with a thirst for learning that continues to mature my knowledge of front & back-end technologies.
Practiced in agile methodologies, I&apos;m a proven team player, and believe products are grown through cross-function collaboration. I&apos;m both flexible & adaptable, am sympathetic to timeframes & constraints, and thrive when cultivating a product that yields to the demands of the customer.
 */}

            {/* About Me
🔭 I’m currently working on: Studying for my IAAP Web Accessibility Specialist Certification in order to improve my web accessibility knowledge and skills.
🌱 I’m currently learning: 3D modeling and animation with Blender.
🤔 What I want to learn next: Improving my React game with Epic React.
📫 How to reach me: hello@${myfullname}.com
 */}

            {/* 🔧 Current tools of choice
React
TypeScript
Next.JS
Remix
Tailwind */}
          </div>
        </article>
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const workExperiences = getWorkExperiences()

  return {
    props: {
      workExperiences,
    },
  }
}
