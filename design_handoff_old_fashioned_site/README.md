# Handoff: The Old Fashioned Cocktail Co. — Marketing Site

## Overview
A multi-page marketing website for **The Old Fashioned Cocktail Co.**, a mobile cocktail-bar hire company in New York. Art Deco / 1920s speakeasy aesthetic: near-black background, antique gold accents, deco display headings over a slab-serif body. The site is a faithful rebuild of https://theoldfashionedcocktailco.com/.

Target stack for the rebuild: **Next.js (App Router) + Tailwind CSS**.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing the intended look, layout, and behavior. They are **not** production code to copy verbatim. The task is to **recreate these designs in a Next.js + Tailwind codebase** using idiomatic patterns (App Router routes, shared layout, server components for static content, a small client component only where interactivity is needed).

Each page is authored as a self-contained `.dc.html` file (a streaming "Design Component" wrapper). Ignore the `<x-dc>` / `support.js` / `data-dc-script` scaffolding — only the markup and inline styles inside matter. Styling is inline on purpose in the prototype; in the rebuild, convert to Tailwind utility classes + a shared theme.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, copy, and interactions are all specified below. Recreate pixel-closely, but replace hardcoded pixel values with Tailwind's scale where reasonable and make the layouts responsive (the prototypes are desktop-first; see Responsive Behavior).

---

## Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| `bg` | `#161616` | Page background (primary) |
| `bg-alt` | `#1c1b19` | Tonal band sections (e.g. All Events "Meet Our Fleet") |
| `nav-bg` | `#131313` | Solid nav bar (blog post pages) |
| `gold` | `#c09d6c` | Primary accent — headings, eyebrows, borders, links, icons |
| `cream` | `#d9c4a6` | Light accent / link + button hover text; offset image frames (at ~16% opacity) |
| `heading-light` | `#f2ecdf` | Hero + section headings on dark |
| `text-hi` | `#e7e1d5` | Nav links, emphasized labels |
| `body` | `#c4bdb0` | Primary body copy |
| `body-dim` | `#b7b0a3` | Secondary body copy, quotes |
| `muted` | `#8a8377` / `#7d766a` | Dates, footer, captions |
| dark gray | `#333333` | Misc borders/dividers (from brand palette) |

Gold border/lines are frequently drawn at reduced alpha: `rgba(192,157,108, .5)` (CTA frames), `.85` (buttons), `.22` (FAQ dividers), `.18` (footer top border).

Scrim gradients over hero images: `linear-gradient(180deg, rgba(20,16,12,.72) 0%, rgba(20,16,12,.35) 40%, rgba(20,16,12,.6) 100%)`. Full-bleed CTA (flappers) uses a left-to-right dark scrim.

### Typography
- **Headings (h1–h3): `Bosque`** (a display face the client will supply — NOT a Google font). Until the font file is provided, fall back to a geometric deco sans (`Josefin Sans`, weight 600, uppercase, `letter-spacing` ~0.03em). Wire `Bosque` via `@font-face` / `next/font/local` when the `.woff2` is available.
- **Body & everything else: `Arvo`** (Google Font — slab serif). Weights 400 + 700, plus italic 400. Used for paragraphs, nav, buttons, eyebrows, dates, captions.
- Headings are almost always **UPPERCASE** with letter-spacing 0.02–0.06em.
- Type sizes (desktop): hero h1 `clamp(28–34px, 4–5vw, 52–72px)`; section h2 `clamp(26px, 3vw, 44px)`; body 16–18px, line-height 1.7–1.8.
- Original site pairing was Josefin Sans (deco caps) + EB Garamond; the client changed it to **Bosque + Arvo** — use Bosque/Arvo.

### Spacing / Layout
- Content column max-width: **1140px** (event/fleet/about pages), **860px** (FAQ), **820px** (blog articles), **1080px** (blog index).
- Section vertical padding: 60–120px. Nav padding: `22px 46px`.
- Buttons: outline style, `1px solid` gold (or cream on hero), `padding: 12–14px 24–30px`, uppercase, letter-spacing 0.16em, font-size 11–12px, with a trailing `→`. Hover: fill gold `#c09d6c`, text `#161616`.
- Grid gaps: 44–64px for two-column content; 18–20px for image grids.

