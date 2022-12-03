import React from 'react'

import type { LogoProps } from '../../Logo'

type LogoLetterProps = {
  delayRange?: LogoProps['letterDelayRange']
  duration?: LogoProps['letterDuration']
  letter: string
  showLetter?: boolean
}

export default function LogoLetter({ delayRange = 0, duration = 0, letter, showLetter = true }: LogoLetterProps) {
  return (
    <span
      key={letter}
      style={{
        transitionDelay: `${Math.round(Math.random() * delayRange)}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`transition-opacity ${showLetter ? 'opacity-1' : 'opacity-0'}`}
    >
      {letter}
    </span>
  )
}
