# LA Salon & Spa — Digital Nail Polish Menu

## Overview

A mobile-first, single-page React app customers reach by scanning a QR code at the salon. Pure browsing experience — no accounts, no database, no backend. Three-level navigation: **Categories → Colors → Zoom**. Deployed as a static site on Vercel.

## Tech Stack

- **Vite + React** (SPA, no routing framework needed — state-based view switching is enough for 3 levels)
- **Tailwind CSS** for styling
- **Framer Motion** for transitions (shared-element zoom/scale between views, tap/hover feedback)
- Deployment: Vercel, static build (`vite build` → `dist/`), no environment variables, no serverless functions
- All content lives in a local data file (see Data Model) — editing colors means editing that file and redeploying, no CMS/DB

## Non-Goals (explicitly out of scope)

- No user accounts, auth, or personalization
- No database or backend API
- No search or filter bar (browse-only)
- No booking/CTA links — this is a pure visual reference menu
- No price display (not part of the card info by default)

## Design System

### Color Palette — "Warm blush + sage"

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#FDFBF9` | Page background (warm white) |
| `--color-surface` | `#FFFFFF` | Card backgrounds |
| `--color-red` | `#E8949A` | Blush red — primary accent (headers, active states, category tint) |
| `--color-red-soft` | `#F5D4D7` | Blush red tint — backgrounds, chips, subtle highlights |
| `--color-green` | `#A8BFA0` | Sage green — secondary accent (dividers, secondary buttons) |
| `--color-green-soft` | `#DCE6D8` | Sage tint — backgrounds, chips |
| `--color-text-primary` | `#2E2A28` | Headings, primary text (warm near-black, not pure black) |
| `--color-text-secondary` | `#7A716D` | Captions, secondary text |
| `--color-shadow` | `rgba(46, 42, 40, 0.08)` | Card shadows |

Rules of thumb: red and green never sit directly adjacent at full saturation (avoids the classic red/green vibration that's hard on the eyes). Backgrounds stay warm-neutral; red/green appear as accents, tags, and small UI elements — never as large fields behind each other.

### Typography

- All visible text — headings, category/color names, polish numbers, and the back button — uses one serif display font, **Playfair Display**, for a consistent look throughout. All titles are **center-aligned** at every level (category grid title, color detail title, zoom view title).
- **Inter** (sans-serif) is loaded and available for any future secondary/caption text, but nothing currently uses it.
- Load both via Google Fonts or self-hosted `@font-face`.
- Scale: salon header ~28–32px, category card title ~20px, color detail title ~26px, zoom view title ~22px, body/labels ~14px.

### Shape & Elevation

- Card corner radius: **16–20px** (soft rounded, not pill-shaped)
- Card shadow: subtle diffused shadow using `--color-shadow`, no hard borders
- Consistent 16–24px spacing/padding grid throughout

### Motion (Framer Motion)

- View transitions (category grid ↔ color list ↔ zoom) are a simple **crossfade** — no shared-element/scale-expand animation between views.
- Subtle tap feedback (slight scale-down, ~0.97) on all tappable cards
- Keep durations short (200–300ms) and easing gentle (ease-out) — motion should feel tactile, not showy

## Navigation Architecture

```
Level 1: Category Grid (Home)
  ├─ 2-column grid of large image cards, one per color family
  ├─ Salon name "LA Salon & Spa" as centered header (Playfair Display)
  └─ Tap a category → Level 2

Level 2: Color List (within a category)
  ├─ Grid of individual polish color cards (image + polish number + name)
  ├─ Centered category title at top
  ├─ Persistent back button, top-left, returns to Level 1
  └─ Tap a color card → Level 3

Level 3: Zoom View
  ├─ Fullscreen image, pinch/tap to zoom
  ├─ Centered polish number and name below/over the image
  ├─ Persistent back button, top-left, returns to Level 2
  └─ No CTA, no links — pure visual detail
```

State can be managed with simple React state (`selectedCategory`, `selectedColor`) — no router needed given only 3 fixed levels and no shareable deep links required. (If deep-linking to a specific color is later desired, swap in a lightweight router.)

## Data Model

Single local file, e.g. `src/data/colors.js`:

```js
export const categories = [
  {
    id: "reds",
    name: "Reds",
    coverImage: "/images/categories/reds.jpg",
    colors: [
      {
        id: "cherry-kiss",
        name: "Cherry Kiss", // optional — omit for bottles with no printed name (see below)
        number: "101", // salon's polish number — shown as the primary label, since that's how customers pick a color
        image: "/images/colors/reds/cherry-kiss.jpg",
        swatchHex: "#C23B3B" // fallback color if image is missing
      }
      // ...6-10 colors per category
    ]
  }
  // ...category families as needed to fit the real colors on hand: e.g. Reds, Pinks,
  // Nudes, Corals, Berries, Classics — add new families (e.g. Greens) for colors
  // that don't fit an existing one, rather than force-fitting them
];
```

- Built and tested against **~4-6 categories, ~6-10 colors each** (~25-50 color entries total).
- `swatchHex` is a required fallback: until real photos are supplied, render a solid-color rounded rectangle (using this hex) in place of the image, so the app looks complete with placeholder data.
- `name` is optional. Some bottles only have a manufacturer number printed on the cap (e.g. `"A1338"`), no product name — omit `name` for those entries and the UI falls back to displaying `number` in its place (still a real text label, so the colorblind-accessibility rule below still holds).

## Image Handling

- Real photos live under `/public/images/colors/<category-id>/<slug-or-number>.jpg` — one folder per category, since the salon supplies photos in ongoing batches. Category cover photos live under `/public/images/categories/<category-id>.jpg`.
- Real photos will be supplied by the salon later. Build now with a placeholder strategy:
  - If `image` fails to load or isn't provided, fall back to a solid-fill card using `swatchHex`.
  - Design the `<ColorImage>` component so swapping in real photos later requires no code changes — just dropping files into the matching category folder and updating paths in `colors.js`.
  - Compress/resize real photos before committing (e.g. via `sips`) — long edge ~900px, JPEG quality ~78 keeps files well under 150KB without visible quality loss at card/zoom size.
- Target aspect ratio: square (1:1) for category and color cards; zoom view uses the image's natural aspect ratio, fullscreen, letterboxed if needed.
- Compress/optimize images before shipping (Vercel serves static assets as-is — no image optimization pipeline unless using Next.js `<Image>`, which is out of scope here).

## Accessibility

- Color name text must never rely on the swatch color alone — always paired with a text label (important for colorblind users given the red/green branding).
- Sufficient contrast between text and background at every level (verify `--color-text-primary` on `--color-bg` and on card surfaces).
- Back button and cards are real buttons (not divs with onClick) for keyboard/screen-reader access.
- Respect `prefers-reduced-motion` — fall back to simple fades if set.

## Open Assumptions (confirm before/while building)

- Salon name used in header: **"LA Salon & Spa"** (placeholder — confirm exact spelling/branding).
- No logo file yet — text-only header for now.
- Real category names and exact photo assets are pending from the salon; ship with placeholder categories/swatches until provided.
- Vercel Web Analytics (`@vercel/analytics`) is included solely to count QR scans — since the page has no other entry point, page views equal scan count. No cookies, no other tracking/pixels. Free on Hobby plan up to 2,500 events/month.