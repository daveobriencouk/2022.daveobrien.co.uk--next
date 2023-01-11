import { useEffect, useState } from 'react'

import BaseLayout from 'components/BaseLayout'
import Footer from 'components/Footer'
import Header from 'components/Header'
import MainContentTransition from 'components/MainContentTransition'
import useInitialPageLoad from 'hooks/useInitialPageLoad'

type LayoutProps = {
  children: React.ReactNode
}

// TODO: #18 Add loading state to Layout
// TODO: #19 Add dev panel to control animation speeds and show grid

export default function Layout({ children }: LayoutProps) {
  const { hasInitialPageLoaded, loading, setInitialPageLoad } = useInitialPageLoad()
  const [isHeaderShowing, setIsHeaderShowing] = useState(false)
  const [isMainContentShowing, setIsMainContentShowing] = useState(false)

  useEffect(() => {
    if (!loading) {
      setIsHeaderShowing(true)
    }
  }, [loading])

  if (loading) {
    return null
  }

  return (
    <BaseLayout>
      <Header
        onTransitionEnd={() => setIsMainContentShowing(true)}
        show={isHeaderShowing}
        skipAnimation={hasInitialPageLoaded}
      />
      <MainContentTransition
        show={isMainContentShowing || hasInitialPageLoaded}
        onTransitionEnd={() => setInitialPageLoad(true)}
      >
        <div className="flex-1">{children}</div>
        <Footer />
      </MainContentTransition>
    </BaseLayout>
  )
}
