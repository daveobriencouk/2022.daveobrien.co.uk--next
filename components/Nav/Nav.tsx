import React from 'react'
import Link from 'next/link'

type Links = {
  href: string
  text: string
}

type NavProps = {
  delay?: number
  duration?: number
  links: Links[]
  showNav?: boolean
}

export default function Nav({ delay = 0, duration = 0, links, showNav }: NavProps) {
  return (
    <ul
      className={`text-stone-500 flex flex-initial gap-half md:mt-two lg:mt-three xl:mt-four justify-center transition-opacity ${
        showNav ? 'opacity-1' : 'opacity-0'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {links.map(({ href, text }) => (
        <li key={text} className="font-display font-black text-lg md:text-md lg:text-lg tracking-tighter uppercase">
          {/* TODO: [P2] Add active link */}
          <Link href={href} className="block hover:underline underline-offset-4 hover:text-stone-700">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  )
}
