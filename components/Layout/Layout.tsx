import Link from 'next/link'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-700 text-slate-200 mb-8 py-4">
        <div className="container mx-auto flex justify-center">
          <ul className="flex gap-4">
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
      <footer className="bg-gray-700 text-slate-200 mt-8 py-4">
        <div className="container mx-auto flex justify-center">&copy;{new Date().getFullYear()} Dave O&apos;Brien</div>
      </footer>
    </div>
  )
}
