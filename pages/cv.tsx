import { useState } from 'react'
import Head from 'next/head'
import type { GrayMatterFile } from 'gray-matter'
import md from 'markdown-it'
import dayjs from 'dayjs'
import { Waypoint } from 'react-waypoint'
import kebabCase from 'lodash/kebabCase'
import { BriefcaseIcon, FingerPrintIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline'

import AsideBlock from 'components/AsideBlock'
import CvSection from 'components/CvSection'
import Main from 'components/Main'
import Table from 'components/Table'
import Tabs from 'components/Tabs'
import WorkExperience from 'components/WorkExperience'
import { EDUCATION_COLUMNS, EDUCATION_ROWS, FOO, FormattedSkill, PrimaryArea } from 'constants/'
import { getWorkExperiences } from 'models/workExperience'
import { generateMetaTitle } from 'utils/generateMetaTitle'
import { getIntro } from 'models/intro'

type MenuItem = {
  text: string
  children?: MenuItem[]
}

type WorkExperience = {
  frontmatter: GrayMatterFile<string>['data']
  content: GrayMatterFile<string>['content']
  fileName: string
}

type PrimaryAreaIconProps = {
  primaryArea: PrimaryArea
}

function PrimaryAreaIcon({ primaryArea }: PrimaryAreaIconProps) {
  const iconProps = {
    className: 'block w-5 h-5',
    'aria-hidden': true,
  }

  switch (primaryArea) {
    case 'work':
      return <BriefcaseIcon {...iconProps} />
    case 'personal':
      return <FingerPrintIcon {...iconProps} />
    case 'past':
      return <ArchiveBoxArrowDownIcon {...iconProps} />
    default:
      return null
  }
}

type CvPageProps = {
  workExperiences: WorkExperience[]
}

/**
 * * Update Skills & tooling FOO constant... come from modal? Create a CV model?
 *   * Yes... do that...
 *   * intro, menuItems, workExperiences, skillsAndTooling, education
 * * Update getStaticProps to use the CV model, get types right
 */

export default function CvPage({ intro, menuItems, workExperiences }: CvPageProps) {
  const [active, setActive] = useState(null)

  function handleEnter({ previousPosition, currentPosition, event }, id) {
    if (currentPosition === 'inside') {
      setActive(id)
    }
    console.log('enter', { previousPosition, currentPosition, event, id })
  }

  function handleLeave({ previousPosition, currentPosition, event }, id) {
    if (currentPosition === 'inside') {
      setActive(id)
    }

    console.log('leave', { previousPosition, currentPosition, event, id })
  }

  return (
    <>
      <Head>
        <title>{generateMetaTitle('CV')}</title>
      </Head>

      <Main>
        <article className="mb-three">
          <header className="flex flex-col max-w-2xl mb-one gap-one">
            <h1 className="text-xl heading">Curriculum Vitae</h1>
          </header>

          <div className="flex flex-wrap gap-three">
            <section className="max-w-2xl basis-96 shrink grow">
              <CvSection title="Intro" id="intro">
                <div dangerouslySetInnerHTML={{ __html: md().render(intro) }} className="prose" />
              </CvSection>

              <CvSection title="Skills & tooling" id="skills-and-tooling">
                <Tabs data={FOO}>
                  {({ skills }: { skills: FormattedSkill[] }) => (
                    // https://codesandbox.io/s/happy-waterfall-437kdg
                    <ul className="flex gap-x-4 flex-wrap">
                      {skills.map(({ text, href, key: skillKey, primaryArea }) => (
                        <li key={`${skillKey}-skill`}>
                          <a href={href} className="flex gap-1 items-center hover:text-primary-900">
                            <PrimaryAreaIcon primaryArea={primaryArea} />
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </Tabs>
              </CvSection>

              <CvSection title="Work experience" id="work-experience">
                <ol>
                  {workExperiences.map(
                    ({
                      frontmatter: { active, company, contract, endDate, id, skills, startDate, title },
                      content,
                    }) => (
                      <li key={`experience-${id}`} className="mb-one last:mb-0">
                        <Waypoint
                          onEnter={(waypoints) => handleEnter(waypoints, id)}
                          onLeave={(waypoints) => handleLeave(waypoints, id)}
                          // topOffset="0%"
                          bottomOffset="99.9%"
                        >
                          <WorkExperience
                            active={active}
                            company={company}
                            content={content}
                            contract={contract}
                            endDate={endDate}
                            id={id}
                            skills={skills}
                            startDate={startDate}
                            title={title}
                          />
                        </Waypoint>
                      </li>
                    )
                  )}
                </ol>
              </CvSection>

              <CvSection title="Education" id="education">
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      {EDUCATION_COLUMNS.map(({ column, isSmHidden }) => (
                        <Table.Th key={column} isSmHidden={isSmHidden}>
                          {column}
                        </Table.Th>
                      ))}
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {EDUCATION_ROWS.map(({ years, institution, qualification, grade }) => (
                      <Table.Tr key={years}>
                        <Table.Td className="align-text-top">{years}</Table.Td>
                        <Table.Td className="font-bold">
                          {institution}
                          <dl className="font-normal lg:hidden leading-one">
                            <dt className="sr-only">Qualification</dt>
                            <dd className="truncate text-neutral-500">{qualification}</dd>
                            <dt className="sr-only">Grade</dt>
                            <dd className="truncate text-neutral-500">{grade}</dd>
                          </dl>
                        </Table.Td>
                        <Table.Td isSmHidden={true}>{qualification}</Table.Td>
                        <Table.Td isSmHidden={true}>{grade}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </CvSection>
            </section>

            <aside className="sticky top-0 self-start basis-60 pt-half -mt-half">
              <AsideBlock title="CV Contents">
                <AsideBlock.List items={menuItems} />
                <AsideBlock.CallToAction href="/api/pages.pdf">Download CV</AsideBlock.CallToAction>
              </AsideBlock>
            </aside>
          </div>
        </article>
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const intro = getIntro()

  const workExperiences = getWorkExperiences()

  const menuItems: MenuItem[] = [
    {
      text: 'Intro',
      id: 'intro',
    },
    {
      text: 'Skills & Tooling',
      id: 'skills-and-tooling',
    },
    {
      text: 'Work Experience',
      id: 'work-experience',
      children: workExperiences.map(({ frontmatter: { company, startDate } }) => {
        return {
          id: generateWorkExperienceId({ company, startDate }),
          text: company,
        }
      }),
    },
    {
      text: 'Education',
      id: 'education',
    },
  ]

  return {
    props: {
      intro,
      menuItems,
      workExperiences,
    },
  }
}

function generateWorkExperienceId({ company, startDate }: { company: string; startDate: string }) {
  return company === 'Freelance' ? `freelance-${dayjs(startDate).format('YYYY')}` : kebabCase(company)
}
