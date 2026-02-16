'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div className="flex items-center">
      <button
        onClick={() => switchLocale('en')}
        aria-label="Switch to English"
        aria-current={locale === 'en' ? 'true' : undefined}
        className={`font-body text-sm transition-colors ${
          locale === 'en' ? 'text-brand-yellow font-semibold' : 'text-brand-dark hover:text-brand-yellow'
        }`}
      >
        EN
      </button>
      <span className="text-brand-dark text-sm mx-0.5">/</span>
      <button
        onClick={() => switchLocale('uk')}
        aria-label="Switch to Ukrainian"
        aria-current={locale === 'uk' ? 'true' : undefined}
        className={`font-body text-sm transition-colors ${
          locale === 'uk' ? 'text-brand-yellow font-semibold' : 'text-brand-dark hover:text-brand-yellow'
        }`}
      >
        UA
      </button>
    </div>
  )
}
