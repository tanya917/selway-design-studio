import { MetadataRoute } from 'next'
import { getProjects } from '@/lib/sanity'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://selwaydesignstudio.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects()

  const projectEntries = projects.map((project: any) => ({
    url: `${baseUrl}/projects/${project.slug.current}`,
    lastModified: project._updatedAt || new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/press`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    ...projectEntries,
  ]
}
