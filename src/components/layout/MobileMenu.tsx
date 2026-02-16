'use client'

import { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import { mainNav } from '@/data/navigation'
import { LanguageSwitcher } from './LanguageSwitcher'

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const t = useTranslations()
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key)
  }

  // Document-level Escape handler
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  // Focus management: move focus to close button on open, trap focus within menu
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()
    }
  }, [isOpen])

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return

    const menu = menuRef.current
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusable = menu.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleTab)
    return () => document.removeEventListener('keydown', handleTab)
  }, [isOpen])

  return (
    <>
      {/* Hamburger button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={`block w-6 h-0.5 bg-brand-dark transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-brand-dark transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-brand-dark transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" ref={menuRef}>
          <div className="absolute inset-0 bg-black/30" onClick={() => setIsOpen(false)} />
          <div className="absolute top-0 right-0 w-[280px] h-full bg-white shadow-xl overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-brand-pink">
              <span className="font-heading text-lg text-brand-dark font-semibold">Menu</span>
              <button ref={closeButtonRef} onClick={() => setIsOpen(false)} className="text-brand-dark text-2xl" aria-label="Close menu">&times;</button>
            </div>

            {/* Nav items */}
            <nav className="p-4">
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => (
                  <li key={item.labelKey}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.labelKey)}
                          className="w-full flex items-center justify-between py-3 px-2 font-body text-brand-dark hover:text-brand-yellow transition-colors"
                        >
                          {t(item.labelKey)}
                          <svg
                            className={`w-4 h-4 transition-transform ${openSubmenu === item.labelKey ? 'rotate-180' : ''}`}
                            fill="none" stroke="currentColor" viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {openSubmenu === item.labelKey && (
                          <ul className="pl-4 pb-2">
                            {item.children.map((child) => (
                              <li key={child.labelKey}>
                                {child.disabled ? (
                                  <span
                                    className="block py-2 px-2 font-body text-sm text-brand-dark/40 cursor-default"
                                    title={t('nav.comingSoon')}
                                  >
                                    {t(child.labelKey)}
                                  </span>
                                ) : (
                                  <a
                                    href={child.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-2 px-2 font-body text-sm text-brand-dark/70 hover:text-brand-yellow transition-colors"
                                  >
                                    {t(child.labelKey)}
                                  </a>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : item.disabled ? (
                      <span
                        className="block py-3 px-2 font-body text-brand-dark/40 cursor-default"
                        title={t('nav.comingSoon')}
                      >
                        {t(item.labelKey)}
                      </span>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 px-2 font-body text-brand-dark hover:text-brand-yellow transition-colors"
                      >
                        {t(item.labelKey)}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-grey-card">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
