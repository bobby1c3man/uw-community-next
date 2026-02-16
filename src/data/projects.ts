export interface Project {
  id: string
  name: string
  location: string
  dateRange?: string
  avatarSrc: string
  url: string
}

export const projects: Project[] = [
  {
    id: 'prosvit',
    name: 'Просвіт',
    location: 'Ukraine',
    avatarSrc: '/images/projects/prosvit.webp',
    url: '/projects/prosvit',
  },
  {
    id: 'tilo-shcho-pamyataye',
    name: "Тіло, що пам'ятає",
    location: 'Ukraine',
    dateRange: '01.04.26 - 31.08.26',
    avatarSrc: '/images/projects/tilo.jpg',
    url: '/projects/tilo-shcho-pamyataye',
  },
  {
    id: 'ya-hudozhnitsya',
    name: 'Я — Художниця',
    location: 'Ukraine',
    dateRange: '15.12.25 - 15.12.26',
    avatarSrc: '/images/projects/ya-hudozhnitsya.jpg',
    url: '/projects/ya-hudozhnitsya',
  },
  {
    id: 'ukrainian-woman',
    name: 'Ukrainian Woman',
    location: 'Ukraine',
    dateRange: '01.11.24 - 01.11.27',
    avatarSrc: '/images/projects/ukrainian-woman.jpg',
    url: '/projects/ukrainian-woman',
  },
  {
    id: 'cutout-collage-art-project',
    name: 'CUTOUT COLLAGE ART PROJECT',
    location: 'Ukraine',
    avatarSrc: '/images/projects/cutout-collage.jpg',
    url: '/projects/cutout-collage-art-project',
  },
  {
    id: 'ukrainian-woman-2',
    name: 'Ukrainian Woman',
    location: 'Ukraine',
    dateRange: '01.11.24 - 01.11.27',
    avatarSrc: '/images/projects/ukrainian-woman-2.jpg',
    url: '/projects/ukrainian-woman-2',
  },
  {
    id: 'dim-project',
    name: 'DIM.project',
    location: 'France',
    avatarSrc: '/images/projects/dim-project.jpg',
    url: '/projects/dim-project',
  },
  {
    id: 'curated-memory',
    name: 'Curated memory',
    location: 'Ukraine',
    avatarSrc: '/images/projects/curated-memory.jpg',
    url: '/projects/curated-memory',
  },
  {
    id: 'creative-wings',
    name: 'Creative wings',
    location: 'Poland',
    dateRange: '18.12.25 - 18.12.27',
    avatarSrc: '/images/projects/creative-wings.webp',
    url: '/projects/creative-wings',
  },
  {
    id: 'lada',
    name: 'Лада / Lada',
    location: 'Ukraine',
    avatarSrc: '/images/projects/lada.png',
    url: '/projects/lada',
  },
]
