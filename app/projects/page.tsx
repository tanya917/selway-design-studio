'use client'

import Link from 'next/link'
import Image from 'next/image'
import projectsConfig from '@/projects.config.json'
import { ProjectScroller } from './ProjectScroller'

export default function Portfolio() {
  const projects = projectsConfig.projects

  return (
    <>
      <ProjectScroller />
      {/* Hero Section */}
      <section className="bg-selway-cream py-0">
        <div className="container-full">
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white p-0 m-0 w-screen" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
        {projects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-0 w-full">
                {projects.map((project: any) => (
                  <Link
                    key={project.slug}
                    id={`project-${project.slug}`}
                    href={`/projects/${project.slug}`}
                    className="group block w-full"
                  >
                    <div className="relative overflow-hidden h-screen w-full bg-white">
                      {project.image && (
                        <Image
                          src={`/${project.image}`}
                          alt={project.title}
                          fill
                          sizes="100vw"
                          priority
                          className="object-cover"
                          style={{ objectPosition: 'center 5%' }}
                        />
                      )}
                      {/* Text Overlay */}
                      <div className="absolute bottom-6 right-6 max-w-xs text-right">
                        <h2 className="text-lg sm:text-2xl font-semibold text-selway-cream capitalize" style={{ textTransform: 'capitalize' }}>
                          {project.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </>
        ) : (
          <div className="container-full text-center py-12">
            <p className="text-lg text-selway-stone mb-4">Portfolio projects coming soon</p>
            <p className="text-sm text-selway-stone opacity-75">We're currently loading our project collection</p>
          </div>
        )}
      </section>

    </>
  )
}
