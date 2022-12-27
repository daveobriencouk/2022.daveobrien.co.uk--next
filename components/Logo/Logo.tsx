import React from 'react'
import Link from 'next/link'

import LogoLetter from './components/LogoLetter'

export type LogoProps = {
  showLogo?: boolean
  letterDelayRange?: number
  letterDuration?: number
  straplineDuration?: number
}

export default function Logo({ letterDelayRange = 0, letterDuration = 0, showLogo, straplineDuration = 0 }: LogoProps) {
  const straplineDelay = letterDuration + letterDelayRange

  // TODO: [P2] Sort prefers reduces motion
  // TODO: [P2] Check for screen readers / accessibility
  return (
    <hgroup className="flex flex-col items-start md:items-end">
      <h1 className="font-display font-black text-6xl lg:text-7xl xl:text-8xl tracking-tightest mr-[0.08em] -indent-[0.055em]">
        {/* TODO: [P2] Add conditional wrap - Link & h1 vs h2? */}
        <Link href="/" className="flex flex-wrap gap-x-one items-end">
          <span className="text-stone-600">
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
          <span className="-mt-one text-stone-400">
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
        className={`text-stone-700 font-display mb-one font-light text-sm lg:text-base xl:text-md tracking-widest uppercase xl:-mt-one -mr-[0.55em] transition-opacity ${
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
