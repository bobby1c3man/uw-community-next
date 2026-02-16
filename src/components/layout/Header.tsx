'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Logo } from '@/components/ui/Logo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { MobileMenu } from './MobileMenu'
import { mainNav } from '@/data/navigation'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 1)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-brand-cream transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {mainNav.map((item) => (
              <li key={item.labelKey} className="relative group">
                {item.children ? (
                  <button
                    type="button"
                    className="font-body text-sm text-brand-dark hover:text-brand-yellow transition-colors inline-flex items-center gap-1"
                  >
                    {t(item.labelKey)}
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="font-body text-sm text-brand-dark hover:text-brand-yellow transition-colors inline-flex items-center gap-1"
                  >
                    {t(item.labelKey)}
                  </a>
                )}
                {/* Dropdown */}
                {item.children && (
                  <ul className="absolute top-full left-0 mt-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 bg-brand-cream shadow-lg rounded-sm min-w-[160px] py-2">
                      {item.children.map((child) => (
                        <li key={child.labelKey}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 font-body text-sm text-brand-dark hover:text-brand-yellow transition-colors"
                          >
                            {t(child.labelKey)}
                          </a>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <LanguageSwitcher />

          <div className="flex items-center gap-3">
            <a href="#" className="font-body text-sm text-brand-dark hover:text-brand-yellow transition-colors">
              {t('auth.login')}
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center font-body text-sm font-semibold text-[#fd8ebe] bg-white/80 shadow-xl border-2 border-white/80 rounded-full px-5 py-2.5 hover:bg-[#fd8ebe] hover:text-white hover:border-[#fd8ebe] transition-all duration-300"
            >
              {t('auth.signup')}
            </a>
          </div>
        </nav>

        <MobileMenu />
      </div>
    </header>
  )
}
