import NextLink from 'next/link'
import classNames from 'classnames'

type AsideBlockProps = {
  children: React.ReactNode
  title: string
}

type ListProps = {
  items: Item[]
}

type Item = {
  children?: Item[]
  href?: string
  id?: string
  text: string
}

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
}

function AsideBlock({ children, title }: AsideBlockProps) {
  return (
    <>
      <h2 className="uppercase text-md heading mb-one">{title}</h2>
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
            <AsideBlock.Link href={id ? `#${id}` : href} isActive={isActive || isChildActive}>
              {/* ICONS? And on the headings in the content */}
              {text}
            </AsideBlock.Link>

            {/* if children */}
            {children && (
              <AsideBlock.SubList>
                {children.map(({ href, id, text }) => {
                  const isActive = window.location.hash.slice(1) === id

                  return (
                    <li key={id || href}>
                      <AsideBlock.Link href={id ? `#${id}` : href} isActive={isActive}>
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

function CallToAction({ children, download, href }: CallToActionProps) {
  return (
    <a
      download={download}
      href={href}
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
