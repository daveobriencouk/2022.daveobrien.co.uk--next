import { GLOBAL_META_TITLE } from 'constants/'

export function generateMetaTitle(pageTitle: string): string {
  return [pageTitle, GLOBAL_META_TITLE].join(' | ')
}
