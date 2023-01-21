import React from 'react'

import Link from 'components/Link'

type CommaSeparatedListProps = {
  array: ListItem[]
  as?: 'ul'
  className?: string
}

type ListItem = string | { text: string; href: string }

type GetSuffixProps = { i: number; includeFullStop?: boolean; length: number }

function getSuffix({ i, includeFullStop = true, length }: GetSuffixProps) {
  const isSecondToLast = i === length - 2
  const isLast = i === length - 1

  if (isSecondToLast) {
    return ', and '
  }

  if (isLast) {
    return includeFullStop ? '. ' : ''
  }

  return ', '
}

function getTextAndHref(item: ListItem) {
  return typeof item === 'string' ? { text: item } : { text: item.text, href: item.href }
}

export default function CommaSeparatedList({ array, as, className }: CommaSeparatedListProps) {
  if (as === 'ul') {
    return (
      <ul className={className}>
        {array.map((item, i) => {
          const suffix = getSuffix({
            i,
            includeFullStop: as === 'ul',
            length: array.length,
          })
          const { text, href } = getTextAndHref(item)

          return (
            <li key={text} className="inline">
              {href ? (
                <Link key={text} href={href}>
                  {text}
                </Link>
              ) : (
                text
              )}
              {suffix}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <span className={className}>
      {array.map((item, i) => {
        const suffix = getSuffix({
          i,
          length: array.length,
        })
        const { text, href } = getTextAndHref(item)

        return (
          <>
            {href ? (
              <Link key={text} href={href}>
                {text}
              </Link>
            ) : (
              text
            )}
            {suffix}
          </>
        )
      })}
    </span>
  )
}
