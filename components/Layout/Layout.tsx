import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="flex flex-col min-h-screen bg-gray-100"
      style={{
        backgroundSize: '100% 1.5rem',
        backgroundImage:
          'linear-gradient(to right, grey 1px, transparent 1px), linear-gradient(to bottom, grey 1px, transparent 1px)',
      }}
    >
      <header className="bg-gray-700/50 text-slate-200 mb-one py-one">
        <div className="container mx-auto flex justify-center">
          <hgroup>
            <h1 className="font-display font-black text-8xl tracking-tightest">Dave O'Brien</h1>
            <h2 className="uppercase">Frontend engineer</h2>
          </hgroup>
          <ul className="flex gap-one">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/cv">CV</Link>
            </li>
            <li>
              <Link href="/notes">Notes</Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-gray-700 text-slate-200 mt-one py-one">
        <div className="container mx-auto flex justify-center">&copy;{new Date().getFullYear()} Dave O&apos;Brien</div>
      </footer>
    </div>
  )
}
