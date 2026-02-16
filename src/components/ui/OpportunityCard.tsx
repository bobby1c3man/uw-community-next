import Image from 'next/image'
import type { Opportunity } from '@/data/opportunities'

interface OpportunityCardProps {
  opportunity: Opportunity
}

export function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <a href={opportunity.url} className="block no-underline group rounded-2xl overflow-hidden border border-grey-card bg-white">
      <figure className="aspect-video overflow-hidden">
        <Image
          src={opportunity.imageSrc}
          alt={opportunity.title}
          width={500}
          height={281}
          className="w-full h-full object-cover opacity-100"
        />
      </figure>
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-brand-dark/60 mb-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
            <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2"/>
            <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2"/>
            <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
          </svg>
          {opportunity.date}
        </div>
        <h3 className="font-heading text-base font-semibold text-brand-dark leading-snug line-clamp-2 group-hover:text-brand-yellow transition-colors">
          {opportunity.title}
        </h3>
        <p className="mt-2 text-sm text-brand-dark/70 line-clamp-3">{opportunity.excerpt}</p>
      </div>
    </a>
  )
}
