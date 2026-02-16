import Image from 'next/image'
import { useTranslations } from 'next-intl'
import type { Project } from '@/data/projects'
import { Button } from '@/components/ui/Button'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const t = useTranslations('projects')

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="w-[150px] h-[150px] rounded-lg overflow-hidden">
        <Image
          src={project.avatarSrc}
          alt={project.name}
          width={150}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-heading text-base font-semibold text-brand-dark">{project.name}</h3>
      <div className="flex flex-col gap-1 text-sm text-brand-dark/70">
        <span>{project.location}</span>
        {project.dateRange && <span>{project.dateRange}</span>}
      </div>
      <Button href={project.url}>{t('joinButton')}</Button>
    </div>
  )
}
