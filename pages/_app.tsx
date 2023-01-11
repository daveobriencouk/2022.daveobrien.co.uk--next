import 'styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import flagsmith from 'flagsmith/isomorphic'
import { FlagsmithProvider } from 'flagsmith/react'
import type { IState } from 'flagsmith/types'

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { GLOBAL_META_DESC, GLOBAL_META_TITLE } from 'constants/'
import Layout from 'components/Layout'

// TODO: #35 Align vertical rhythm to base line, rather than leading

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  flagsmithState: IState
}

function App({ Component, pageProps, flagsmithState }: AppPropsWithLayout) {
  // INFO: Default layout to <Layout>
  const getLayout = Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>)

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
        {getLayout(<Component {...pageProps} />)}
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
