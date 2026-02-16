import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { Artist } from '@/data/artists'
import { Button } from '@/components/ui/Button'

interface ArtistCardProps {
  artist: Artist
}

export function ArtistCard({ artist }: ArtistCardProps) {
  const t = useTranslations('artists')

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <Image
        src={artist.avatarSrc}
        alt={artist.name}
        width={130}
        height={130}
        className="rounded-full object-cover w-[130px] h-[130px]"
      />
      <h3 className="font-heading text-lg font-semibold text-brand-dark">{artist.name}</h3>
      <div className="text-sm text-brand-dark/70">
        <span>{artist.nationality}</span>
      </div>
      <Button href={artist.profileUrl}>{t('viewProfile')}</Button>
    </div>
  )
}
