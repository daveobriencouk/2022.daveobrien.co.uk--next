import React from 'react'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
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
    <Disclosure as="div">
      {({ open }) => (
        <>
          {/* REFACTOR: BurgerMenuButton  */}
          <div className="md:hidden absolute z-20 top-one right-one">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
          </div>
          {/* TODO: [P2] Add transitions - https://headlessui.com/react/disclosure#transitions, https://www.framer.com/motion/, https://www.react-spring.dev/ */}
          {/* TODO: [P1] A11y check */}
          {/* TODO: [P2] Add active link */}
          {/* REFACTOR: ResponsiveNav  */}
          <Disclosure.Panel className="md:hidden min-h-full absolute z-10 w-full bg-white">
            <div className="space-y-1 pt-two pb-two flex flex-col items-start px-two bg-stone-300">
              {links.map(({ text, href }) => (
                <Disclosure.Button
                  key={href}
                  as={Link}
                  href={href}
                  className="bg-stone-500 text-stone-100 font-display pl-quarter pr-half font-black text-2xl tracking-tighter uppercase"
                >
                  {text}
                </Disclosure.Button>
              ))}
            </div>
            <pre className="whitespace-normal break-words overflow-hidden text-stone-200 p-two text-xs">
              {typeof window !== 'undefined' && window.document.getElementsByTagName('html')[0].outerHTML}
            </pre>
          </Disclosure.Panel>
          <header className="text-stone-700 mt-one mb-two">
            <div className="mx-two flex gap-x-one flex-col md:flex-row justify-between items-start">
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
