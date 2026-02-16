'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

export function SubscribeForm() {
  const t = useTranslations('footer')

  if (!FORMSPREE_ENDPOINT) {
    return null
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="flex gap-2"
    >
      <input
        type="email"
        name="email"
        required
        aria-label={t('subscribePlaceholder')}
        autoComplete="email"
        placeholder={t('subscribePlaceholder')}
        className="flex-1 px-4 py-2 border border-grey-border rounded-full font-body text-sm text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:border-brand-pink"
      />
      <Button type="submit" showArrow={false}>{t('subscribeButton')}</Button>
    </form>
  )
}
