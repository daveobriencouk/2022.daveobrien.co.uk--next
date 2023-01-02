import type { LinkProps } from 'next/link'
import { keyBy } from 'lodash'

export const GLOBAL_META_DESC = null
export const GLOBAL_META_TITLE = 'Dave O’Brien'

export type FlagOptions = 'section_cv' | 'section_notes' | 'section_project' | 'section_foo'

export type Link = {
  featureFlag?: FlagOptions
  href: LinkProps['href']
  text: string
}

export const NAV_LINKS: Link[] = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/cv',
    text: 'CV',
    featureFlag: 'section_cv',
  },
  {
    href: '/projects',
    text: 'Projects',
    featureFlag: 'section_project',
  },
  {
    href: '/notes',
    text: 'Notes',
    featureFlag: 'section_notes',
  },
]

const NAV_LINKS_BY_HREF = keyBy(NAV_LINKS, 'href')

export const READ_MORE_LINKS: Link[] = [
  {
    text: 'My CV - extended readme',
    href: '/cv',
  },
  {
    text: "Some projects I've worked on",
    href: '/projects',
  },
  {
    text: "An old(er) developer's handbook",
    href: '/notes',
  },
].map((link) => ({
  ...NAV_LINKS_BY_HREF[link.href],
  ...link,
}))
