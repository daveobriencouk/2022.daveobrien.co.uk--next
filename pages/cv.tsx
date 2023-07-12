import Head from 'next/head'
import { kebabCase } from 'lodash'
import NextLink from 'next/link'
import Main from 'components/Main'
import type { GrayMatterFile } from 'gray-matter'
import md from 'markdown-it'

import CommaSeparatedList from 'components/CommaSeparatedList'
import getSkills from 'helpers/getSkills'
import useFeatureFlags from 'hooks/useFeatureFlags'
import { generateMetaTitle } from 'utils/generateMetaTitle'

import { getWorkExperiences } from 'models/workExperience'
import { SKILLS_INFO } from 'constants/'

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
}

type HomeProps = {
  workExperiences: WorkExperience[]
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
              <section id="intro" className="pt-half -mt-half">
                <h2 className="uppercase text-md heading mb-one">Intro</h2>

                <div className="pl-one">
                  <p className="text-base mb-one">
                    {/* Summarise home */}
                    Hi, I&apos;m Dave. I&apos;m a senior frontend developer currently in contract at Vodafone / MMT
                    Digital. I&apos;m currently working on ... that is used. Based in Surrey (near J3 on the M3)
                  </p>
                </div>
              </section>

              <section id="skills-tooling" className="pt-half -mt-half">
                <h2 className="uppercase text-md heading mb-one">Skills & tooling</h2>

                <div className="text-base pl-one">
                  <h3 className="uppercase heading">At work</h3>

                  <CommaSeparatedList array={getSkills(SKILLS_WORK)} as="ul" className="mb-one" />

                  <h3 className="text-base uppercase heading">At play</h3>

                  <CommaSeparatedList array={getSkills(SKILLS_PLAY)} as="ul" className="mb-one" />

                  {false && (
                    <>
                      <h3 className="text-base uppercase heading">Over the years</h3>

                      <table className="w-full text-base border-collapse gap-quarter mb-one border-spacing-0">
                        <thead>
                          <tr>
                            <th>Skill / tool</th>
                            <th>Year started using</th>
                            <th>Year stopped using</th>
                            <th>Category</th>
                          </tr>
                        </thead>
                        <tbody>
                          {SKILLS_ALL.map((skill) => (
                            <tr key={skill.skill}>
                              <td>{SKILLS_INFO[skill.skill]?.text}</td>
                              <td>{skill.startYear}</td>
                              <td>{skill.endYear || '-'}</td>
                              <td>{skill.category}</td>
                            </tr>
                          ))}
                          {/* <tr> */}
                          {/* <td>Foundation</td>
                        <td>Rebase</td>
                        <td>Backbone</td>
                        <td>jQuery</td>
                        <td>PHP /Codeignigher</td>
                        <td>CMS: ExpressionEngine</td>
                        <td>CMS: Craft</td>
                        <td>CMS: Drupal</td>
                        <td>MySql</td>
                        <td>Ruby on Rails</td> */}
                          {/* HTML; Semantic Markup, Accessibility, Aria, Microdata, HAML, Pug, Mustache
CSS; CSS3, Responsive Design, Mobile First, BEM, SMACSS, Atomic Design,
SCSS, CSS Modules, PostCSS, MDL, Bourbon, Pure, Semantic UI, Foundation
JavaScript; ES.Next, React, Angular, Node.js, Express, OO & Modular Principles,
Functional Principles, MobX, Babel, JEST, Enzyme, Web APIs
Tooling; Git, Yarn, NPM, Grunt, Gulp, Webpack, Browserify, VirtualBox,
BrowserStack, Azure DevOps, Jira, Pivotal Tracker
CMS; ExpressionEngine, Craft, Contentful, GatsbyJS, Middleman, Drupal
PHP; OO Principles, Codeigniter, Yii, CMS Plugin Development,
Data; Redis, GraphQL, Web Storage, CouchDB / PouchDB, MySQL, MongoDB */}

                          {/* </tr> */}
                        </tbody>
                      </table>
                    </>
                  )}
                </div>
              </section>

              <section id="work-experience" className="pt-half -mt-half">
                <h2 className="uppercase text-md heading mb-one">Work experience</h2>
                <div className="pl-one">
                  <ol>
                    {workExperiences.map(({ frontmatter, content }) => (
                      <li key={frontmatter.title}>
                        {/* Correct tags? */}
                        <header className="flex flex-wrap mb-one gap-x-one">
                          <h3 className="text-lg uppercase heading basis-full shrink-0">{frontmatter.title}</h3>
                          <h4 className="uppercase text-md heading text-neutral-500">{frontmatter.company}</h4>
                          {frontmatter.startDate && (
                            <p className="text-md heading text-neutral-400">
                              <time>{frontmatter.startDate}</time> - <time>{frontmatter.endDate}</time>
                            </p>
                          )}
                        </header>
                        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} className="text-base mb-one" />
                        {frontmatter.skills && (
                          <div className="text-base">
                            <h4 className="font-black uppercase">Skills & Tooling</h4>
                            <CommaSeparatedList array={getSkills(frontmatter.skills)} as="ul" />
                          </div>
                        )}
                      </li>
                    ))}

                    {/* <li>
                      <header className="flex flex-wrap mb-one gap-x-one">
                        <h3 className="text-lg uppercase heading basis-full shrink-0">Senior React Developer</h3>
                        <h4 className="uppercase text-md heading text-neutral-500">Vodafone/MMT Digital</h4>
                        <p className="text-md heading text-neutral-400">
                          <time>Apr 2017</time> - <time>Current</time>
                        </p>
                      </header>
                      <p className="text-base mb-one">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas adipisci earum nobis odio illum
                        maxime incidunt architecto aut eveniet? Autem architecto odio, fuga quisquam quas quo beatae
                        nostrum? Sint, nemo?
                      </p>
                      <h4 className="text-base font-black uppercase">Responsibilities</h4>
                      <ul className="text-base mb-one">
                        <li>Lorem ipsum dolor, sit amet consectetur</li>
                      </ul>
                      <h4 className="text-base font-black uppercase">Achievements</h4>
                      <ul className="text-base mb-one">
                        <li>Lorem ipsum dolor, sit amet consectetur</li>
                      </ul>
                      <h4 className="text-base font-black uppercase">Technology Stack</h4>
                      <p className="text-base mb-one">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas adipisci earum nobis odio illum
                        maxime incidunt architecto aut eveniet? Autem architecto odio, fuga quisquam quas quo beatae
                        nostrum? Sint, nemo?
                      </p>
                    </li> */}
                  </ol>
                </div>
              </section>
            </section>
            <aside className="sticky top-0 self-start basis-60 pt-half -mt-half">
              <h2 className="uppercase text-md heading mb-one">CV Contents</h2>

              <ul className="text-sm mb-one">
                {/* ICONS? And on the headings in the content */}
                {MENU_ITEMS.map(({ text, children }) => (
                  <li key={text}>
                    <NextLink
                      href={`#${kebabCase(text)}`}
                      className="inline-block font-black uppercase bg-neutral-400 hover:bg-primary-600 text-neutral-100 pl-quarter px-quarter"
                    >
                      {text}
                    </NextLink>
                    {children && (
                      <ul className="pl-quarter">
                        {children.map(({ text }) => (
                          <li key={text}>
                            <NextLink
                              href={`#${kebabCase(text)}`}
                              className="inline-block font-black uppercase hover:bg-primary-600 text-neutral-400 hover:text-white px-quarter"
                            >
                              {text}
                            </NextLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <button className="w-full text-base text-white uppercase rounded-sm heading bg-primary-700 px-one grow-0 hover:bg-primary-900 focus-ring leading-one-and-half my-quarter">
                Download CV
              </button>
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
