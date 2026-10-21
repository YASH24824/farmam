import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sprout,
  Leaf,
  Wheat,
  HandHeart,
  ShieldCheck,
  Truck,
  CookingPot,
  Flag,
  Check,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { WheatDivider, LeafBranch } from "@/components/Decorations";
import { featuredProducts } from "@/data/products";

export const metadata = {
  // Home keeps the full brand title (no template suffix duplication)
  title: { absolute: "FARMAM ORGANIC — From Farm to Food" },
  description:
    "Discover the goodness of traditional Indian ingredients, thoughtfully brought to your kitchen. FARMAM ORGANIC — from farm to food, with nature in every grain.",
};

const journeySteps = [
  {
    icon: Sprout,
    title: "Rooted in Indian Agriculture",
    text: "Our starting point is always the ingredient itself — crops that belong to Indian fields and Indian food traditions.",
  },
  {
    icon: HandHeart,
    title: "Carefully Sourced Ingredients",
    text: "We take time over sourcing, working with quality-conscious supply partners who understand what a good ingredient should be.",
  },
  {
    icon: ShieldCheck,
    title: "Thoughtful Processing & Checks",
    text: "Cleaning, milling and packing are carried out with care, with quality checks at each stage of our intended process.",
  },
  {
    icon: Truck,
    title: "Delivered for Everyday Cooking",
    text: "Finally, the ingredients reach your kitchen — ready for tadka, rotis and everything in between.",
  },
];

