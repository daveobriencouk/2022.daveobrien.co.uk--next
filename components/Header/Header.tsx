import React from 'react'
import { Disclosure } from '@headlessui/react'
import { useLocalStorage } from 'usehooks-ts'
import classNames from 'classnames'

import Logo from 'components/Logo'
import Nav from 'components/Nav'
import ResponsiveNavButton from 'components/ResponsiveNavButton'
import ResponsiveNav from 'components/ResponsiveNav'

import { NAV_LINKS } from 'constants/'

type HeaderProps = {
  className?: string
  onTransitionEnd?: () => void
  show?: boolean
  skipAnimation?: boolean
}

// show Furniture animate...

export default function Header({ className, onTransitionEnd, show, skipAnimation = false }: HeaderProps) {
  const [isNavShowing, setIsNavShowing] = React.useState(false)
  const [animationTimings] = useLocalStorage('headerAnimationTimings', {
    letterDelayRange: 500,
    letterDuration: 250,
    straplineDuration: 250,
    navDuration: 250,
  })

  const { letterDelayRange, letterDuration, straplineDuration, navDuration } = animationTimings

  function handleNavTransitionEnd() {
    onTransitionEnd && onTransitionEnd()
  }

  return (
    <>
      <Disclosure as="div">
        {({ open }) => {
          return (
            <>
              {/* TODO: #1 Perform an A11y check */}
              {/* TODO: #2 Add responsive nav transitions - https://headlessui.com/react/disclosure#transitions, https://www.framer.com/motion/, https://www.react-spring.dev/ */}
              <ResponsiveNavButton
                className="absolute z-20 md:hidden top-half right-half"
                open={open}
                show={isNavShowing || skipAnimation}
                onTransitionEnd={() => {
                  handleNavTransitionEnd()
                }}
              />
              <ResponsiveNav className="absolute z-10 w-full min-h-full bg-white md:hidden" links={NAV_LINKS} />
            </>
          )
        }}
      </Disclosure>
      <header
        className={classNames(
          'mt-half md:mt-one mb-two md:mb-one-and-half xl:mb-two-and-half mx-one md:mx-one-and-half',
          'text-neutral-700',
          className
        )}
      >
        <div className="flex flex-col items-start justify-between gap-x-one md:flex-row">
          <Logo
            className="mr-one-and-half md:mr-0"
            letterDelayRange={letterDelayRange}
            letterDuration={letterDuration}
            onTransitionEnd={() => {
              setIsNavShowing(true)
            }}
            show={show || skipAnimation}
            showStrapline={skipAnimation}
            straplineDuration={straplineDuration}
          />
          <div className="hidden md:flex">
            <Nav
              duration={navDuration}
              links={NAV_LINKS}
              onTransitionEnd={() => {
                handleNavTransitionEnd()
              }}
              show={isNavShowing || skipAnimation}
              className="md:mt-two xl:mt-three"
            />
          </div>
        </div>
      </header>
    </>
  )
}
