'use client'

// Infinite-loop carousel built on Embla. Shows 1/2/3 slides per view
// at mobile/tablet/desktop breakpoints. pb-4 on inner container prevents
// overflow-hidden from clipping button shadows.
import { useCallback, type ReactNode } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

interface CarouselProps {
  children: ReactNode[]
  className?: string
}

export function Carousel({ children, className = '' }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <div className={`relative ${className}`}>
      {/* Prev Arrow */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 text-grey-arrow hover:text-brand-dark transition-colors"
        aria-label="Previous"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-6 fill-current">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </button>

      {/* Carousel viewport */}
      <div className="overflow-hidden mx-10" ref={emblaRef}>
        <div className="flex gap-4 pb-4">
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-none w-full sm:w-1/2 md:w-1/3"
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Next Arrow */}
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 text-grey-arrow hover:text-brand-dark transition-colors"
        aria-label="Next"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-6 fill-current">
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </button>
    </div>
  )
}
