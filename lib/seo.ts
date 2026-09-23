import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://selwaydesignstudio.com'
const siteName = 'Selway Design Studio'
const description = 'Award-winning interior design studio creating hyper-personalised spaces across London, Los Angeles, and worldwide. Formerly known as Stelly Selway.'

export function generateMetadata(
  title: string,
  pageDescription?: string,
  image?: string,
  path?: string
): Metadata {
  const url = path ? `${baseUrl}${path}` : baseUrl
  const ogImage = image || `${baseUrl}/og-image.jpg`

  return {
    metadataBase: new URL(baseUrl),
    title: `${title} | ${siteName}`,
    description: pageDescription || description,
    keywords: [
      'interior design',
      'bespoke interiors',
      'residential design',
      'hospitality design',
      'London',
      'Los Angeles',
      'design studio',
      'Stelly Selway',
      'Selway Design Studio',
      'Tanya Selway',
      'interior designer',
      'West London designer',
      'London interior design',
      'London interior designer',
      'warm interiors',
      'high end interiors',
      'luxury interiors',
      'quirky interior design',
      'colourful interior design',
      'colorful interior design',
      'luxury design',
      'mid century interior design',
      'beautiful interior design',
      'cool interior design',
      'personalised interior design',
      'personalized interior design',
      'thoughtful interior design',
      'wood panelling design',
      'wood paneling design',
      'family home interior designer',
      'interior design for new builds',
      'interior design for family homes',
      'high end family home design',
      'maximalist interior design',
      'maximalist interior designer',
      'bespoke interior design',
      'award-winning interior design',
      'custom interior design',
      'emotional interior design',
      'considered interior design',
    ],
  }
}

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Selway Design Studio',
    alternateName: 'Stelly Selway',
    url: baseUrl,
    description,
    founder: 'Tanya Selway',
  },
}
