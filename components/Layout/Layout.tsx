import { useEffect, useState } from 'react'
import waait from 'waait'

import Header from 'components/Header'

type LayoutProps = {
  children: React.ReactNode
  showGrid?: boolean
}

const gridStyles = {
  backgroundSize: '100% 1.5rem',
  backgroundImage:
    'linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to bottom, #ddd 1px, transparent 1px)',
}

export default function Layout({ children, showGrid }: LayoutProps) {
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    // TODO: Added loading state based on font load / fout
    async function loadPage() {
      // When font has loaded, show logo
      await waait(500)
      // setShowLoader(false)
      // await waait(500)
      setShowHeader(true)
    }

    loadPage()
  }, [])

  return (
    <div style={showGrid ? gridStyles : {}} className="flex flex-col min-h-screen bg-stone-100 min-w-[24rem]">
      <Header showHeader={showHeader} />
      <div className="flex-1">{children}</div>
      <footer className="bg-stone-200 mt-one py-one px-two">
        <div className="flex text-sm">&copy;{new Date().getFullYear()} Dave O&apos;Brien</div>
      </footer>
    </div>
  )
}
