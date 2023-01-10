import { useEffect, useState } from 'react'
import waait from 'waait'
import { Raleway, Open_Sans } from '@next/font/google'

import Footer from 'components/Footer'
import Header from 'components/Header'

// https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

type LayoutProps = {
  children: React.ReactNode
  showGrid?: boolean
}

const gridStyles = {
  backgroundSize: '100% 1.75rem',
  backgroundImage:
    'linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to top, #ddd 1px, transparent 1px)',
}

export default function Layout({ children, showGrid }: LayoutProps) {
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    // TODO: #18 Add loading state to Layout
    async function loadPage() {
      await waait(500)
      // setShowLoader(false)
      // await waait(500)
      setShowHeader(true)
    }

    loadPage()
  }, [])

  // TODO: #19 Add dev panel to control animation speeds and show grid

  return (
    <div className={`${openSans.variable} ${raleway.variable} font-sans`}>
      <div style={true ? gridStyles : {}} className="flex flex-col min-h-screen bg-neutral-100 min-w-[24rem] relative">
        <Header
          className="mt-half md:mt-one mb-two md:mb-one-and-half xl:mb-two mx-one md:mx-one-and-half"
          showHeader={showHeader}
        />
        {/* TODO: #5 Animate children and footer in */}
        {/* <CONTENT /> */}
        <div className="flex-1">{children}</div>
        <Footer className="py-half md:py-one mt-one mx-one md:mx-one-and-half" />
      </div>
    </div>
  )
}
