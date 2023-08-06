import camelCase from 'lodash/camelCase'
import { DocumentTextIcon, MegaphoneIcon, WrenchScrewdriverIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

type CvSectionProps = {
  title: string
  children: React.ReactNode
  id: string
}

const CvIconMap: Record<string, React.ElementType> = {
  intro: MegaphoneIcon,
  skillsAndTooling: WrenchScrewdriverIcon,
  workExperience: BriefcaseIcon,
  education: DocumentTextIcon,
}

export default function CvSection({ title, children, id }: CvSectionProps) {
  const Icon = CvIconMap[camelCase(id)]

  return (
    <section
      id={id}
      className="pl-one ml-half border-l-[0.875rem] py-half -mt-half border-l-neutral-200 mb-one-and-half"
    >
      <h2 className="relative flex items-center gap-2 uppercase text-md heading mb-one">
        {Icon && (
          <span className="absolute block p-3 text-white bg-neutral-500 -left-[3.55rem]">
            <Icon className="block w-5 h-5" aria-hidden="true" />
          </span>
        )}
        {title}
      </h2>
      <div className="text-base">{children}</div>
    </section>
  )
}
