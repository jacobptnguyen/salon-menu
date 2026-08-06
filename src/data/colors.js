// Only real, photographed colors are listed here — no placeholder/fictional
// entries. A category with an empty `colors` array shows an empty-state
// message until real photos are added.
//
// Real photos live under /public/images/colors/<category-id>/ — drop a file
// in the matching category folder and reference it from `image`, no other
// code changes required.
//
// `name` is optional — the UI falls back to showing `number` in its place
// if a bottle has no printed/known name.

export const categories = [
  {
    id: "reds",
    name: "Reds",
    coverImage: "/images/categories/reds.jpg",
    swatchHex: "#C23B3B",
    colors: [],
  },
  {
    id: "pinks",
    name: "Pinks",
    coverImage: "/images/categories/pinks.jpg",
    swatchHex: "#E8949A",
    colors: [
      { id: "a1312", name: "Double Rhythm", image: "/images/colors/pinks/a1312.jpg", swatchHex: "#D6438F", number: "A1312" },
      { id: "a1337", name: "Double Rhythm", image: "/images/colors/pinks/a1337.jpg", swatchHex: "#E85FA0", number: "A1337" },
      { id: "a1309", name: "Double Rhythm", image: "/images/colors/pinks/a1309.jpg", swatchHex: "#F2C6D9", number: "A1309" },
      { id: "a1586", name: "Double Rhythm", image: "/images/colors/pinks/a1586.jpg", swatchHex: "#E8CBE0", number: "A1586" },
      { id: "a1054", name: "Double Rhythm", image: "/images/colors/pinks/a1054.jpg", swatchHex: "#DCC6E8", number: "A1054" },
      { id: "a1541", name: "Double Rhythm", image: "/images/colors/pinks/a1541.jpg", swatchHex: "#D9C3E3", number: "A1541" },
    ],
  },
  {
    id: "nudes",
    name: "Nudes",
    coverImage: "/images/categories/nudes.jpg",
    swatchHex: "#D9C2A8",
    colors: [
      { id: "dm-cateye-001", name: "Gemstone Cat Eye", image: "/images/colors/nudes/dm-cateye-001.jpg", swatchHex: "#D8B23A", number: "DM 001" },
    ],
  },
  {
    id: "corals",
    name: "Corals",
    coverImage: "/images/categories/corals.jpg",
    swatchHex: "#F2836B",
    colors: [],
  },
  {
    id: "berries",
    name: "Berries",
    coverImage: "/images/categories/berries.jpg",
    swatchHex: "#8C5A82",
    colors: [
      { id: "a1338", name: "Double Rhythm", image: "/images/colors/berries/a1338.jpg", swatchHex: "#8E2A4C", number: "A1338" },
      { id: "a1573", name: "Double Rhythm", image: "/images/colors/berries/a1573.jpg", swatchHex: "#B23A82", number: "A1573" },
      { id: "a1593", name: "Double Rhythm", image: "/images/colors/berries/a1593.jpg", swatchHex: "#9C6B85", number: "A1593" },
      { id: "a1590", name: "Double Rhythm", image: "/images/colors/berries/a1590.jpg", swatchHex: "#4B3A8F", number: "A1590" },
      { id: "a1051", name: "Double Rhythm", image: "/images/colors/berries/a1051.jpg", swatchHex: "#7C6FC4", number: "A1051" },
      { id: "a1589", name: "Double Rhythm", image: "/images/colors/berries/a1589.jpg", swatchHex: "#9B7FD4", number: "A1589" },
      { id: "a1588", name: "Double Rhythm", image: "/images/colors/berries/a1588.jpg", swatchHex: "#C3B4E0", number: "A1588" },
      { id: "strawberry-wine", name: "Strawberry Wine", image: "/images/colors/berries/strawberry-wine.jpg", swatchHex: "#6B2635", number: "DC 062" },
    ],
  },
  {
    id: "classics",
    name: "Classics",
    coverImage: "/images/categories/classics.jpg",
    swatchHex: "#D8D2CB",
    colors: [
      { id: "a1596", name: "Double Rhythm", image: "/images/colors/classics/a1596.jpg", swatchHex: "#D9C8C8", number: "A1596" },
      { id: "a1347", name: "Double Rhythm", image: "/images/colors/classics/a1347.jpg", swatchHex: "#D6C2C4", number: "A1347" },
      { id: "a1595", name: "Double Rhythm", image: "/images/colors/classics/a1595.jpg", swatchHex: "#D8C6C6", number: "A1595" },
      { id: "a1594", name: "Double Rhythm", image: "/images/colors/classics/a1594.jpg", swatchHex: "#E3DAD6", number: "A1594" },
      { id: "a1547", name: "Double Rhythm", image: "/images/colors/classics/a1547.jpg", swatchHex: "#D9B8BE", number: "A1547" },
      { id: "arctic-field", name: "Arctic Field", image: "/images/colors/classics/arctic-field.jpg", swatchHex: "#A8D4DE", number: "DC 125" },
    ],
  },
  {
    id: "greens",
    name: "Greens",
    coverImage: "/images/categories/greens.jpg",
    swatchHex: "#8FD14F",
    colors: [
      { id: "dm-cateye-002", name: "Gemstone Cat Eye", image: "/images/colors/greens/dm-cateye-002.jpg", swatchHex: "#8FD14F", number: "DM 002" },
    ],
  },
];
