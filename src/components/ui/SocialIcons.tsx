import Image from 'next/image'
import { socialLinks } from '@/data/navigation'

export function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-8 h-8 rounded-full overflow-hidden opacity-70 hover:opacity-100 transition-opacity"
        >
          <Image src={link.icon} alt={link.name} width={32} height={32} />
        </a>
      ))}
    </div>
  )
}
