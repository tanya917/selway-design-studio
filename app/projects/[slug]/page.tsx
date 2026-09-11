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
  return {
    title: `${project.title} | Selway Design Studio`,
    description,
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
