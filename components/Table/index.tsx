import classNames from 'classnames'

type TableProps = {
  children: React.ReactNode
}

type ThProps = TableProps & {
  isSmHidden?: boolean
}

type TdProps = TableProps & {
  isSmHidden?: boolean
  className?: string
}

function Table({ children }: TableProps) {
  return (
    <table className="min-w-full divide-y divide-gray-300 leading-[calc(1.75rem-1px)] font-normal">{children}</table>
  )
}

function Thead({ children }: TableProps) {
  return <thead>{children}</thead>
}

function Tbody({ children }: TableProps) {
  return <tbody className="divide-y divide-neutral-200">{children}</tbody>
}

function Tr({ children }: TableProps) {
  return <tr>{children}</tr>
}

function Th({ children, isSmHidden }: ThProps) {
  return (
    <th
      scope="col"
      className={classNames('px-one py-0 -mb-[1px] text-left font-bold pl-0 border-0', {
        'hidden lg:table-cell': isSmHidden,
      })}
    >
      {children}
    </th>
  )
}

function Td({ children, isSmHidden, className }: TdProps) {
  return (
    <td
      className={classNames(
        'px-one py-0 -mb-[1px] text-left pl-0 border-0',
        {
          'hidden lg:table-cell': isSmHidden,
        },
        className
      )}
    >
      {children}
    </td>
  )
}

Table.Thead = Thead
Table.Tbody = Tbody
Table.Tr = Tr
Table.Th = Th
Table.Td = Td

export default Table
