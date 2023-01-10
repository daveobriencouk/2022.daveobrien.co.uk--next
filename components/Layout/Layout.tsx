import { useEffect, useState } from 'react'
import waait from 'waait'

import Footer from 'components/Footer'
import Header from 'components/Header'
import BaseLayout from 'components/BaseLayout'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
    <BaseLayout>
      <Header
        className="mt-half md:mt-one mb-two md:mb-one-and-half xl:mb-two mx-one md:mx-one-and-half"
        onAnimationEnd={() => console.log('Animation ended!')}
        showHeader={showHeader}
      />
      {/* TODO: #5 Animate children and footer in */}
      {/* <CONTENT /> */}
      <div className="flex-1">{children}</div>
      <Footer className="py-half md:py-one mt-one mx-one md:mx-one-and-half" />
    </BaseLayout>
  )
}
