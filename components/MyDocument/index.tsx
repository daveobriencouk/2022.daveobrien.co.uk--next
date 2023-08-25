/* eslint-disable jsx-a11y/alt-text */
import { Page, View, Text, Document, Image, Link } from '@react-pdf/renderer'
import ReactMarkdown from 'react-markdown'

import { spacing, styles } from './index.styles'

function ListItem({ children, isPenultimateItem, ...props }) {
  return (
    <View {...props} style={styles.listItem} break={isPenultimateItem}>
      <Text style={styles.listItemBullet}>&bull;</Text>
      <Text>{children}</Text>
    </View>
  )
}

function MarkdownToPDF({ content }) {
  return (
    <ReactMarkdown
      children={content}
      components={{
        p: ({ node, index, ...props }) => {
          const isFirstChild = index === 0
          const style = {
            ...styles.para,
            fontWeight: isFirstChild ? 400 : 300,
          }

          return <Text {...props} style={style} />
        },
        h4: ({ node, ...props }) => <Text {...props} style={styles.h4} />,
        ul: ({ node, ...props }) => <View {...props} style={styles.list} />,
        li: ({ node, children, siblingCount, index, ...props }) => {
          const isPenultimateItem = index === siblingCount - 2

          return (
            <ListItem {...props} isPenultimateItem={isPenultimateItem}>
              {children}
            </ListItem>
          )
        },
      }}
      includeElementIndex
    />
  )
}

function ContactDetails({ includeLocationDetail }) {
  return (
    <View style={styles.contact}>
      <View style={styles.contactDetail}>
        <Image src="/images/map-pin.png" style={styles.contactIcon} />
        <Text>
          <Link src="https://www.linkedin.com/in/daveobriencouk/" style={styles.contactLink}>
            linkedin.com/in/daveobriencouk
          </Link>
        </Text>
      </View>
      <View style={styles.contactDetail}>
        <Image src="/images/envelope.png" style={styles.contactIcon} />
        <Text>Based in Surrey {includeLocationDetail && '(near J3 on the M3)'}</Text>
      </View>
    </View>
  )
}

export function MyDocument({ education, intro, skillsAndTooling, skillsAndToolingAll, workExperiences }) {
  return (
    <Document producer="foo" creator="foo" title="Pages">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.logo}>
            <Image src="/images/logo-strapline.png" />
          </View>
          <ContactDetails includeLocationDetail={true} />
        </View>

        <View style={styles.introAndSkills}>
          <View style={styles.intro}>
            <Text style={styles.sectionHeading}>Intro</Text>
            <MarkdownToPDF content={intro} />
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
                          {isLastItem ? '.' : ', '}
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
                    <MarkdownToPDF content={content} />
                    {frontmatter.skills && (
                      <View style={styles.workExperienceSkills}>
                        <Text style={styles.h4}>Skills & Tooling</Text>
                        {/* {getSkills(frontmatter.skills).map((skill) => (
                      <Text key={skill.text} style={styles.skill}>
                        {skill.text}
                      </Text>
                    ))} */}
                      </View>
                    )}
                  </View>
                </View>
              )
            })}
          </View>
          <View style={styles.secondaryWorkExperiences}>
            {workExperiences.slice(3).map(({ frontmatter, content }, index) => {
              const length = workExperiences.length - 3
              const isLastItem = index === length - 1

              console.log(isLastItem, index, length)
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
                <Image src="/images/logo.png" />
              </View>
              <ContactDetails />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}
