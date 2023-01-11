import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'

type ResponsiveNavButtonProps = {
  className?: string
  onTransitionEnd?: () => void
  open: boolean
  show: boolean
}

export default function ResponsiveNavButton({ className, onTransitionEnd, open, show }: ResponsiveNavButtonProps) {
  return (
    <Disclosure.Button
      onTransitionEnd={onTransitionEnd}
      className={classNames(
        'inline-flex items-center justify-center p-quarter text-neutral-500 hover:text-neutral-900 focus-ring',
        `transition-opacity ${show ? 'opacity-1' : 'opacity-0'}`,
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
