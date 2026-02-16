# U·woman — Cultural Cooperation Community

A platform for Ukrainian woman artists, built with Next.js. The site brings together artists, cultural professionals, and institutions through a bilingual (English/Ukrainian) web experience.

Co-funded by the European Union — Grant Agreement No: 101174330.

## Tech Stack

- **Framework:** Next.js 16 (static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **i18n:** next-intl (EN / UK)
- **Carousel:** Embla Carousel
- **Fonts:** Nyght Serif (self-hosted), Source Serif 4 (self-hosted)

## Project Structure

```
src/
  app/
    layout.tsx              Root layout (metadata, global CSS)
    globals.css             Tailwind theme, animations, fonts
    [locale]/
      layout.tsx            Locale layout (i18n provider, header/footer)
      page.tsx              Home page (hero, artists, opportunities, projects)
  components/
    layout/                 Header, Footer, MobileMenu, LanguageSwitcher
    sections/               HeroSection, ArtistsSection, OpportunitiesSection, ProjectsSection
    ui/                     Button, Carousel, Logo, Cards, SubscribeForm, SocialIcons
    animations/             ScrollReveal (IntersectionObserver-based)
  data/                     Navigation, artists, opportunities, projects data
  i18n/                     Routing, request config, navigation helpers
  lib/                      Font configuration
  messages/                 en.json, uk.json translation files
public/
  fonts/                    Nyght Serif, Source Serif 4 (woff2)
  images/                   Logo, backgrounds, artist/project/opportunity images
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Formspree endpoint for the subscribe form |

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build static export to `out/` |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |
| `pnpm test` | Run tests with Vitest |
| `pnpm typecheck` | Run TypeScript type checking |

## Internationalization

The site supports two locales:
- **English** (`/en`) — default
- **Ukrainian** (`/uk`)

Translation files are in `src/messages/`. Navigation uses locale-aware routing via `next-intl`.

## Deployment

The project is configured for static export (`output: 'export'`). Build output goes to the `out/` directory:

```bash
pnpm build
```

Deploy the `out/` directory to any static hosting provider (Netlify, Cloudflare Pages, Vercel, etc.).

For security headers, configure them at the hosting layer (see `next.config.ts` for the recommended headers).
