import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    flexWrap: 'wrap',
  },
  section: {
    padding: 20,
    flexGrow: 1,
    width: '50%',
  },
  one: {
    padding: 20,
    flexGrow: 1,
    width: '100%',
  },
})

export default function CvPdf() {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Intro</Text>
        </View>
        <View style={styles.section}>
          <Text>Skills & Tooling</Text>
        </View>
        <View style={styles.one}>
          <Text>Work Experience</Text>
        </View>
      </Page>
    </Document>
  )
}
