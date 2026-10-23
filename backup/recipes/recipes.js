/* ------------------------------------------------------------------ */
/*  FARMAM ORGANIC — Recipes data                                      */
/* ------------------------------------------------------------------ */

export const recipes = [
  {
    id: "jeera-rice",
    title: "Jeera Rice",
    image: "/images/recipes/jeera-rice.jpg",
    imageAlt: "Jeera rice: cumin rice with fresh coriander",
    intro:
      "Fragrant basmati rice tossed with sizzled cumin and ghee. The simplest way to turn plain rice into something special.",
    time: "25 minutes",
    difficulty: "Easy",
    serves: "3–4",
    ingredients: [
      "1 cup basmati rice, rinsed and soaked for 20 minutes",
      "1½ tablespoons ghee",
      "1 teaspoon FARMAM ORGANIC Jeera (cumin seeds)",
      "1 bay leaf (optional)",
      "2 cups hot water",
      "Salt, to taste",
      "Fresh coriander, chopped, to garnish",
    ],
    steps: [
      "Drain the soaked rice and set aside.",
      "Heat ghee in a heavy-bottomed pot over medium heat. Add the cumin seeds and bay leaf and let them sizzle for a few seconds until fragrant. Take care not to burn them.",
      "Add the drained rice and gently stir for 1–2 minutes so each grain is coated in the ghee.",
      "Pour in the hot water, add salt, and bring to a boil.",
      "Reduce the heat to low, cover, and cook for 8–10 minutes until the water is absorbed and the rice is tender.",
      "Rest covered for 5 minutes, fluff gently with a fork, garnish with coriander, and serve warm.",
    ],
  },
  {
    id: "jeera-aloo",
    title: "Jeera Aloo",
    image: "/images/recipes/jeera-aloo.jpg",
    imageAlt: "Spiced potato sabzi served with puris",
    intro:
      "Comfort in a pan: boiled potatoes tumbled in a smoky cumin tempering with chilli and a squeeze of lemon.",
    time: "20 minutes",
    difficulty: "Easy",
    serves: "2–3",
    ingredients: [
      "4 medium potatoes, boiled and cut into cubes",
      "2 tablespoons oil or ghee",
      "1½ teaspoons FARMAM ORGANIC Jeera (cumin seeds)",
      "1 teaspoon red chilli powder (or to taste)",
      "½ teaspoon turmeric powder",
      "Salt, to taste",
      "A squeeze of lemon",
      "Fresh coriander, chopped, to garnish",
    ],
    steps: [
      "Heat oil in a pan over medium heat and add the cumin seeds. Let them crackle and darken slightly.",
      "Add the cubed potatoes and toss to coat in the tempering.",
      "Sprinkle over the chilli powder, turmeric, and salt. Stir gently so the spices coat the potatoes evenly.",
      "Cook for 5–7 minutes, turning occasionally, until the edges turn golden and a little crisp.",
      "Finish with a squeeze of lemon and a generous scattering of coriander. Serve hot with roti or paratha.",
    ],
  },
  {
    id: "bajra-roti",
    title: "Bajra Roti",
    image: "/images/recipes/bajra-roti.jpg",
    imageAlt: "A stack of soft rotis on a checked cloth",
    intro:
      "The winter classic: rustic pearl millet flatbreads, traditionally patted by hand and served hot with ghee or white butter.",
    time: "40 minutes",
    difficulty: "Medium",
    serves: "Makes 6–8 rotis",
    ingredients: [
      "2 cups FARMAM ORGANIC Bajri Atta (pearl millet flour)",
      "Warm water, as needed (about ¾ cup)",
      "Salt, to taste (optional)",
      "Extra flour, for dusting",
      "Ghee or white butter, to serve",
    ],
    steps: [
      "Place the flour (and salt, if using) in a wide bowl. Add warm water a little at a time and knead into a soft, pliable dough. Millet dough has no gluten, so a warm, firm-but-soft dough works best. Rest it for 10 minutes.",
      "Divide the dough into 6–8 portions and roll them into smooth balls.",
      "Traditionally, rotis are patted by hand: place a ball on a sheet of plastic or cloth, flatten it, and pat gently with your palm, turning as you go, into a disc about 15 cm wide. (A rolling pin also works — dust lightly with flour and roll gently.)",
      "Cook the roti on a hot tawa over medium-high heat. When small spots appear, flip it. Press gently with a cloth for even puffing and cook until light brown spots appear on both sides.",
      "Smear generously with ghee or white butter and serve immediately. Bajra rotis are best eaten fresh and hot, with kadhi, jaggery, or a simple sabzi.",
    ],
  },
  {
    id: "veggie-khichdi",
    title: "Bajra Vegetable Khichdi",
    image: "/images/recipes/veggie-khichdi.jpg",
    imageAlt: "Khichdi, a warm, yellow one-pot comfort meal",
    intro:
      "A one-pot comfort meal of coarse bajra simmered with mung dal and seasonal vegetables, finished with a ghee tadka.",
    time: "35 minutes",
    difficulty: "Easy",
    serves: "3–4",
    ingredients: [
      "½ cup Whole Bajra (or Bajri Atta), rinsed and soaked for 2 hours (if using whole grains)",
      "⅓ cup mung dal, rinsed",
      "1 onion, finely chopped",
      "1 tomato, chopped",
      "1 carrot and a handful of beans, chopped (or any seasonal vegetables)",
      "1 teaspoon ginger-garlic paste",
      "1 teaspoon FARMAM ORGANIC Jeera (cumin seeds)",
      "½ teaspoon turmeric powder",
      "1 teaspoon garam masala",
      "2 tablespoons ghee",
      "Salt, to taste",
      "4 cups water (adjust for desired consistency)",
    ],
    steps: [
      "Heat one tablespoon of ghee in a pressure cooker. Add cumin seeds and let them sizzle.",
      "Add the ginger-garlic paste and onion, and sauté until the onion turns translucent and golden at the edges.",
      "Add the tomato and cook until it softens. Stir in the turmeric and garam masala.",
      "Add the drained bajra, mung dal, vegetables, salt, and water. Stir well.",
      "Pressure cook for 4–5 whistles (or simmer covered in a pot for 25–30 minutes) until everything is soft and cooked through.",
      "Rest for a few minutes, then stir. The khichdi should be soft and porridge-like. Loosen with a little hot water if needed.",
      "Finish with a spoonful of ghee and serve warm with curd, pickle, or papad.",
    ],
  },
];

export const difficultyTone = {
  Easy: "text-leaf-dark border-leaf/30 bg-leaf/10",
  Medium: "text-earth border-earth/30 bg-earth/10",
};
