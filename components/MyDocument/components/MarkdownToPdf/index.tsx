import { View, Text } from '@react-pdf/renderer'
import ReactMarkdown from 'react-markdown'

import { styles } from 'components/MyDocument/index.styles'
import { ListItem } from '../ListItem'

type MarkdownToPdfProps = {
  content: string
}

export function MarkdownToPdf({ content }: MarkdownToPdfProps) {
  return (
    <ReactMarkdown
      // eslint-disable-next-line react/no-children-prop
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
          const isPenultimateItem = index === (siblingCount || 0) - 2

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
