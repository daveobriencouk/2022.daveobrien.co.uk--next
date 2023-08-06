import { forwardRef } from 'react'
import md from 'markdown-it'
import { Disclosure, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { ChevronUpIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

import CommaSeparatedList from 'components/CommaSeparatedList'
import getSkills from 'helpers/getSkills'

type HeaderProps = {
  isActive: boolean
  company: string
  contract: boolean
  endDate: string
  open: boolean
  startDate: string
  title: string
}

type ContentProps = {
  content: string
  skills: string[]
}

type WorkExperienceProps = {
  active: string
  company: string
  content: string
  contract: boolean
  endDate: string
  id: string
  skills: string[]
  startDate: string
  title: string
}

function Header({ company, contract, endDate, isActive, open, startDate, title }: HeaderProps) {
  return (
    <Disclosure.Button
      as="header"
      className={classNames('flex flex-wrap cursor-pointer gap-x-one hover:text-primary-700 group', {
        'text-orange-700': isActive,
      })}
    >
      {startDate && (
        <p
          className={classNames('text-md heading text-neutral-400 group-hover:text-primary-400', {
            'text-orange-400': isActive,
          })}
        >
          <time>{startDate}</time> - <time>{endDate}</time>
        </p>
      )}
      <h3 className="relative flex items-baseline gap-6 text-lg uppercase heading basis-full shrink-0">
        <ChevronUpIcon
          className={`${
            open ? 'rotate-180 transform' : ''
          } h-10 w-10 text-neutral-400 group-hover:text-primary-400 absolute stroke-2 -left-[54px] top-2 transition-transform`}
        />
        {title}
        {contract && (
          <DocumentTextIcon
            className="block w-6 h-6 stroke-2 text-neutral-500 group-hover:text-primary-500"
            aria-hidden="true"
            aria-label="Contract position"
          />
        )}
      </h3>
      <h4 className="uppercase text-md heading text-neutral-500 group-hover:text-primary-500">{company}</h4>
    </Disclosure.Button>
  )
}

function Content({ content, skills }: ContentProps) {
  return (
    <Transition
      enter="transition duration-200 ease-out"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition duration-150 ease-out"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
    >
      <Disclosure.Panel className="mt-one">
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} className="prose" />
        {skills && (
          <div className="text-base mt-one">
            <h4 className="font-black uppercase">Skills & Tooling</h4>
            <CommaSeparatedList array={getSkills(skills)} as="ul" />
          </div>
        )}
      </Disclosure.Panel>
    </Transition>
  )
}

function WorkExperience(
  { active, company, content, contract, endDate, id, skills, startDate, title }: WorkExperienceProps,
  ref: React.Ref<HTMLDivElement>
) {
  const isActive = active === id

  return (
    <Disclosure as="div" id={id} ref={ref}>
      {({ open }) => (
        <>
          <Header
            company={company}
            contract={contract}
            endDate={endDate}
            isActive={isActive}
            open={open}
            startDate={startDate}
            title={title}
          />
          <Content skills={skills} content={content} />
        </>
      )}
    </Disclosure>
  )
}

export default forwardRef(WorkExperience)
