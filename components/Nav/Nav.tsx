import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import type { Link as LinkType } from 'constants/'
import useFeatureFlags from 'hooks/useFeatureFlags'

type NavProps = {
  className?: string
  duration?: number
  links: LinkType[]
  onTransitionEnd?: () => void
  show?: boolean
}

export default function Nav({ className, duration = 0, links, onTransitionEnd, show }: NavProps) {
  const { linksByFeatureFlag, flags } = useFeatureFlags()
  const router = useRouter()

  console.log('Nav', { flags, links: links.filter(() => true) })

  return (
    <ul
      onTransitionEnd={() => {
        onTransitionEnd && onTransitionEnd()
      }}
      className={classNames(
        'text-neutral-500 flex flex-initial justify-center',
        `transition-opacity ${show ? 'opacity-1' : 'opacity-0'}`,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {links.filter(linksByFeatureFlag).map(({ href, text }) => (
        <li key={text}>
          <Link
            href={href}
            className={classNames(
              'block leading-one text-md heading uppercase px-quarter ',
              `underline-offset-4 focus:outline-none  hover:underline focus:underline ${
                router.pathname === href
                  ? 'text-primary-700 hover:text-primary-900 focus:text-primary-900'
                  : 'focus:text-neutral-700 hover:text-neutral-700'
              } `
            )}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
