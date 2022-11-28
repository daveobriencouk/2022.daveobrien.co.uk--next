import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
  showGrid?: boolean
}

const gridStyles = {
  backgroundSize: '100% 1.5rem',
  backgroundImage:
    'linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px)',
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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="mt-[0.462em] lg:-mt-[0.154em]" style={showGrid ? gridStyles : {}}>
        <header className="text-stone-500 mb-one">
          <div className="mx-one flex flex-col md:flex-row justify-between items-start">
            <hgroup className="flex flex-col items-end">
              <h1 className="font-display font-black text-6xl lg:text-8xl tracking-tightest mr-[0.08em] -indent-[0.055em]">
                {/* Conditional wrap */}
                <Link href="/" className="flex flex-wrap gap-x-one">
                  <span className="text-stone-700">Dave</span> <span>O'Brien</span>
                </Link>
              </h1>
              <h2 className="font-display font-thin text-sm lg:text-md tracking-widest uppercase lg:-mt-one -mr-[0.55em]">
                Frontend engineer
              </h2>
            </hgroup>
            <ul className="flex gap-one md:mt-two lg:mt-four justify-center">
              {links.map(({ href, text }) => (
                <li
                  key={text}
                  className=" font-display font-black text-lg md:text-md lg:text-lg tracking-tighter uppercase"
                >
                  <Link href={href} className="block hover:underline underline-offset-4 hover:text-stone-700">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </header>
        <main className="container mx-auto flex-1">{children}</main>
        <footer className="bg-gray-700 text-slate-200 mt-one py-one">
          <div className="container mx-auto flex justify-center">
            &copy;{new Date().getFullYear()} Dave O&apos;Brien
          </div>
        </footer>
      </div>
    </div>
  )
}
