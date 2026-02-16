import Image from 'next/image'
import { Link } from '@/i18n/navigation'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 no-underline">
      <Image
        src="/images/logo.png"
        alt="U·woman"
        width={90}
        height={90}
        className="h-[90px] w-auto"
        priority
      />
      <div className="flex flex-col">
        <span className="font-heading text-[1.6rem] leading-tight text-brand-dark tracking-tight">
          <span className="font-medium">U</span>
          <span className="text-brand-dark">·</span>
          <span className="font-light">woman</span>
        </span>
        <span className="font-body text-[0.55rem] uppercase tracking-[0.15em] text-brand-dark/70">
          Cultural Cooperation Community
        </span>
      </div>
    </Link>
  )
}
