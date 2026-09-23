import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import projectsConfig from '@/projects.config.json'
import ProjectGallery from '@/components/ProjectGallery'
import ProjectHero from '@/components/ProjectHero'
import BackButton from '@/components/BackButton'
import FloatingProjectTitle from '@/components/FloatingProjectTitle'

export async function generateStaticParams() {
  return projectsConfig.projects.map((project: any) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projectsConfig.projects.find(p => p.slug === params.slug)
  if (!project) {
    return { title: 'Project Not Found' }
  }
  // Use the project's own description (first line/paragraph) as a unique,
  // keyword-rich meta description instead of a generic fallback shared by every project.
  const firstParagraph = project.description
    ? project.description.split('\n\n').filter(Boolean)[0]
    : null
  const description = firstParagraph
    ? `${firstParagraph.charAt(0).toUpperCase()}${firstParagraph.slice(1)} by Selway Design Studio.`
    : `${project.title} — an interior design project by Selway Design Studio.`

  const projectImageUrl = project.image
    ? `https://www.selwaydesignstudio.com/${project.image}`
    : 'https://www.selwaydesignstudio.com/carousel_pics/Selway-Jessica-Alexander-Whitehall-Road-London-Primary-Bedroom-3.jpg'

  return {
    title: `${project.title} | Selway Design Studio`,
    description,
    openGraph: {
      type: 'website',
      url: `https://www.selwaydesignstudio.com/projects/${project.slug}`,
      title: `${project.title} — Interior Design Project`,
      description,
      images: [
        {
          url: projectImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const project = projectsConfig.projects.find(p => p.slug === params.slug)
  const allProjects = projectsConfig.projects
  const currentIndex = allProjects.findIndex(
    (p: any) => p.slug === params.slug
  )
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length]

  if (!project) {
    return (
      <div className="bg-white py-24">
        <div className="container-full text-center">
          <h1 className="heading-1 mb-4">Project not found</h1>
          <p className="text-lg text-selway-stone mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/projects" className="btn-primary">
            Back to portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description?.split('\n\n')[0] || project.title,
            url: `https://www.selwaydesignstudio.com/projects/${project.slug}`,
            image: project.image ? `https://www.selwaydesignstudio.com/${project.image}` : undefined,
            creator: {
              '@type': 'Organization',
              name: 'Selway Design Studio',
              url: 'https://www.selwaydesignstudio.com',
            },
            about: 'Interior Design',
            inLanguage: 'en-GB',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.selwaydesignstudio.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Projects',
                item: 'https://www.selwaydesignstudio.com/projects',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: project.title,
                item: `https://www.selwaydesignstudio.com/projects/${project.slug}`,
              },
            ],
          }),
        }}
      />
      {/* Back Button - Hidden when footer is visible */}
      <BackButton projectSlug={project.slug} />

      {/* Hero Image */}
      {project.image && (
        <ProjectHero image={project.image} title={project.title} />
      )}

      {/* Project Details */}
      <section className="bg-accent-dusty-blue py-8 sm:py-12">
        <div className="container-full">
          <div>
            <h1 className="text-3xl mb-4 normal-case text-selway-dark-grey italic" style={{ textTransform: 'capitalize' }}>{project.title}</h1>

            {project.description ? (
              <p className="text-lg leading-relaxed text-selway-dark-grey mb-8 whitespace-pre-line">
                {project.description}
              </p>
            ) : (
              <p className="text-lg leading-relaxed text-selway-dark-grey mb-8">
                A project by Selway Design Studio
              </p>
            )}

            {project.featured && (
              <p className="text-sm text-selway-dark-grey mb-12">
                As featured in{' '}
                <a
                  href={project.featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-selway-dark-grey hover:text-selway-ink transition-colors"
                >
                  {project.featured.text}
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Floating Project Title - Hidden when footer is visible */}
      <FloatingProjectTitle title={project.title} />

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGallery images={project.gallery} projectTitle={project.title} />
      )}

      {/* Back to Projects */}
      <section className="bg-selway-cream py-16" data-footer>
        <div className="container-full text-center">
          <Link href={`/projects?scroll=${project.slug}`} className="btn-primary">
            Back to projects
          </Link>
        </div>
      </section>
    </>
  )
}
