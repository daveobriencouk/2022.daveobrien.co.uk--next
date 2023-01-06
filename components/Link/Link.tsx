import React from 'react'
import NextLink from 'next/link'

export type LinkProps = {
  children: React.ReactNode
  href: string
}

export default function Link({ children, href }: LinkProps) {
  return (
    <NextLink
      href={href}
      className="font-medium text-primary-700 visited:text-primary-900 hover:underline underline-offset-2"
    >
      {children}
    </NextLink>
  )
}
