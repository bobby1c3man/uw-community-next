import { useTranslations } from 'next-intl'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Carousel } from '@/components/ui/Carousel'
import { OpportunityCard } from '@/components/ui/OpportunityCard'
import { Button } from '@/components/ui/Button'
import { opportunities } from '@/data/opportunities'

export function OpportunitiesSection() {
  const t = useTranslations('opportunities')

  return (
    <section id="opportunities" className="py-16 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4">
        <ScrollReveal direction="left">
          <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-wide text-brand-dark text-center mb-8">
            {t('sectionTitle')}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <Carousel>
            {opportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
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
