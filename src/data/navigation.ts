export interface NavItem {
  labelKey: string
  href: string
  disabled?: boolean
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  { labelKey: 'nav.projects', href: '#projects' },
  { labelKey: 'nav.opportunities', href: '#opportunities' },
  { labelKey: 'nav.events', href: '#', disabled: true },
  {
    labelKey: 'nav.community',
    href: '#',
    children: [
      { labelKey: 'nav.artists', href: '#artists' },
      { labelKey: 'nav.organizations', href: '#', disabled: true },
    ],
  },
  {
    labelKey: 'nav.info',
    href: '#',
    children: [
      { labelKey: 'nav.about', href: '#', disabled: true },
      { labelKey: 'nav.resources', href: '#', disabled: true },
      { labelKey: 'nav.support', href: '#', disabled: true },
      { labelKey: 'nav.faq', href: '#', disabled: true },
    ],
  },
]

export const footerNav: NavItem[][] = [
  [
    { labelKey: 'nav.projects', href: '#projects' },
    { labelKey: 'nav.organizations', href: '#', disabled: true },
    { labelKey: 'nav.artists', href: '#artists' },
    { labelKey: 'nav.events', href: '#', disabled: true },
  ],
  [
    { labelKey: 'nav.opportunities', href: '#opportunities' },
    { labelKey: 'nav.resources', href: '#', disabled: true },
    { labelKey: 'nav.about', href: '#', disabled: true },
    { labelKey: 'nav.support', href: '#', disabled: true },
  ],
]

export const socialLinks = [
  { name: 'Facebook', icon: '/images/social/facebook.png', url: 'https://www.facebook.com/ukrainianwomanproject' },
  { name: 'Instagram', icon: '/images/social/instagram.png', url: 'https://www.instagram.com/u_woman_community' },
  { name: 'LinkedIn', icon: '/images/social/linkedin.png', url: 'https://www.linkedin.com/company/u-woman/' },
  { name: 'YouTube', icon: '/images/social/youtube.png', url: 'https://www.youtube.com/@ukrainianwomanproject' },
]
