import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Raleway, Yrsa, Open_Sans } from '@next/font/google'

// https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

const yrsa = Yrsa({
  subsets: ['latin'],
  variable: '--font-yrsa',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

import Layout from 'components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${openSans.variable} ${yrsa.variable} ${raleway.variable} font-sans`}>
      <Layout showGrid={false}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
