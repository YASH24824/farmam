/* ------------------------------------------------------------------ */
/*  FARMAM ORGANIC — Product catalogue data                            */
/*  ------------------------------------------------------------------ */
/*  To add a product in the future, append an object to this array —   */
/*  the products page, filters, search and enquiry flows adapt         */
/*  automatically.                                                     */
/* ------------------------------------------------------------------ */

export const products = [
  {
    id: "jeera",
    name: "Jeera",
    englishName: "Cumin Seeds",
    category: "Whole Spices",
    image: "/images/live/jeera.jpg",
    imageAlt: "Whole cumin seeds (jeera) in a wooden spoon",
    tagline: "The everyday tempering spice of Indian kitchens.",
    description:
      "A versatile Indian kitchen essential, valued for its distinctive aroma and flavour.",
    longDescription:
      "Jeera is one of the most-used whole spices in Indian cooking. A small pinch, sizzled in hot oil or gently roasted, releases a warm, earthy aroma that forms the base of countless everyday dishes, from dal tadka and jeera rice to sabzis, raita and buttermilk.",
    highlights: ["Distinctive warm aroma", "Whole, unground seeds", "Ideal for tempering and roasting"],
    kitchenNotes:
      "Bloom in hot ghee or oil for tadka, roast lightly and grind for fresh-flavoured masalas, or stir through rice for a classic jeera rice.",
    packaging: "1 kg pack",
    featured: true,
  },
  {
    id: "bajri-atta",
    name: "Bajri Atta",
    englishName: "Pearl Millet Flour",
    category: "Flours & Millets",
    image: "/images/live/bajri-atta.jpg",
    imageAlt: "Freshly milled millet flour in a sack and bowl",
    tagline: "A traditional millet flour, stone ground.",
    description:
      "A traditional millet flour for preparing rotis and other everyday Indian dishes.",
    longDescription:
      "Bajri (pearl millet) has been a staple of Indian households for generations, especially through the winter months. Milled from pearl millet grains, this flour is traditionally used for soft bajra rotis and rotlas, hearty khichdi, and warming porridges.",
    highlights: ["Milled from pearl millet", "For rotis, rotlas and khichdi", "A traditional winter favourite"],
    kitchenNotes:
      "Knead with warm water for a pliable dough, pat rotis by hand the traditional way, and serve hot with ghee, jaggery or kadhi.",
    packaging: "1 kg pack",
    featured: true,
  },
  {
    id: "bajra-whole",
    name: "Whole Bajra",
    englishName: "Pearl Millet",
    category: "Flours & Millets",
    image: "/images/live/bajra-whole.jpg",
    imageAlt: "Whole millet grains in a traditional clay pot",
    tagline: "Unpolished pearl millet grains.",
    description:
      "Whole pearl millet grains for traditional khichdi, porridge and home milling.",
    longDescription:
      "These unpolished pearl millet grains can be cooked whole into rustic khichdi and porridge, sprouted, or milled fresh at home. Millets have long been part of India's regional food traditions and are enjoying a welcome return to everyday plates.",
    highlights: ["Unpolished grains", "For khichdi, porridge and sprouting", "Can be milled at home"],
    kitchenNotes:
      "Soak before cooking for a softer texture, simmer into a one-pot khichdi with seasonal vegetables, or sprout for salads and bowls.",
    packaging: "1 kg pack",
    featured: false,
  },
  {
    id: "mung",
    name: "Mung",
    englishName: "Green Gram Whole",
    category: "Pulses & Dals",
    image: "/images/live/mung.jpg",
    imageAlt: "A bowl of whole green mung beans",
    tagline: "Whole green gram for comforting dals.",
    description:
      "Whole green gram for everyday dals, sprouts and comforting one-pot meals.",
    longDescription:
      "Sabut mung is a humble, everyday pulse in Indian kitchens. It cooks into a soothing dal, sprouts beautifully for salads and chaats, and forms the base of khichdi, the comfort food of countless Indian homes.",
    highlights: ["Whole, with skin on", "For dals, sprouts and khichdi", "Cooks soft and comforting"],
    kitchenNotes:
      "Soak for a few hours before boiling, pressure-cook with turmeric and salt for a simple dal, or sprout for a crunchy addition to bowls.",
    packaging: "1 kg pack",
    featured: false,
  },
  {
    id: "mung-dal",
    name: "Mung Dal",
    englishName: "Split Green Gram",
    category: "Pulses & Dals",
    image: "/images/live/mung-dal.jpg",
    imageAlt: "Split yellow mung dal close up",
    tagline: "Split green gram for light, everyday dals.",
    description:
      "Split green gram that cooks quickly into light, everyday dals and khichdi.",
    longDescription:
      "Dhuli mung dal is a light, easily digested dal that sits at the heart of simple Indian home food, from plain dal with a ghee tadka to soft khichdi on a quiet evening. It cooks quickly and pairs well with rice and roti alike.",
    highlights: ["Splits cook quickly", "For light dals and khichdi", "Everyday home staple"],
    kitchenNotes:
      "Rinse and simmer with turmeric, finish with a ghee-and-jeera tadka, and serve with steamed rice for the classic comfort plate.",
    packaging: "1 kg pack",
    featured: false,
  },
  {
    id: "mungafali",
    name: "Mungafali",
    englishName: "Groundnuts",
    category: "Nuts & Oilseeds",
    image: "/images/live/mungafali.jpg",
    imageAlt: "A heap of whole groundnuts (mungafali) on a wooden table",
    tagline: "Earthy groundnuts for snacking and cooking.",
    description:
      "Earthy groundnuts for roasting, chikkis, chutneys and everyday snacking.",
    longDescription:
      "Mungafali is as everyday as it gets: roasted with a sprinkle of salt, pounded into chutney, folded into chikki, or added to sabzis and poha for bite and body. A genuinely versatile pantry staple across India.",
    highlights: ["For roasting and chikki", "For chutneys and sabzis", "Everyday snacking staple"],
    kitchenNotes:
      "Roast lightly with skin on for snacking, grind with garlic and chilli for chutney, or melt into jaggery chikki for a winter treat.",
    packaging: "1 kg pack",
    featured: false,
  },
];

export const categories = [
  "All Products",
  ...Array.from(new Set(products.map((p) => p.category))),
];

/** Products highlighted on the home page. */
export const featuredProducts = products.filter((p) => p.featured);

export function getProduct(id) {
  return products.find((p) => p.id === id) ?? null;
}
