'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function ProjectScroller() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const scrollTo = searchParams.get('scroll')
    if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(`project-${scrollTo}`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 1000)
    }
  }, [searchParams])

  return null
}
