/* eslint-disable import/no-anonymous-default-export */
import { renderToBuffer } from '@react-pdf/renderer'
import { MyDocument } from 'components/MyDocument'
import { getWorkExperiences } from 'models/cv/workExperience'
import { NextApiRequest, NextApiResponse } from 'next'

export const dynamic = 'force-dynamic'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const workExperiences = getWorkExperiences()

  const buffer = await renderToBuffer(<MyDocument workExperiences={workExperiences} />)

  res
    .status(200)
    .setHeader('Content-Type', 'application/pdf')
    .setHeader('Content-Disposition', `attachment; filename="pages.pdf"`)

  res.send(buffer)
}
