'use client'

import { useEffect } from 'react'
import { useMounted } from './useMounted'
import { redirect } from 'next/navigation'

export function useCleanAndRedirect(path: string, isValid: boolean) {
  const isMounted = useMounted()

  if (isMounted && !isValid) redirect('/')

  useEffect(() => {
    if (!isMounted) return

    return () => URL.revokeObjectURL(path)
  }, [path, isMounted])

  return isMounted
}