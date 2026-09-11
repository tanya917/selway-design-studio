'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProjectHero({ image, title }: { image: string, title: string }) {
  const [aspectRatio, setAspectRatio] = useState<number>(1)

  const handleImageLoad = (result: any) => {
    const { naturalHeight, naturalWidth } = result
    setAspectRatio(naturalWidth / naturalHeight)
  }

  const height = `calc(100vw / ${aspectRatio})`

  return (
    <div className="relative w-full" style={{ height, maxHeight: '100vh' }}>
      <Image
        src={`/${image}`}
        alt={title}
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center 5%' }}
        priority
        onLoadingComplete={handleImageLoad}
      />
    </div>
  )
}
