import localFont from 'next/font/local'

export const nyghtSerif = localFont({
  src: [
    { path: '../../public/fonts/nyght-serif/NyghtSerif-Light.woff2', weight: '300', style: 'normal' },
    { path: '../../public/fonts/nyght-serif/NyghtSerif-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/nyght-serif/NyghtSerif-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/nyght-serif/NyghtSerif-Bold.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/nyght-serif/NyghtSerif-Dark.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--font-nyght-serif',
  display: 'swap',
})

// Source Serif 4 is self-hosted via @font-face rules in globals.css
// to avoid build-time dependency on Google Fonts.