const reasons = [
  {
    icon: Wheat,
    title: "Traditional Ingredients",
    text: "We choose ingredients that Indian kitchens have trusted for generations — nothing gimmicky, nothing unnecessary.",
  },
  {
    icon: HandHeart,
    title: "Quality-Conscious Sourcing",
    text: "Every lot begins with careful selection, because good food starts long before it reaches the pack.",
  },
  {
    icon: CookingPot,
    title: "Everyday Cooking Essentials",
    text: "Our range is made for real, everyday cooking — the dal, the roti, the rice on your table tonight.",
  },
  {
    icon: Flag,
    title: "Inspired by Indian Food Traditions",
    text: "We are proud of India's food heritage and build our range with respect for the way India actually cooks.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className="relative overflow-hidden bg-forest">
        <LeafBranch className="pointer-events-none absolute -bottom-8 -left-6 hidden h-64 w-40 rotate-12 text-leaf/25 lg:block" />
        <div className="container-site relative grid items-center gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
          {/* Copy */}
          <div className="animate-rise-in lg:col-span-6">
            <p className="eyebrow-light">
              Rooted in Nature. Made for Your Home.
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.08] text-cream text-balance sm:text-5xl lg:text-[3.5rem]">
              From Farm to Food,{" "}
              <br className="hidden sm:block" />
              With <em className="text-gold italic">Nature</em> in Every Grain.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/75 md:text-lg">
              Discover the goodness of traditional Indian ingredients,
              thoughtfully brought to your kitchen.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/products" className="btn btn-gold">
                Explore Our Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/about" className="btn btn-outline-light">
                Our Story
              </Link>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-cream/70">
              {[
                "Rooted in Indian farms",
                "Traditional ingredients",
                "Made for everyday cooking",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="animate-fade-in relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-cream/15 shadow-2xl shadow-forest-deep/40">
              <div className="relative aspect-[4/3] lg:aspect-[5/4]">
                <Image
                  src="/images/hero-farmland.jpg"
                  alt="Lush green Indian farmland glowing in warm golden-hour light"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/45 via-transparent to-transparent" />
              </div>

              {/* floating product packs */}
              <div className="absolute bottom-5 left-5 flex items-end gap-4">
                <div className="w-[74px] rotate-[-6deg] overflow-hidden rounded-xl border-[3px] border-cream shadow-xl sm:w-[88px]">
                  <div className="relative aspect-[2/3]">
                    <Image
                      src="/images/jeera-product.jpg"
                      alt="FARMAM ORGANIC Jeera pack"
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mb-4 w-[74px] rotate-[5deg] overflow-hidden rounded-xl border-[3px] border-cream shadow-xl sm:mb-6 sm:w-[88px]">
                  <div className="relative aspect-[2/3]">
                    <Image
                      src="/images/bajri-atta-product.jpg"
                      alt="FARMAM ORGANIC Bajri Atta pack"
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* script tagline badge */}
            <p className="absolute -top-5 right-4 rotate-[-3deg] font-script text-3xl text-gold drop-shadow-lg md:text-4xl">
              From Farm to Food
            </p>
          </div>
        </div>

        {/* bottom edge wave into cream */}
        <div
          className="h-5 bg-cream [clip-path:polygon(0_100%,100%_100%,100%_35%,92%_70%,84%_20%,74%_60%,64%_15%,52%_55%,40%_25%,28%_60%,16%_30%,6%_65%,0_40%)]"
          aria-hidden="true"
        />
      </section>

      {/* --------------------------------------- FEATURED PRODUCTS */}
      <section className="texture-paper bg-cream py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Current Range"
            title={
              <>
                Goodness From <em className="text-gold-dark italic">Our Farms</em>
              </>
            }
            description="Two kitchen essentials to begin with — honest ingredients, familiar flavours, and the care of traditional Indian food making."
          />

          <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
            {featuredProducts.map((product, i) => {
              const flipped = i % 2 === 1;
              return (
                <article
                  key={product.id}
                  className="grid items-center gap-10 md:grid-cols-2 md:gap-14"
                >
                  {/* Image */}
                  <div
                    className={`relative mx-auto w-full max-w-md ${
                      flipped ? "md:order-2" : ""
                    }`}
                  >
                    <div
                      className={`absolute inset-0 rounded-[2rem] border-2 border-gold/35 ${
                        flipped ? "rotate-2" : "-rotate-2"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="texture-paper relative overflow-hidden rounded-[2rem] bg-cream-dark/60">
                      <div className="relative flex aspect-[4/3] items-center justify-center p-8 sm:p-10">
                        <div className="relative h-full aspect-[2/3]">
                          <Image
                            src={product.image}
                            alt={product.imageAlt}
                            fill
                            sizes="(max-width: 768px) 80vw, 420px"
                            className="object-contain drop-shadow-[0_28px_32px_rgba(7,59,32,0.28)]"
                          />
                        </div>
                      </div>
                    </div>
                    <span
                      className={`absolute -top-5 flex h-14 w-14 rotate-[-8deg] items-center justify-center rounded-full bg-gold font-serif text-lg text-forest-deep shadow-lg ${
                        flipped ? "-right-3" : "-left-3"
                      }`}
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Copy */}
                  <div className={flipped ? "md:order-1" : ""}>
                    <p className="eyebrow">{product.category}</p>
                    <h3 className="mt-3 font-serif text-3xl text-forest md:text-4xl">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm font-bold tracking-[0.2em] text-earth uppercase">
                      {product.englishName}
                    </p>
                    <p className="mt-5 text-base leading-relaxed text-ink/75">
                      {product.longDescription}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {product.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-sm font-medium text-ink/80"
                        >
                          <Leaf
                            className="mt-0.5 h-4 w-4 shrink-0 text-leaf"
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <Link
                        href={`/contact?product=${product.id}`}
                        className="btn btn-primary btn-sm"
                      >
                        Enquire Now
                      </Link>
                      <Link href="/products" className="btn btn-outline btn-sm">
                        View Product
                      </Link>
                    </div>
                    <p className="mt-4 text-xs tracking-wide text-ink/50">
                      Packaging: {product.packaging}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          <WheatDivider className="mx-auto mt-20 max-w-md" />
          <p className="mt-6 text-center text-sm text-ink/60">
            More ingredients are on their way —{" "}
            <Link
              href="/products"
              className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-leaf"
            >
              see the full range
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ------------------------------------------- PHILOSOPHY */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Philosophy"
              title={
                <>
                  Closer to Nature.{" "}
                  <em className="text-gold-dark italic">Closer to Tradition.</em>
                </>
              }
            />
            <p className="mt-6 text-base leading-relaxed text-ink/75">
              Food in India is memory, ritual, and love — the aroma of jeera
              crackling in a kadai, the patience of a hand-patted bajra roti,
              the comfort of a simple dal. At FARMAM ORGANIC, our philosophy
              begins right there: with the everyday act of cooking.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              We focus on traditional ingredients, sourced thoughtfully and
              handled with care, so that the food on your plate tastes the way
              it was meant to — honest, warm, and unmistakably Indian.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Ingredients with a story",
                  text: "Every spice and grain we pack has a place in India's regional kitchens.",
                },
                {
                  title: "Sourcing with patience",
                  text: "Good ingredients can't be rushed — we take the time to select them well.",
                },
                {
                  title: "Respect for the home cook",
                  text: "Nothing complicated. Just honest ingredients for the food you make every day.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="flex gap-4 rounded-2xl border border-forest/10 bg-cream/60 p-4 transition-colors hover:border-gold/40"
                >
                  <Sprout
                    className="mt-0.5 h-5 w-5 shrink-0 text-leaf"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-serif text-lg text-forest">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">
                      {v.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo collage */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/roti-making.jpg"
                  alt="Roti dough, rolling pin and fresh rotis on a traditional kitchen table"
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-4 hidden w-52 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:block md:-left-10">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/spice-bowls.jpg"
                  alt="Whole spices in a rustic wooden bowl"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="absolute -top-6 -right-2 rotate-[3deg] font-script text-3xl text-gold-dark md:text-4xl">
              made by hand, always
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------- FARM-TO-KITCHEN JOURNEY */}
      <section className="relative overflow-hidden bg-forest py-16 md:py-24">
        <LeafBranch className="pointer-events-none absolute -top-6 -right-4 h-56 w-36 rotate-180 text-leaf/20" />
        <div className="container-site relative">
          <SectionHeading
            tone="dark"
            eyebrow="The Journey"
            title={
              <>
                From Our Farms{" "}
                <em className="text-gold italic">to Your Kitchen</em>
              </>
            }
            description="A simple, honest journey — the way food should travel. This is the approach we aim to bring to every pack we fill."
          />

          <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* connecting line (desktop) */}
            <div
              className="absolute top-8 right-[12%] left-[12%] hidden border-t-2 border-dashed border-gold/25 lg:block"
              aria-hidden="true"
            />
            {journeySteps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-forest-soft shadow-lg">
                  <step.icon
                    className="h-7 w-7 text-gold"
                    aria-hidden="true"
                  />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold font-serif text-xs font-semibold text-forest-deep">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg text-cream">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2.5 max-w-[16rem] text-sm leading-relaxed text-cream/65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-2xl text-center font-serif text-base text-cream/60 italic md:text-lg">
            "Good food doesn't need cleverness. It needs care, at every step
            of the way."
          </p>
        </div>
      </section>

      {/* ------------------------------------------ WHY CHOOSE US */}
      <section className="texture-paper bg-cream py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why FARMAM ORGANIC"
            title={
              <>
                Why Homes Choose <em className="text-gold-dark italic">Us</em>
              </>
            }
            description="Four simple commitments that shape everything we pack."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group rounded-2xl border border-forest/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_40px_-24px_rgba(7,59,32,0.3)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-full bg-gold-soft text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-forest-deep">
                  <reason.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-forest">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------- BRAND CTA */}
      <CTASection
        variant="light"
        script="From Farm to Food"
        title="Bring Nature's Goodness to Your Kitchen."
        description="Explore our range of traditional Indian ingredients, or write to us — we would love to hear from you."
        primaryLabel="Explore Products"
        primaryHref="/products"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
