import { Text, View } from '@react-pdf/renderer'
import { LiProps } from 'react-markdown/lib/ast-to-react'

import { styles } from 'components/CvPage/index.styles'

type ListItemProps = Omit<LiProps, 'index' | 'node'> & {
  children: React.ReactNode
  isPenultimateItem: boolean
}

export function ListItem({ children, isPenultimateItem, ...props }: ListItemProps) {
  return (
    <View {...props} style={styles.listItem} break={isPenultimateItem}>
      <Text style={styles.listItemBullet}>&bull;</Text>
      <Text>{children}</Text>
    </View>
  )
}
