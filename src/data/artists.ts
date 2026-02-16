export interface Artist {
  id: string
  name: string
  nationality: string
  location?: string
  avatarSrc: string
  profileUrl: string
}

export const artists: Artist[] = [
  {
    id: 'svitlana',
    name: 'Svitlana',
    nationality: 'Ukrainian',
    avatarSrc: '/images/artists/svitlana.webp',
    profileUrl: '#',
  },
  {
    id: 'oleksandra',
    name: 'Oleksandra Platunova',
    nationality: 'Ukrainian',
    avatarSrc: '/images/artists/oleksandra.jpg',
    profileUrl: '#',
  },
  {
    id: 'mariia',
    name: 'Mariia',
    nationality: 'Ukrainian',
    avatarSrc: '/images/artists/mariia.jpg',
    profileUrl: '#',
  },
  {
    id: 'anna',
    name: 'Анна',
    nationality: 'Ukrainian',
    avatarSrc: '/images/artists/anna.png',
    profileUrl: '#',
  },
  {
    id: 'viktoriia',
    name: 'Viktoriia',
    nationality: 'Ukrainian',
    avatarSrc: '/images/artists/viktoriia.jpg',
    profileUrl: '#',
  },
]
