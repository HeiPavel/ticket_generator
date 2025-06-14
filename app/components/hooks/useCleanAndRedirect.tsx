import { useState, useEffect } from 'react'
import { redirect } from 'next/navigation'

export function useCleanAndRedirect(path: string, isValid: boolean) {
  const [isMounted, setIsMounted] = useState(false)

  if (isMounted && !isValid) redirect('/')

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
      return
    }

    return () => URL.revokeObjectURL(path)
  }, [path, isMounted])

  return isMounted
}