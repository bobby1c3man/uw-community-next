import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  const t = useTranslations('hero')

  return (
    <section className="relative w-full overflow-hidden bg-gray-800" style={{ minHeight: '80vh', padding: '160px 0 140px' }}>
      {/* Vimeo background video — oversized container (-50% inset) ensures
          the iframe covers the full section regardless of aspect ratio */}
      <div className="absolute" style={{ inset: '-50% -50%' }}>
        <iframe
          src="https://player.vimeo.com/video/323323909?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&portrait=0"
          allow="autoplay; fullscreen"
          loading="lazy"
          className="w-full h-full border-none pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <ScrollReveal direction="down">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-normal text-white mb-6">
            {t('heading')}
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="down" delay={100}>
          <div className="w-[60px] h-[2px] bg-white mx-auto mb-6" aria-hidden="true" />
        </ScrollReveal>

        <ScrollReveal direction="down" delay={200}>
          <p className="font-body text-xl text-white mb-4">{t('subtitle')}</p>
          <p className="font-body text-base text-white/80 max-w-2xl mx-auto mb-10">
            {t('description')}
          </p>
        </ScrollReveal>

        <ScrollReveal direction="down" delay={300}>
          <Button disabled>{t('joinButton')}</Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
