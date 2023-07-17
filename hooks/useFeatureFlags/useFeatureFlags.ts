import { useEffect } from 'react'
import { useFlags } from 'flagsmith/react'
import type { FlagOptions, Link } from 'constants/'

export default function useFeatureFlags() {
  const flags = useFlags<FlagOptions>(['section_about', 'section_cv', 'section_notes', 'section_project'])

  // INFO: Hardcoded feature flags for now - flagsmith not working on second render (app getInitialState looks OK)
  // TODO: #37 Fix flagsmith flags not working on second render (app getInitialState looks OK)
  // const linksByFeatureFlag = (link: Link) => !link.featureFlag || ['section_about', 'section_cv'].includes(link.featureFlag)

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
