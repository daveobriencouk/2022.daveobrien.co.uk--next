import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from 'classnames'

import type { Link as LinkType } from 'constants/'
import useFeatureFlags from 'hooks/useFeatureFlags'

type NavProps = {
  delay?: number
  duration?: number
  links: LinkType[]
  showNav?: boolean
}

export default function Nav({ delay = 0, duration = 0, links, showNav }: NavProps) {
  const { linksByFeatureFlag } = useFeatureFlags()
  const router = useRouter()

  return (
    <ul
      className={`text-neutral-500 flex flex-initial md:mt-two lg:mt-three xl:mt-four justify-center transition-opacity ${
        showNav ? 'opacity-1' : 'opacity-0'
      }`}
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
              'block text-lg md:text-md lg:text-lg heading underline-offset-4 focus:outline-none px-quarter hover:underline focus:underline',
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
