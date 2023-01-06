import Head from 'next/head'

import useFeatureFlags from 'hooks/useFeatureFlags'
import { generateMetaTitle } from 'utils/generateMetaTitle'

// TODO: #10 Add CV page

export default function Home() {
  const { linksByFeatureFlag, flags } = useFeatureFlags()

  return (
    <>
      <Head>
        <title>{generateMetaTitle('CV')}</title>
        {/* <meta name="description" content="" /> */}
      </Head>

      <main className="mx-two">
        <article className="mb-three">
          <h1>Curriculum Vitae</h1>
          <p>
            Hi, I'm Dave. I'm a (contract) senior frontend developer currently in contract at Vodafone / MMT Digital.
            I'm currently working on ... that is used
          </p>

          <h2>About me</h2>
          <p>
            I'm a frontend developer with 20 years experience. I've worked with companies such as Vodafone, MMT Digital,
            Maersk and Virgin Media as well as many smaller agencies. I'm currently working on ... that is used
          </p>

          <h2>Work experience</h2>

          <ol>
            <li>
              <p>
                I was contracted as a React developer by MMT Digital and placed in a cross-functional agile team within
                Vodafone to develop an exploratory sub-brand. The development unit was small, yet three months later, we
                delivered Vodafoneʼs own youth-targeted MVNO proposition called VOXI.
              </p>
              <p>
                Many initiatives followed, including handset financing, an online shop and Vodafone to VOXI migration
                journeys. The role quickly evolved into full-stack as the need for a set of Node.JS micro-services
                became apparent. Even so, a keen focus was always trained on React development and close to three years
                later, with the proposition growing substantially (in what is a declining market), we embraced a set of
                features designed to mature the frontend aspects of the codebase.
              </p>
            </li>
          </ol>

          <h2>Skills / languages used</h2>
          <h3>Current</h3>

          <h3>Past</h3>

          <h3>I was there Gandalf, I was there 3000 years ago</h3>

          {/*
          I write clear & intuitive code, I architect reusable components & modules, and am as comfortable building user interfaces & integrating APIs as I am writing backends in Node.js. I possess a problem-solving mindset with a thirst for learning that continues to mature my knowledge of front & back-end technologies.
Practiced in agile methodologies, I'm a proven team player, and believe products are grown through cross-function collaboration. I'm both flexible & adaptable, am sympathetic to timeframes & constraints, and thrive when cultivating a product that yields to the demands of the customer.
 */}

          {/* About Me
🔭 I’m currently working on: Studying for my IAAP Web Accessibility Specialist Certification in order to improve my web accessibility knowledge and skills.
🌱 I’m currently learning: 3D modeling and animation with Blender.
🤔 What I want to learn next: Improving my React game with Epic React.
📫 How to reach me: hello@${myfullname}.com
 */}

          {/* 🔧 Current tools of choice
React
TypeScript
Next.JS
Remix
Tailwind */}
          <button>Download</button>
        </article>
      </main>
    </>
  )
}
