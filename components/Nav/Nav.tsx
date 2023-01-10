import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import type { Link as LinkType } from 'constants/'
import useFeatureFlags from 'hooks/useFeatureFlags'

type NavProps = {
  className?: string
  delay?: number
  duration?: number
  links: LinkType[]
  showNav?: boolean
}

export default function Nav({ className, delay = 0, duration = 0, links, showNav }: NavProps) {
  const { linksByFeatureFlag } = useFeatureFlags()
  const router = useRouter()

  return (
    <ul
      className={classNames(
        'text-neutral-500 flex flex-initial justify-center transition-opacity',
        { 'opacity-1': showNav },
        { 'opacity-0': !showNav },
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {links.filter(linksByFeatureFlag).map(({ href, text }) => (
        <li key={text}>
          <Link
            href={href}
            className={classNames(
              'block leading-one text-md heading underline-offset-4 focus:outline-none px-quarter hover:underline focus:underline',
              { 'text-primary-700 hover:text-primary-900 focus:text-primary-900': router.pathname === href },
              {
                'focus:text-neutral-700 hover:text-neutral-700': router.pathname !== href,
              }
            )}
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
