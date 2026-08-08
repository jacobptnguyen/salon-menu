// Real photos live under /public/images/colors/<category-id>/ — drop a file
// in the matching category folder and reference it from `image`, no other
// code changes required.
//
// `brand` is optional and shown as a small caption above the color name.
// `name` is optional — the UI falls back to showing `number` in its place
// if a bottle has no printed/known name. `name` is the standout label on
// cards/zoom; `number` is secondary.
//
// A category with an empty `colors` array is hidden from the category grid
// entirely (see App.jsx) rather than shown with placeholder colors — add
// real entries here once photos come in and it'll reappear on its own.

export const categories = [
  {
    id: "reds",
    name: "Reds",
    swatchHex: "#C23B3B",
    colors: [],
  },
  {
    id: "pinks",
    name: "Pinks",
    swatchHex: "#E8949A",
    colors: [
      { id: "double-rhythm-a1573", brand: "Double Rhythm", name: "Bright Pink", number: "A1573", image: "/images/colors/pinks/double-rhythm-bright-pink-a1573.jpg", swatchHex: "#F25C9A" },
      { id: "double-rhythm-a1309", brand: "Double Rhythm", name: "Bright Pink", number: "A1309", image: "/images/colors/pinks/double-rhythm-bright-pink-a1309.jpg", swatchHex: "#BE849D" },
      { id: "double-rhythm-a1312", brand: "Double Rhythm", name: "Bright Pink", number: "A1312", image: "/images/colors/pinks/double-rhythm-bright-pink-a1312.jpg", swatchHex: "#9D255B" },
      { id: "double-rhythm-a1337", brand: "Double Rhythm", name: "Bright Pink", number: "A1337", image: "/images/colors/pinks/double-rhythm-bright-pink-a1337.jpg", swatchHex: "#D771B1" },
      { id: "double-rhythm-a1338", brand: "Double Rhythm", name: "Bright Pink", number: "A1338", image: "/images/colors/pinks/double-rhythm-bright-pink-a1338.jpg", swatchHex: "#721845" },
      { id: "double-rhythm-a1586", brand: "Double Rhythm", name: "Bright Pink", number: "A1586", image: "/images/colors/pinks/double-rhythm-bright-pink-a1586.jpg", swatchHex: "#B595BA" },
      { id: "double-rhythm-mc1019", brand: "Double Rhythm", name: "Nude Pink", number: "MC1019", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1019.jpg", swatchHex: "#A1A095" },
      { id: "double-rhythm-mc1020", brand: "Double Rhythm", name: "Nude Pink", number: "MC1020", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1020.jpg", swatchHex: "#989287" },
      { id: "double-rhythm-mc1021", brand: "Double Rhythm", name: "Nude Pink", number: "MC1021", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1021.jpg", swatchHex: "#9B9086" },
      { id: "double-rhythm-mc1022", brand: "Double Rhythm", name: "Nude Pink", number: "MC1022", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1022.jpg", swatchHex: "#A69991" },
      { id: "double-rhythm-mc1023", brand: "Double Rhythm", name: "Nude Pink", number: "MC1023", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1023.jpg", swatchHex: "#9D9188" },
      { id: "double-rhythm-mc1024", brand: "Double Rhythm", name: "Nude Pink", number: "MC1024", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1024.jpg", swatchHex: "#A08681" },
    ],
  },
  {
    id: "nudes",
    name: "Nudes",
    swatchHex: "#D9C2A8",
    colors: [
      { id: "double-rhythm-a1347", brand: "Double Rhythm", name: "Ivory By Cream", number: "A1347", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1347.jpg", swatchHex: "#827871" },
      { id: "double-rhythm-a1547", brand: "Double Rhythm", name: "Ivory By Cream", number: "A1547", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1547.jpg", swatchHex: "#91796C" },
      { id: "double-rhythm-a1593", brand: "Double Rhythm", name: "Ivory By Cream", number: "A1593", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1593.jpg", swatchHex: "#75504E" },
      { id: "double-rhythm-a1594", brand: "Double Rhythm", name: "Ivory By Cream", number: "A1594", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1594.jpg", swatchHex: "#A59F96" },
      { id: "double-rhythm-a1595", brand: "Double Rhythm", name: "Ivory By Cream", number: "A1595", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1595.jpg", swatchHex: "#7C705F" },
      { id: "double-rhythm-a1596", brand: "Double Rhythm", name: "Ivory By Cream", number: "A1596", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1596.jpg", swatchHex: "#B0A193" },
    ],
  },
  {
    id: "corals",
    name: "Corals",
    swatchHex: "#F2836B",
    colors: [],
  },
  {
    id: "berries",
    name: "Berries",
    swatchHex: "#8C5A82",
    colors: [
      { id: "double-rhythm-a1051", brand: "Double Rhythm", name: "Lavender By Purple", number: "A1051", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1051.jpg", swatchHex: "#76758F" },
      { id: "double-rhythm-a1054", brand: "Double Rhythm", name: "Lavender By Purple", number: "A1054", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1054.jpg", swatchHex: "#B3959E" },
      { id: "double-rhythm-a1541", brand: "Double Rhythm", name: "Lavender By Purple", number: "A1541", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1541.jpg", swatchHex: "#B09DA1" },
      { id: "double-rhythm-a1588", brand: "Double Rhythm", name: "Lavender By Purple", number: "A1588", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1588.jpg", swatchHex: "#9A95A4" },
      { id: "double-rhythm-a1589", brand: "Double Rhythm", name: "Lavender By Purple", number: "A1589", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1589.jpg", swatchHex: "#8D7892" },
      { id: "double-rhythm-a1590", brand: "Double Rhythm", name: "Lavender By Purple", number: "A1590", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1590.jpg", swatchHex: "#59565E" },
    ],
  },
  {
    id: "classics",
    name: "Classics",
    swatchHex: "#D8D2CB",
    colors: [],
  },
  {
    id: "greens",
    name: "Greens",
    swatchHex: "#8FD14F",
    colors: [],
  },
  {
    id: "thermal",
    name: "Thermal",
    swatchHex: "#8A6A70",
    colors: [
      { id: "double-rhythm-a1690", brand: "Double Rhythm", name: "Thermal Gel Color Change", number: "A1690", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1690.jpg", swatchHex: "#B06D6F" },
      { id: "double-rhythm-a1691", brand: "Double Rhythm", name: "Thermal Gel Color Change", number: "A1691", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1691.jpg", swatchHex: "#91656E" },
      { id: "double-rhythm-a1692", brand: "Double Rhythm", name: "Thermal Gel Color Change", number: "A1692", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1692.jpg", swatchHex: "#A58A90" },
      { id: "double-rhythm-a1693", brand: "Double Rhythm", name: "Thermal Gel Color Change", number: "A1693", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1693.jpg", swatchHex: "#756871" },
      { id: "double-rhythm-a1694", brand: "Double Rhythm", name: "Thermal Gel Color Change", number: "A1694", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1694.jpg", swatchHex: "#8A6A62" },
      { id: "double-rhythm-a1695", brand: "Double Rhythm", name: "Thermal Gel Color Change", number: "A1695", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1695.jpg", swatchHex: "#615551" },
    ],
  },
];
