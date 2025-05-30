'use client'

import { useState, useEffect } from 'react'

export function useResponsive (breakpoints: number[]) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const updateIndex = () => {
      const width = window.innerWidth
      const newIndex = breakpoints.findIndex((bp, index) => width >= bp && width < (breakpoints[index + 1] ?? Infinity))
      setIndex(newIndex)
    }

    updateIndex()

    let timeoutId: NodeJS.Timeout
    const handleIndexUpdate = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        updateIndex()
      }, 200)
    }

    window.addEventListener('resize', handleIndexUpdate)
    return () => window.removeEventListener('resize', handleIndexUpdate)
  }, [breakpoints])

  return index
}