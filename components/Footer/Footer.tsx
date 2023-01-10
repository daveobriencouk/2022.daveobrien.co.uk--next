import React from 'react'
import classNames from 'classnames'

import Link from 'components/Link'

import { FOOTER_LINKS } from 'constants/'

type FooterProps = {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={classNames('text-sm text-neutral-600', className)}>
      <nav>
        <ul className="flex">
          {FOOTER_LINKS.map(({ href, text }, i) => {
            const isNotLast = i !== FOOTER_LINKS.length - 1
            return (
              <li
                key={text}
                className={classNames({
                  'after:content-["|"] mr-half': isNotLast,
                })}
              >
                <Link
                  href={href}
                  className={classNames({
                    'mr-half': isNotLast,
                  })}
                >
                  {text}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <p>&copy;{new Date().getFullYear()} Dave O&apos;Brien</p>
    </footer>
  )
}
