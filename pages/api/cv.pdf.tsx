/* eslint-disable import/no-anonymous-default-export */
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'

import { renderToBuffer } from '@react-pdf/renderer'
import { CvPage } from 'components/CvPage'
import { getEducation } from 'models/cv/education'
import { getIntro } from 'models/cv/intro'
import { getSkillsAndTooling } from 'models/cv/skillsAndTooling'
import { getWorkExperiences } from 'models/cv/workExperience'

export const dynamic = 'force-dynamic'

export default async function (_: NextApiRequest, res: NextApiResponse) {
  const education = getEducation()
  const intro = getIntro()
  const skillsAndTooling = getSkillsAndTooling()
  const workExperiences = getWorkExperiences()

  // TODO: Refactor skills
  // This is absolutely horrible, but it's a quick fix to remove skills that are not needed on the PDF
  const hackyFilterForCurrentSkillsAndTooling = skillsAndTooling.skills
    .filter((item) => item.key !== 'all')
    .map((item) => {
      return {
        ...item,
        skills: item.skills.filter((skill) => {
          // Keep all skills under these categories
          if (skill.categories.includes('data') || skill.categories.includes('content')) {
            return true // Keep all skills under these categories
          }
          // Remove skills where the primaryArea is 'past' for other categories
          return skill.primaryArea !== 'past'
        }),
      }
    })

  const imageDir = path.resolve('./public/images')

  const buffer = await renderToBuffer(
    <CvPage
      education={education}
      imagePath={imageDir}
      intro={intro}
      skillsAndTooling={hackyFilterForCurrentSkillsAndTooling}
      workExperiences={workExperiences}
    />
  )

  const version = '20230919'

  res
    .status(200)
    .setHeader('Content-Type', 'application/pdf')
    .setHeader('Content-Disposition', `attachment; filename="Dave O'Brien's CV - ${version}.pdf"`)

  res.send(buffer)
}
