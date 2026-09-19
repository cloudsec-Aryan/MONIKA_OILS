import type { Product } from "@/types";

const shippingCopy =
  "Delivery timelines and charges will be confirmed when the order and logistics system is connected. This preview uses sample shipping notes for the storefront.";

export const products: Product[] = [
  {
    id: "kachi-ghani",
    name: "Monika Kachi Ghani Mustard Oil",
    slug: "kachi-ghani-mustard-oil",
    category: "mustard",
    productType: "kachi-ghani",
    shortDescription: "Slow-pressed mustard oil with a bold kitchen aroma.",
    description:
      "Monika Kachi Ghani Mustard Oil is pressed from selected mustard seeds to keep the oil’s natural pungency and deep golden colour. It is made for everyday tadka, pickles, and family recipes that need a true mustard character.",
    image: "/images/product-kachi-ghani.png",
    gallery: [
      "/images/product-kachi-ghani.png",
      "/images/mustard-seeds.png",
      "/images/mustard-flowers.png",
      "/images/oil-extraction.png",
    ],
    rating: 4.8,
    reviews: 214,
    variants: [
      { weight: "500ml", price: 149, mrp: 179, discount: 17 },
      { weight: "1L", price: 249, mrp: 299, discount: 17 },
      { weight: "2L", price: 479, mrp: 579, discount: 17 },
      { weight: "5L", price: 1149, mrp: 1399, discount: 18 },
    ],
    highlights: [
      "Pressed from carefully graded mustard seeds",
      "Retains a strong, traditional mustard aroma",
      "Packed to stay fresh from mill to kitchen",
      "Available in family-friendly pack sizes",
    ],
    ingredients: "Mustard oil (from mustard seeds).",
    howToUse:
      "Use for tadka, sautéing, pickling, and traditional North and East Indian recipes. Heat gently until the oil’s aroma opens, then add spices or vegetables.",
    storage:
      "Keep the bottle tightly closed, away from direct sunlight and strong heat. Store in a cool, dry kitchen cupboard.",
    information:
      "A kachi ghani style oil is typically extracted with slower, traditional pressing so more of the seed’s natural aroma remains in the bottle. Colour and pungency can vary slightly by seed lot.",
    shipping: shippingCopy,
    featured: true,
    bestseller: true,
    popular: 98,
  },
  {
    id: "pure-mustard",
    name: "Monika Pure Mustard Oil",
    slug: "pure-mustard-oil",
    category: "mustard",
    productType: "pure",
    shortDescription: "Everyday mustard oil for daily Indian cooking.",
    description:
      "Monika Pure Mustard Oil is a dependable kitchen staple with a clean mustard profile. It is suited to sabzi, paratha, and everyday frying where you want authentic flavour without extra fuss.",
    image: "/images/product-pure-mustard.png",
    gallery: [
      "/images/product-pure-mustard.png",
      "/images/food-sabzi.png",
      "/images/mustard-seeds.png",
      "/images/indian-kitchen.png",
    ],
    rating: 4.7,
    reviews: 186,
    variants: [
      { weight: "500ml", price: 139, mrp: 169, discount: 18 },
      { weight: "1L", price: 229, mrp: 279, discount: 18 },
      { weight: "2L", price: 439, mrp: 539, discount: 19 },
      { weight: "5L", price: 1049, mrp: 1299, discount: 19 },
    ],
    highlights: [
      "Balanced mustard flavour for daily meals",
      "Smooth pour for tadka and shallow frying",
      "Hygienically packed bottles",
      "Value packs for larger households",
    ],
    ingredients: "Mustard oil (from mustard seeds).",
    howToUse:
      "Ideal for everyday vegetables, lentils, parathas, and light frying. A small amount is enough to season a whole kadhai of sabzi.",
    storage:
      "Store sealed, in a cool place. Wipe the bottle neck after use to keep the cap clean.",
    information:
      "Pure mustard oil is a classic Indian cooking oil chosen for its distinctive aroma. Always use as an edible cooking oil according to your usual kitchen practice.",
    shipping: shippingCopy,
    featured: true,
    bestseller: true,
    popular: 92,
  },
  {
    id: "premium-mustard",
    name: "Monika Premium Mustard Oil",
    slug: "premium-mustard-oil",
    category: "mustard",
    productType: "premium",
    shortDescription: "A richer pour for festive and weekend cooking.",
    description:
      "Monika Premium Mustard Oil is selected for a fuller aroma and a polished golden finish. Use it when you want mustard oil to stand out in pickles, fish curry, or a special family meal.",
    image: "/images/product-premium.png",
    gallery: [
      "/images/product-premium.png",
      "/images/food-fish-curry.png",
      "/images/mustard-field.png",
      "/images/hero-bottle.png",
    ],
    rating: 4.9,
    reviews: 128,
    variants: [
      { weight: "500ml", price: 179, mrp: 219, discount: 18 },
      { weight: "1L", price: 299, mrp: 359, discount: 17 },
      { weight: "2L", price: 569, mrp: 689, discount: 17 },
      { weight: "5L", price: 1349, mrp: 1649, discount: 18 },
    ],
    highlights: [
      "Fuller aroma for special recipes",
      "Deep golden colour in the bottle",
      "Selected seed lots, carefully processed",
      "Makes a thoughtful kitchen gift",
    ],
    ingredients: "Mustard oil (from mustard seeds).",
    howToUse:
      "Best for mustard-forward dishes such as fish curry, kasundi-style preparations, winter pickles, and festive thalis.",
    storage:
      "Keep away from sunlight. Once opened, use within a reasonable kitchen period and recap after every pour.",
    information:
      "Premium on this range refers to seed selection, aroma, and presentation. It is still an everyday edible oil, not a medicinal product.",
    shipping: shippingCopy,
    featured: true,
    newest: true,
    popular: 80,
  },
  {
    id: "cold-pressed",
    name: "Monika Cold Pressed Mustard Oil",
    slug: "cold-pressed-mustard-oil",
    category: "mustard",
    productType: "cold-pressed",
    shortDescription: "Gently extracted to keep the seed’s natural character.",
    description:
      "Monika Cold Pressed Mustard Oil is extracted with care so more of the seed’s natural taste stays in the oil. It is a good choice for salads of the Indian kind, finishing a dal, or slow cooking at home.",
    image: "/images/product-cold-pressed.png",
    gallery: [
      "/images/product-cold-pressed.png",
      "/images/oil-extraction.png",
      "/images/mustard-seeds.png",
      "/images/mustard-flowers.png",
    ],
    rating: 4.8,
    reviews: 97,
    variants: [
      { weight: "500ml", price: 199, mrp: 249, discount: 20 },
      { weight: "1L", price: 349, mrp: 429, discount: 19 },
      { weight: "2L", price: 669, mrp: 829, discount: 19 },
      { weight: "5L", price: 1599, mrp: 1999, discount: 20 },
    ],
    highlights: [
      "Gentle extraction for seed-forward taste",
      "Noticeable natural mustard aroma",
      "Suits both cooking and finishing dishes",
      "Packed soon after processing",
    ],
    ingredients: "Cold pressed mustard oil (from mustard seeds).",
    howToUse:
      "Use for tempering, light sautéing, or a finishing drizzle on cooked vegetables. Avoid overheating if you want the aroma to stay lively.",
    storage:
      "Store in a cool cupboard. Natural oils may look slightly cloudy in cooler weather; this usually clears at room temperature.",
    information:
      "Cold pressed describes a gentler extraction style. Appearance can vary with season and seed moisture.",
    shipping: shippingCopy,
    featured: true,
    newest: true,
    popular: 74,
  },
  {
    id: "filtered-mustard",
    name: "Monika Filtered Mustard Oil",
    slug: "filtered-mustard-oil",
    category: "mustard",
    productType: "filtered",
    shortDescription: "A clearer pour with familiar mustard flavour.",
    description:
      "Monika Filtered Mustard Oil is processed and filtered for a cleaner look in the bottle while keeping a recognisable mustard taste. It works well for everyday frying and mixed-vegetable cooking.",
    image: "/images/product-filtered.png",
    gallery: [
      "/images/product-filtered.png",
      "/images/food-pakora.png",
      "/images/indian-kitchen.png",
      "/images/product-pure-mustard.png",
    ],
    rating: 4.6,
    reviews: 81,
    variants: [
      { weight: "500ml", price: 135, mrp: 165, discount: 18 },
      { weight: "1L", price: 219, mrp: 269, discount: 19 },
      { weight: "2L", price: 419, mrp: 519, discount: 19 },
      { weight: "5L", price: 999, mrp: 1249, discount: 20 },
    ],
    highlights: [
      "Filtered for a clearer bottle",
      "Familiar mustard cooking flavour",
      "Handy for snacks and daily sabzi",
      "Practical family pack sizes",
    ],
    ingredients: "Filtered mustard oil (from mustard seeds).",
    howToUse:
      "Suitable for pakora, shallow frying, and weekday meals. Heat the oil, add spices, then cook as usual.",
    storage:
      "Keep capped and away from the stove’s direct flame when not in use.",
    information:
      "Filtering improves visual clarity. Flavour remains mustard-forward compared with neutral refined oils.",
    shipping: shippingCopy,
    popular: 61,
  },
  {
    id: "yellow-mustard",
    name: "Monika Yellow Mustard Oil",
    slug: "yellow-mustard-oil",
    category: "mustard",
    productType: "pure",
    shortDescription: "A milder mustard profile from yellow mustard seeds.",
    description:
      "Monika Yellow Mustard Oil is pressed from yellow mustard seeds for a slightly gentler aroma. Households that prefer a softer mustard note in daily cooking often keep this bottle on the counter.",
    image: "/images/product-yellow-mustard.png",
    gallery: [
      "/images/product-yellow-mustard.png",
      "/images/mustard-flowers.png",
      "/images/mustard-field.png",
      "/images/food-paratha.png",
    ],
    rating: 4.5,
    reviews: 64,
    variants: [
      { weight: "500ml", price: 155, mrp: 189, discount: 18 },
      { weight: "1L", price: 259, mrp: 319, discount: 19 },
      { weight: "2L", price: 499, mrp: 609, discount: 18 },
      { weight: "5L", price: 1199, mrp: 1479, discount: 19 },
    ],
    highlights: [
      "Made from yellow mustard seeds",
      "Softer aroma than classic kachi ghani",
      "Good for mixed family palates",
      "Warm golden colour",
    ],
    ingredients: "Mustard oil (from yellow mustard seeds).",
    howToUse:
      "Use in parathas, light sabzis, and recipes where you want mustard flavour without a very sharp pungency.",
    storage: "Store sealed, cool, and dry. Shake gently if natural sediment appears.",
    information:
      "Yellow mustard seeds typically yield a milder kitchen aroma than darker mustard seed lots.",
    shipping: shippingCopy,
    newest: true,
    popular: 55,
  },
  {
    id: "groundnut",
    name: "Monika Groundnut Oil",
    slug: "groundnut-oil",
    category: "groundnut",
    productType: "pure",
    shortDescription: "Nutty, versatile oil for frying and everyday meals.",
    description:
      "Monika Groundnut Oil is extracted from selected groundnut kernels for a light nutty taste and a comfortable cooking style. It is a natural partner to mustard oil in a well-stocked Indian kitchen.",
    image: "/images/product-groundnut.png",
    gallery: [
      "/images/product-groundnut.png",
      "/images/food-pakora.png",
      "/images/indian-kitchen.png",
      "/images/food-sabzi.png",
    ],
    rating: 4.7,
    reviews: 109,
    variants: [
      { weight: "500ml", price: 169, mrp: 199, discount: 15 },
      { weight: "1L", price: 279, mrp: 339, discount: 18 },
      { weight: "2L", price: 529, mrp: 649, discount: 18 },
      { weight: "5L", price: 1249, mrp: 1549, discount: 19 },
    ],
    highlights: [
      "Gentle nutty flavour",
      "Useful for frying and sautéing",
      "Complements mustard oil in the pantry",
      "Clear golden appearance",
    ],
    ingredients: "Groundnut oil (from groundnuts).",
    howToUse:
      "Use for snacks, shallow frying, and recipes that benefit from a milder oil. Not a substitute for mustard flavour in pickles.",
    storage: "Keep away from heat and light. Recap after each use.",
    information:
      "Groundnut oil is a popular Indian cooking oil. Households with groundnut allergies should choose another product.",
    shipping: shippingCopy,
    featured: true,
    popular: 70,
  },
  {
    id: "sesame",
    name: "Monika Sesame Oil",
    slug: "sesame-oil",
    category: "sesame",
    productType: "pure",
    shortDescription: "Aromatic sesame oil for tempering and regional recipes.",
    description:
      "Monika Sesame Oil is pressed from quality sesame seeds for a warm, nutty aroma. A spoonful is often enough for South Indian tempering, chutneys, and festive sweets that call for sesame character.",
    image: "/images/product-sesame.png",
    gallery: [
      "/images/product-sesame.png",
      "/images/indian-kitchen.png",
      "/images/mustard-seeds.png",
      "/images/food-pickle.png",
    ],
    rating: 4.6,
    reviews: 72,
    variants: [
      { weight: "500ml", price: 219, mrp: 269, discount: 19 },
      { weight: "1L", price: 399, mrp: 489, discount: 18 },
      { weight: "2L", price: 759, mrp: 939, discount: 19 },
      { weight: "5L", price: 1799, mrp: 2199, discount: 18 },
    ],
    highlights: [
      "Distinct sesame aroma",
      "Excellent for tempering",
      "Small quantities go a long way",
      "Hygienically bottled",
    ],
    ingredients: "Sesame oil (from sesame seeds).",
    howToUse:
      "Add at the start of tempering or as a finishing oil in regional recipes. Combine with mustard oil only when a recipe asks for both.",
    storage: "Store cool and dark. Natural aroma is strongest when the bottle is fresh.",
    information:
      "Sesame oil has a characteristic flavour. Colour may range from golden to deeper amber depending on the seed.",
    shipping: shippingCopy,
    popular: 58,
  },
  {
    id: "kitchen-combo",
    name: "Monika Kitchen Combo",
    slug: "kitchen-combo",
    category: "combo",
    productType: "combo",
    shortDescription: "Mustard oil plus groundnut oil for a complete pantry.",
    description:
      "The Monika Kitchen Combo pairs our mustard oil with groundnut oil so you can cook tadka-heavy meals and snack frying from one crate. A practical set for new kitchens and festival stocking.",
    image: "/images/product-combo.png",
    gallery: [
      "/images/product-combo.png",
      "/images/product-kachi-ghani.png",
      "/images/product-groundnut.png",
      "/images/indian-kitchen.png",
    ],
    rating: 4.8,
    reviews: 54,
    variants: [
      { weight: "1L + 1L", price: 499, mrp: 638, discount: 22 },
      { weight: "2L + 2L", price: 949, mrp: 1228, discount: 23 },
    ],
    highlights: [
      "Two kitchen oils in one order",
      "Better value than buying bottles separately",
      "Covers tadka and frying needs",
      "Easy gift for a new home",
    ],
    ingredients: "Mustard oil; groundnut oil. See individual bottles for details.",
    howToUse:
      "Keep mustard oil for traditional tempering and pickles. Use groundnut oil for snacks and milder cooking.",
    storage: "Store both bottles upright, capped, and away from sunlight.",
    information:
      "Combo contents are packed together for convenience. Exact bottle artwork may vary by batch.",
    shipping: shippingCopy,
    featured: true,
    bestseller: true,
    popular: 88,
  },
  {
    id: "family-pack",
    name: "Monika Family Value Pack",
    slug: "family-value-pack",
    category: "combo",
    productType: "combo",
    shortDescription: "A larger mustard oil pack for busy family kitchens.",
    description:
      "The Monika Family Value Pack is built for households that cook every day. A generous mustard oil tin-and-bottle pairing keeps tadka, sabzi, and weekend frying stocked for longer.",
    image: "/images/product-family-pack.png",
    gallery: [
      "/images/product-family-pack.png",
      "/images/product-premium.png",
      "/images/food-sabzi.png",
      "/images/indian-kitchen.png",
    ],
    rating: 4.7,
    reviews: 91,
    variants: [
      { weight: "5L", price: 1099, mrp: 1399, discount: 21 },
      { weight: "5L + 1L", price: 1299, mrp: 1698, discount: 23 },
    ],
    highlights: [
      "Designed for daily family cooking",
      "Lower per-litre price",
      "Mustard oil at the centre of the kitchen",
      "Limited-time combo saving",
    ],
    ingredients: "Mustard oil (from mustard seeds).",
    howToUse:
      "Decant from the larger pack into a smaller bottle for the stove-side, and keep the main pack sealed.",
    storage: "Store the large pack in a cool, dry place. Avoid leaving it near the flame.",
    information:
      "Family packs are intended for household use. Institutional or bulk supply can be discussed on the contact page.",
    shipping: shippingCopy,
    featured: true,
    bestseller: true,
    popular: 85,
  },
  {
    id: "value-bottles",
    name: "Monika Mustard Oil Value Pack",
    slug: "mustard-oil-value-pack",
    category: "combo",
    productType: "combo",
    shortDescription: "Multiple mustard oil bottles for gifting or stocking up.",
    description:
      "A set of Monika mustard oil bottles for families who like a spare in the pantry, or for sharing across two kitchens. The value pack is priced below buying each bottle on its own.",
    image: "/images/product-value-pack.png",
    gallery: [
      "/images/product-value-pack.png",
      "/images/product-kachi-ghani.png",
      "/images/product-pure-mustard.png",
      "/images/mustard-field.png",
    ],
    rating: 4.6,
    reviews: 47,
    variants: [
      { weight: "3 x 1L", price: 699, mrp: 897, discount: 22 },
      { weight: "4 x 1L", price: 899, mrp: 1196, discount: 25 },
    ],
    highlights: [
      "Multi-bottle saving",
      "Useful as a household gift",
      "Same trusted mustard oil in every bottle",
      "Easy to split between kitchens",
    ],
    ingredients: "Mustard oil (from mustard seeds).",
    howToUse: "Open one bottle at a time and keep the rest sealed until needed.",
    storage: "Store upright in a cupboard, away from sunlight.",
    information: "Bottle count is listed on the selected pack size.",
    shipping: shippingCopy,
    newest: true,
    popular: 66,
  },
  {
    id: "cooking-combo",
    name: "Monika Cooking Oil Combo",
    slug: "cooking-oil-combo",
    category: "combo",
    productType: "combo",
    shortDescription: "Mustard, groundnut, and sesame oils in one set.",
    description:
      "The Monika Cooking Oil Combo brings three seed oils together: mustard for authentic tadka, groundnut for frying, and sesame for tempering. It is a compact way to taste the wider Monika kitchen range.",
    image: "/images/product-combo.png",
    gallery: [
      "/images/product-combo.png",
      "/images/product-sesame.png",
      "/images/product-groundnut.png",
      "/images/food-pickle.png",
    ],
    rating: 4.9,
    reviews: 38,
    variants: [
      { weight: "3 x 500ml", price: 529, mrp: 687, discount: 23 },
      { weight: "3 x 1L", price: 849, mrp: 1127, discount: 25 },
    ],
    highlights: [
      "Three oils, one checkout",
      "Discover the wider Monika range",
      "Attractive combo pricing",
      "Handy for festive gifting",
    ],
    ingredients: "Mustard oil; groundnut oil; sesame oil.",
    howToUse:
      "Match each oil to the recipe: mustard for pungency, groundnut for snacks, sesame for aromatic tempering.",
    storage: "Keep all bottles capped and cool.",
    information: "Combo savings are applied on the set price, not on individual list prices at checkout.",
    shipping: shippingCopy,
    featured: true,
    newest: true,
    popular: 77,
  },
];

export const categories = [
  { value: "mustard", label: "Mustard Oil" },
  { value: "groundnut", label: "Groundnut Oil" },
  { value: "sesame", label: "Sesame Oil" },
  { value: "combo", label: "Combos & Packs" },
] as const;

export const productTypes = [
  { value: "kachi-ghani", label: "Kachi Ghani" },
  { value: "pure", label: "Pure" },
  { value: "premium", label: "Premium" },
  { value: "cold-pressed", label: "Cold Pressed" },
  { value: "filtered", label: "Filtered" },
  { value: "combo", label: "Combo" },
] as const;

export const weights = ["500ml", "1L", "2L", "5L", "1L + 1L", "3 x 1L"] as const;
