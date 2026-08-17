// `image` is a real reference photo at /images/shapes/<id>.jpg, supplied by
// the salon — `preferPhoto: true` on every shape means NailShapeIcon renders
// that photo. `nail` (a border-radius/clip-path nail-cap shape, layered on a
// CSS finger silhouette in NailShapeIcon.jsx) is kept as the fallback
// NailShapeIcon draws if a photo fails to load, so it's still here even
// though it isn't the default render right now.
//
// Order (2026-08-17, salon-specified): Square, Rounded, Oval, Squarely
// Rounded, Ballerina, Almond, Stiletto, Mountain Peak — two rows of 4 for
// the 4x2 grid. This overrides the earlier "flatter tips, then tapered
// tips" grouping; re-derive from a future request rather than assuming
// that grouping should come back.

export const shapes = [
  {
    id: "square",
    name: "Square",
    preferPhoto: true,
    image: "/images/shapes/square.jpg",
    nail: { borderRadius: "0% 0% 10% 10%" },
  },
  {
    id: "rounded",
    name: "Rounded",
    preferPhoto: true,
    image: "/images/shapes/rounded.jpg",
    nail: { borderRadius: "45% 45% 10% 10%" },
  },
  {
    id: "oval",
    name: "Oval",
    preferPhoto: true,
    image: "/images/shapes/oval.jpg",
    nail: { borderRadius: "50% 50% 10% 10% / 90% 90% 25% 25%" },
  },
  {
    id: "squarely-rounded",
    name: "Squarely Rounded",
    preferPhoto: true,
    image: "/images/shapes/squarely-rounded.jpg",
    nail: { borderRadius: "20% 20% 10% 10%" },
  },
  {
    id: "ballerina",
    name: "Ballerina",
    preferPhoto: true,
    image: "/images/shapes/ballerina.jpg",
    nail: { clipPath: "polygon(28% 0%, 72% 0%, 100% 100%, 0% 100%)" },
  },
  {
    id: "almond",
    name: "Almond",
    preferPhoto: true,
    image: "/images/shapes/almond.jpg",
    nail: { borderRadius: "50% 50% 10% 10% / 100% 100% 25% 25%" },
  },
  {
    id: "stiletto",
    name: "Stiletto",
    preferPhoto: true,
    image: "/images/shapes/stiletto.jpg",
    nail: { clipPath: "polygon(50% 0%, 100% 55%, 80% 100%, 20% 100%, 0% 55%)" },
  },
  {
    id: "mountain-peak",
    name: "Mountain Peak",
    preferPhoto: true,
    image: "/images/shapes/mountain-peak.jpg",
    nail: { clipPath: "polygon(50% 0%, 92% 55%, 78% 100%, 22% 100%, 8% 55%)" },
  },
];
