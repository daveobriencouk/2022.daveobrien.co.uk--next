import NextLink from 'next/link'
import classNames from 'classnames'

type AsideBlockProps = {
  children: React.ReactNode
  title: string
}

type ListProps = {
  items: Item[]
}

type ItemWithHref = {
  children?: Item[] | null
  href: string
  id?: never
  text: string
}

type ItemWithId = {
  children?: Item[] | null
  href?: never
  id: string
  text: string
}

type Item = ItemWithHref | ItemWithId

type SubListProps = {
  children: React.ReactNode
}

type LinkProps = {
  children: React.ReactNode
  href: string
  isActive?: boolean
}

type CallToActionProps = {
  children: React.ReactNode
  download?: string
  href: string
  onClick?: () => void
}

function AsideBlock({ children, title }: AsideBlockProps) {
  return (
    <>
      <h2 className="uppercase text-md heading mb-one">
        <NextLink href="#main-heading">{title}</NextLink>
      </h2>
      {children}
    </>
  )
}

function List({ items }: ListProps) {
  return (
    <ul className="text-sm mb-one">
      {items.map(({ children, href, id, text }) => {
        const isActive = window.location.hash.slice(1) === id
        const isChildActive = children?.some(({ id }) => window.location.hash.slice(1) === id)

        return (
          <li key={id || href}>
            <AsideBlock.Link href={id ? `#${id}` : (href as string)} isActive={isActive || isChildActive}>
              {/* ICONS? And on the headings in the content */}
              {text}
            </AsideBlock.Link>

            {children && (
              <AsideBlock.SubList>
                {children.map(({ href, id, text }) => {
                  const isActive = window.location.hash.slice(1) === id

                  return (
                    <li key={id || href}>
                      <AsideBlock.Link href={id ? `#${id}` : (href as string)} isActive={isActive}>
                        {text}
                      </AsideBlock.Link>
                    </li>
                  )
                })}
              </AsideBlock.SubList>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function SubList({ children }: SubListProps) {
  return <ul className="pl-quarter">{children}</ul>
}

function Link({ children, href, isActive }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={classNames(
        'inline-block font-black uppercase  hover:bg-primary-600 text-neutral-100 px-quarter',
        { 'bg-primary-700 text-white': isActive },
        { 'bg-neutral-400': !isActive }
      )}
    >
      {children}
    </NextLink>
  )
}

function CallToAction({ children, download, href, onClick }: CallToActionProps) {
  return (
    <a
      download={download}
      href={href}
      onClick={onClick}
      className="block w-full text-md text-white uppercase heading bg-primary-700 px-one grow-0 hover:bg-primary-900 focus-ring leading-two"
    >
      {children}
    </a>
  )
}

AsideBlock.List = List
AsideBlock.SubList = SubList
AsideBlock.Link = Link
AsideBlock.CallToAction = CallToAction

export default AsideBlock
