import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Carousel } from '@/components/ui/Carousel'
import { ArtistCard } from '@/components/ui/ArtistCard'
import { Button } from '@/components/ui/Button'
import { artists } from '@/data/artists'

export function ArtistsSection() {
  const t = useTranslations('artists')

  return (
    <section id="artists" className="py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal direction="right">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-brand-dark text-center mb-8 -mt-5">
            {t('sectionTitle')}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <Carousel>
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </Carousel>
        </ScrollReveal>

        <ScrollReveal direction="down">
          <div className="text-center mt-8">
            <Button disabled>{t('learnMore')}</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
