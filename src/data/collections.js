// Real photos live under /public/images/collections/ — drop a file named
// `<collection-id>.jpg` in that folder and reference it from `image`, no
// other code changes required.
//
// Each entry represents one salon collection: a single group photo of the
// whole palette (not per-bottle swatches — that model was retired
// 2026-08-19 in favor of one photo per collection).
//
// `brand` is optional — shown as a small uppercase caption above `name`,
// on both the gallery row and the zoom caption. Omit for unbranded/
// placeholder entries.
//
// `swatchHex` is a required fallback: until a real photo is supplied,
// render a solid-color block (this hex) in place of the image, so the
// gallery still looks complete with placeholder data. Values here were
// sampled as the average pixel color of each collection's real photo.
//
// Array order is display order (top-to-bottom in the gallery) — manually
// curated, NOT alphabetical. "Shapes" (the nail-shape reference chart)
// always leads the list. When adding a new collection, prepend it
// immediately after "Shapes" (i.e. as the second entry) rather than
// appending it at the end or slotting it in alphabetically — the newest
// additions should always surface right after Shapes, pushing older
// entries further down. Some brands (e.g. DND) have two entries with the
// same collection name ("3") from two separately photographed bottles —
// that's expected, not a bug; `id` still stays unique for each.

export const collections = [
  {
    id: "shapes",
    name: "Shapes",
    image: "/images/collections/shapes.jpg",
    swatchHex: "#9C9083",
  },
  {
    id: "double-rhythm-bright-pink",
    brand: "Double Rhythm",
    name: "Bright Pink",
    image: "/images/collections/double-rhythm-bright-pink.jpg",
    swatchHex: "#968385",
  },
  {
    id: "double-rhythm-ivory-by-cream",
    brand: "Double Rhythm",
    name: "Ivory By Cream",
    image: "/images/collections/double-rhythm-ivory-by-cream.jpg",
    swatchHex: "#908A7F",
  },
  {
    id: "double-rhythm-lavender-by-purple",
    brand: "Double Rhythm",
    name: "Lavender By Purple",
    image: "/images/collections/double-rhythm-lavender-by-purple.jpg",
    swatchHex: "#8A8484",
  },
  {
    id: "double-rhythm-nude-pink",
    brand: "Double Rhythm",
    name: "Nude Pink",
    image: "/images/collections/double-rhythm-nude-pink.jpg",
    swatchHex: "#8B8475",
  },
  {
    id: "double-rhythm-pink-guava-cat-eye",
    brand: "Double Rhythm",
    name: "Pink Guava Cat Eye",
    image: "/images/collections/double-rhythm-pink-guava-cat-eye.jpg",
    swatchHex: "#938E86",
  },
  {
    id: "double-rhythm-thermal",
    brand: "Double Rhythm",
    name: "Thermal",
    image: "/images/collections/double-rhythm-thermal.jpg",
    swatchHex: "#8F786E",
  },
  {
    id: "atn",
    name: "ATN",
    image: "/images/collections/atn.jpg",
    swatchHex: "#8D8A8A",
  },
  {
    id: "chance-by-cre8tion-hello-autumn",
    brand: "Chance by CRE8TION",
    name: "Hello Autumn",
    image: "/images/collections/chance-by-cre8tion-hello-autumn.jpg",
    swatchHex: "#917C6C",
  },
  {
    id: "dm-gemstone-cat-eye",
    brand: "DM",
    name: "Gemstone Cat Eye",
    image: "/images/collections/dm-gemstone-cat-eye.jpg",
    swatchHex: "#979794",
  },
  {
    id: "dm-gold-cat-eye",
    brand: "DM",
    name: "Gold Cat Eye",
    image: "/images/collections/dm-gold-cat-eye.jpg",
    swatchHex: "#A59F99",
  },
  {
    id: "dnd-2",
    brand: "DND",
    name: "2",
    image: "/images/collections/dnd-2.jpg",
    swatchHex: "#90817A",
  },
  {
    id: "dnd-2016",
    brand: "DND",
    name: "2016",
    image: "/images/collections/dnd-2016.jpg",
    swatchHex: "#73615D",
  },
  {
    id: "dnd-3",
    brand: "DND",
    name: "3",
    image: "/images/collections/dnd-3.jpg",
    swatchHex: "#7D6562",
  },
  {
    id: "dnd-3-b",
    brand: "DND",
    name: "3",
    image: "/images/collections/dnd-3-b.jpg",
    swatchHex: "#968881",
  },
  {
    id: "dnd-5",
    brand: "DND",
    name: "5",
    image: "/images/collections/dnd-5.jpg",
    swatchHex: "#8C7978",
  },
  {
    id: "dnd-9",
    brand: "DND",
    name: "9",
    image: "/images/collections/dnd-9.jpg",
    swatchHex: "#A29B90",
  },
  {
    id: "dnd-diva-collection",
    brand: "DND",
    name: "Diva Collection",
    image: "/images/collections/dnd-diva-collection.jpg",
    swatchHex: "#AD9F96",
  },
  {
    id: "dnd-mermaid-collection",
    brand: "DND",
    name: "Mermaid Collection",
    image: "/images/collections/dnd-mermaid-collection.jpg",
    swatchHex: "#8B7C7D",
  },
  {
    id: "dnd-platinum-collection",
    brand: "DND",
    name: "Platinum Collection",
    image: "/images/collections/dnd-platinum-collection.jpg",
    swatchHex: "#6C6362",
  },
  {
    id: "dnd-sheer-collection-2023",
    brand: "DND",
    name: "Sheer Collection 2023",
    image: "/images/collections/dnd-sheer-collection-2023.jpg",
    swatchHex: "#9D928A",
  },
];
