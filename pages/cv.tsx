import { useState } from 'react'
import Head from 'next/head'
import md from 'markdown-it'
import { Waypoint } from 'react-waypoint'
import * as fathom from 'fathom-client'

import AsideBlock from 'components/AsideBlock'
import CvSection from 'components/CvSection'
import Main from 'components/Main'
import Table from 'components/Table'
import Tabs from 'components/Tabs'
import SkillPrimaryAreaIcon from 'components/SkillPrimaryAreaIcon'
import WorkExperience from 'components/WorkExperience'
import { getEducation } from 'models/cv/education'
import { getIntro } from 'models/cv/intro'
import { getMenuItems } from 'models/cv/menuItems'
import { getSkillsAndTooling } from 'models/cv/skillsAndTooling/'
import { getWorkExperiences } from 'models/cv/workExperience'
import type { FormattedSkill } from 'models/cv/skillsAndTooling/types'
import { generateMetaTitle } from 'utils/generateMetaTitle'

type CvPageProps = {
  education: ReturnType<typeof getEducation>
  intro: ReturnType<typeof getIntro>
  menuItems: ReturnType<typeof getMenuItems>
  skillsAndTooling: ReturnType<typeof getSkillsAndTooling>
  workExperiences: ReturnType<typeof getWorkExperiences>
}

export default function CvPage({ education, intro, menuItems, skillsAndTooling, workExperiences }: CvPageProps) {
  const [active, setActive] = useState(null)

  // function handleEnter({ previousPosition, currentPosition, event }, id) {
  //   if (currentPosition === 'inside') {
  //     setActive(id)
  //   }
  //   console.log('enter', { previousPosition, currentPosition, event, id })
  // }

  // function handleLeave({ previousPosition, currentPosition, event }, id) {
  //   if (currentPosition === 'inside') {
  //     setActive(id)
  //   }

  //   console.log('leave', { previousPosition, currentPosition, event, id })
  // }

  return (
    <>
      <Head>
        <title>{generateMetaTitle('CV')}</title>
      </Head>

      <Main>
        <article className="mb-three">
          <header className="flex flex-col max-w-2xl mb-one gap-one">
            <h1 className="text-xl heading" id="main-heading">
              Curriculum Vitae
            </h1>
          </header>

          <div className="flex flex-wrap gap-three">
            <section className="max-w-2xl basis-96 shrink grow">
              <CvSection title="Intro" id="intro">
                <div dangerouslySetInnerHTML={{ __html: md().render(intro) }} className="prose" />
              </CvSection>

              <CvSection title="Skills & tooling" id="skills-and-tooling">
                <Tabs data={skillsAndTooling.skills}>
                  {({ skills }: { skills: FormattedSkill[] }) => (
                    // https://codesandbox.io/s/happy-waterfall-437kdg
                    <ul className="flex gap-x-4 flex-wrap">
                      {skills.map(({ text, href, key: skillKey, primaryArea }) => (
                        <li key={`${skillKey}-skill`}>
                          <a href={href} className="flex gap-1 items-center hover:text-primary-900">
                            <SkillPrimaryAreaIcon primaryArea={primaryArea} />
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
                    ({ frontmatter: { company, contract, endDate, id, skills, startDate, title }, content }) => (
                      <li key={`experience-${id}`} className="mb-one last:mb-0">
                        <Waypoint
                          // onEnter={(waypoints) => handleEnter(waypoints, id)}
                          // onLeave={(waypoints) => handleLeave(waypoints, id)}
                          // topOffset="0%"
                          bottomOffset="99.9%"
                        >
                          <WorkExperience
                            // active={active}
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
                      {education.columns.map(({ column, isSmHidden }) => (
                        <Table.Th key={column} isSmHidden={isSmHidden}>
                          {column}
                        </Table.Th>
                      ))}
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {education.rows.map(({ years, institution, qualification, grade }) => (
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
                <AsideBlock.CallToAction
                  href="/api/cv.pdf"
                  onClick={() => {
                    fathom.trackGoal('YGCYLC2Z', 0)
                  }}
                >
                  Download CV
                </AsideBlock.CallToAction>
              </AsideBlock>
            </aside>
          </div>
        </article>
      </Main>
    </>
  )
}

export async function getStaticProps() {
  const education = getEducation()
  const intro = getIntro()
  const skillsAndTooling = getSkillsAndTooling()
  const workExperiences = getWorkExperiences()

  const menuItems = getMenuItems({ workExperiences })

  return {
    props: {
      education,
      intro,
      menuItems,
      skillsAndTooling,
      workExperiences,
    },
  }
}
