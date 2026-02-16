'use client'

// Triggers a CSS reveal animation when the element enters the viewport.
// Uses IntersectionObserver to add 'reveal-visible' class once, then disconnects.
// Animation classes (reveal-from-left, etc.) are defined in globals.css.
import { useEffect, useRef, type ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'down' | 'top'
  className?: string
  delay?: number
}

export function ScrollReveal({ children, direction = 'down', className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeoutId: ReturnType<typeof setTimeout> | undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            el.classList.add('reveal-visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => {
      if (timeoutId !== undefined) clearTimeout(timeoutId)
      observer.disconnect()
    }
  }, [delay])

  const directionClass = {
    left: 'reveal-from-left',
    right: 'reveal-from-right',
    down: 'reveal-from-down',
    top: 'reveal-from-top',
  }[direction]

  return (
    <div ref={ref} className={`animate-reveal ${directionClass} ${className}`}>
      {children}
    </div>
  )
}
