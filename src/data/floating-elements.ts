export type FloatingElement = {
  src: string
  top: string
  left: string
  size: number
  driftVariant: 1 | 2 | 3 | 4
  durX: number
  durY: number
  delay: number
  rotation: number
  hideOnMobile: boolean
}

export const floatingElements: FloatingElement[] = [
  // ── float-1 pair ──
  {
    src: '/images/floating/float-1.png',
    top: '3%',
    left: '8%',
    size: 90,
    driftVariant: 1,
    durX: 11,
    durY: 14,
    delay: 0,
    rotation: 12,
    hideOnMobile: false,
  },
  {
    src: '/images/floating/float-1.png',
    top: '7%',
    left: '55%',
    size: 75,
    driftVariant: 3,
    durX: 13,
    durY: 10,
    delay: -3,
    rotation: -18,
    hideOnMobile: true,
  },

  // ── float-2 pair ──
  {
    src: '/images/floating/float-2.png',
    top: '12%',
    left: '78%',
    size: 120,
    driftVariant: 2,
    durX: 9,
    durY: 13,
    delay: -2,
    rotation: -8,
    hideOnMobile: true,
  },
  {
    src: '/images/floating/float-2.png',
    top: '18%',
    left: '30%',
    size: 95,
    driftVariant: 4,
    durX: 12,
    durY: 9,
    delay: -6,
    rotation: 14,
    hideOnMobile: false,
  },

  // ── float-3 pair ──
  {
    src: '/images/floating/float-3.png',
    top: '28%',
    left: '-2%',
    size: 80,
    driftVariant: 3,
    durX: 13,
    durY: 10,
    delay: -5,
    rotation: 5,
    hideOnMobile: false,
  },
  {
    src: '/images/floating/float-3.png',
    top: '24%',
    left: '68%',
    size: 65,
    driftVariant: 1,
    durX: 10,
    durY: 14,
    delay: -8,
    rotation: -22,
    hideOnMobile: true,
  },

  // ── float-4 pair ──
  {
    src: '/images/floating/float-4.png',
    top: '38%',
    left: '92%',
    size: 150,
    driftVariant: 4,
    durX: 10,
    durY: 12,
    delay: -1,
    rotation: -15,
    hideOnMobile: true,
  },
  {
    src: '/images/floating/float-4.png',
    top: '42%',
    left: '5%',
    size: 110,
    driftVariant: 2,
    durX: 14,
    durY: 8,
    delay: -4,
    rotation: 10,
    hideOnMobile: false,
  },

  // ── float-5 pair ──
  {
    src: '/images/floating/float-5.png',
    top: '52%',
    left: '15%',
    size: 100,
    driftVariant: 2,
    durX: 14,
    durY: 9,
    delay: -4,
    rotation: 20,
    hideOnMobile: true,
  },
  {
    src: '/images/floating/float-5.png',
    top: '48%',
    left: '75%',
    size: 80,
    driftVariant: 4,
    durX: 9,
    durY: 13,
    delay: -9,
    rotation: -12,
    hideOnMobile: false,
  },

  // ── float-6 pair ──
  {
    src: '/images/floating/float-6.png',
    top: '65%',
    left: '85%',
    size: 70,
    driftVariant: 1,
    durX: 8,
    durY: 12,
    delay: -7,
    rotation: -10,
    hideOnMobile: false,
  },
  {
    src: '/images/floating/float-6.png',
    top: '60%',
    left: '38%',
    size: 90,
    driftVariant: 3,
    durX: 11,
    durY: 15,
    delay: -2,
    rotation: 16,
    hideOnMobile: true,
  },

  // ── float-7 pair ──
  {
    src: '/images/floating/float-7.png',
    top: '75%',
    left: '45%',
    size: 60,
    driftVariant: 3,
    durX: 12,
    durY: 8,
    delay: -3,
    rotation: 8,
    hideOnMobile: true,
  },
  {
    src: '/images/floating/float-7.png',
    top: '72%',
    left: '-3%',
    size: 85,
    driftVariant: 1,
    durX: 9,
    durY: 11,
    delay: -10,
    rotation: -20,
    hideOnMobile: false,
  },

  // ── float-8 pair ──
  {
    src: '/images/floating/float-8.png',
    top: '88%',
    left: '25%',
    size: 110,
    driftVariant: 4,
    durX: 15,
    durY: 10,
    delay: -6,
    rotation: -5,
    hideOnMobile: false,
  },
  {
    src: '/images/floating/float-8.png',
    top: '85%',
    left: '70%',
    size: 70,
    driftVariant: 2,
    durX: 10,
    durY: 14,
    delay: -11,
    rotation: 25,
    hideOnMobile: true,
  },
]
