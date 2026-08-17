# LA Salon & Spa — Digital Nail Polish Menu

## Overview

A mobile-first, single-page React app customers reach by scanning a QR code at the salon. Pure browsing experience — no accounts, no database, no backend. Four-level navigation: **Shape → Categories → Colors → Zoom**. Deployed as a static site on Vercel.

## Tech Stack

- **Vite + React** (SPA, no routing framework needed — state-based view switching is enough for 4 levels)
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
| `--color-shadow` | `rgba(46, 42, 40, 0.08)` | Card shadows |

Rules of thumb: red and green never sit directly adjacent at full saturation (avoids the classic red/green vibration that's hard on the eyes). Backgrounds stay warm-neutral; red/green appear as accents, tags, and small UI elements — never as large fields behind each other.

There is no separate primary/secondary text-color token (an earlier `--color-text-primary` / `--color-text-secondary` pair was retired, 2026-08-17) — **all text everywhere, at every weight and size, is pure black (`#000000` / Tailwind `text-black`)**. Don't reach for a muted/secondary gray for captions, badges, or de-emphasized labels; use black and let font size/weight carry the hierarchy instead.

### Typography

- **All visible text everywhere — every heading, label, caption, badge, button, and body line, at every level of the app — uses the same serif display font (Playfair Display) and the same color (pure black).** There is no second font or second text color anywhere in the UI; hierarchy comes only from size/weight, never from a font or color swap. All titles are also **center-aligned** at every level (category grid title, color detail title, zoom view title).
- **Inter** (sans-serif) is loaded and available for any future secondary/caption text, but nothing currently uses it — if that changes, it must still be black, not a muted gray.
- Load both via Google Fonts or self-hosted `@font-face`.
- Scale: salon header ~28–32px, "Choose a Shape"/"Choose a Category"/"Choose a Color" instructional heading 26px bold (shared style across all three), category card title ~15px, shape card title ~11px bold, color detail title ~26px, zoom view title ~22px, body/labels ~14px. Weight varies by role (bold for names/titles, medium for buttons/badges) but color never does.

### Shape & Elevation

- Card corner radius: **16–20px** (soft rounded, not pill-shaped)
- Card shadow: subtle diffused shadow using `--color-shadow`, no hard borders
- Consistent 16–24px spacing/padding grid throughout
- Selection badges (shape/category reminders, top-right) reuse the same pill treatment as the back button (`bg-surface/90`, `shadow-card`, `backdrop-blur`, fully rounded) rather than introducing a new chip style — they're visually a top-right mirror of the back button, just non-interactive.

### Motion (Framer Motion)

- View transitions (category grid ↔ color list ↔ zoom) are a simple **crossfade** — no shared-element/scale-expand animation between views.
- Subtle tap feedback (slight scale-down, ~0.97) on all tappable cards
- Keep durations short (200–300ms) and easing gentle (ease-out) — motion should feel tactile, not showy

## Navigation Architecture

```
Level 1: Shape Grid (Home)
  ├─ 4-column grid, 8 nail shapes (2 even rows — deliberately chosen over
  │  any other column count so 8 shapes never split unevenly)
  ├─ Salon name "LA Salon & Spa" as centered header (Playfair Display),
  │  with a "Choose a Shape" heading beneath it, styled the same as the
  │  "Choose a Category" / "Choose a Color" headings on Levels 2 and 3
  │  (26px, bold, black) for a consistent instructional-heading style
  ├─ No back button — this is the true home screen
  └─ Tap a shape → Level 2

Level 2: Category Grid (within the chosen shape)
  ├─ 3-column grid of image cards, one per color family (see Category
  │  order below)
  ├─ Centered "Choose a Category" heading, set in black (not
  │  `--color-text-primary`) for stronger readability against the grid
  ├─ Persistent back button, top-left, label "Shapes", returns to Level 1
  │  (clears the selected shape)
  ├─ Selected-shape badge, top-right (icon + name), reminds the customer
  │  and technician what shape was picked
  └─ Tap a category → Level 3

Level 3: Color List (within a category)
  ├─ Grid of individual polish color cards (image + polish number + name)
  ├─ Centered "Choose a Color" heading, set in black (not
  │  `--color-text-primary`) for stronger readability (the category name
  │  moved to its badge, so this heading is instructional text, not the
  │  category name)
  ├─ Persistent back button, top-left, label "Categories", returns to
  │  Level 2 (clears the selected category)
  ├─ Two selection badges, top-right, stacked vertically: shape (icon +
  │  name) above category (icon + name — category icon is a small dot
  │  filled with the category's `swatchHex`)
  └─ Tap a color card → Level 4

Level 4: Zoom View
  ├─ Fullscreen image, pinch/tap to zoom, shown side-by-side at equal
  │  size with the nail-shape preview (not a corner badge here) — both are
  │  the same flex-1/aspect-square treatment, so neither card has its own
  │  caption underneath (that would throw off the equal-size alignment)
  ├─ All caption text lives in one centered block below both cards, in
  │  order: shape name, then the polish description (brand, collection,
  │  name, number) — "shape desc" stacked above "nail polish desc"
  ├─ No category badge on this screen — the brand/collection text already
  │  rendered under the photo covers that, so a redundant badge is skipped
  ├─ Persistent back button, top-left, label "Colors", returns to Level 3
  └─ No CTA, no links — pure visual detail
```

Selection badges (shape and category) are purely visual reminders — not tappable, not a navigation shortcut. The only way back is the top-left back button at each level.

State can be managed with simple React state (`selectedShape`, `selectedCategory`, `selectedColor`) — no router needed given only 4 fixed levels and no shareable deep links required. (If deep-linking to a specific color is later desired, swap in a lightweight router.)

## Data Model

### Shapes — `src/data/shapes.js`

```js
export const shapes = [
  {
    id: "almond",
    name: "Almond",
    preferPhoto: true, // true for all 8 — real photos are the default render
    image: "/images/shapes/almond.jpg", // real reference photo, supplied by the salon
    nail: { borderRadius: "50% 50% 10% 10% / 100% 100% 25% 25%" } // nail-cap clip shape — CSS fallback only
  }
  // ...8 shapes total, grid order: Square, Rounded, Oval, Squarely
  // Rounded, Ballerina, Almond, Stiletto, Mountain Peak
];
```

- `NailShapeIcon` renders `image` (a real reference photo) whenever `preferPhoto` is set, cropped from the top (`object-top`) so the nail tip at the top of the photo stays visible instead of getting cut off by a center crop. All 8 shapes currently set `preferPhoto: true`.
- If `preferPhoto` is unset, or the photo fails to load, `NailShapeIcon` falls back to a small finger-silhouette (fixed skin-tone rounded rectangle) with a colored nail cap layered on top, shaped per `nail` (`border-radius` for the flatter/rounder tips, `clip-path` for the tapered/pointed ones) — a stylized "finger + polish" icon rather than a bare colored blob. Real photos live at `/public/images/shapes/<id>.jpg`.
- Fixed set of 8. **Grid order is salon-specified (as of 2026-08-17), not grouped by tip shape**: Square, Rounded, Oval, Squarely Rounded, Ballerina, Almond, Stiletto, Mountain Peak — two rows of 4. This overrides an earlier "flatter tips first, then tapered tips" grouping; re-derive from a future request rather than assuming that grouping comes back.

### Colors — `src/data/colors.js`

```js
export const categories = [
  {
    id: "reds",
    name: "Reds",
    coverImage: "/images/categories/reds.jpg",
    colors: [
      {
        id: "cherry-kiss",
        brand: "OPI", // optional — small caption shown above the name
        name: "Cherry Kiss", // optional — the standout label on cards/zoom; omit for bottles with no printed name (see below)
        number: "101", // salon's polish number — shown as a secondary label under the name
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

- **Category order matters and must stay sorted — currently by color count, descending (as of 2026-08-14).** The `categories` array order is what renders on the home grid (now a 3-column grid), so the categories with the most colors come first — the goal is that the biggest/most-common categories never get buried below the fold. To resort: for each category, sum `colors.length` across every collection, then sort the array descending by that total. This is a deliberate, temporary override of an earlier color-wheel ordering (Reds → Corals → Golds → Greens → Berries → Pinks → neutrals → effects) — if a future request asks to bring wheel-ordering back, re-derive it rather than assuming the count-based order should stay forever.

  Which category a *color* belongs to is a separate question from array order, and is still governed by hue/finish, not count: hue families (Reds, Corals, Golds, Greens, Berries, Pinks) group by actual photographed color; Nudes/Classics/Grays are the three neutral buckets (Nudes — warm/skin-tone; Classics — pale ivories/whites; Grays — true black-to-gray, no skin-tone hue); Thermal/Shimmer group by finish/effect, not hue.

  "Nude" specifically means it approximates skin tone — beige, tan, brown (including deep espresso), soft pink, peach, taupe. Black and gray are not skin tones and read as bold/graphic rather than "your nail, but polished," so low-saturation dark colors (true charcoal/black/gunmetal, no discernible warm hue) belong in Grays, not Nudes, even if the source photo has a brownish cast from warm lighting — check the actual saturation, not just the vibe of the thumbnail.

- Built and tested against **~4-6 categories, ~6-10 colors each** (~25-50 color entries total).
- `swatchHex` is a required fallback: until real photos are supplied, render a solid-color rounded rectangle (using this hex) in place of the image, so the app looks complete with placeholder data.
- `brand` is optional — shown as a small uppercase caption above the name, on both the color card and the zoom view. Omit for placeholder/unbranded entries.
- `name` is optional. Some bottles only have a manufacturer number printed on the cap (e.g. `"A1338"`), no product name — omit `name` for those entries and the UI falls back to displaying `number` in its place (still a real text label, so the colorblind-accessibility rule below still holds).
- Display hierarchy: `name` (or `number` when `name` is absent) is the standout label — larger, bolder. `number` is secondary — smaller, muted — and only shown alongside `name` when both are present.

## Image Handling

- Real photos live under `/public/images/colors/<category-id>/<filename>.jpg` — one folder per category, since the salon supplies photos in ongoing batches. Category cover photos live under `/public/images/categories/<category-id>.jpg`.
- Photos are being uploaded one at a time. Each filename encodes `brand-name-number` (e.g. `opi-bubble-bath-s86.jpg` for brand OPI, name "Bubble Bath", number S86) — parse the filename to fill in `name`/`number` in `colors.js` when wiring up a newly uploaded photo, and replace the matching `TBD-#` placeholder entry in that category rather than adding a new one.
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