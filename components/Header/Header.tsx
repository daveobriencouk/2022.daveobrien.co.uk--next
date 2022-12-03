import React from 'react'

import Logo from 'components/Logo'
import Nav from 'components/Nav'

const animationTimings = {
  letterDelayRange: 1500,
  letterDuration: 250,
  straplineDuration: 500,
  navDuration: 500,
}

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
        <Nav delay={navDelay} duration={navDuration} links={links} showNav={showHeader} />
      </div>
    </header>
  )
}
