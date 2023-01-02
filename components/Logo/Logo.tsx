import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import LogoLetter from './components/LogoLetter'

export type LogoProps = {
  className?: string
  letterDelayRange?: number
  letterDuration?: number
  showLogo?: boolean
  straplineDuration?: number
}

export default function Logo({
  className,
  letterDelayRange = 0,
  letterDuration = 0,
  showLogo,
  straplineDuration = 0,
}: LogoProps) {
  const straplineDelay = letterDuration + letterDelayRange

  // TODO: #7 Sort prefers reduces motion for header animations
  // TODO: #6 Add closing tag graphic device
  return (
    <hgroup className={classNames('flex flex-col items-start md:items-end', className)}>
      <h1 className="font-display font-black text-6xl lg:text-7xl xl:text-8xl tracking-tightest mr-[0.08em] -indent-[0.055em]">
        {/* TODO: #8 Add conditional wrap to logo link */}
        <Link href="/" className="flex flex-wrap items-end gap-x-one">
          <span className="text-neutral-600">
            {['D', 'a', 'v', 'e'].map((letter) => (
              <LogoLetter
                key={letter}
                delayRange={letterDelayRange}
                duration={letterDuration}
                letter={letter}
                showLetter={showLogo}
              />
            ))}
          </span>{' '}
          <span className="-mt-one text-neutral-400">
            {['O', '’', 'B', 'r', 'i', 'e', 'n'].map((letter) => (
              <LogoLetter
                key={letter}
                delayRange={letterDelayRange}
                duration={letterDuration}
                letter={letter}
                showLetter={showLogo}
              />
            ))}
          </span>
        </Link>
      </h1>
      <h2
        className={`text-neutral-700 font-display font-light text-sm lg:text-base xl:text-md tracking-widest uppercase xl:-mt-one -mr-[0.55em] transition-opacity ${
          showLogo ? 'opacity-1' : 'opacity-0'
        }`}
        style={{
          transitionDelay: `${straplineDelay}ms`,
          transitionDuration: `${straplineDuration}ms`,
        }}
      >
        Frontend engineer
      </h2>
    </hgroup>
  )
}
