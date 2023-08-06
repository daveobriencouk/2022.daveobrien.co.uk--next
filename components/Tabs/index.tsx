import classNames from 'classnames'
import { Tab } from '@headlessui/react'

type TabsProps = {
  children: (tab: any) => React.ReactNode
  data: {
    key: string
    title: string
  }[]
}

export default function Tabs({ children, data }: TabsProps) {
  return (
    <Tab.Group>
      <Tab.List className="flex gap-x-2 gap-y-0 mb-one flex-wrap">
        {data.map(({ key, title }) => (
          <Tab
            key={key}
            className={({ selected }) =>
              classNames(
                'font-black uppercase text-sm hover:bg-primary-600 text-neutral-100 pl-quarter px-quarter',
                selected ? 'bg-primary-700' : 'bg-neutral-400'
              )
            }
          >
            {title}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {data.map(({ key, ...tab }) => (
          <Tab.Panel key={`${key}-panel`}>{children(tab)}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
