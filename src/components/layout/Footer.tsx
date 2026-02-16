import { useTranslations } from 'next-intl'
import { Logo } from '@/components/ui/Logo'
import { SocialIcons } from '@/components/ui/SocialIcons'
import { SubscribeForm } from '@/components/ui/SubscribeForm'
import { footerNav } from '@/data/navigation'

export function Footer() {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Logo + EU info */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-xs text-brand-dark/60">
              {t('footer.euFunding')}<br />
              {t('footer.grantLabel')} {t('footer.grantNumber')}
            </p>
          </div>

          {/* Col 2: Nav column 1 */}
          <div>
            <ul className="flex flex-col gap-3">
              {footerNav[0].map((item) => (
                <li key={item.labelKey}>
                  <a href={item.href} className="font-body text-sm text-brand-dark hover:text-brand-yellow transition-colors">
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Nav column 2 */}
          <div>
            <ul className="flex flex-col gap-3">
              {footerNav[1].map((item) => (
                <li key={item.labelKey}>
                  <a href={item.href} className="font-body text-sm text-brand-dark hover:text-brand-yellow transition-colors">
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Subscribe + Social */}
          <div className="flex flex-col gap-6">
            <SubscribeForm />
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* EU Disclaimer */}
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs text-brand-dark/70 text-center max-w-3xl mx-auto">
            {t('footer.euDisclaimer')}
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs text-brand-dark/50 text-center">
            {t('footer.copyright', { year: String(year) })}
          </p>
        </div>
      </div>
    </footer>
  )
}
