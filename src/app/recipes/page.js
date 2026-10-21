import Image from "next/image";
import Link from "next/link";
import { Info, CookingPot, Flame, Leaf } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import RecipesExplorer from "@/components/RecipesExplorer";
import { CornerSprig } from "@/components/Decorations";

export const metadata = {
  title: "Recipes & Benefits",
  description:
    "Simple ingredients, beautiful Indian food — jeera rice, jeera aloo, bajra roti and khichdi recipes, plus ingredient spotlights on cumin and pearl millet.",
  openGraph: {
    title: "Recipes & Benefits — FARMAM ORGANIC",
    description:
      "Simple ingredients, beautiful Indian food — everyday recipes and ingredient know-how.",
  },
};

export default function RecipesPage() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/recipes/jeera-rice.jpg"
            alt="Jeera rice garnished with fresh coriander in a serving bowl"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/55 to-forest-deep/25" />
        </div>
        <div className="container-site relative flex min-h-[400px] items-end py-14 md:min-h-[480px] md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow-light">Recipes & Benefits</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-cream text-balance md:text-5xl lg:text-[3.4rem]">
              Simple Ingredients.{" "}
              <em className="text-gold italic">Beautiful Indian Food.</em>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/80 md:text-lg">
              Everyday recipes, cooking know-how and honest ingredient notes —
              for the food India actually cooks at home.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------- RECIPES */}
      <section className="texture-paper bg-cream py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="From Our Kitchen Notes"
            title={
              <>
                Recipes to Try <em className="text-gold-dark italic">Today</em>
              </>
            }
            description="Four everyday classics starring our two favourite ingredients — jeera and bajra. Tap any card for the full recipe."
          />
          <div className="mt-14">
            <RecipesExplorer />
          </div>
        </div>
      </section>

      {/* ------------------------------ INGREDIENT SPOTLIGHTS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Ingredient Spotlight"
            title={
              <>
                Know Your <em className="text-gold-dark italic">Ingredients</em>
              </>
            }
            description="A little familiarity with an ingredient goes a long way in the kitchen."
          />

          {/* Jeera spotlight */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/cumin-seeds.jpg"
                    alt="Whole cumin seeds served in brass bowls"
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -right-3 -bottom-10 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:block md:-right-8">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/cumin-tempering.jpg"
                    alt="Cumin seeds sizzling in hot oil for a classic tadka"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow">Understanding Jeera</p>
              <h3 className="mt-3 font-serif text-3xl text-forest md:text-4xl">
                The Spice That Starts Everything
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink/75">
                Jeera (cumin) carries a warm, earthy aroma with a gentle
                citrus-like edge. Whole seeds are usually bloomed in hot oil
                or ghee — the moment they darken and crackle, a dish finds
                its soul.
              </p>
              <ul className="mt-6 space-y-3.5">
                {[
                  { icon: Flame, text: "Flavour — warm, earthy, slightly nutty; deeper when toasted" },
                  { icon: Leaf, text: "Aroma — released best when the seeds sizzle in hot fat (tadka)" },
                  { icon: CookingPot, text: "Uses — dals, jeera rice, aloo sabzis, raita, buttermilk and masalas" },
                ].map((row) => (
                  <li key={row.text} className="flex items-start gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-dark">
                      <row.icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="pt-1.5 text-sm leading-relaxed text-ink/75">
                      {row.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?product=jeera"
                className="btn btn-primary btn-sm mt-8"
              >
                Enquire About Jeera
              </Link>
            </div>
          </div>

          {/* Bajra spotlight */}
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-last mx-auto w-full max-w-lg lg:order-first">
              <div className="overflow-hidden rounded-[2rem] shadow-xl">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/millet-flour.jpg"
                    alt="Pearl millet flour with grains and a traditional stone mill"
                    fill
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-10 -left-3 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:block md:-left-8">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/roti-making.jpg"
                    alt="Rolling out fresh rotis the traditional way"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="eyebrow">Understanding Bajri</p>
              <h3 className="mt-3 font-serif text-3xl text-forest md:text-4xl">
                The Millet That Fed Generations
              </h3>
              <p className="mt-5 text-base leading-relaxed text-ink/75">
                Bajri (pearl millet) is a hardy, traditional grain of India's
                drylands — naturally gluten-free and ground into a flour that
                makes hearty, warming food, especially loved through winter.
              </p>
              <ul className="mt-6 space-y-3.5">
                {[
                  { icon: CookingPot, text: "Rotis & rotlas — kneaded with warm water and patted by hand" },
                  { icon: Flame, text: "Khichdi & porridge — soft, comforting one-pot meals" },
                  { icon: Leaf, text: "Naturally gluten-free — a traditional grain for modern plates" },
                ].map((row) => (
                  <li key={row.text} className="flex items-start gap-3.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage text-leaf-dark">
                      <row.icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                    <span className="pt-1.5 text-sm leading-relaxed text-ink/75">
                      {row.text}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?product=bajri-atta"
                className="btn btn-primary btn-sm mt-8"
              >
                Enquire About Bajri Atta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- RESPONSIBLE NUTRITION NOTE */}
      <section className="texture-paper bg-cream pb-16 md:pb-24">
        <div className="container-site">
          <div className="relative mx-auto max-w-3xl rounded-2xl border border-earth/20 bg-white p-6 md:p-8">
            <CornerSprig className="pointer-events-none absolute -top-3 -left-3 h-14 w-14 text-gold/50" />
            <h3 className="flex items-center gap-2.5 font-serif text-xl text-forest">
              <Info className="h-5 w-5 text-gold-dark" aria-hidden="true" />
              A Note on Food & Health
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              The information on this page is general culinary and ingredient
              knowledge, offered in the spirit of everyday cooking. It is not
              medical or dietary advice, and it is not a claim about the
              prevention or treatment of any condition. For guidance related
              to your health or diet, please speak with a qualified
              professional.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ CTA */}
      <CTASection
        variant="forest"
        script="From Farm to Food"
        title="Bring These Traditions to Your Table."
        description="Everything on this page begins with honest ingredients — ours are ready when you are."
        primaryLabel="Discover Our Products"
        primaryHref="/products"
      />
    </>
  );
}
