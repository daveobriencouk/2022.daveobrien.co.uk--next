import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import LogoLetter from './components/LogoLetter'

export type LogoProps = {
  className?: string
  letterDelayRange?: number
  letterDuration?: number
  onTransitionEnd?: () => void
  show?: boolean
  showStrapline?: boolean
  straplineDuration?: number
}

const FIRST_NAME = ['D', 'a', 'v', 'e']
const LAST_NAME = ['O', '’', 'B', 'r', 'i', 'e', 'n']

export default function Logo({
  className,
  letterDelayRange = 0,
  letterDuration = 0,
  onTransitionEnd,
  show,
  showStrapline,
  straplineDuration = 0,
}: LogoProps) {
  const [isStraplineShowing, setIsStraplineShowing] = React.useState(false)

  // TODO: #7 Sort prefers reduces motion for header animations
  // TODO: #6 Add closing tag graphic device
  return (
    <hgroup className={classNames('flex flex-col items-start xl:items-end', className)}>
      <h1 className="font-display font-black text-3.5xl md:text-3xl xl:text-4xl tracking-tightest mr-[0.08em] -indent-[0.055em]">
        {/* TODO: #8 Add conditional wrap to logo link */}
        <Link href="/" className="flex flex-wrap items-end gap-x-quarter">
          <span className="text-neutral-600">
            {FIRST_NAME.map((letter) => (
              <LogoLetter
                key={letter}
                delayRange={letterDelayRange}
                duration={letterDuration}
                letter={letter}
                show={show}
              />
            ))}
          </span>{' '}
          <span className="-mt-one text-neutral-400">
            {LAST_NAME.map((letter, i) => {
              const isLast = i === LAST_NAME.length - 1

              return (
                <LogoLetter
                  key={letter}
                  delayRange={letterDelayRange}
                  duration={letterDuration}
                  letter={letter}
                  onTransitionEnd={isLast ? () => setIsStraplineShowing(true) : undefined}
                  show={show}
                />
              )
            })}
          </span>
        </Link>
      </h1>
      <h2
        className={classNames(
          'text-neutral-700 font-display font-light text-sm md:text-base xl:text-md tracking-widest uppercase -mt-half xl:-mt-none -mr-[0.55em]',
          `transition-opacity ${isStraplineShowing || showStrapline ? 'opacity-1' : 'opacity-0'}`
        )}
        onTransitionEnd={onTransitionEnd}
        // INFO: Transition duration cannot be set in className as the value is dynamic and will not be available in tailwind
        style={{ transitionDuration: `${straplineDuration}ms` }}
      >
        Frontend Engineer
      </h2>
    </hgroup>
  )
}
