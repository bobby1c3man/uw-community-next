import { describe, it, expect } from 'vitest'
import { mainNav, footerNav, type NavItem } from '@/data/navigation'

function collectLinks(items: NavItem[]): NavItem[] {
  const result: NavItem[] = []
  for (const item of items) {
    result.push(item)
    if (item.children) result.push(...collectLinks(item.children))
  }
  return result
}

describe('navigation data', () => {
  it('every non-disabled mainNav link uses a section anchor or is a parent', () => {
    const links = collectLinks(mainNav).filter((l) => !l.disabled && !l.children)
    for (const link of links) {
      expect(link.href).toMatch(/^#[a-z]+$/)
    }
  })

  it('every non-disabled footerNav link uses a section anchor', () => {
    const links = footerNav.flat().filter((l) => !l.disabled)
    for (const link of links) {
      expect(link.href).toMatch(/^#[a-z]+$/)
    }
  })

  it('has no production href="#" on enabled items', () => {
    const all = [...collectLinks(mainNav), ...footerNav.flat()]
    const enabled = all.filter((l) => !l.disabled && !l.children)
    for (const link of enabled) {
      expect(link.href).not.toBe('#')
    }
  })

  it('disabled items all have href="#"', () => {
    const all = [...collectLinks(mainNav), ...footerNav.flat()]
    const disabled = all.filter((l) => l.disabled)
    for (const link of disabled) {
      expect(link.href).toBe('#')
    }
  })
})
