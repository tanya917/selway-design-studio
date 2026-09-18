import type { Metadata } from 'next'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { generateMetadata as genMeta, structuredData } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  ...genMeta('Award-Winning Interior Design Studio',
    'Selway Design Studio creates hyper-personalised, beautifully considered spaces for private clients, residential projects, hospitality and commercial partners across London, Los Angeles and worldwide.'),
  alternates: {
    canonical: 'https://selwaydesignstudio.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2b2a28" />
        <link rel="icon" href="/Selway_Favicon_Berry.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData.organization),
          }}
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
      </head>
      <body>
        <Header />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
