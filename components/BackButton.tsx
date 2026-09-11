'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function BackButton({ projectSlug }: { projectSlug: string }) {
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
    <Link
      href={`/projects?scroll=${projectSlug}`}
      className="fixed left-6 bottom-6 z-40 hover:opacity-75 transition-opacity"
    >
      <Image
        src="/hand_drawn_assets/back_button_cutout-2 2.png"
        alt="Back"
        width={120}
        height={120}
        style={{ filter: 'hue-rotate(120deg) saturate(1.5) brightness(1.1) contrast(1.2)' }}
      />
    </Link>
  )
}
