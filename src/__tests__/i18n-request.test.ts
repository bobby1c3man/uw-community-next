import { describe, it, expect } from 'vitest'
import { routing } from '@/i18n/routing'

describe('i18n routing config', () => {
  it('defines en and uk as locales', () => {
    expect(routing.locales).toContain('en')
    expect(routing.locales).toContain('uk')
  })

  it('defaults to en', () => {
    expect(routing.defaultLocale).toBe('en')
  })

  it('has no unsupported locales', () => {
    for (const locale of routing.locales) {
      expect(['en', 'uk']).toContain(locale)
    }
  })
})

describe('message files', () => {
  it('en.json and uk.json have the same top-level keys', async () => {
    const en = (await import('@/messages/en.json')).default
    const uk = (await import('@/messages/uk.json')).default
    expect(Object.keys(en).sort()).toEqual(Object.keys(uk).sort())
  })

  it('en.json and uk.json nav keys match', async () => {
    const en = (await import('@/messages/en.json')).default
    const uk = (await import('@/messages/uk.json')).default
    expect(Object.keys(en.nav).sort()).toEqual(Object.keys(uk.nav).sort())
  })

  it('en.json and uk.json hero keys match', async () => {
    const en = (await import('@/messages/en.json')).default
    const uk = (await import('@/messages/uk.json')).default
    expect(Object.keys(en.hero).sort()).toEqual(Object.keys(uk.hero).sort())
  })

  it('en.json and uk.json footer keys match', async () => {
    const en = (await import('@/messages/en.json')).default
    const uk = (await import('@/messages/uk.json')).default
    expect(Object.keys(en.footer).sort()).toEqual(Object.keys(uk.footer).sort())
  })
})
