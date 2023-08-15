import { BriefcaseIcon, FingerPrintIcon, ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline'

import type { PrimaryArea } from 'models/cv/skillsAndTooling/types'

type SkillPrimaryAreaIconProps = {
  primaryArea: PrimaryArea
}

export default function SkillPrimaryAreaIcon({ primaryArea }: SkillPrimaryAreaIconProps) {
  const iconProps = {
    className: 'block w-5 h-5',
    'aria-hidden': true,
  }

  switch (primaryArea) {
    case 'work':
      return <BriefcaseIcon {...iconProps} />
    case 'personal':
      return <FingerPrintIcon {...iconProps} />
    case 'past':
      return <ArchiveBoxArrowDownIcon {...iconProps} />
    default:
      return null
  }
}
