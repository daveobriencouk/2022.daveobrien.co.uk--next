import 'styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import flagsmith from 'flagsmith/isomorphic'
import { FlagsmithProvider } from 'flagsmith/react'
import { IState } from 'flagsmith/types'

import { GLOBAL_META_DESC, GLOBAL_META_TITLE } from 'constants/'
import Layout from 'components/Layout'

// TODO: #35 Align vertical rhythm to base line, rather than leading

function App({ Component, pageProps, flagsmithState }: AppProps & { flagsmithState: IState }) {
  return (
    <>
      <Head>
        <title>{GLOBAL_META_TITLE}</title>
        {GLOBAL_META_DESC && <meta name="description" content={GLOBAL_META_DESC} />}
        {/* TODO: #9 Add favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlagsmithProvider flagsmith={flagsmith} serverState={flagsmithState}>
        {/* TODO: #26 Cookie based debug? Check out the rhythm */}
        <Layout showGrid={false}>
          <Component {...pageProps} onAnimationComplete={() => console.log('Animation completssse!')} />
        </Layout>
      </FlagsmithProvider>
      <Analytics />
    </>
  )
}

App.getInitialProps = async () => {
  await flagsmith.init({
    environmentID: process.env.FLAGSMITH_ENVIRONMENT_ID as string,
  })

  return { flagsmithState: flagsmith.getState() }
}

export default App
