import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
  showGrid?: boolean
}

const gridStyles = {
  backgroundSize: '100% 1.5rem',
  backgroundImage:
    'linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to bottom, #ddd 1px, transparent 1px)',
}

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

export default function Layout({ children, showGrid }: LayoutProps) {
  return (
    <div style={showGrid ? gridStyles : {}} className="flex flex-col min-h-screen bg-gray-100 min-w-[24rem]">
      {/* className='md:mt-[2.25em] lg:mt-[1.9375em] xl:mt-[1.0625em]' */}
      <header className="text-stone-500 mt-one mb-two">
        <div className="mx-two flex gap-x-one flex-col md:flex-row justify-between items-start">
          <hgroup className="flex flex-col items-start md:items-end">
            <h1 className="font-display font-black text-6xl lg:text-7xl xl:text-8xl tracking-tightest mr-[0.08em] -indent-[0.055em]">
              {/* Conditional wrap - link & h1 vs h2? Logo? */}
              <Link href="/" className="flex flex-wrap gap-x-one items-end">
                <span className="text-stone-700">Dave</span> <span className="-mt-one">O&apos;Brien</span>
              </Link>
            </h1>
            <h2 className="font-display font-thin text-sm lg:text-base xl:text-md tracking-widest uppercase xl:-mt-one -mr-[0.55em]">
              Frontend engineer
            </h2>
          </hgroup>
          <ul className="flex flex-initial gap-half md:mt-two lg:mt-three xl:mt-four justify-center">
            {links.map(({ href, text }) => (
              <li
                key={text}
                className="font-display font-black text-lg md:text-md lg:text-lg tracking-tighter uppercase"
              >
                {/* TODO: Add active link */}
                <Link href={href} className="block hover:underline underline-offset-4 hover:text-stone-700">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="bg-stone-200 mt-one py-one px-two">
        <div className="flex text-sm">&copy;{new Date().getFullYear()} Dave O&apos;Brien</div>
      </footer>
    </div>
  )
}
