import { Transition } from '@headlessui/react'

type MainContentTransitionProps = {
  children: React.ReactNode
  onTransitionEnd?: () => void
  show: boolean
}

export default function MainContentTransition({ children, onTransitionEnd, show }: MainContentTransitionProps) {
  return (
    <Transition
      show={show}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      onTransitionEnd={onTransitionEnd}
    >
      {children}
    </Transition>
  )
}
