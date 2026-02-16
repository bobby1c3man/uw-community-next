import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

let observerCallback: (entries: Partial<IntersectionObserverEntry>[]) => void
const mockObserve = vi.fn()
const mockUnobserve = vi.fn()
const mockDisconnect = vi.fn()

beforeEach(() => {
  mockObserve.mockClear()
  mockUnobserve.mockClear()
  mockDisconnect.mockClear()

  class MockIntersectionObserver {
    constructor(callback: (entries: Partial<IntersectionObserverEntry>[]) => void) {
      observerCallback = callback
    }
    observe = mockObserve
    unobserve = mockUnobserve
    disconnect = mockDisconnect
  }

  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

describe('ScrollReveal', () => {
  it('renders children', () => {
    const { getByText } = render(
      <ScrollReveal>Hello</ScrollReveal>
    )
    expect(getByText('Hello')).toBeInTheDocument()
  })

  it('applies reveal-from-down class by default', () => {
    const { container } = render(
      <ScrollReveal>Content</ScrollReveal>
    )
    expect(container.firstChild).toHaveClass('reveal-from-down')
  })

  it('applies reveal-from-left class for direction="left"', () => {
    const { container } = render(
      <ScrollReveal direction="left">Content</ScrollReveal>
    )
    expect(container.firstChild).toHaveClass('reveal-from-left')
  })

  it('applies reveal-from-top class for direction="top"', () => {
    const { container } = render(
      <ScrollReveal direction="top">Content</ScrollReveal>
    )
    expect(container.firstChild).toHaveClass('reveal-from-top')
  })

  it('adds reveal-visible class when intersecting', () => {
    vi.useFakeTimers()
    const { container } = render(
      <ScrollReveal>Content</ScrollReveal>
    )
    const el = container.firstChild as HTMLElement
    expect(el).not.toHaveClass('reveal-visible')

    observerCallback([{ isIntersecting: true }])
    vi.advanceTimersByTime(0)

    expect(el).toHaveClass('reveal-visible')
    vi.useRealTimers()
  })

  it('respects delay before adding reveal-visible', () => {
    vi.useFakeTimers()
    const { container } = render(
      <ScrollReveal delay={500}>Content</ScrollReveal>
    )
    const el = container.firstChild as HTMLElement

    observerCallback([{ isIntersecting: true }])
    vi.advanceTimersByTime(200)
    expect(el).not.toHaveClass('reveal-visible')

    vi.advanceTimersByTime(300)
    expect(el).toHaveClass('reveal-visible')
    vi.useRealTimers()
  })

  it('cleans up timeout on unmount', () => {
    vi.useFakeTimers()
    const clearTimeoutSpy = vi.spyOn(global, 'clearTimeout')

    const { unmount } = render(
      <ScrollReveal delay={500}>Content</ScrollReveal>
    )

    observerCallback([{ isIntersecting: true }])
    unmount()

    expect(clearTimeoutSpy).toHaveBeenCalled()
    vi.useRealTimers()
  })

  it('observes the element and disconnects on cleanup', () => {
    const { unmount } = render(
      <ScrollReveal>Content</ScrollReveal>
    )
    expect(mockObserve).toHaveBeenCalled()

    unmount()
    expect(mockDisconnect).toHaveBeenCalled()
  })
})
