import React from 'react'
import { useLocalStorage } from 'usehooks-ts'

import Logo from 'components/Logo'
import Nav from 'components/Nav'

const links = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/cv',
    text: 'CV',
  },
  {
    href: '/notes',
    text: 'Notes',
  },
]

type HeaderProps = {
  showHeader?: boolean
}

export default function Header({ showHeader }: HeaderProps) {
  const [animationTimings] = useLocalStorage('headerAnimationTimings', {
    letterDelayRange: 500,
    letterDuration: 250,
    straplineDuration: 250,
    navDuration: 250,
  })

  const { letterDelayRange, letterDuration, straplineDuration, navDuration } = animationTimings
  const navDelay = letterDuration + letterDelayRange + straplineDuration

  return (
    <header className="text-stone-700 mt-one mb-two">
      <div className="mx-two flex gap-x-one flex-col md:flex-row justify-between items-start">
        <Logo
          showLogo={showHeader}
          letterDelayRange={letterDelayRange}
          letterDuration={letterDuration}
          straplineDuration={straplineDuration}
        />
        {/* TODO: [P2] Move navigation into a burger menu */}
        <Nav delay={navDelay} duration={navDuration} links={links} showNav={showHeader} />
      </div>
    </header>
  )
}
