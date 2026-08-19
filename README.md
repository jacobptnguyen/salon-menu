# Digital Nail Polish Menu

A mobile-first web app that replaces a salon's paper color-swatch binder with a QR-code menu customers browse on their own phone. No accounts, no booking flow, no backend — just a scrolling gallery of collection photos, each independently pinch-zoomable, pannable, and rotatable in place.

**[View live demo →](https://salon-menu-jade.vercel.app/)**

<p align="center">
  <img src="docs/screenshots/gallery.png" width="45%" alt="Collection gallery" />
</p>

## Highlights

- **One screen, no navigation** — every collection is a card in a single scrollable gallery; there's no separate zoom screen or back button to manage.
- **Real pinch/pan/zoom + rotate, per card** — `react-zoom-pan-pinch` handles tap-to-zoom, pinch, and pan on each card's photo independently; a hand-rolled 90°-step rotate button sits in that card's caption row (the library has no rotation API of its own).
- **Scroll never fights zoom** — panning only activates once a card is actually zoomed in, so dragging over an unzoomed card's photo scrolls the page like normal instead of getting captured by the gesture library.
- **Graceful fallback state** — a missing or not-yet-supplied photo falls back to a solid swatch color instead of a broken image. Dropping a real photo into `public/images/collections/` requires no component changes.
- **Accessible by default** — real `<button>` elements (not `onClick` divs), text-paired collection names for colorblind users, and `prefers-reduced-motion` support (applied by hand for the zoom/rotate gestures, since they sit outside Framer Motion).
- **Zero backend** — content lives in a single typed data file; the whole app ships as a static bundle.
- **Privacy-conscious analytics** — Vercel Web Analytics counts page views as a proxy for QR scans, with no cookies or third-party trackers.

## Tech Stack

- **[Vite](https://vitejs.dev/)** — build tool and dev server
- **[React](https://react.dev/)** — UI, no router or navigation state needed since there's only one screen
- **[Tailwind CSS](https://tailwindcss.com/)** — styling, driven by a small custom design-token palette
- **[Framer Motion](https://www.framer.com/motion/)** — the gallery's mount fade-in and tap feedback
- **[react-zoom-pan-pinch](https://github.com/BetterTyped/react-zoom-pan-pinch)** — pinch/pan/zoom gestures on each card's photo
- **[Vercel Web Analytics](https://vercel.com/docs/analytics)** — lightweight, cookie-free page-view tracking
- **Vercel** — static hosting, no environment variables or serverless functions required

## Architecture

```
src/
  data/collections.js       # all menu content — one entry per collection
  components/
    Gallery.jsx               # the whole app — scrollable list of cards
    CollectionCard.jsx          # one card: caption + pinch/zoom/rotate photo
    CollectionImage.jsx           # image with solid-swatch fallback
  App.jsx                      # renders Gallery, no navigation state
```

Full design system and product spec: [`CLAUDE.md`](CLAUDE.md).

## Running Locally

```bash
npm install
npm run dev
```
