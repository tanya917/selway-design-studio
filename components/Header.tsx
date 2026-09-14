import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 pl-2 pb-6">
      <div>
        {/* Floating Logo */}
        <Link href="/" className="w-fit hover:opacity-80 transition-opacity">
          <img
            src="/logo-sage.svg.svg"
            alt="Selway Design Studio"
            className="h-40 w-auto"
          />
        </Link>
      </div>
    </header>
  )
}
