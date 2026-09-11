'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryImage {
  src: string
  alt: string
}

export default function ProjectGallery({ images, projectTitle }: { images: string[], projectTitle: string }) {
  const [imageDimensions, setImageDimensions] = useState<Record<number, { isPortrait: boolean, aspectRatio: number }>>({})

  const handleImageLoad = (idx: number, result: any) => {
    const { naturalHeight, naturalWidth } = result
    const isPortrait = naturalHeight > naturalWidth
    const aspectRatio = naturalWidth / naturalHeight
    setImageDimensions(prev => ({
      ...prev,
      [idx]: { isPortrait, aspectRatio }
    }))
  }

  return (
    <section className="p-0 m-0 bg-black" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
      <div className="flex flex-wrap gap-0" style={{ width: '100vw' }}>
        {images.slice(1).map((image: string, idx: number) => {
          const realIdx = idx + 1
          const dimensions = imageDimensions[realIdx]
          const isPortrait = dimensions?.isPortrait ?? false
          const aspectRatio = dimensions?.aspectRatio ?? 1
          const widthClass = isPortrait ? 'w-1/2' : 'w-full'

          // Fixed height matching projects page
          const heightValue = isPortrait ? '100vh' : '100vh'

          return (
            <div
              key={idx}
              className={`${widthClass} h-screen relative overflow-hidden bg-black flex-shrink-0`}
            >
              <Image
                src={`/${image}`}
                alt={`${projectTitle} - Image ${idx + 2}`}
                fill
                sizes={isPortrait ? '50vw' : '100vw'}
                className="object-cover"
                onLoadingComplete={(result) => handleImageLoad(realIdx, result)}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
