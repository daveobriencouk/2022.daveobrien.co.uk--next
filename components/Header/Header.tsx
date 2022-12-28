import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocalStorage } from 'usehooks-ts'
import classNames from 'classnames'

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

type ResponsiveNavButtonProps = {
  className?: string
  open: boolean
}

{
  /* REFACTOR: Into file */
}
function ResponsiveNavButton({ className, open }: ResponsiveNavButtonProps) {
  return (
    <Disclosure.Button
      className={classNames(
        'inline-flex items-center justify-center p-quarter text-neutral-500 hover:text-neutral-900 focus-ring',
        className,
        { 'bg-neutral-100': open }
      )}
    >
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  )
}

type ResponsiveNavProps = {
  className?: string
  links: any
}

{
  /* REFACTOR: Into file */
}
function ResponsiveNav({ className, links }: ResponsiveNavProps) {
  const router = useRouter()

  return (
    <Disclosure.Panel className={className}>
      <div className="flex flex-col items-start space-y-1 pt-two pb-two px-two bg-neutral-300">
        {links.map(({ text, href }) => (
          <Disclosure.Button
            key={href}
            as={Link}
            href={href}
            className={classNames(
              'bg-neutral-500 text-neutral-100 pl-quarter pr-half text-2xl heading focus:outline-none',
              { 'bg-primary-700 hover:bg-primary-900 focus:bg-primary-900': router.pathname === href },
              { 'focus:bg-neutral-700 hover:bg-neutral-700': router.pathname !== href }
            )}
          >
            {text}
          </Disclosure.Button>
        ))}
      </div>
      <pre className="overflow-hidden text-xs break-words whitespace-normal text-neutral-200 p-two">
        {typeof window !== 'undefined' && window.document.getElementsByTagName('html')[0].outerHTML}
      </pre>
    </Disclosure.Panel>
  )
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
          {/* TODO: [P1] A11y check */}
          {/* TODO: [P2] Add transitions - https://headlessui.com/react/disclosure#transitions, https://www.framer.com/motion/, https://www.react-spring.dev/ */}
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
