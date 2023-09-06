import '../wdyr'

import 'styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import flagsmith from 'flagsmith/isomorphic'
import { FlagsmithProvider } from 'flagsmith/react'
import type { IState } from 'flagsmith/types'
import * as fathom from 'fathom-client'

import { useEffect, type ReactElement, type ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { GLOBAL_META_DESC, GLOBAL_META_TITLE } from 'constants/'
import Layout from 'components/Layout'
import { useRouter } from 'next/router'

// TODO: #35 Align vertical rhythm to base line, rather than leading

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  fathomAnalytics: {
    includedDomains: string[]
    trackingCode: string
  }
  flagsmithState: IState
}

// TODO: #26 Cookie based debug? Check out the rhythm

function App({ Component, pageProps, fathomAnalytics, flagsmithState }: AppPropsWithLayout) {
  // INFO: Default layout to <Layout>
  const getLayout = Component.getLayout ?? ((page: ReactElement) => <Layout>{page}</Layout>)
  const router = useRouter()

  useEffect(() => {
    if (!fathomAnalytics.includedDomains || !fathomAnalytics.trackingCode) return

    // Initialize Fathom when the app loads
    fathom.load(fathomAnalytics.trackingCode, {
      includedDomains: fathomAnalytics.includedDomains,
    })

    function onRouteChangeComplete() {
      fathom.trackPageview()
    }

    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [fathomAnalytics, router])

  return (
    <>
      <Head>
        <title>{GLOBAL_META_TITLE}</title>
        {GLOBAL_META_DESC && <meta name="description" content={GLOBAL_META_DESC} />}
        {/* TODO: #9 Add favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FlagsmithProvider flagsmith={flagsmith} serverState={flagsmithState}>
        <>{getLayout(<Component {...pageProps} />)}</>
      </FlagsmithProvider>
      <Analytics />
    </>
  )
}

App.getInitialProps = async () => {
  await flagsmith.init({
    environmentID: process.env.FLAGSMITH_ENVIRONMENT_ID as string,
  })

  return {
    fathomAnalytics: {
      includedDomains: [process.env.NEXT_PUBLIC_FATHOM_INCLUDED_DOMAINS],
      trackingCode: process.env.NEXT_PUBLIC_FATHOM_TRACKING_CODE,
    },
    flagsmithState: flagsmith.getState(),
  }
}

export default App
