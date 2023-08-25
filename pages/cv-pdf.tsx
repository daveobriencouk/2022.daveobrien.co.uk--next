import { getWorkExperiences } from 'models/cv/workExperience'
import { MyDocument } from 'components/MyDocument'
import { getIntro } from 'models/cv/intro'
import { getSkillsAndTooling } from 'models/cv/skillsAndTooling'
import { getEducation } from 'models/cv/education'
import { getMenuItems } from 'models/cv/menuItems'
import { PDFViewer } from '@react-pdf/renderer'

export default function CvPdf({ education, intro, skillsAndTooling, skillsAndToolingAll, workExperiences }) {
  return (
    <PDFViewer width={1000} height={1500}>
      <MyDocument
        education={education}
        intro={intro}
        skillsAndTooling={skillsAndTooling}
        skillsAndToolingAll={skillsAndToolingAll}
        workExperiences={workExperiences}
      />
    </PDFViewer>
  )
}

export async function getStaticProps() {
  const intro = getIntro()
  const skillsAndTooling = getSkillsAndTooling()
  const workExperiences = getWorkExperiences()
  const education = getEducation()

  const menuItems = getMenuItems({ workExperiences })

  return {
    props: {
      education,
      intro,
      menuItems,
      skillsAndTooling: skillsAndTooling.skills.filter((item) => item.key !== 'all'),
      skillsAndToolingAll: skillsAndTooling.skills.find((item) => item.key === 'all'),
      workExperiences,
    },
  }
}
