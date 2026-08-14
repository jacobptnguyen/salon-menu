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
//
// Category order follows a color wheel (Reds → Corals → Golds → Greens →
// Berries → Pinks, wrapping back toward Reds), then the two neutral
// buckets (Nudes, Classics), then the two effect-based categories
// (Thermal, Shimmer) last since they're grouped by finish, not hue.

export const categories = [
  {
    id: "reds",
    name: "Reds",
    swatchHex: "#C23B3B",
    collections: [
      {
        id: "chance-by-cre8tion-hello-autumn",
        brand: "CHANCE by Cre8tion",
        name: "HELLO AUTUMN",
        colors: [
          { id: "cbc-hello-autumn-190", number: "190", image: "/images/colors/reds/chance-by-cre8tion-hello-autumn-190.jpg", swatchHex: "#802F25" },
          { id: "cbc-hello-autumn-191", number: "191", image: "/images/colors/reds/chance-by-cre8tion-hello-autumn-191.jpg", swatchHex: "#853425" },
          { id: "cbc-hello-autumn-192", number: "192", image: "/images/colors/reds/chance-by-cre8tion-hello-autumn-192.jpg", swatchHex: "#6B2620" },
          { id: "cbc-hello-autumn-197", number: "197", image: "/images/colors/reds/chance-by-cre8tion-hello-autumn-197.jpg", swatchHex: "#882F28" },
          { id: "cbc-hello-autumn-196", number: "196", image: "/images/colors/reds/chance-by-cre8tion-hello-autumn-196.jpg", swatchHex: "#A94C47" },
          { id: "cbc-hello-autumn-324", number: "324", image: "/images/colors/reds/chance-by-cre8tion-hello-autumn-324.jpg", swatchHex: "#3E150C" },
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
        id: "chance-by-cre8tion-hello-autumn",
        brand: "CHANCE by Cre8tion",
        name: "HELLO AUTUMN",
        colors: [
          { id: "cbc-hello-autumn-181", number: "181", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-181.jpg", swatchHex: "#BF4E3D" },
          { id: "cbc-hello-autumn-182", number: "182", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-182.jpg", swatchHex: "#A74E35" },
          { id: "cbc-hello-autumn-186", number: "186", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-186.jpg", swatchHex: "#CF573B" },
          { id: "cbc-hello-autumn-187", number: "187", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-187.jpg", swatchHex: "#D0583E" },
          { id: "cbc-hello-autumn-188", number: "188", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-188.jpg", swatchHex: "#C67F57" },
          { id: "cbc-hello-autumn-198", number: "198", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-198.jpg", swatchHex: "#92392D" },
          { id: "cbc-hello-autumn-301", number: "301", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-301.jpg", swatchHex: "#E4966D" },
          { id: "cbc-hello-autumn-302", number: "302", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-302.jpg", swatchHex: "#A86543" },
          { id: "cbc-hello-autumn-303", number: "303", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-303.jpg", swatchHex: "#AD5533" },
          { id: "cbc-hello-autumn-319", number: "319", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-319.jpg", swatchHex: "#9F5838" },
          { id: "cbc-hello-autumn-322", number: "322", image: "/images/colors/corals/chance-by-cre8tion-hello-autumn-322.jpg", swatchHex: "#885528" },
        ],
      },
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
    id: "golds",
    name: "Golds",
    swatchHex: "#CB9D4A",
    collections: [
      {
        id: "chance-by-cre8tion-hello-autumn",
        brand: "CHANCE by Cre8tion",
        name: "HELLO AUTUMN",
        colors: [
          { id: "cbc-hello-autumn-184", number: "184", image: "/images/colors/golds/chance-by-cre8tion-hello-autumn-184.jpg", swatchHex: "#CB9D4A" },
          { id: "cbc-hello-autumn-185", number: "185", image: "/images/colors/golds/chance-by-cre8tion-hello-autumn-185.jpg", swatchHex: "#D1A842" },
        ],
      },
    ],
  },
  {
    id: "greens",
    name: "Greens",
    swatchHex: "#6B542B",
    collections: [
      {
        id: "chance-by-cre8tion-hello-autumn",
        brand: "CHANCE by Cre8tion",
        name: "HELLO AUTUMN",
        colors: [
          { id: "cbc-hello-autumn-320", number: "320", image: "/images/colors/greens/chance-by-cre8tion-hello-autumn-320.jpg", swatchHex: "#6B542B" },
          { id: "cbc-hello-autumn-321", number: "321", image: "/images/colors/greens/chance-by-cre8tion-hello-autumn-321.jpg", swatchHex: "#5B4A26" },
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
        id: "chance-by-cre8tion-hello-autumn",
        brand: "CHANCE by Cre8tion",
        name: "HELLO AUTUMN",
        colors: [
          { id: "cbc-hello-autumn-127", number: "127", image: "/images/colors/berries/chance-by-cre8tion-hello-autumn-127.jpg", swatchHex: "#65231C" },
          { id: "cbc-hello-autumn-193", number: "193", image: "/images/colors/berries/chance-by-cre8tion-hello-autumn-193.jpg", swatchHex: "#3C1C17" },
          { id: "cbc-hello-autumn-194", number: "194", image: "/images/colors/berries/chance-by-cre8tion-hello-autumn-194.jpg", swatchHex: "#54302B" },
          { id: "cbc-hello-autumn-235", number: "235", image: "/images/colors/berries/chance-by-cre8tion-hello-autumn-235.jpg", swatchHex: "#753C34" },
          { id: "cbc-hello-autumn-312", number: "312", image: "/images/colors/berries/chance-by-cre8tion-hello-autumn-312.jpg", swatchHex: "#362D29" },
          { id: "cbc-hello-autumn-323", number: "323", image: "/images/colors/berries/chance-by-cre8tion-hello-autumn-323.jpg", swatchHex: "#361D14" },
        ],
      },
      {
        id: "double-rhythm-lavender-by-purple",
        brand: "Double Rhythm",
        name: "Lavender By Purple",
        colors: [
          { id: "double-rhythm-a1051", number: "A1051", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1051.jpg", swatchHex: "#6F7479" },
          { id: "double-rhythm-a1054", number: "A1054", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1054.jpg", swatchHex: "#AF9891" },
          { id: "double-rhythm-a1541", number: "A1541", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1541.jpg", swatchHex: "#A69D91" },
          { id: "double-rhythm-a1586", number: "A1586", image: "/images/colors/berries/double-rhythm-lavender-by-purple-a1586.jpg", swatchHex: "#73627F" },
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
        id: "chance-by-cre8tion-hello-autumn",
        brand: "CHANCE by Cre8tion",
        name: "HELLO AUTUMN",
        colors: [
          { id: "cbc-hello-autumn-183", number: "183", image: "/images/colors/nudes/chance-by-cre8tion-hello-autumn-183.jpg", swatchHex: "#6D5A43" },
          { id: "cbc-hello-autumn-189", number: "189", image: "/images/colors/nudes/chance-by-cre8tion-hello-autumn-189.jpg", swatchHex: "#7F4937" },
          { id: "cbc-hello-autumn-195", number: "195", image: "/images/colors/nudes/chance-by-cre8tion-hello-autumn-195.jpg", swatchHex: "#8E4435" },
          { id: "cbc-hello-autumn-214", number: "214", image: "/images/colors/nudes/chance-by-cre8tion-hello-autumn-214.jpg", swatchHex: "#594E48" },
          { id: "cbc-hello-autumn-215", number: "215", image: "/images/colors/nudes/chance-by-cre8tion-hello-autumn-215.jpg", swatchHex: "#785C54" },
          { id: "cbc-hello-autumn-216", number: "216", image: "/images/colors/nudes/chance-by-cre8tion-hello-autumn-216.jpg", swatchHex: "#6F5948" },
          { id: "cbc-hello-autumn-304", number: "304", image: "/images/colors/nudes/chance-by-cre8tion-hello-autumn-304.jpg", swatchHex: "#884836" },
          { id: "cbc-hello-autumn-305", number: "305", image: "/images/colors/nudes/chance-by-cre8tion-hello-autumn-305.jpg", swatchHex: "#613D30" },
          { id: "cbc-hello-autumn-306", number: "306", image: "/images/colors/nudes/chance-by-cre8tion-hello-autumn-306.jpg", swatchHex: "#65372B" },
        ],
      },
      {
        id: "double-rhythm-nude-pink",
        brand: "Double Rhythm",
        name: "Nude Pink",
        colors: [
          { id: "double-rhythm-mc1019", number: "MC1019", image: "/images/colors/nudes/double-rhythm-nude-pink-mc1019.jpg", swatchHex: "#A1A095" },
          { id: "double-rhythm-mc1020", number: "MC1020", image: "/images/colors/nudes/double-rhythm-nude-pink-mc1020.jpg", swatchHex: "#989287" },
          { id: "double-rhythm-mc1021", number: "MC1021", image: "/images/colors/nudes/double-rhythm-nude-pink-mc1021.jpg", swatchHex: "#9B9086" },
          { id: "double-rhythm-mc1022", number: "MC1022", image: "/images/colors/nudes/double-rhythm-nude-pink-mc1022.jpg", swatchHex: "#A69991" },
          { id: "double-rhythm-mc1023", number: "MC1023", image: "/images/colors/nudes/double-rhythm-nude-pink-mc1023.jpg", swatchHex: "#9D9188" },
          { id: "double-rhythm-mc1024", number: "MC1024", image: "/images/colors/nudes/double-rhythm-nude-pink-mc1024.jpg", swatchHex: "#A08681" },
        ],
      },
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
  {
    id: "shimmer",
    name: "Shimmer",
    swatchHex: "#8A7A4D",
    collections: [
      {
        id: "dm-gold-cat-eye",
        brand: "DM",
        name: "GOLD CAT EYE",
        colors: [
          { id: "dm-01", number: "01", image: "/images/colors/shimmer/dm-gold-cat-eye-01.jpg", swatchHex: "#78786C" },
          { id: "dm-02", number: "02", image: "/images/colors/shimmer/dm-gold-cat-eye-02.jpg", swatchHex: "#78685D" },
          { id: "dm-03", number: "03", image: "/images/colors/shimmer/dm-gold-cat-eye-03.jpg", swatchHex: "#716C4B" },
          { id: "dm-04", number: "04", image: "/images/colors/shimmer/dm-gold-cat-eye-04.jpg", swatchHex: "#745C4C" },
          { id: "dm-05", number: "05", image: "/images/colors/shimmer/dm-gold-cat-eye-05.jpg", swatchHex: "#706251" },
          { id: "dm-06", number: "06", image: "/images/colors/shimmer/dm-gold-cat-eye-06.jpg", swatchHex: "#8A7A4D" },
          { id: "dm-07", number: "07", image: "/images/colors/shimmer/dm-gold-cat-eye-07.jpg", swatchHex: "#6E4F43" },
          { id: "dm-08", number: "08", image: "/images/colors/shimmer/dm-gold-cat-eye-08.jpg", swatchHex: "#614737" },
          { id: "dm-09", number: "09", image: "/images/colors/shimmer/dm-gold-cat-eye-09.jpg", swatchHex: "#484A40" },
          { id: "dm-10", number: "10", image: "/images/colors/shimmer/dm-gold-cat-eye-10.jpg", swatchHex: "#4A3637" },
          { id: "dm-11", number: "11", image: "/images/colors/shimmer/dm-gold-cat-eye-11.jpg", swatchHex: "#3F3638" },
          { id: "dm-12", number: "12", image: "/images/colors/shimmer/dm-gold-cat-eye-12.jpg", swatchHex: "#483535" },
          { id: "dm-13", number: "13", image: "/images/colors/shimmer/dm-gold-cat-eye-13.jpg", swatchHex: "#4A413E" },
          { id: "dm-14", number: "14", image: "/images/colors/shimmer/dm-gold-cat-eye-14.jpg", swatchHex: "#3B3232" },
          { id: "dm-15", number: "15", image: "/images/colors/shimmer/dm-gold-cat-eye-15.jpg", swatchHex: "#4F3535" },
          { id: "dm-16", number: "16", image: "/images/colors/shimmer/dm-gold-cat-eye-16.jpg", swatchHex: "#5B3234" },
          { id: "dm-17", number: "17", image: "/images/colors/shimmer/dm-gold-cat-eye-17.jpg", swatchHex: "#63423E" },
          { id: "dm-18", number: "18", image: "/images/colors/shimmer/dm-gold-cat-eye-18.jpg", swatchHex: "#543D3D" },
          { id: "dm-19", number: "19", image: "/images/colors/shimmer/dm-gold-cat-eye-19.jpg", swatchHex: "#563035" },
          { id: "dm-20", number: "20", image: "/images/colors/shimmer/dm-gold-cat-eye-20.jpg", swatchHex: "#513032" },
          { id: "dm-21", number: "21", image: "/images/colors/shimmer/dm-gold-cat-eye-21.jpg", swatchHex: "#6C4645" },
          { id: "dm-22", number: "22", image: "/images/colors/shimmer/dm-gold-cat-eye-22.jpg", swatchHex: "#603E3E" },
          { id: "dm-23", number: "23", image: "/images/colors/shimmer/dm-gold-cat-eye-23.jpg", swatchHex: "#9C544B" },
          { id: "dm-24", number: "24", image: "/images/colors/shimmer/dm-gold-cat-eye-24.jpg", swatchHex: "#7F514C" },
        ],
      },
    ],
  },
];
