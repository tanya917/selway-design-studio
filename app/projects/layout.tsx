import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interior Design Projects | Selway Design Studio',
  description: 'Explore our award-winning interior design projects. Portfolio showcasing residential, hospitality, and commercial design work across London, Los Angeles, and worldwide. View our latest interior design case studies.',
  keywords: [
    'interior design projects',
    'design portfolio',
    'interior design case studies',
    'residential design projects',
    'hospitality interior design',
    'commercial design',
    'interior design examples',
    'design work',
  ],
  openGraph: {
    type: 'website',
    url: 'https://www.selwaydesignstudio.com/projects',
    title: 'Interior Design Projects | Selway Design Studio',
    description: 'Award-winning interior design projects and portfolio across London, Los Angeles, and worldwide.',
    images: [
      {
        url: 'https://www.selwaydesignstudio.com/carousel_pics/Selway-Jessica-Alexander-Whitehall-Road-London-Primary-Bedroom-3.jpg',
        width: 1200,
        height: 630,
        alt: 'Selway Design Studio interior design project',
      },
    ],
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Interior Design Projects',
            description: 'Portfolio of award-winning interior design projects by Selway Design Studio',
            url: 'https://www.selwaydesignstudio.com/projects',
            mainEntity: {
              '@type': 'Organization',
              name: 'Selway Design Studio',
              url: 'https://www.selwaydesignstudio.com',
            },
          }),
        }}
      />
      {children}
    </>
  )
}
