import { useState } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import type { GrayMatterFile } from 'gray-matter'
import md from 'markdown-it'
import dayjs from 'dayjs'
import classNames from 'classnames'
import kebabCase from 'lodash/kebabCase'
import { Disclosure, Tab, Transition } from '@headlessui/react'
import {
  ChevronUpIcon,
  DocumentTextIcon,
  MegaphoneIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon,
  FingerPrintIcon,
  ArchiveBoxArrowDownIcon,
} from '@heroicons/react/24/outline'
import { Waypoint } from 'react-waypoint'

import CommaSeparatedList from 'components/CommaSeparatedList'
import Main from 'components/Main'
import { FOO } from 'constants/'
import getSkills from 'helpers/getSkills'
import useFeatureFlags from 'hooks/useFeatureFlags'
import { getWorkExperiences } from 'models/workExperience'
import { generateMetaTitle } from 'utils/generateMetaTitle'

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
const SKILLS_WORK = [
  'react',
  'typescript',
  'jest',
  'cypress',
  'reactTestingLibrary',
  'styledComponents',
  'ajv',
  'jsonSchema',
  'reactQuery',
  'mobx',
  'lerna',
  'sonarqube',
  'enzyme',
  'redis',
  'cssModules',
  'scss',
  'ado',
  'html',
  'javascript',
  'css',
  'datadog',
  'babel',
  'webpack',
  'vite',
]

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

const SKILLS_PAST = ['react']

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

const EDUCATION_COLUMNS = [
  {
    column: 'Years',
    isSmHidden: false,
  },
  {
    column: 'Institution',
    isSmHidden: false,
  },
  {
    column: 'Qualification',
    isSmHidden: true,
  },
  {
    column: 'Grade',
    isSmHidden: true,
  },
]

const EDUCATION = [
  {
    years: '1997-1999',
    institution: 'Collingwood 6th Form',
    qualification: 'GNVQ Art & Design',
    grade: 'Distinction',
  },
  {
    years: '1993-1997',
    institution: 'Collingwood College',
    qualification: '10 GCSEs',
    grade: 'A-C',
  },
]

function CvSection({ title, children, id }: { title: string; children: React.ReactNode; id: string }) {
  return (
    <section
      id={id}
      className="pl-one ml-half border-l-[0.875rem] py-half -mt-half border-l-neutral-200 mb-one-and-half"
    >
      <h2 className="relative flex items-center gap-2 uppercase text-md heading mb-one">
        <span className="absolute block p-3 text-white bg-neutral-500 -left-[3.55rem]">
          {id === 'intro' && <MegaphoneIcon className="block w-5 h-5" aria-hidden="true" />}
          {id === 'skills-tooling' && <WrenchScrewdriverIcon className="block w-5 h-5" aria-hidden="true" />}
          {id === 'work-experience' && <WrenchScrewdriverIcon className="block w-5 h-5" aria-hidden="true" />}
          {id === 'education' && <WrenchScrewdriverIcon className="block w-5 h-5" aria-hidden="true" />}
        </span>
        {title}
      </h2>
      <div className="text-base">{children}</div>
    </section>
  )
}

