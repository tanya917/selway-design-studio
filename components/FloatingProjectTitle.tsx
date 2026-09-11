'use client'

import { useState, useEffect, useRef } from 'react'

export default function FloatingProjectTitle({ title }: { title: string }) {
  const [isVisible, setIsVisible] = useState(true)
  const footerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const footer = document.querySelector('[data-footer]')
    if (!footer) return

    footerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    footerRef.current.observe(footer)

    return () => {
      if (footerRef.current) {
        footerRef.current.disconnect()
      }
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-xs text-right">
      <h2 className="text-lg sm:text-2xl text-selway-cream font-semibold capitalize" style={{ textTransform: 'capitalize' }}>
        {title}
      </h2>
    </div>
  )
}
