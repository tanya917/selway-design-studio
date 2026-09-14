'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const showSlugAttribution = pathname === '/about'
  return (
    <footer className="border-t-2 border-accent-blue bg-accent-rubis text-white">
      <div className="container-full py-6">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          {/* Navigation */}
          <div>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-accent-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-accent-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-accent-blue transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-300 hover:text-accent-blue transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-accent-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            {showSlugAttribution && (
              <p className="text-xs text-gray-400 mb-1 leading-tight">
                Disco Slug by{' '}
                <a
                  href="https://anneliefawke.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors"
                >
                  Annelie Fawke
                </a>
              </p>
            )}
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:info@selwaydesignstudio.com" className="inline-block hover:opacity-75 transition-opacity">
                <Image
                  src="/hand_drawn_assets/info_at_selway_cutout_gray300.png"
                  alt="Email: info@selwaydesignstudio.com"
                  width={200}
                  height={50}
                />
              </a>
              <div className="flex gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <div className="text-sm text-gray-300">
                  <p>Bramber Court</p>
                  <p>2 Bramber Road</p>
                  <p>London W14 9PW</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Selway Design Studio. All rights reserved.</p>
            <div className="flex gap-5 mt-2 md:mt-0">
              <a href="https://www.instagram.com/tanya.selway/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity" title="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <circle cx="17.5" cy="6.5" r="1.5"></circle>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/tanya-selway-a4a11019/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity" title="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.34h2.5zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm-1 10h2v-8h-2v8z"/>
                </svg>
              </a>
              <a href="https://uk.pinterest.com/selwaydesignstudio/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity" title="Pinterest">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 8c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.5-1 2.5-2 3.5V15c0 .55-.45 1-1 1s-1-.45-1-1v-1.5C10 12.5 9 11.5 9 10v-2zm3 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
