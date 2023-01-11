import { useEffect, useState } from 'react'

import BaseLayout from 'components/BaseLayout'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MainContentTransition from 'components/MainContentTransition'

type LayoutProps = {
  children: React.ReactNode
}

// TODO: #18 Add loading state to Layout
// TODO: #19 Add dev panel to control animation speeds and show grid

export default function Layout({ children }: LayoutProps) {
  const [isHeaderShowing, setIsHeaderShowingowing] = useState(false)
  const [isMainContentShowing, setIsMainContentShowing] = useState(false)

  useEffect(() => {
    setIsHeaderShowingowing(true)
  }, [])

  return (
    <BaseLayout>
      <Header onTransitionEnd={() => setIsMainContentShowing(true)} show={isHeaderShowing} />
      {/* TODO: #5 Animate children and footer in */}
      {/* <CONTENT /> */}
      <MainContentTransition show={isMainContentShowing}>
        {/* index? */}
        <div className="flex-1">{children}</div>
        <Footer />
      </MainContentTransition>
    </BaseLayout>
  )
}
