# The Old Fashioned Cocktail Co. — Marketing Site

A multi-page marketing website for a mobile cocktail-bar hire company in New York,
built to the design handoff in [`design_handoff_old_fashioned_site/`](design_handoff_old_fashioned_site).
Art Deco / 1920s speakeasy aesthetic — near-black background, antique gold accents,
deco display headings over an Arvo slab-serif body.

**Stack:** Next.js 15 (App Router) · React 19 · Tailwind CSS 3 · TypeScript.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Routes

| Route | Page |
|---|---|
| `/` | Home (video hero) |
| `/events` | All Events hub |
| `/weddings`, `/corporate`, `/birthdays` | Standard event pages |
| `/how-it-works` | Build-your-package steps |
| `/fleet` | Fleet profiles (`#the-old-fashioned`, `#tommy-gun`) |
| `/about` | About us |
| `/faqs` | FAQ accordion |
| `/blog` | Blog index |
| `/blog/[slug]` | 5 blog articles |
| `/contact` | Enquiry form (not in handoff; nav/CTAs link here) |

## Structure

- `app/` — App Router routes + root layout, fonts, global CSS.
- `components/` — shared UI: `Nav` (dropdowns + mobile drawer), `Footer`, `Hero`,
  `Button`, `OffsetSection`, `FlappersCta`, `DecoFrameCta`, `FleetRows`,
  `EventCarousel` (client), `FaqAccordion` (client), `InstagramGrid`, `Placeholder`.
- `lib/` — `nav`, `images`, `fleet`, `blog` data.
- Theme tokens live in `tailwind.config.ts`; helper classes in `app/globals.css`.

## Design tokens

Colours, fonts, spacing and interactions all follow the handoff's tokens
(`bg #161616`, `gold #c09d6c`, `cream #d9c4a6`, etc.). See `tailwind.config.ts`.

## Outstanding / to wire up

- **Bosque display font** — the client will supply the `.woff2`. Until then headings
  fall back to Josefin Sans (weight 600, uppercase). To add it: drop the file in
  `app/fonts/`, uncomment the `localFont` block in [`app/fonts.ts`](app/fonts.ts),
  and add `bosque.variable` to the `<html>` className in `app/layout.tsx`. The
  Tailwind `font-display` chain already prefers `--font-bosque` first.
- **Photography** — most photos are `<Placeholder>` panels labelled with the
  intended shot. Replace with the client's real images (`next/image`). A number of
  photos already use the client's hosted CDN (`theoldfashionedcocktailco.com`).
- **Instagram feed** — `InstagramGrid` renders static placeholders; wire to a real feed.
- **Forms / booking / "Instant Quote"** — the contact form and the various
  Book Now / Instant Quote buttons are not yet wired to a backend.
