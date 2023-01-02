import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure } from '@headlessui/react'
import classNames from 'classnames'

import type { Link as LinkType } from 'constants/'
import useFeatureFlags from 'hooks/useFeatureFlags'

type ResponsiveNavProps = {
  className?: string
  links: LinkType[]
}

export default function ResponsiveNav({ className, links }: ResponsiveNavProps) {
  const { linksByFeatureFlag } = useFeatureFlags()
  const router = useRouter()

  return (
    <Disclosure.Panel className={className}>
      <div className="flex flex-col items-start space-y-1 pt-two pb-two px-two bg-neutral-300">
        {links.filter(linksByFeatureFlag).map(({ text, href }) => (
          <Disclosure.Button
            key={text}
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
