import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { nyghtSerif } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'uk')) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} className={nyghtSerif.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="relative bg-brand-cream overflow-hidden">
            <div className="absolute inset-0 bg-no-repeat bg-top bg-cover animate-bg-drift" style={{ backgroundImage: "url('/images/bg-blobs.png')" }} aria-hidden="true" />
            <div className="relative z-10">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
