import { Raleway, Open_Sans } from '@next/font/google'
import { useLocalStorage } from 'usehooks-ts'

// https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
})

type BaseLayoutProps = {
  children: React.ReactNode
}

const gridStyles = {
  backgroundSize: '100% 1.75rem',
  backgroundImage:
    'linear-gradient(to right, #ddd 1px, transparent 1px), linear-gradient(to top, #ddd 1px, transparent 1px)',
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const [showGrid] = useLocalStorage('dob-showGrid', false)

  return (
    <div className={`${openSans.variable} ${raleway.variable} font-sans`}>
      <div style={true ? gridStyles : {}} className="flex flex-col min-h-screen bg-neutral-100 min-w-[24rem] relative">
        {children}
      </div>
    </div>
  )
}
