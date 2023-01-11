import { useEffect, useState } from 'react'
import { useSessionStorage } from 'usehooks-ts'
import { useRouter } from 'next/router'

// INFO: Commented out code is if/when I want to use this hook for multiple pages
export default function useInitialPageLoad() {
  const router = useRouter()
  // const [initialPageLoads, setInitialPageLoads] = useSessionStorage<Record<string, boolean>>('dob-initialPageLoads', {})
  const [initialPageLoads, setInitialPageLoads] = useSessionStorage<boolean>('dob-initialPageLoads', false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [initialPageLoads])

  // function setInitialPageLoad(value: boolean) {
  //   return setInitialPageLoads({
  //     ...initialPageLoads,
  //     [router.asPath]: value,
  //   })
  // }
  function setInitialPageLoad(value: boolean) {
    return setInitialPageLoads(value)
  }

  return {
    // hasInitialPageLoaded: initialPageLoads[router.asPath] || false,
    hasInitialPageLoaded: initialPageLoads,
    loading,
    setInitialPageLoad,
  }
}
