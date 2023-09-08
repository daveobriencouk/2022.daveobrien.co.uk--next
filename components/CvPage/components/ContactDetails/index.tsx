/* eslint-disable jsx-a11y/alt-text */
import { View, Text, Image, Link } from '@react-pdf/renderer'

import { styles } from 'components/CvPage/index.styles'

type ContactDetailsProps = {
  imagePath: string
  includeLocationDetail?: boolean
}

export function ContactDetails({ imagePath, includeLocationDetail }: ContactDetailsProps) {
  return (
    <View style={styles.contact}>
      <View style={styles.contactDetail}>
        <Image src={`${imagePath}/map-pin.png`} style={styles.contactIcon} />
        <Text>
          <Link src="https://www.linkedin.com/in/daveobriencouk/" style={styles.contactLink}>
            linkedin.com/in/daveobriencouk
          </Link>
        </Text>
      </View>
      <View style={styles.contactDetail}>
        <Image src={`${imagePath}/globe.png`} style={styles.contactIcon} />
        <Text>
          <Link src="https://www.daveobrien.co.uk/" style={styles.contactLink}>
            daveobrien.co.uk
          </Link>
        </Text>
      </View>
      <View style={styles.contactDetail}>
        <Image src={`${imagePath}/envelope.png`} style={styles.contactIcon} />
        <Text>Based in Surrey {includeLocationDetail && '(near J3 on the M3)'}</Text>
      </View>
    </View>
  )
}
