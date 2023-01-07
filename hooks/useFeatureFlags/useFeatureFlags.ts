import { useFlags } from 'flagsmith/react'
import type { FlagOptions, Link } from 'constants/'

export default function useFeatureFlags() {
  const flags = useFlags<FlagOptions>(['section_about', 'section_cv', 'section_notes', 'section_project'])

  const linksByFeatureFlag = (link: Link) => {
    const linkFeatureFlag = link.featureFlag && flags[link.featureFlag]

    // If no flag exists, then return the link
    if (!linkFeatureFlag) return true

    return linkFeatureFlag.enabled
  }

  const checkSomeFeatureFlags = (flagsToCheck: FlagOptions[]) => flagsToCheck.some((flag) => flags[flag].enabled)

  return {
    checkSomeFeatureFlags,
    linksByFeatureFlag,
    flags,
  }
}