### Borders / Radius / Shadows
- No rounded corners on cards/images (sharp rectangles) except the small social SVG rects.
- Deco "frame" CTA: an absolutely-positioned `1px solid rgba(192,157,108,.5)` rectangle inset over the content (see All Events / How It Works / About CTA).
- Hero heading text-shadow: `0 2px 18px rgba(0,0,0,.6)`.

---

## Global Components

### Top Nav (overlaid, transparent — on hero pages)
Absolutely positioned over the hero, three groups:
- **Left:** Facebook + Instagram icon links (gold, 15px SVGs).
- **Center:** text links + centered logo image. Order: `Home · Events ▾ · How It Works · [LOGO] · Our Fleet · About ▾ · Contact`. Links uppercase, letter-spacing 0.14em, 12.5px, color `#e7e1d5`; the current page's item is gold `#c09d6c`.
- **Right:** "Instant Quote" outline button (gold border).
- Logo: `https://theoldfashionedcocktailco.com/wp-content/uploads/2020/06/The-Old-Fashoioned-Primary-Light.png`, ~56–60px tall.
- On the transparent overlay nav, the `<nav>` has `pointer-events:none` with each interactive group re-enabling `pointer-events:auto` so hero image-slots below stay reachable (prototype detail — not needed in the rebuild).
- Blog **post** pages use a **solid** nav variant (`#131313` background, bottom border) instead of overlay.
- **Dropdowns:** "Events ▾" → {Weddings, Corporate Events, Birthdays and Anniversaries, All Events}. "About ▾" → {About us, FAQ's, Blog}. (Prototype renders them as plain links; implement real hover/click dropdown menus.)

### Footer
Centered: FB + IG icons (gold), then `© 2026 The Old Fashioned Cocktail Co. — All rights reserved.` (Arvo, 12px, letter-spacing 0.08em, `#7d766a`). Top border `1px solid rgba(192,157,108,.18)`.

### Standard inner-page hero (ALL pages except Home)
- `height: 72vh; min-height: 580px; position: relative; overflow: hidden`.
- Background image covering the section, with the dark top→bottom scrim gradient overlay (`pointer-events:none`).
- Overlaid transparent nav on top.
- Hero content: flex column, centered, `padding: 150px 24px 60px` (pushes content down).
- H1 (Bosque/deco, `#f2ecdf`, uppercase) + italic-ish subtitle (Arvo, `#e2dccf`) + optionally one outline CTA button, or a down-arrow `↓` pinned near the bottom-center.
- FAQ/Blog-index heroes vary the height (FAQ 72vh, Blog index 56vh).

### "The Latest on Instagram" block
Centered heading `The Latest on <span gold>Instagram</span>`, then a 4-column grid (`repeat(4,1fr)`, gap 18px) of square image placeholders. On Home it also shows caption + like counts under each. Wire to a real IG feed or a static 4-image grid.

### Image placeholders
Most photos in the prototype are drop-in placeholders (`<image-slot>`). In the rebuild, replace with `next/image` and the client's real photography. A handful reference the live site's hosted images directly (see Assets).

---

## Pages / Routes

Suggested route map:
| Route | File | Nav label |
|---|---|---|
| `/` | `Old Fashioned Cocktail Co.dc.html` | Home |
| `/events` | `All Events.dc.html` | Events → All Events |
| `/weddings` | `Weddings.dc.html` | Events → Weddings |
| `/corporate` | `Corporate Events.dc.html` | Events → Corporate Events |
| `/birthdays` | `Birthdays and Anniversaries.dc.html` | Events → Birthdays & Anniversaries |
| `/how-it-works` | `How It Works.dc.html` | How It Works |
| `/fleet` | `Our Fleet.dc.html` | Our Fleet |
| `/about` | `About.dc.html` | About → About us |
| `/faqs` | `FAQs.dc.html` | About → FAQ's |
| `/blog` | `Blog.dc.html` | About → Blog |
| `/blog/[slug]` | `Blog - *.dc.html` (×5) | — |

### 1. Home (`/`)
- **Full-screen hero (100vh, min 640px)** — the ONLY page with a video hero. Background `<video autoplay muted loop playsinline>` of drifting smoke. Centered: "SMOKIN' DRINKS WITH A MEASURE OF STYLE" (`#cdaa5e`→use gold), subtitle "Mobile Cocktail Bar Hire in New York", "Book Now →" outline button.
  - **IMPORTANT:** set the video muted **via JS/ref after mount** (`video.muted = true; video.volume = 0`) — React/Next won't reliably apply the `muted` attribute alone, and the file has audio.
- **"The Speakeasy That Finds You"** — 2-col: gold heading left, body paragraph + "How It Works →" right.
- **"Meet the Fleet…"** — heading + 2 cards (image, title `'The Old Fashioned'` / `'Little Tommy Gun'`, description, "Learn More →").
- **Gallery strip** — horizontal row of photos.
- **"Make Yours a Classic"** — full-bleed flappers photo with a left-aligned bordered box: heading, "Secure our services for your next event.", "Book Now →".
- **Instagram** block (with captions/likes).
- Footer.

### 2. Standard Event pages — Weddings, Corporate, Birthdays
Same structure, different copy. After the standard hero:
- **Photo carousel** (see Interactions) — 4 images visible, full-width, 20px padding + 20px gaps, gold circular ‹ › arrows.
- **Three alternating text/image sections** with an "offset frame" treatment (a cream `#d9c4a6` block at 16% opacity offset −20px top/left behind each photo). Each has a gold H2, a gold eyebrow subhead, a 60px gold underline, a paragraph.
  - Weddings: *Gettin' Hitched?* (Congratulations!) · *The Speakeasy* (…that finds you!) · *You Swap Rings* (…we make gin slings!)
  - Corporate: *A Vintage Impression* · *The Speakeasy* (…that finds you!) · *Scotch or Soda?*
  - Birthdays: *Ready to Let Loose?* · *Birthdays, Anniversaries* (or just because)! · *The Speakeasy That Finds You*
- **Deco separator** (gold line — diamond — line) then **"Meet Our Fleet"** — 2 rows (image + text: 'The Old Fashioned', 'Little Tommy Gun', each "Learn More →").
- **"Make Yours a Classic"** full-bleed flappers CTA box.
- Instagram + Footer.
- Exact copy for each lives in the corresponding HTML file.

### 3. All Events (`/events`)
Landing/hub — no carousel. After hero ("Mobile Cocktail Bar for Events" / "What's your occasion?" + ↓):
- **Three link-out sections** (Weddings / Birthdays, Anniversaries / Corporate), alternating image-left/right with offset frames, each with eyebrow subhead + "More Information →" linking to that page.
- **"Meet Our Fleet"** in a **tonal band** (`#1c1b19`): 2 large images side-by-side, each with a centered outline button ("The Old Fashioned →", "Little Tommy Gun →").
- **"Make Yours a Classic…"** centered, inside a deco frame rectangle, with "Book Now →".
- Instagram + Footer.

### 4. How It Works (`/how-it-works`)
Hero "Build Your Package" / "Build your party package in seconds" + ↓. Then **four numbered steps**, each a 2-col row: left = large light-weight gold numeral (`1`–`4`, ~80px) + "STEP ONE:"…; right = gold sub-heading (Get a Quote: / Customize: / Confirm Staffing: / Submit Proposal:) + body paragraphs (some with inline gold links). Then deco-framed "Make Yours a Classic…" CTA with subtitle "Check availability for your event now". Instagram + Footer.

### 5. Our Fleet (`/fleet`)
Hero "Meet the Fleet" / "Meet our fleet mobile cocktail bars" + ↓. Two profile sections (anchors `#the-old-fashioned`, `#tommy-gun`), each: left = two stacked photos; right = gold H2, 60px underline, **"Bartender Capacity: 1-3 / 1-2"** label, description, an italic founder quote with a left gold border, `– Dwayne, TOFCC Founder`, "Book Now →". Then centered CTA "Book the 'Old Fashioned' Now" + "Check Availability →". Instagram + Footer. (Fleet "Learn More" links elsewhere point to these anchors.)

### 6. About (`/about`)
Hero "About Us" / "Hard Liquor. Easy Parties." + ↓. Sections: **What Do We Do?** (2-col, heading left / multi-paragraph right, one uppercase emphasis line "That's where we come in."); **Our Goal** (text left / photo right); **Who's the Boss?** (photo left / text right, Dwayne). Deco-framed "Make Yours a Classic…" CTA. Instagram + Footer.

### 7. FAQs (`/faqs`)
Hero "Frequently Asked Questions" / "Lookin' for answers?…" + ↓. Then an **accordion** (native `<details>` in the prototype — implement as an accessible accordion; first item open by default). 13 Q&As, each summary = gold question + `+`/`−` toggle, divider between. Some answers contain bold text, bullet lists, and links (full copy in the HTML file). Then deco-framed **"Have You Got a Question?"** CTA → "Get In Touch →" (links to `/contact`). Instagram + Footer.

### 8. Blog index (`/blog`)
Hero "Tips 'n Tricks" / "Shake up your bartending skills." (no arrow). Then a vertical list of **5 post cards** (image-left 400px / text-right): gold category eyebrow, cream title, excerpt, uppercase date. Titles + images link to the post. Instagram + Footer.

### 9. Blog posts (`/blog/[slug]`) — 5 articles
Solid nav variant. Centered article header: gold category eyebrow, large cream H1, "By Tim Brown · <date>". Feature image (16:9). Body: gold H2 section heads, cream H3 sub-heads, Arvo paragraphs, bullet lists, inline images, italic captions, inline gold links. **Prev/Next post navigation** at the bottom (linked in reading order). Footer.
Reading order & slugs:
1. `mezcal-for-cocktail-mixing` — *Mezcal for Cocktail Mixing* (Old Fashioned Connoisseur Club, Feb 4 2021)
2. `choosing-whiskey-for-cocktails` — *Choosing Whiskey for Cocktails* (Dec 4 2020)
3. `how-to-make-clear-ice-the-old-fashioned-way` — *How to Make Clear Ice the Old Fashioned Way* (Sep 10 2020)
4. `how-to-make-an-old-fashioned-cocktail` — *How to Make an Old Fashioned Cocktail* (Jul 29 2020)
5. `how-to-make-your-party-a-classic` — *How to Make Your Party a Classic* (Jun 14 2020)
Full article bodies are in the respective `Blog - *.dc.html` files.

---

## Interactions & Behavior
- **Buttons/links hover:** fill gold `#c09d6c`, text → `#161616` (outline buttons); text links → cream `#d9c4a6`.
- **Home hero video:** autoplay, muted, loop, playsinline; force-mute via ref on mount.
- **Event-page carousel:** shows 4 items at once, full container width with 20px side padding and 20px gaps (item width = `(viewportWidth − 3×20) / 4`, recomputed on resize). ‹ / › gold circular buttons step the index by 1, clamped to `count − 4` (6 items total). Smooth `transform: translateX()` transition `.55s cubic-bezier(.4,0,.2,1)`. Implement as a client component (or use an existing carousel lib) with keyboard + touch support.
- **FAQ accordion:** expand/collapse, `+`/`−` indicator, open item's question tinted cream. First item open on load. Make it keyboard-accessible (button + aria-expanded).
- **Dropdown nav menus:** Events / About (see Global Nav).
- **Anchor scrolling:** fleet "Learn More" → `/fleet#the-old-fashioned` / `#tommy-gun`.

## State Management
Minimal. Only two interactive pieces need client state:
- Carousel: `index` + measured `itemWidth` (resize listener).
- FAQ accordion: open item id (or use native `<details>`).
- Mobile nav: open/close (the prototype is desktop-only; add a hamburger menu — see Responsive).
No data fetching required beyond an optional real Instagram feed.

## Responsive Behavior
Prototypes are **desktop-first**. For the rebuild:
- Collapse the center nav into a hamburger/drawer under ~900px.
- Two-column content sections stack to one column on mobile (image above text).
- Carousel: show 2 (tablet) / 1 (mobile) items; recompute divisor.
- Instagram grid: 2 columns on mobile.
- Reduce hero heading clamps naturally (already fluid via `clamp()`).

## Assets
Real hosted images referenced directly (safe to use; the client's own CDN — consider re-hosting locally with `next/image`):
- Logo: `.../2020/06/The-Old-Fashoioned-Primary-Light.png`
- Home hero smoke video: `.../2025/08/Smoke-3-3.mp4`
- Fleet — Old Fashioned: `.../2023/04/The_Old_Fashioned_Main2.jpg`, `.../2021/05/The_Old_Fashioned_Main.jpg`, `.../2021/05/The_Old_Fashioned_1.jpg`, `.../2021/05/The_Old_Fashioned_2.jpg`
- Fleet — Tommy Gun: `.../2023/04/Tommy_Gun_Cocktail_Cart_Main2.jpg`, `.../2021/05/Tommy_Gun_Cocktail_Cart_Main.jpg`, `.../2021/05/Tommy_Gun_Cocktail_Cart_1.jpg`, `.../2021/05/Tommy_Gun_Cocktail_Cart_2.jpg`
- Event/About section photos: `Wedding-event-image-with-cigars.jpg`, `Smokey_Mobile_Cocktail_Bar.jpg`, `Mobile_Cocktail_Bar_Tender.jpg`, `Mobile-cocktail-bar-serving-a-birthday-event.jpg`, `Mobile-cocktail-bar-for-corporate-events.jpg`, `Dwayne-Keaney-Old-Fashioned-Cocktails.jpg` (paths under `theoldfashionedcocktailco.com/wp-content/uploads/...`).
- Blog feature/inline images: see each `Blog - *.dc.html` (`mezcal__drink_with_oranges...`, `Range_Of_Whisky_In_A_Bar...`, `Cocktails-made-by-Dwayne...`, `Ingredients-for-cocktails...`, `Old-school-music-player.jpg`, `Whisky_Cocktail_Made_In_Bar.jpg`, `abstract-18722_1280.jpg`, `Old_Fashioned_Cocktail_Clear_Ice.jpg`, `Ice-with-Ice-Stick.jpg`, `Smokey-cocktails-old-fashioned.jpg`).
- All other photos are `<image-slot>` placeholders → replace with the client's real photography.
- Fonts: **Arvo** via Google Fonts / `next/font/google`; **Bosque** to be supplied by the client → `next/font/local` `@font-face` (fallback to a deco sans meanwhile).
- Social icons are inline SVGs (Facebook glyph + Instagram outline) — reuse or swap for an icon set.

## Files
Design reference files included in this bundle (open to read exact markup, inline styles, and full copy):
- `Old Fashioned Cocktail Co.dc.html` (Home)
- `All Events.dc.html`, `Weddings.dc.html`, `Corporate Events.dc.html`, `Birthdays and Anniversaries.dc.html`
- `How It Works.dc.html`, `Our Fleet.dc.html`, `About.dc.html`, `FAQs.dc.html`
- `Blog.dc.html` + `Blog - Mezcal for Cocktail Mixing.dc.html`, `Blog - Choosing Whiskey for Cocktails.dc.html`, `Blog - Clear Ice.dc.html`, `Blog - Old Fashioned Cocktail.dc.html`, `Blog - Party a Classic.dc.html`
- `image-slot.js` (prototype-only placeholder component — do NOT port; use `next/image`)

> When reading the HTML: the design lives in the markup + inline `style` attributes. Convert colors/spacing/type to a Tailwind theme (`tailwind.config` with the tokens above) and utility classes. Skip the DC/`support.js` runtime entirely.
