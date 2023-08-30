/* eslint-disable jsx-a11y/alt-text */
import { Page, View, Text, Document, Image, Link } from '@react-pdf/renderer'

import { spacing, styles } from './index.styles'
import { ContactDetails } from './components/ContactDetails'
import { MarkdownToPdf } from './components/MarkdownToPdf'
import type { getEducation } from 'models/cv/education'
import type { getIntro } from 'models/cv/intro'
import type { getSkillsAndTooling } from 'models/cv/skillsAndTooling'
import type { getWorkExperiences } from 'models/cv/workExperience'

type MyDocumentProps = {
  education: ReturnType<typeof getEducation>
  imagePath: string
  intro: ReturnType<typeof getIntro>
  skillsAndTooling: ReturnType<typeof getSkillsAndTooling>['skills']
  workExperiences: ReturnType<typeof getWorkExperiences>
}

export function MyDocument({ education, imagePath, intro, skillsAndTooling, workExperiences }: MyDocumentProps) {
  console.log({ skillsAndTooling })
  return (
    <Document producer="foo" creator="foo" title="Pages">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image src={`${imagePath}/logo-strapline.png`} />
          </View>
          <ContactDetails imagePath={imagePath} includeLocationDetail={true} />
        </View>

        <View style={styles.introAndSkills}>
          <View style={styles.intro}>
            <Text style={styles.sectionHeading}>Intro</Text>
            <MarkdownToPdf content={intro} />
          </View>
          <View style={styles.skills}>
            <Text style={styles.sectionHeading}>Skills & Tooling</Text>
            <View>
              {skillsAndTooling.map((skillCategory) => {
                return (
                  <View style={styles.skillsList} key={skillCategory.key}>
                    <Text style={styles.skillCategory}>{skillCategory.title}: </Text>
                    {skillCategory.skills.map((skill, index) => {
                      const length = skillCategory.skills.length
                      const isPenultimateItem = index === length - 2
                      const isLastItem = index === length - 1
                      return (
                        <Text style={styles.skill} key={skill.key}>
                          {skill.text}
                          {isLastItem ? '.' : isPenultimateItem ? ' and ' : ', '}
                        </Text>
                      )
                    })}
                  </View>
                )
              })}
            </View>
          </View>
        </View>

        <Text style={styles.sectionHeading}>Work Experience</Text>

        <View style={styles.workExperiencesAndEducation}>
          <View style={styles.workExperiencesMain}>
            {workExperiences.slice(0, 3).map(({ frontmatter, content }) => {
              console.log('frontmatter', frontmatter.skills)
              return (
                <View style={styles.workExperience} key={frontmatter.id}>
                  <View style={styles.workExperienceHeading}>
                    <Text style={styles.workExperienceJobTitle}>{frontmatter.title}</Text>
                    <Text style={styles.workExperienceCompany}>{frontmatter.company}</Text>
                    {frontmatter.startDate && (
                      <Text style={styles.workExperienceDate}>
                        {frontmatter.startDate} - {frontmatter.endDate}
                      </Text>
                    )}
                  </View>
                  <View style={styles.workExperienceContent} minPresenceAhead={1}>
                    <MarkdownToPdf content={content} />
                    {frontmatter.skills && (
                      <View style={styles.workExperienceSkills}>
                        <Text style={styles.h4}>Skills & Tooling</Text>
                        <View style={styles.skillsList}>
                          {frontmatter.skills.map((skill, index) => {
                            const length = frontmatter.skills?.length || 0
                            const isPenultimateItem = index === length - 2
                            const isLastItem = index === length - 1
                            return (
                              <Text style={styles.skill} key={skill.text}>
                                {skill.text}
                                {isLastItem ? '.' : isPenultimateItem ? ' and ' : ', '}
                              </Text>
                            )
                          })}
                        </View>
                      </View>
                    )}
                  </View>
                </View>
              )
            })}
          </View>
          <View style={styles.secondaryWorkExperiences}>
            {workExperiences.slice(3).map(({ frontmatter }, index) => {
              const length = workExperiences.length - 3
              const isLastItem = index === length - 1
              return (
                <View
                  style={{
                    ...styles.secondaryWorkExperience,
                    marginBottom: isLastItem ? 0 : spacing(2),
                  }}
                  key={frontmatter.id}
                >
                  <View style={styles.secondaryWorkExperienceLeft} break>
                    {frontmatter.startDate && (
                      <Text style={styles.secondaryWorkExperienceDate}>
                        {frontmatter.startDate} - {frontmatter.endDate}
                      </Text>
                    )}
                  </View>
                  <View style={styles.secondaryWorkExperienceRight} break>
                    <Text style={styles.secondaryWorkExperienceJobTitle}>{frontmatter.title}</Text>
                    <Text style={styles.secondaryWorkExperienceCompany}>{frontmatter.company}</Text>
                  </View>
                </View>
              )
            })}
          </View>
          <View style={styles.educationAndContact}>
            <View style={styles.education}>
              <Text style={styles.sectionHeading}>Education</Text>
              {education.rows.map(({ years, institution, qualification, grade }) => (
                <View key={institution} style={styles.educationPeriod}>
                  <Text>{years}</Text>
                  <Text style={styles.educationInstitution}>{institution}</Text>
                  <Text>
                    {qualification} ({grade})
                  </Text>
                </View>
              ))}
            </View>
            <View style={styles.secondaryContact}>
              <View style={styles.smallLogo}>
                <Image src={`${imagePath}/logo.png`} />
              </View>
              <ContactDetails imagePath={imagePath} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
