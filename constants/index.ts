import type { LinkProps } from 'next/link'
import { keyBy } from 'lodash'

export const GLOBAL_META_DESC = null
export const GLOBAL_META_TITLE = 'Dave O’Brien'

export type FlagOptions = 'section_about' | 'section_cv' | 'section_notes' | 'section_project' | 'section_cv_all_skills'

export type Link = {
  featureFlag?: FlagOptions
  href: LinkProps['href']
  text: string
}

export const FOOTER_LINKS: Link[] = [
  {
    href: 'https://github.com/daveobriencouk',
    text: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/daveobriencouk/',
    text: 'LinkedIn',
  },
  {
    href: 'https://github.com/daveobriencouk/2022.daveobrien.co.uk--next',
    text: 'Fork me on GitHub',
  },
]

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

type SKILL = {
  href: string
  text: string
}

export type SKILLS = Record<string, SKILL>

export const SKILLS_INFO: SKILLS = {
  react: {
    href: 'https://reactjs.org/',
    text: 'React',
  },
  typescript: {
    href: 'https://www.typescriptlang.org/',
    text: 'TypeScript',
  },
  express: {
    href: 'https://expressjs.com/',
    text: 'Express',
  },
  jest: {
    href: 'https://jestjs.io/',
    text: 'Jest',
  },
  cypress: {
    href: 'https://www.cypress.io/',
    text: 'Cypress',
  },
  reactTestingLibrary: {
    href: 'https://testing-library.com/docs/react-testing-library/intro',
    text: 'React Testing Library',
  },
  styledComponents: {
    href: 'https://styled-components.com/',
    text: 'styled-components',
  },
  ajv: {
    href: 'https://ajv.js.org/',
    text: 'AJV',
  },
  jsonSchema: {
    href: 'https://json-schema.org/',
    text: 'JSON Schema',
  },
  reactQuery: {
    href: 'https://react-query.tanstack.com/',
    text: 'React Query',
  },
  mobx: {
    href: 'https://mobx.js.org/README.html',
    text: 'MobX',
  },
  lerna: {
    href: 'https://lerna.js.org/',
    text: 'Lerna',
  },
  sonarqube: {
    href: 'https://www.sonarqube.org/',
    text: 'SonarQube',
  },
  enzyme: {
    href: 'https://enzymejs.github.io/enzyme/',
    text: 'Enzyme',
  },
  redis: {
    href: 'https://redis.io/',
    text: 'Redis',
  },
  cssModules: {
    href: 'https://github.com/css-modules/css-modules',
    text: 'CSS Modules',
  },
  scss: {
    href: 'https://sass-lang.com/',
    text: 'SCSS',
  },
  ado: {
    href: 'https://azure.microsoft.com/en-us/services/devops/',
    text: 'ADO',
  },
  nextjs: {
    href: 'https://nextjs.org/',
    text: 'Next.js',
  },
  remix: {
    href: 'https://remix.run/',
    text: 'Remix',
  },
  tailwindcss: {
    href: 'https://tailwindcss.com/',
    text: 'Tailwind',
  },
  prisma: {
    href: 'https://www.prisma.io/',
    text: 'Prisma',
  },
  github: {
    href: 'https://github.com/',
    text: 'GitHub',
  },
  zod: {
    href: 'https://zod.dev/',
    text: 'Zod',
  },
  html: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    text: 'HTML',
  },
  javascript: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    text: 'JavaScript',
  },
  backbone: {
    href: 'https://backbonejs.org/',
    text: 'Backbone.js',
  },
  underscore: {
    href: 'https://underscorejs.org/',
    text: 'Underscore.js',
  },
  css: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    text: 'CSS',
  },
  jquery: {
    href: 'https://jquery.com/',
    text: 'jQuery',
  },
  handlebars: {
    href: 'https://handlebarsjs.com/',
    text: 'Handlebars',
  },
  bem: {
    href: 'https://getbem.com/',
    text: 'BEM',
  },
  grunt: {
    href: 'https://gruntjs.com/',
    text: 'Grunt',
  },
  datadog: {
    href: 'https://www.datadoghq.com/',
    text: 'Datadog',
  },
  babel: {
    href: 'https://babeljs.io/',
    text: 'Babel',
  },
  webpack: {
    href: 'https://webpack.js.org/',
    text: 'webpack',
  },
  vite: {
    href: 'https://vitejs.dev/',
    text: 'Vite',
  },
  angular: {
    href: 'https://angular.io/',
    text: 'Angular',
  },
  cordova: {
    href: 'https://cordova.apache.org/',
    text: 'Cordova',
  },
  haml: {
    href: 'https://haml.info/',
    text: 'Haml',
  },
  pug: {
    href: 'https://pugjs.org/',
    text: 'Pug',
  },
  less: {
    href: 'https://lesscss.org/',
    text: 'Less',
  },
  foundation: {
    href: 'https://get.foundation/',
    text: 'Foundation',
  },
  bourbon: {
    href: 'https://www.bourbon.io/',
    text: 'Bourbon',
  },
  php: {
    href: 'https://www.php.net/',
    text: 'PHP',
  },
  codeIgniter: {
    href: 'https://www.codeigniter.com/',
    text: 'CodeIgniter',
  },
  yii: {
    href: 'https://www.yiiframework.com/',
    text: 'Yii',
  },
  expressionEngine: {
    href: 'https://expressionengine.com/',
    text: 'ExpressionEngine',
  },
  craft: {
    href: 'https://craftcms.com/',
    text: 'Craft',
  },
  middleman: {
    href: 'https://middlemanapp.com/',
    text: 'Middleman',
  },
  mysql: {
    href: 'https://www.mysql.com/',
    text: 'MySQL',
  },
  mongodb: {
    href: 'https://www.mongodb.com/',
    text: 'MongoDB',
  },
  couchdb: {
    href: 'https://couchdb.apache.org/',
    text: 'CouchDB',
  },
  pouchdb: {
    href: 'https://pouchdb.com/',
    text: 'PouchDB',
  },
  gulp: {
    href: 'https://gulpjs.com/',
    text: 'Gulp',
  },
}
