/* eslint-disable import/no-anonymous-default-export */
import { renderToBuffer, Page, View, Text, Document, StyleSheet } from '@react-pdf/renderer'
import { getWorkExperiences } from 'models/workExperience'
import { NextApiRequest, NextApiResponse } from 'next'
import md from 'markdown-it'
import getSkills from 'helpers/getSkills'

const styles = StyleSheet.create({
  page: {
    padding: '15mm',
  },
  foo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  me: {
    width: '57.3mm',
  },
  skillsAndTooling: {
    width: '118.8mm',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'red',
  },
  skill: {
    // flexGrow: 0,
    color: 'white',
    backgroundColor: 'blue',
  },
  skillTitle: {},
  skillCompany: {},
  heading: {
    fontSize: '12pt',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottom: '1pt solid #2F2F2F',
    marginBottom: '4mm',
  },
})

export const dynamic = 'force-dynamic'

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const workExperiences = getWorkExperiences()

  const buffer = await renderToBuffer(
    <Document producer="foo" creator="foo" title="Pages">
      <Page size="A4" style={styles.page}>
        <View style={styles.foo}>
          <View style={styles.me}>
            <Text style={styles.heading}>Intro.</Text>
          </View>
          <View style={styles.skillsAndTooling}>
            <Text style={styles.heading}>Skills & Tooling.</Text>
            <View style={styles.skillsAndTooling}>
              <Text style={styles.heading}>At work.</Text>
            </View>
            <View style={styles.skillsAndTooling}>
              <Text style={styles.heading}>At play.</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Work experience.</Text>
        </View>
        <View>
          <Text>My CV</Text>
          {workExperiences.map(({ frontmatter, content }) => {
            return (
              <>
                <View>
                  <Text style={styles.skillTitle}>{frontmatter.title}</Text>
                  <Text style={styles.skillCompany}>{frontmatter.company}</Text>
                  {frontmatter.startDate && (
                    <Text>
                      {frontmatter.startDate} - {frontmatter.endDate}
                    </Text>
                  )}
                </View>
                <View>
                  <Text>{content}</Text>
                </View>
                {frontmatter.skills && (
                  <View style={styles.skills}>
                    <Text>Skills & Tooling</Text>
                    {getSkills(frontmatter.skills).map((skill) => (
                      <Text key={skill.text} style={styles.skill}>
                        {skill.text}
                      </Text>
                    ))}
                  </View>
                )}
              </>
            )
          })}
        </View>
        <View>
          <Text>Hello from pages directory</Text>
        </View>
      </Page>
    </Document>
  )

  res
    .status(200)
    .setHeader('Content-Type', 'application/pdf')
    .setHeader('Content-Disposition', `attachment; filename="pages.pdf"`)

  res.send(buffer)
}
