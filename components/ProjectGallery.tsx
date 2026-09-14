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

  // Group images by type for mobile layout
  const processedImages = images.slice(1).map((image, idx) => ({
    image,
    idx: idx + 1
  }))

  return (
    <section className="p-0 m-0" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)' }}>
      {/* Desktop layout - original */}
      <div className="hidden lg:flex flex-wrap gap-0" style={{ width: '100vw', backgroundColor: 'black' }}>
        {processedImages.map((item, idx) => {
          const dimensions = imageDimensions[item.idx]
          const isPortrait = dimensions?.isPortrait ?? false
          const widthClass = isPortrait ? 'w-1/2' : 'w-full'

          return (
            <div
              key={idx}
              className={`${widthClass} h-screen relative overflow-hidden bg-black flex-shrink-0`}
            >
              <Image
                src={`/${item.image}`}
                alt={`${projectTitle} - Image ${item.idx}`}
                fill
                sizes={isPortrait ? '50vw' : '100vw'}
                className="object-cover"
                onLoadingComplete={(result) => handleImageLoad(item.idx, result)}
              />
            </div>
          )
        })}
      </div>

      {/* Mobile layout - new stacking */}
      <div className="lg:hidden grid gap-0 w-full bg-white" style={{ gridTemplateColumns: '1fr' }}>
        {processedImages.map((item, idx) => {
          const dimensions = imageDimensions[item.idx]
          const isPortrait = dimensions?.isPortrait ?? false

          // All images display full-width, one per row on mobile
          return (
            <div key={idx} className="relative w-full h-auto bg-white">
              <Image
                src={`/${item.image}`}
                alt={`${projectTitle} - Image ${item.idx}`}
                width={isPortrait ? 300 : 375}
                height={isPortrait ? 450 : 250}
                className="w-full h-auto object-contain"
                onLoadingComplete={(result) => handleImageLoad(item.idx, result)}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