export default function CV({ workExperiences }: HomeProps) {
  const { linksByFeatureFlag, flags } = useFeatureFlags()

  const [active, setActive] = useState(null)

  console.log({ active })

  // console.log({ workExperiences })

  function handleEnter({ previousPosition, currentPosition, event }, foo) {
    if (currentPosition === 'inside') {
      setActive(foo)
    }
    console.log('enter', { previousPosition, currentPosition, event, foo })
  }

  function handleLeave({ previousPosition, currentPosition, event }, foo) {
    if (currentPosition === 'inside') {
      setActive(foo)
    }

    console.log('leave', { previousPosition, currentPosition, event, foo })
  }

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
                  CSS, among others. With a deep passion for frontend engineering, I excel at crafting high-quality
                  interfaces, seamlessly integrating APIs, and building robust applications.
                </p>
                <p className="text-base">
                  My experience spans working with prominent clients like Vodafone, MMT Digital, Maersk, Virgin Media,
                  to smaller agencies and SMEs. Accustomed to agile methodologies, I thrive in collaborative settings,
                  effectively navigating time constraints, and am devoted to delivering high-quality solutions catered
                  to the end-user&rsquo;s needs.
                </p>
              </CvSection>

              <CvSection title="Skills & tooling" id="skills-tooling">
                <Tab.Group onChange={(index) => console.log(Object.entries(FOO)[index])}>
                  {/* <Tab.List className="flex gap-x-2 gap-y-2 mb-one pt-half pb-half flex-wrap"> */}
                  <Tab.List className="flex gap-x-2 gap-y-0 mb-one flex-wrap">
                    {FOO.map(({ key, title }) => (
                      <Tab
                        key={key}
                        className={({ selected }) =>
                          classNames(
                            'font-black uppercase text-sm hover:bg-primary-600 text-neutral-100 pl-quarter px-quarter',
                            selected ? 'bg-primary-700' : 'bg-neutral-400'
                          )
                        }
                      >
                        {title}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels>
                    {FOO.map(({ key: panelKey, skills }) => (
                      <Tab.Panel key={`${panelKey}-panel`}>
                        <ul className="flex gap-x-4 flex-wrap">
                          {skills.map(({ text, href, key: skillKey, primaryArea }) => (
                            <li key={`${skillKey}-skill`}>
                              <a href={href} className="flex gap-1 items-center  hover:text-primary-900">
                                {primaryArea === 'work' && (
                                  <BriefcaseIcon className="block w-5 h-5" aria-hidden="true" />
                                )}
                                {primaryArea === 'personal' && (
                                  <FingerPrintIcon className="block w-5 h-5" aria-hidden="true" />
                                )}
                                {primaryArea === 'past' && (
                                  <ArchiveBoxArrowDownIcon className="block w-5 h-5" aria-hidden="true" />
                                )}
                                {text}
                              </a>
                            </li>
                            // https://codesandbox.io/s/happy-waterfall-437kdg
                          ))}
                        </ul>
                        {/* <CommaSeparatedList array={getSkills()} as="ul" className="mb-one" /> */}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </CvSection>

              <CvSection title="Work experience" id="work-experience">
                <ol>
                  {workExperiences
                    .sort((a, b) => dayjs(b.frontmatter.startDate).unix() - dayjs(a.frontmatter.startDate).unix())
                    .map(({ frontmatter, content, fileName }) => (
                      <li key={`experience-${fileName}`}>
                        <Waypoint
                          onEnter={(waypoints) => handleEnter(waypoints, fileName)}
                          onLeave={(waypoints) => handleLeave(waypoints, fileName)}
                          // topOffset="0%"
                          bottomOffset="99.9%"
                        >
                          <Disclosure as="div" id={fileName}>
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  as="header"
                                  className={classNames(
                                    'flex flex-wrap cursor-pointer mb-one gap-x-one hover:text-primary-700 group',
                                    {
                                      'text-orange-700': active === fileName,
                                    }
                                  )}
                                >
                                  {frontmatter.startDate && (
                                    <p
                                      className={classNames(
                                        'text-md heading text-neutral-400 group-hover:text-primary-400',
                                        {
                                          'text-orange-400': active === fileName,
                                        }
                                      )}
                                    >
                                      <time>{frontmatter.startDate}</time> - <time>{frontmatter.endDate}</time>
                                    </p>
                                  )}
                                  <h3 className="relative flex items-baseline gap-6 text-lg uppercase heading basis-full shrink-0">
                                    <ChevronUpIcon
                                      className={`${
                                        open ? 'rotate-180 transform' : ''
                                      } h-10 w-10 text-neutral-400 group-hover:text-primary-400 absolute stroke-2 -left-[54px] top-2 transition-transform`}
                                    />
                                    {frontmatter.title}
                                    {frontmatter.contract && (
                                      <DocumentTextIcon
                                        className="block w-6 h-6 stroke-2 text-neutral-500 group-hover:text-primary-500"
                                        aria-hidden="true"
                                        aria-label="Contract position"
                                      />
                                    )}
                                  </h3>
                                  <h4 className="uppercase text-md heading text-neutral-500 group-hover:text-primary-500">
                                    {frontmatter.company}
                                  </h4>
                                </Disclosure.Button>
                                <Transition
                                  enter="transition duration-200 ease-out"
                                  enterFrom="transform opacity-0"
                                  enterTo="transform opacity-100"
                                  leave="transition duration-150 ease-out"
                                  leaveFrom="transform opacity-100"
                                  leaveTo="transform opacity-0"
                                >
                                  <Disclosure.Panel>
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
                                  </Disclosure.Panel>
                                </Transition>
                              </>
                            )}
                          </Disclosure>
                        </Waypoint>
                      </li>
                    ))}
                </ol>
              </CvSection>

              <CvSection title="Education" id="education">
                <table className="min-w-full divide-y divide-gray-300 leading-[calc(1.75rem-1px)]">
                  <thead>
                    <tr>
                      {EDUCATION_COLUMNS.map(({ column, isSmHidden }) => (
                        <th
                          scope="col"
                          className={classNames('px-one py-0 -mb-[1px] text-left font-bold pl-0 border-0', {
                            'hidden lg:table-cell': isSmHidden,
                          })}
                          key={column}
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {EDUCATION.map(({ years, institution, qualification, grade }) => (
                      <tr key={years}>
                        <td className="whitespace-nowrap px-one py-0 pl-0 align-text-top">{years}</td>
                        <td className="whitespace-nowrap px-one py-0 font-bold pl-0">
                          {institution}
                          <dl className="font-normal lg:hidden leading-one">
                            <dt className="sr-only">Qualification</dt>
                            <dd className="truncate text-neutral-500">{qualification}</dd>
                            <dt className="sr-only">Grade</dt>
                            <dd className="truncate text-neutral-500">{grade}</dd>
                          </dl>
                        </td>
                        <td className="hidden lg:table-cell whitespace-nowrap px-one py-0 pl-0">{qualification}</td>
                        <td className="hidden lg:table-cell whitespace-nowrap px-one py-0 pl-0">{grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                  // console.log({ isActive, hash: window.location.hash.slice(1), text, kebabCase: kebabCase(text) })

                  return (
                    <li key={`menu-222-${kebabCase(text)}`}>
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
                              <li key={fileName}>
                                <NextLink
                                  href={`#${fileName}`}
                                  className={classNames(
                                    'inline-block font-black uppercase hover:bg-primary-600  hover:text-white px-quarter',
                                    { 'bg-primary-700 text-white': isActive || active === fileName },
                                    { 'text-neutral-400': !isActive || active !== fileName }
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
                className="block w-full text-md text-white uppercase heading bg-primary-700 px-one grow-0 hover:bg-primary-900 focus-ring leading-two"
              >
                Download CV
              </a>
            </aside>
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
