'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroImage {
  _id: string
  image: any
  alt: string
}

interface HeroCarouselProps {
  images: HeroImage[]
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isAutoPlay, images.length])

  if (images.length === 0) {
    return (
      <div className="relative w-full h-screen bg-selway-cream flex items-center justify-center">
        <p className="text-selway-stone text-lg">Hero carousel coming soon</p>
      </div>
    )
  }

  const currentImage = images[currentIndex]

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        {images.map((img, index) => (
          <div
            key={img._id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img.image.asset.url}
              alt={img.alt || `Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={85}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 hover:opacity-80 transition-opacity"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            aria-label="Previous slide"
          >
            <div className="relative w-12 h-12">
              <Image
                src="/hand_drawn_assets/forward_backwards/back_button.png"
                alt="Previous"
                fill
                className="object-contain"
              />
            </div>
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 hover:opacity-80 transition-opacity"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            aria-label="Next slide"
          >
            <div className="relative w-12 h-12">
              <Image
                src="/hand_drawn_assets/forward_backwards/forward_button.png"
                alt="Next"
                fill
                className="object-contain"
              />
            </div>
          </button>
        </>
      )}
    </div>
  )
}
