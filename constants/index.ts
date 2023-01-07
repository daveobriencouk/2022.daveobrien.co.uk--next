import type { LinkProps } from 'next/link'
import { keyBy } from 'lodash'

export const GLOBAL_META_DESC = null
export const GLOBAL_META_TITLE = 'Dave O’Brien'

export type FlagOptions = 'section_about' | 'section_cv' | 'section_notes' | 'section_project'

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
    href: '/about',
    text: 'About',
    featureFlag: 'section_about',
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

export const NAV_LINKS_BY_HREF = keyBy(NAV_LINKS, 'href')

export const BALONY_SYNONYMS = [
  'bunk',
  'drivel',
  'gibberish',
  'guff',
  'hogwash',
  'nonsense',
  'baloney',
  'bunkum',
  'bushwah',
  'flim-flam',
  'hokum',
  'hooey',
  'malarkey',
  'moonshine',
  'phooey',
  'poppycock',
  'twaddle',
  'garbage',
  'balderdash',
  'rot',
  'codswallop',
  'tripe',
  'tosh',
  'bilge',
  'piffle',
  'tommyrot',
  'cobblers',
  'flapdoodle',
  'blather',
  'eyewash',
  'applesauce',
  'wack',
  'trash',
  'horsefeathers',
  'blarney',
  'hot air',
  'humbug',
  'bushwa',
  'folly',
  'nonsense',
  'boloney',
  'flannel',
  'crock',
  'humbuggery',
  'malarky',
  'fiddlesticks',
  'jazz',
  'foolishness',
  'taradiddle',
  'blither',
  'trumpery',
  'dribble',
  'blah',
  'gobbledegook',
  'hokeypokey',
  'drool',
  'hoodoo',
  'tarradiddle',
]
