/* eslint-disable import/no-anonymous-default-export */
import fs from 'fs'
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

  const imageDir = path.resolve('./public/images')

  const buffer = await renderToBuffer(
    <CvPage
      education={education}
      imagePath={imageDir}
      intro={intro}
      skillsAndTooling={skillsAndTooling.skills.filter((item) => item.key !== 'all')}
      workExperiences={workExperiences}
    />
  )

  res
    .status(200)
    .setHeader('Content-Type', 'application/pdf')
    .setHeader('Content-Disposition', `attachment; filename="pages.pdf"`)

  res.send(buffer)
}
