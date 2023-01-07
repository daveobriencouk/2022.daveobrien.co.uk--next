import React from 'react'
import NextLink from 'next/link'
import type { LinkProps as NextLinkProps } from 'next/link'
import classNames from 'classnames'

export type LinkProps = {
  children: React.ReactNode
  className?: string
  href: NextLinkProps['href']
}

export default function Link({ children, className, href }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={classNames(
        'font-medium text-primary-700 visited:text-primary-900 hover:underline underline-offset-2',
        className
      )}
    >
      {children}
    </NextLink>
  )
}
