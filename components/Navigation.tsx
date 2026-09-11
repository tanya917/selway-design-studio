'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.pointerEvents = 'none'
    } else {
      document.body.style.pointerEvents = 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen])

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 flex flex-col gap-1.5 w-8 h-8 items-center justify-center bg-transparent hover:opacity-75 transition-opacity pointer-events-auto"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-accent-sage transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-accent-sage transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-accent-sage transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 pointer-events-auto"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Menu Panel */}
      <nav
        className={`fixed top-0 right-0 h-screen w-64 z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="pt-24 px-6 flex flex-col gap-8 text-center pointer-events-auto">
          <button
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); router.push('/') }}
            className={`text-lg font-semibold transition-colors cursor-pointer pointer-events-auto ${
              pathname === '/' ? 'text-accent-sage' : 'text-white hover:text-selway-cream'
            }`}
          >
            Home
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); router.push('/about') }}
            className={`text-lg font-semibold transition-colors cursor-pointer pointer-events-auto ${
              pathname === '/about' ? 'text-accent-sage' : 'text-white hover:text-selway-cream'
            }`}
          >
            About
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); router.push('/projects') }}
            className={`text-lg font-semibold transition-colors cursor-pointer pointer-events-auto ${
              pathname === '/projects' ? 'text-accent-sage' : 'text-white hover:text-selway-cream'
            }`}
          >
            Projects
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); router.push('/press') }}
            className={`text-lg font-semibold transition-colors cursor-pointer pointer-events-auto ${
              pathname === '/press' ? 'text-accent-sage' : 'text-white hover:text-selway-cream'
            }`}
          >
            Press
          </button>
          {/* Shop button - hidden for now, will add back later */}
          {/* <button
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); router.push('/shop') }}
            className="text-lg font-semibold text-white hover:text-selway-cream transition-colors cursor-pointer pointer-events-auto"
          >
            Shop
          </button> */}
          <button
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); router.push('/contact') }}
            className={`text-lg font-semibold transition-colors cursor-pointer pointer-events-auto ${
              pathname === '/contact' ? 'text-accent-sage' : 'text-white hover:text-selway-cream'
            }`}
          >
            Contact
          </button>
        </div>
      </nav>
    </>
  )
}
