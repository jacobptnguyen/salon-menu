# LA Salon & Spa — Digital Nail Polish Menu

## Overview

A mobile-first, single-page React app customers reach by scanning a QR code at the salon. Pure browsing experience — no accounts, no database, no backend. One level: the **Collection Gallery**, where every card shows its collection's full photo and is independently zoomable, pannable, and rotatable — no navigation, no separate views. Deployed as a static site on Vercel.

## Tech Stack

- **Vite + React** (SPA, no routing framework needed — there's no view-switching at all)
- **Tailwind CSS** for styling
- **Framer Motion** for the gallery's mount fade-in and tap feedback
- **react-zoom-pan-pinch** for pinch/pan/zoom gestures on each gallery card's photo — Framer Motion has no multi-touch support of its own. A 90°-step rotate control is layered on top by hand, since the library has no native rotation API.
- Deployment: Vercel, static build (`vite build` → `dist/`), no environment variables, no serverless functions
- All content lives in a local data file (see Data Model) — editing collections means editing that file and redeploying, no CMS/DB

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
| `--color-shadow` | `rgba(46, 42, 40, 0.08)` | Card shadows |

Rules of thumb: red and green never sit directly adjacent at full saturation (avoids the classic red/green vibration that's hard on the eyes). Backgrounds stay warm-neutral; red/green appear as accents, tags, and small UI elements — never as large fields behind each other.

There is no separate primary/secondary text-color token (an earlier `--color-text-primary` / `--color-text-secondary` pair was retired, 2026-08-17) — **all text everywhere, at every weight and size, is pure black (`#000000` / Tailwind `text-black`)**. Don't reach for a muted/secondary gray for captions, badges, or de-emphasized labels; use black and let font size/weight carry the hierarchy instead.

### Typography

- **All visible text everywhere — every heading, label, caption, and button, at every level of the app — uses the same serif display font (Playfair Display) and the same color (pure black).** There is no second font or second text color anywhere in the UI; hierarchy comes only from size/weight, never from a font or color swap. All titles are also **center-aligned**; card captions are left-aligned (see Navigation Architecture).
- **Inter** (sans-serif) is loaded and available for any future secondary/caption text, but nothing currently uses it — if that changes, it must still be black, not a muted gray.
- Load both via Google Fonts or self-hosted `@font-face`.
- Scale: salon header ~30px, card brand caption ~20px uppercase, card collection name ~24px bold. Weight varies by role (bold for names/titles, medium for buttons) but color never does.

### Shape & Elevation

- Card corner radius: **16–20px** (soft rounded, not pill-shaped)
- Card shadow: subtle diffused shadow using `--color-shadow`, no hard borders
- Consistent 16–24px spacing/padding grid throughout — gallery cards in particular use generous padding and inter-card spacing so each collection photo reads as large and uncrowded
- Each card's rotate button sits in the caption row, horizontally aligned with that card's brand/name text (not on top of the photo), reusing the same fixed-pill treatment used elsewhere (`bg-surface/90`, `shadow-card`, `backdrop-blur`, fully rounded) rather than introducing a new control style.

### Motion (Framer Motion)

- The gallery fades in on mount (`opacity 0 → 1`) — there's nothing to crossfade between since there's only one view.
- Subtle tap feedback (slight scale-down, ~0.97–0.98) on tappable buttons.
- Keep durations short (200–300ms) and easing gentle (ease-out) — motion should feel tactile, not showy.
- Each card's pinch/pan/tap-to-zoom (via `react-zoom-pan-pinch`) and 90°-step rotate are outside Framer Motion's control — `MotionConfig`'s `reducedMotion` setting doesn't reach them, so `prefers-reduced-motion` must be read locally (`useReducedMotion()`) and applied by hand: zero-length animation times for zoom/reset calls, and no CSS transition on the rotate transform.

## Navigation Architecture

```
Level 1: Collection Gallery (Home, and the only screen)
  ├─ Vertical scrolling list, one large card per collection (not a grid)
  ├─ Salon name "LA Salon & Spa" as centered header (Playfair Display) —
  │  no instructional subheading beneath it, the scrollable list of
  │  photos is self-explanatory
  ├─ Each card: caption row first — brand (optional, uppercase) + name
  │  (bold), left-aligned, with that card's rotate button horizontally
  │  aligned to its right — not overlaid on the photo, so contrast/
  │  readability never depends on what's in the photo — followed by that
  │  collection's full photo, fully visible (contain-fit, letterboxed)
  │  inside a square stage — the square stage means rotating the photo
  │  never changes its bounding footprint
  ├─ Tap the photo to toggle ~1.8x zoom; pinch zooms continuously up to
  │  4x; drag pans once zoomed (react-zoom-pan-pinch) — panning is only
  │  enabled once that card is actually zoomed in, so an unzoomed card's
  │  photo never intercepts the page's normal vertical scroll
  ├─ Rotate button cycles 0° → 90° → 180° → 270° → 360°(=0°) per tap and
  │  resets that card's zoom/pan back to centered each time (a pan offset
  │  from before the rotation would be disorienting after the image
  │  spins) — independent per card. The underlying rotation value is
  │  never wrapped back to 0 (it just keeps incrementing by 90°) so the
  │  CSS transition always animates a clean forward turn — wrapping it
  │  would make every 4th press visually spin backward through
  │  270°/180°/90° instead of stepping forward once more
  └─ No back button, no CTA, no links — pure visual browsing, nothing to
     navigate to or from
```

There is no navigation state — no router, no selected-item state at `App.jsx` level. Each card (`CollectionCard`) owns its own local `rotation` and `isZoomed` state independently; scrolling past a card or zooming another one has no effect on it.

## Data Model

### Collections — `src/data/collections.js`

```js
export const collections = [
  {
    id: "hello-autumn",
    brand: "CHANCE by Cre8tion", // optional — small caption shown above the name
    name: "Hello Autumn",
    image: "/images/collections/hello-autumn.jpg", // one photo of the whole palette
    swatchHex: "#8E4435" // fallback color if image is missing
  }
  // ...one entry per collection, in the order they should render top-to-bottom
];
```

- Each entry is one salon collection, represented by a **single photo of the entire palette** — not per-bottle swatches. That per-bottle model (shapes/categories/individual colors) was retired 2026-08-19 in favor of this simpler photo-per-collection gallery, because it matches how the salon and customers already talk about collections.
- Array order is display order in the gallery — manually curated, **not alphabetical**. "Shapes" (the nail-shape reference chart) always leads the list; when adding a new collection, prepend it immediately after "Shapes" (as the second entry) rather than appending it at the end or sorting it in alphabetically — the newest addition should always surface right after Shapes, pushing older entries further down.
- `brand` is optional — shown as a small uppercase caption above `name` on each card. Omit for unbranded/placeholder entries.
- `swatchHex` is a required fallback: until a real photo is supplied, render a solid-color block (this hex) in place of the image, so the gallery still looks complete with placeholder data.
- Some brands (e.g. DND) legitimately have two entries with the same collection name (e.g. two separately photographed bottles both labeled "3") — that's expected, not a bug; `id` still stays unique for each.

## Image Handling

- Real photos live under `/public/images/collections/<collection-id>.jpg` — one photo per collection, dropped in as the salon supplies them.
- If `image` fails to load or isn't provided, fall back to a solid-fill block using `swatchHex`.
- `<CollectionImage>` is designed so swapping in real photos later requires no code changes — just dropping a file into `/public/images/collections/` and updating the `image` path in `collections.js`.
- Source photos often arrive as HEIC (iPhone default) — convert to a web-friendly format first (`sips -s format png <file>.heic --out <file>.png`), since browsers don't render HEIC. **Watch for EXIF orientation**: HEIC photos frequently carry an `orientation` EXIF tag rather than storing pixels pre-rotated, and naively resizing/re-encoding without honoring that tag bakes in a sideways or upside-down image (this bit us once — see git history around 2026-08-19). Apply the tag before any resize (e.g. Pillow's `ImageOps.exif_transpose()`) rather than trusting raw pixel data.
- Compress/resize real photos before committing (e.g. via `sips`) — long edge ~900px, JPEG quality ~78 keeps files well under 150KB without visible quality loss at card/zoom size.
- Target aspect ratio: every card shows the photo's natural aspect ratio, letterboxed (contain-fit) inside a square stage — nothing is cropped, and rotation never changes the stage size.
- Compress/optimize images before shipping (Vercel serves static assets as-is — no image optimization pipeline unless using Next.js `<Image>`, which is out of scope here).

## Accessibility

- Collection name text must never rely on the swatch color alone — always paired with a text label (important for colorblind users given the red/green branding).
- Sufficient contrast between text and background at every level (verify black text on `--color-bg` and on card surfaces). This is also why gallery captions sit on the plain card surface above the photo rather than overlaid on top of it — text over an arbitrary photo can't guarantee sufficient contrast, text over `bg-surface` always can.
- Each card's rotate button and tap-to-zoom photo control are real `<button>` elements (not divs with onClick) for keyboard/screen-reader access. There is no back button — there's no navigation to go back from.
- Respect `prefers-reduced-motion` — fall back to simple fades if set (applied by hand for each card's gesture library and rotate transition, since `MotionConfig` only covers Framer Motion elements).

## Open Assumptions (confirm before/while building)

- Salon name used in header: **"LA Salon & Spa"** (placeholder — confirm exact spelling/branding).
- No logo file yet — text-only header for now.
- Vercel Web Analytics (`@vercel/analytics`) is included solely to count QR scans — since the page has no other entry point, page views equal scan count. No cookies, no other tracking/pixels. Free on Hobby plan up to 2,500 events/month.
