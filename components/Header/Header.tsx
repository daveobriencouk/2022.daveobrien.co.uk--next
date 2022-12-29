import React from 'react'
import { Disclosure } from '@headlessui/react'
import { useLocalStorage } from 'usehooks-ts'

import Logo from 'components/Logo'
import Nav from 'components/Nav'
import ResponsiveNavButton from 'components/ResponsiveNavButton'
import ResponsiveNav from 'components/ResponsiveNav'

export type Link = {
  href: string
  text: string
}

const links: Link[] = [
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
    <Disclosure as="div">
      {({ open }) => (
        <>
          {/* TODO: #1 [P1] A11y check */}
          {/* TODO: #2 [P2] Add transitions - https://headlessui.com/react/disclosure#transitions, https://www.framer.com/motion/, https://www.react-spring.dev/ */}
          <ResponsiveNavButton className="absolute z-20 md:hidden top-one right-one" open={open} />
          <ResponsiveNav className="absolute z-10 w-full min-h-full bg-white md:hidden" links={links} />

          <header className="text-neutral-700 mt-one mb-two">
            <div className="flex flex-col items-start justify-between mx-two gap-x-one md:flex-row">
              <Logo
                className="mr-one-and-half md:mr-0"
                showLogo={showHeader}
                letterDelayRange={letterDelayRange}
                letterDuration={letterDuration}
                straplineDuration={straplineDuration}
              />
              <div className="hidden md:flex">
                <Nav delay={navDelay} duration={navDuration} links={links} showNav={showHeader} />
              </div>
            </div>
          </header>
        </>
      )}
    </Disclosure>
  )
}
