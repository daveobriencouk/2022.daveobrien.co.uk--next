import React, { useEffect, useState } from 'react'

import type { LogoProps } from '../../Logo'

type LogoLetterProps = {
  delayRange?: LogoProps['letterDelayRange']
  duration?: LogoProps['letterDuration']
  letter: string
  onTransitionEnd?: () => void
  show?: boolean
  skipAnimation?: boolean
}

export default function LogoLetter({
  delayRange = 0,
  duration = 0,
  letter,
  onTransitionEnd,
  show,
  skipAnimation,
}: LogoLetterProps) {
  const [transitionDelay, setTransitionDelay] = useState<number | undefined>(undefined)
  useEffect(() => {
    setTransitionDelay(Math.round(Math.random() * delayRange))
  }, [delayRange])

  return (
    <span
      key={letter}
      style={{
        transitionDelay: `${transitionDelay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`transition-opacity ${show || skipAnimation ? 'opacity-1' : 'opacity-0'}`}
      onTransitionEnd={onTransitionEnd}
    >
      {letter}
    </span>
  )
}
