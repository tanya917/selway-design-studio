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
