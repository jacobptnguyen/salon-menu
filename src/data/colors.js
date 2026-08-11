// Real photos live under /public/images/colors/<category-id>/ — drop a file
// in the matching category folder and reference it from `image`, no other
// code changes required.
//
// Colors are grouped by `collections` within a category. A collection is
// a brand + line (e.g. Double Rhythm's "Bright Pink" line) and is shown
// once as a section header in the color grid — not repeated per card.
//
// `collection.brand` / `collection.name` are shown together as that
// section's header. `color.name` is optional — an individual bottle's own
// printed name, if it has one; the UI falls back to showing `color.number`
// in its place when absent (still a real text label, so the colorblind-
// accessibility rule below still holds). `color.name` is the standout
// label on cards/zoom; `color.number` is secondary.
//
// A category with no collections (or only empty ones) is hidden from the
// category grid entirely (see App.jsx) rather than shown with placeholder
// colors — add real entries here once photos come in and it'll reappear.

export const categories = [
  {
    id: "reds",
    name: "Reds",
    swatchHex: "#C23B3B",
    collections: [],
  },
  {
    id: "pinks",
    name: "Pinks",
    swatchHex: "#E8949A",
    collections: [
      {
        id: "double-rhythm-bright-pink",
        brand: "Double Rhythm",
        name: "Bright Pink",
        colors: [
          { id: "double-rhythm-a1573", number: "A1573", image: "/images/colors/pinks/double-rhythm-bright-pink-a1573.jpg", swatchHex: "#A3606D" },
          { id: "double-rhythm-a1309", number: "A1309", image: "/images/colors/pinks/double-rhythm-bright-pink-a1309.jpg", swatchHex: "#AD8076" },
          { id: "double-rhythm-a1312", number: "A1312", image: "/images/colors/pinks/double-rhythm-bright-pink-a1312.jpg", swatchHex: "#7F4048" },
          { id: "double-rhythm-a1337", number: "A1337", image: "/images/colors/pinks/double-rhythm-bright-pink-a1337.jpg", swatchHex: "#B4717A" },
          { id: "double-rhythm-a1338", number: "A1338", image: "/images/colors/pinks/double-rhythm-bright-pink-a1338.jpg", swatchHex: "#553334" },
          { id: "double-rhythm-a1586", number: "A1586", image: "/images/colors/pinks/double-rhythm-bright-pink-a1586.jpg", swatchHex: "#AB9086" },
        ],
      },
      {
        id: "double-rhythm-nude-pink",
        brand: "Double Rhythm",
        name: "Nude Pink",
        colors: [
          { id: "double-rhythm-mc1019", number: "MC1019", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1019.jpg", swatchHex: "#A1A095" },
          { id: "double-rhythm-mc1020", number: "MC1020", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1020.jpg", swatchHex: "#989287" },
          { id: "double-rhythm-mc1021", number: "MC1021", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1021.jpg", swatchHex: "#9B9086" },
          { id: "double-rhythm-mc1022", number: "MC1022", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1022.jpg", swatchHex: "#A69991" },
          { id: "double-rhythm-mc1023", number: "MC1023", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1023.jpg", swatchHex: "#9D9188" },
          { id: "double-rhythm-mc1024", number: "MC1024", image: "/images/colors/pinks/double-rhythm-nude-pink-mc1024.jpg", swatchHex: "#A08681" },
        ],
      },
      {
        id: "dnd-sheer-collection-2023",
        brand: "DND",
        name: "Sheer Collection 2023",
        colors: [
          { id: "dnd-870", name: "Tea-Time", number: "870", image: "/images/colors/pinks/dnd-sheer-collection-2023-tea-time-870.jpg", swatchHex: "#8B6763" },
          { id: "dnd-872", name: "So Dam Fly", number: "872", image: "/images/colors/pinks/dnd-sheer-collection-2023-so-dam-fly-872.jpg", swatchHex: "#905D54" },
          { id: "dnd-865", name: "Pretty Pink", number: "865", image: "/images/colors/pinks/dnd-sheer-collection-2023-pretty-pink-865.jpg", swatchHex: "#B59792" },
          { id: "dnd-866", name: "Soft Tulips", number: "866", image: "/images/colors/pinks/dnd-sheer-collection-2023-soft-tulips-866.jpg", swatchHex: "#9A736B" },
          { id: "dnd-868", name: "Gossip Girl", number: "868", image: "/images/colors/pinks/dnd-sheer-collection-2023-gossip-girl-868.jpg", swatchHex: "#8A5856" },
          { id: "dnd-876", name: "Flower Girl", number: "876", image: "/images/colors/pinks/dnd-sheer-collection-2023-flower-girl-876.jpg", swatchHex: "#B494A0" },
          { id: "dnd-877", name: "Pink Glaze", number: "877", image: "/images/colors/pinks/dnd-sheer-collection-2023-pink-glaze-877.jpg", swatchHex: "#A49299" },
          { id: "dnd-878", name: "Picnic For 2", number: "878", image: "/images/colors/pinks/dnd-sheer-collection-2023-picnic-for-2-878.jpg", swatchHex: "#96746F" },
          { id: "dnd-880", name: "Take A Vow", number: "880", image: "/images/colors/pinks/dnd-sheer-collection-2023-take-a-vow-880.jpg", swatchHex: "#76504C" },
          { id: "dnd-881", name: "Dirty Dancer", number: "881", image: "/images/colors/pinks/dnd-sheer-collection-2023-dirty-dancer-881.jpg", swatchHex: "#986D61" },
          { id: "dnd-882", name: "Sheer In The City", number: "882", image: "/images/colors/pinks/dnd-sheer-collection-2023-sheer-in-the-city-882.jpg", swatchHex: "#986A65" },
          { id: "dnd-883", name: "Candy Kisses", number: "883", image: "/images/colors/pinks/dnd-sheer-collection-2023-candy-kisses-883.jpg", swatchHex: "#995C62" },
          { id: "dnd-885", name: "Rebel Rose", number: "885", image: "/images/colors/pinks/dnd-sheer-collection-2023-rebel-rose-885.jpg", swatchHex: "#9B5555" },
          { id: "dnd-889", name: "Satin Barbie", number: "889", image: "/images/colors/pinks/dnd-sheer-collection-2023-satin-barbie-889.jpg", swatchHex: "#824A49" },
          { id: "dnd-891", name: "Rosy Pink", number: "891", image: "/images/colors/pinks/dnd-sheer-collection-2023-rosy-pink-891.jpg", swatchHex: "#663A39" },
        ],
      },
    ],
  },
  {
    id: "nudes",
    name: "Nudes",
    swatchHex: "#D9C2A8",
    collections: [
      {
        id: "double-rhythm-ivory-by-cream",
        brand: "Double Rhythm",
        name: "Ivory By Cream",
        colors: [
          { id: "double-rhythm-a1347", number: "A1347", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1347.jpg", swatchHex: "#887C6C" },
          { id: "double-rhythm-a1547", number: "A1547", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1547.jpg", swatchHex: "#887262" },
          { id: "double-rhythm-a1593", number: "A1593", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1593.jpg", swatchHex: "#694D49" },
          { id: "double-rhythm-a1594", number: "A1594", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1594.jpg", swatchHex: "#ADA68F" },
          { id: "double-rhythm-a1595", number: "A1595", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1595.jpg", swatchHex: "#86765E" },
          { id: "double-rhythm-a1596", number: "A1596", image: "/images/colors/nudes/double-rhythm-ivory-by-cream-a1596.jpg", swatchHex: "#A99886" },
        ],
      },
      {
        id: "dnd-sheer-collection-2023",
        brand: "DND",
        name: "Sheer Collection 2023",
        colors: [
          { id: "dnd-869", name: "Sunset Belge", number: "869", image: "/images/colors/nudes/dnd-sheer-collection-2023-sunset-belge-869.jpg", swatchHex: "#A07D72" },
          { id: "dnd-871", name: "How Do U Neutral", number: "871", image: "/images/colors/nudes/dnd-sheer-collection-2023-how-do-u-neutral-871.jpg", swatchHex: "#917166" },
          { id: "dnd-873", name: "Inner Peace", number: "873", image: "/images/colors/nudes/dnd-sheer-collection-2023-inner-peace-873.jpg", swatchHex: "#886859" },
          { id: "dnd-857", name: "Sheer Nude", number: "857", image: "/images/colors/nudes/dnd-sheer-collection-2023-sheer-nude-857.jpg", swatchHex: "#B09384" },
          { id: "dnd-858", name: "Sandy Nude", number: "858", image: "/images/colors/nudes/dnd-sheer-collection-2023-sandy-nude-858.jpg", swatchHex: "#B7A297" },
          { id: "dnd-864", name: "Nude Descape", number: "864", image: "/images/colors/nudes/dnd-sheer-collection-2023-nude-descape-864.jpg", swatchHex: "#8A7D75" },
          { id: "dnd-867", name: "Perfect Nude", number: "867", image: "/images/colors/nudes/dnd-sheer-collection-2023-perfect-nude-867.jpg", swatchHex: "#917369" },
          { id: "dnd-879", name: "Sunset Suede", number: "879", image: "/images/colors/nudes/dnd-sheer-collection-2023-sunset-suede-879.jpg", swatchHex: "#82625C" },
        ],
      },
    ],
  },
  {
    id: "corals",
    name: "Corals",
    swatchHex: "#F2836B",
    collections: [
      {
        id: "dnd-sheer-collection-2023",
        brand: "DND",
        name: "Sheer Collection 2023",
        colors: [
          { id: "dnd-886", name: "Pray For Peach", number: "886", image: "/images/colors/corals/dnd-sheer-collection-2023-pray-for-peach-886.jpg", swatchHex: "#B27E72" },
          { id: "dnd-887", name: "Glass Peach", number: "887", image: "/images/colors/corals/dnd-sheer-collection-2023-glass-peach-887.jpg", swatchHex: "#895A4C" },
        ],
      },
    ],
  },
  {
    id: "berries",
    name: "Berries",
    swatchHex: "#8C5A82",
    collections: [
      {
        id: "double-rhythm-lavender-by-purple",
        brand: "Double Rhythm",
        name: "Lavender By Purple",
        colors: [
          { id: "double-rhythm-a1051", number: "A1051", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1051.jpg", swatchHex: "#6F7479" },
          { id: "double-rhythm-a1054", number: "A1054", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1054.jpg", swatchHex: "#AF9891" },
          { id: "double-rhythm-a1541", number: "A1541", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1541.jpg", swatchHex: "#A69D91" },
          { id: "double-rhythm-a1588", number: "A1588", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1588.jpg", swatchHex: "#8F8F8F" },
          { id: "double-rhythm-a1589", number: "A1589", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1589.jpg", swatchHex: "#7D7077" },
          { id: "double-rhythm-a1590", number: "A1590", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1590.jpg", swatchHex: "#4E514A" },
        ],
      },
      {
        id: "dnd-sheer-collection-2023",
        brand: "DND",
        name: "Sheer Collection 2023",
        colors: [
          { id: "dnd-874", name: "Loss Lavender", number: "874", image: "/images/colors/berries/dnd-sheer-collection-2023-loss-lavender-874.jpg", swatchHex: "#A48B95" },
          { id: "dnd-875", name: "California Dreamin'", number: "875", image: "/images/colors/berries/dnd-sheer-collection-2023-california-dreamin-875.jpg", swatchHex: "#A8929B" },
          { id: "dnd-890", name: "Romantic Lover", number: "890", image: "/images/colors/berries/dnd-sheer-collection-2023-romantic-lover-890.jpg", swatchHex: "#6A3131" },
          { id: "dnd-892", name: "Berry Groove", number: "892", image: "/images/colors/berries/dnd-sheer-collection-2023-berry-groove-892.jpg", swatchHex: "#62302F" },
        ],
      },
    ],
  },
  {
    id: "classics",
    name: "Classics",
    swatchHex: "#D8D2CB",
    collections: [
      {
        id: "dnd-sheer-collection-2023",
        brand: "DND",
        name: "Sheer Collection 2023",
        colors: [
          { id: "dnd-856", name: "Ivory Cream", number: "856", image: "/images/colors/classics/dnd-sheer-collection-2023-ivory-cream-856.jpg", swatchHex: "#A09986" },
          { id: "dnd-859", name: "Vintage Lace", number: "859", image: "/images/colors/classics/dnd-sheer-collection-2023-vintage-lace-859.jpg", swatchHex: "#B9AEA3" },
          { id: "dnd-860", name: "She's White? She's Pink?", number: "860", image: "/images/colors/classics/dnd-sheer-collection-2023-shes-white-shes-pink-860.jpg", swatchHex: "#B9AFAB" },
          { id: "dnd-861", name: "Tie The Knot", number: "861", image: "/images/colors/classics/dnd-sheer-collection-2023-tie-the-knot-861.jpg", swatchHex: "#B5B7B3" },
          { id: "dnd-862", name: "Pearly Ice", number: "862", image: "/images/colors/classics/dnd-sheer-collection-2023-pearly-ice-862.jpg", swatchHex: "#AFB2AD" },
          { id: "dnd-863", name: "Wedding Veil", number: "863", image: "/images/colors/classics/dnd-sheer-collection-2023-wedding-veil-863.jpg", swatchHex: "#B4B4AD" },
        ],
      },
    ],
  },
  {
    id: "greens",
    name: "Greens",
    swatchHex: "#8FD14F",
    collections: [],
  },
  {
    id: "thermal",
    name: "Thermal",
    swatchHex: "#8A6A70",
    collections: [
      {
        id: "double-rhythm-thermal-gel-color-change",
        brand: "Double Rhythm",
        name: "Thermal Gel Color Change",
        colors: [
          { id: "double-rhythm-a1690", number: "A1690", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1690.jpg", swatchHex: "#B06D6F" },
          { id: "double-rhythm-a1691", number: "A1691", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1691.jpg", swatchHex: "#91656E" },
          { id: "double-rhythm-a1692", number: "A1692", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1692.jpg", swatchHex: "#A58A90" },
          { id: "double-rhythm-a1693", number: "A1693", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1693.jpg", swatchHex: "#756871" },
          { id: "double-rhythm-a1694", number: "A1694", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1694.jpg", swatchHex: "#8A6A62" },
          { id: "double-rhythm-a1695", number: "A1695", image: "/images/colors/thermal/double-rhythm-thermal-gel-color-change-a1695.jpg", swatchHex: "#615551" },
        ],
      },
    ],
  },
];
