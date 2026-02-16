import { setRequestLocale } from 'next-intl/server'
import { HeroSection } from '@/components/sections/HeroSection'
import { ArtistsSection } from '@/components/sections/ArtistsSection'
import { OpportunitiesSection } from '@/components/sections/OpportunitiesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <HeroSection />
      <ArtistsSection />
      <OpportunitiesSection />
      <ProjectsSection />
    </>
  )
}
