import { getWorkExperiences } from 'models/cv/workExperience'
import { CvPage } from 'components/CvPage'
import { getIntro } from 'models/cv/intro'
import { getSkillsAndTooling } from 'models/cv/skillsAndTooling'
import { getEducation } from 'models/cv/education'
import { getMenuItems } from 'models/cv/menuItems'
import { PDFViewer } from '@react-pdf/renderer'

type CvPdfProps = {
  education: ReturnType<typeof getEducation>
  intro: ReturnType<typeof getIntro>
  skillsAndTooling: ReturnType<typeof getSkillsAndTooling>['skills']
  workExperiences: ReturnType<typeof getWorkExperiences>
}

export default function CvPdf({ education, intro, skillsAndTooling, workExperiences }: CvPdfProps) {
  return (
    <PDFViewer width={1000} height={1500}>
      <CvPage
        education={education}
        imagePath="/images"
        intro={intro}
        skillsAndTooling={skillsAndTooling}
        workExperiences={workExperiences}
      />
    </PDFViewer>
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
      skillsAndTooling: skillsAndTooling.skills.filter((item) => item.key !== 'all'),
      workExperiences,
    },
  }
}
