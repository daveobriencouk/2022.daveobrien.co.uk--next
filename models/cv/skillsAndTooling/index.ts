import type { Skills, SkillCategory } from './types'
import { getSkillsByCategory } from './utils'

export const CATEGORIES: Record<SkillCategory | 'all', { title: string }> = {
  frontend: { title: 'Frontend' },
  backend: { title: 'Backend' },
  testing: { title: 'Testing & quality' },
  build: { title: 'Build' },
  data: { title: 'Data' },
  content: { title: 'Content' },
  all: { title: 'All' },
}

export const SKILLS: Skills = {
  react: {
    href: 'https://reactjs.org/',
    text: 'React',
    areas: ['work', 'personal'],
    categories: ['frontend'],
  },
  typescript: {
    href: 'https://www.typescriptlang.org/',
    text: 'TypeScript',
    areas: ['work', 'personal'],
    categories: ['frontend', 'backend'],
  },
  express: {
    href: 'https://expressjs.com/',
    text: 'Express',
    areas: ['work', 'personal'],
    categories: ['backend'],
  },
  jest: {
    href: 'https://jestjs.io/',
    text: 'Jest',
    areas: ['work', 'personal'],
    categories: ['testing'],
  },
  cypress: {
    href: 'https://www.cypress.io/',
    text: 'Cypress',
    areas: ['work', 'personal'],
    categories: ['testing'],
  },
  reactTestingLibrary: {
    href: 'https://testing-library.com/docs/react-testing-library/intro',
    text: 'React Testing Library',
    areas: ['work', 'personal'],
    categories: ['testing'],
  },
  styledComponents: {
    href: 'https://styled-components.com/',
    text: 'styled-components',
    areas: ['work'],
    categories: ['frontend'],
  },
  ajv: {
    href: 'https://ajv.js.org/',
    text: 'AJV',
    areas: ['work'],
    categories: ['frontend', 'backend'],
  },
  jsonSchema: {
    href: 'https://json-schema.org/',
    text: 'JSON Schema',
    areas: ['work'],
    categories: ['frontend', 'backend'],
  },
  reactQuery: {
    href: 'https://react-query.tanstack.com/',
    text: 'React Query',
    areas: ['work'],
    categories: ['frontend'],
  },
  mobx: {
    href: 'https://mobx.js.org/README.html',
    text: 'MobX',
    areas: ['work'],
    categories: ['frontend'],
  },
  lerna: {
    href: 'https://lerna.js.org/',
    text: 'Lerna',
    areas: ['work'],
    categories: ['build'],
  },
  sonarqube: {
    href: 'https://www.sonarqube.org/',
    text: 'SonarQube',
    areas: ['work'],
    categories: ['testing'],
  },
  enzyme: {
    href: 'https://enzymejs.github.io/enzyme/',
    text: 'Enzyme',
    areas: ['work'],
    categories: ['testing'],
  },
  redis: {
    href: 'https://redis.io/',
    text: 'Redis',
    areas: ['work'],
    categories: ['data'],
  },
  cssModules: {
    href: 'https://github.com/css-modules/css-modules',
    text: 'CSS Modules',
    areas: ['work'],
    categories: ['frontend'],
  },
  scss: {
    href: 'https://sass-lang.com/',
    text: 'SCSS',
    areas: ['work'],
    categories: ['frontend'],
  },
  ado: {
    href: 'https://azure.microsoft.com/en-us/services/devops/',
    text: 'ADO',
    areas: ['work'],
    categories: ['build'],
  },
  nextjs: {
    href: 'https://nextjs.org/',
    text: 'Next.js',
    areas: ['personal'],
    categories: ['frontend'],
  },
  remix: {
    href: 'https://remix.run/',
    text: 'Remix',
    areas: ['personal'],
    categories: ['frontend'],
  },
  tailwindcss: {
    href: 'https://tailwindcss.com/',
    text: 'Tailwind',
    areas: ['personal'],
    categories: ['frontend'],
  },
  prisma: {
    href: 'https://www.prisma.io/',
    text: 'Prisma',
    areas: ['personal'],
    categories: ['data'],
  },
  github: {
    href: 'https://github.com/',
    text: 'GitHub',
    areas: ['personal'],
    categories: ['build'],
  },
  zod: {
    href: 'https://zod.dev/',
    text: 'Zod',
    areas: ['personal'],
    categories: ['frontend', 'backend'],
  },
  html: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    text: 'HTML',
    areas: ['personal'],
    categories: ['frontend'],
  },
  javascript: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    text: 'JavaScript',
    areas: ['personal'],
    categories: ['frontend', 'backend'],
  },
  backbone: {
    href: 'https://backbonejs.org/',
    text: 'Backbone.js',
    areas: ['past'],
    categories: ['frontend'],
  },
  underscore: {
    href: 'https://underscorejs.org/',
    text: 'Underscore.js',
    areas: ['past'],
    categories: ['frontend'],
  },
  css: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    text: 'CSS',
    areas: ['work', 'personal', 'past'],
    categories: ['frontend'],
  },
  jquery: {
    href: 'https://jquery.com/',
    text: 'jQuery',
    areas: ['past'],
    categories: ['frontend'],
  },
  handlebars: {
    href: 'https://handlebarsjs.com/',
    text: 'Handlebars',
    areas: ['past'],
    categories: ['frontend'],
  },
  bem: {
    href: 'https://getbem.com/',
    text: 'BEM',
    areas: ['past'],
    categories: ['frontend'],
  },
  grunt: {
    href: 'https://gruntjs.com/',
    text: 'Grunt',
    areas: ['past'],
    categories: ['build'],
  },
  datadog: {
    href: 'https://www.datadoghq.com/',
    text: 'Datadog',
    areas: ['work'],
    categories: ['testing'],
  },
  babel: {
    href: 'https://babeljs.io/',
    text: 'Babel',
    areas: ['work', 'personal'],
    categories: ['build'],
  },
  webpack: {
    href: 'https://webpack.js.org/',
    text: 'webpack',
    areas: ['work', 'personal'],
    categories: ['build'],
  },
  vite: {
    href: 'https://vitejs.dev/',
    text: 'Vite',
    areas: ['work', 'personal'],
    categories: ['build'],
  },
  angular: {
    href: 'https://angular.io/',
    text: 'Angular',
    areas: ['past'],
    categories: ['frontend'],
  },
  cordova: {
    href: 'https://cordova.apache.org/',
    text: 'Cordova',
    areas: ['past'],
    categories: ['frontend'],
  },
  haml: {
    href: 'https://haml.info/',
    text: 'Haml',
    areas: ['past'],
    categories: ['frontend'],
  },
  pug: {
    href: 'https://pugjs.org/',
    text: 'Pug',
    areas: ['past'],
    categories: ['frontend'],
  },
  mustache: {
    href: 'https://mustache.github.io/',
    text: 'Mustache',
    areas: ['past'],
    categories: ['frontend'],
  },
  less: {
    href: 'https://lesscss.org/',
    text: 'Less',
    areas: ['past'],
    categories: ['frontend'],
  },
  foundation: {
    href: 'https://get.foundation/',
    text: 'Foundation',
    areas: ['past'],
    categories: ['frontend'],
  },
  bourbon: {
    href: 'https://www.bourbon.io/',
    text: 'Bourbon',
    areas: ['past'],
    categories: ['frontend'],
  },
  php: {
    href: 'https://www.php.net/',
    text: 'PHP',
    areas: ['past'],
    categories: ['backend'],
  },
  codeIgniter: {
    href: 'https://www.codeigniter.com/',
    text: 'CodeIgniter',
    areas: ['past'],
    categories: ['backend'],
  },
  yii: {
    href: 'https://www.yiiframework.com/',
    text: 'Yii',
    areas: ['past'],
    categories: ['backend'],
  },
  expressionEngine: {
    href: 'https://expressionengine.com/',
    text: 'ExpressionEngine',
    areas: ['past'],
    categories: ['content'],
  },
  craft: {
    href: 'https://craftcms.com/',
    text: 'Craft',
    areas: ['past'],
    categories: ['content'],
  },
  middleman: {
    href: 'https://middlemanapp.com/',
    text: 'Middleman',
    areas: ['past'],
    categories: ['content'],
  },
  mysql: {
    href: 'https://www.mysql.com/',
    text: 'MySQL',
    areas: ['past'],
    categories: ['data'],
  },
  mongodb: {
    href: 'https://www.mongodb.com/',
    text: 'MongoDB',
    areas: ['past'],
    categories: ['data'],
  },
  couchdb: {
    href: 'https://couchdb.apache.org/',
    text: 'CouchDB',
    areas: ['past'],
    categories: ['data'],
  },
  pouchdb: {
    href: 'https://pouchdb.com/',
    text: 'PouchDB',
    areas: ['past'],
    categories: ['data'],
  },
  gulp: {
    href: 'https://gulpjs.com/',
    text: 'Gulp',
    areas: ['past'],
    categories: ['build'],
  },
}

const skillsByCategory = getSkillsByCategory({ skills: SKILLS })

export const skills = Object.entries(CATEGORIES).map(([key, { title }]) => {
  return {
    key,
    title,
    skills: skillsByCategory[key as SkillCategory],
  }
})

export function getSkillsAndTooling() {
  return {
    skills,
  }
}