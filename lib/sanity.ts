import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

export async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    image {
      asset->{
        _id,
        url
      }
    },
    category,
    location,
    year
  }`

  try {
    const projects = await client.fetch(query)
    return projects
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getProject(slug: string) {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug {
      current
    },
    description,
    detailedDescription,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    gallery[] {
      asset->{
        _id,
        url,
        "width": metadata.dimensions.width,
        "height": metadata.dimensions.height
      },
      alt
    },
    category,
    location,
    year,
    scope,
    services
  }`

  try {
    const project = await client.fetch(query, { slug })
    if (!project) {
      console.error('Project not found for slug:', slug)
    }
    return project
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export async function getHeroImages() {
  const query = `*[_type == "heroImage"] | order(order asc) {
    _id,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    alt,
    order
  }`

  try {
    const images = await client.fetch(query)
    return images
  } catch (error) {
    console.error('Error fetching hero images:', error)
    return []
  }
}

export default client
