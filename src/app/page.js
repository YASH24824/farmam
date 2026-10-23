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
import { featuredProducts } from "@/data/products";
import { productEnquiryLink } from "@/data/business";

export const metadata = {
  // Home keeps the full brand title (no template suffix duplication)
  title: { absolute: "FARMAM ORGANIC | From Farm to Food" },
  description:
    "Discover the goodness of traditional Indian ingredients, brought straight to your kitchen. FARMAM ORGANIC: from farm to food, with nature in every grain.",
};

const bandItems = [
  "Jeera",
  "Bajri Atta",
  "Whole Bajra",
  "Mung",
  "Mung Dal",
  "Mungafali",
  "From Farm to Food",
];

const journeySteps = [
  {
    icon: Sprout,
    title: "Rooted in Indian Agriculture",
    image: "/images/farm-landscape.jpg",
    alt: "Green farm fields below a hill in rural India",
    text: "We start with the crop itself, grown in Indian fields for Indian kitchens.",
  },
  {
    icon: HandHeart,
    title: "Carefully Sourced",
    image: "/images/farmers-harvest.jpg",
    alt: "A farmer sowing in a lush green paddy field",
    text: "We work with trusted growers and suppliers who know what a good ingredient should be.",
  },
  {
    icon: ShieldCheck,
    title: "Cleaned, Milled & Checked",
    image: "/images/stone-grinding.jpg",
    alt: "Grains being ground by hand with a traditional stone",
    text: "Every lot is cleaned, milled and packed with care, and checked at each stage.",
  },
  {
    icon: Truck,
    title: "Ready for Your Kitchen",
    image: "/images/recipes/jeera-rice.jpg",
    alt: "A bowl of jeera rice ready to serve",
    text: "Packed fresh and ready for your tadka, rotis and everything in between.",
  },
];

const reasons = [
  {
    icon: Wheat,
    title: "Traditional Ingredients",
    text: "We choose ingredients that Indian kitchens have trusted for generations. Nothing extra added.",
  },
  {
    icon: HandHeart,
    title: "Careful Sourcing",
    text: "Every lot is selected with care, because good food starts long before the pack.",
  },
  {
    icon: CookingPot,
    title: "Everyday Essentials",
    text: "Made for everyday cooking: the dal, the roti and the rice on your table tonight.",
  },
  {
    icon: Flag,
    title: "Indian Food Traditions",
    text: "Proud of India's food heritage, we build our range around the way India cooks.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      {/* Fills exactly one screen (minus the navbar) on every device */}
      <section className="relative isolate flex min-h-[calc(100svh-76px)] flex-col overflow-hidden bg-forest md:min-h-[calc(100svh-92px)]">
        <Image
          src="/images/hero-farmland.jpg"
          alt="Aerial view of green farm fields and a pond in rural India"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        {/* Readability overlays: bottom-heavy on mobile, left-heavy on desktop */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-deep via-forest-deep/75 to-forest-deep/20 lg:bg-gradient-to-r lg:from-forest-deep/95 lg:via-forest-deep/70 lg:to-transparent" />

        <div className="container-site flex flex-1 flex-col justify-end pt-24 pb-10 sm:pb-14 lg:justify-center lg:py-16">
          <div className="animate-rise-in max-w-xl">
            <p className="eyebrow-light">Rooted in Nature. Made for Your Home.</p>
            <h1 className="mt-4 font-serif text-[2.4rem] leading-[1.06] text-cream text-balance sm:text-5xl lg:text-6xl">
              From Farm to Food, With{" "}
              <em className="text-gold italic">Nature</em> in Every Grain.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-cream/80 md:text-lg">
              Traditional Indian ingredients, brought straight from the
              farm to your kitchen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/products" className="btn btn-gold justify-center">
                Explore Our Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/about" className="btn btn-outline-light justify-center">
                Our Story
              </Link>
            </div>
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-2.5 border-t border-cream/15 pt-6 text-sm text-cream/80 sm:grid-cols-3 sm:gap-6 lg:mt-16 lg:max-w-3xl">
            {[
              "Rooted in Indian farms",
              "Traditional ingredients",
              "Made for everyday cooking",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------ INGREDIENT BAND */}
      <div className="overflow-hidden border-y border-forest/10 bg-gold-soft py-4" aria-hidden="true">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...bandItems, ...bandItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-serif text-lg text-forest italic md:text-xl"
            >
              {item}
              <Wheat className="h-4 w-4 text-gold-dark" />
            </span>
          ))}
        </div>
      </div>

      {/* --------------------------------------- FEATURED PRODUCTS */}
      <section className="texture-paper bg-cream py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Products"
            title={
              <>
                Goodness From <em className="text-gold-dark italic">Our Farms</em>
              </>
            }
            description="Two kitchen essentials to begin with: pure ingredients, familiar flavours and traditional care."
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
                      <div className="relative aspect-[4/3]">
                        <div className="absolute inset-0">
                          <Image
                            src={product.image}
                            alt={product.imageAlt}
                            fill
                            sizes="(max-width: 768px) 90vw, 450px"
                            className="object-cover"
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
                      <a
                        href={productEnquiryLink(product)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Enquire Now
                      </a>
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

        </div>
      </section>

      {/* ------------------------------------------- PHILOSOPHY */}
      {/* Light split layout; fills one screen on desktop, compact on mobile */}
      <section
        id="philosophy"
        className="texture-paper flex scroll-mt-[76px] items-center bg-cream py-6 sm:py-12 md:scroll-mt-[92px] lg:min-h-[calc(100svh-92px)] lg:py-16"
      >
        <div className="container-site grid w-full items-center gap-5 sm:gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Photos */}
          <div className="relative">
            <div className="relative aspect-[2/1] overflow-hidden rounded-3xl shadow-xl sm:aspect-[16/10] lg:aspect-[4/5] lg:max-h-[70svh] lg:w-[85%]">
              <Image
                src="/images/roti-making.jpg"
                alt="A roti rolled out with a wooden rolling pin"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 hidden w-[42%] translate-y-6 overflow-hidden rounded-3xl border-[6px] border-cream shadow-2xl lg:block">
              <div className="relative aspect-square">
                <Image
                  src="/images/spice-bowls.jpg"
                  alt="A traditional Indian masala dabba filled with spices"
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="eyebrow">Our Philosophy</p>
            <h2 className="mt-3 font-serif text-[2rem] leading-[1.1] text-forest text-balance sm:text-4xl lg:text-5xl">
              Closer to Nature.{" "}
              <em className="text-gold-dark italic">Closer to Tradition.</em>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/70 lg:mt-6 lg:text-lg">
              Food in India is memory, ritual and love: jeera crackling in a
              kadai, a hand-patted bajra roti, a simple dal. We bring you the
              traditional ingredients behind it.
            </p>

            <ol className="mt-5 grid gap-3 sm:gap-4 lg:mt-8 lg:gap-5">
              {[
                {
                  title: "Ingredients with a story",
                  text: "Every spice and grain has a place in India's kitchens.",
                },
                {
                  title: "Sourcing with patience",
                  text: "Good ingredients can't be rushed, so we select them with care.",
                },
                {
                  title: "Respect for the home cook",
                  text: "Simple, pure ingredients for the food you make every day.",
                },
              ].map((v, i) => (
                <li key={v.title} className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest font-serif text-sm text-gold">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg leading-snug text-forest">
                      {v.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink/60">
                      {v.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* --------------------------------- FARM-TO-KITCHEN JOURNEY */}
      {/* Four photo step cards: a row on desktop, swipeable on mobile */}
      <section className="relative flex flex-col justify-center overflow-hidden bg-forest py-12 lg:min-h-[calc(100svh-92px)] lg:py-16">
        <div className="container-site">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
            <div>
              <p className="eyebrow-light">The Journey</p>
              <h2 className="mt-3 font-serif text-[2rem] leading-[1.1] text-cream sm:text-4xl lg:text-5xl">
                From Our Farms{" "}
                <em className="text-gold italic">to Your Kitchen</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-cream/65 md:text-right md:text-base">
              Four simple steps, the way food should travel.
            </p>
          </div>

          <ol className="scrollbar-warm -mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 lg:mx-0 lg:mt-12 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
            {journeySteps.map((step, i) => (
              <li
                key={step.title}
                className="group w-[78%] shrink-0 snap-start overflow-hidden rounded-3xl bg-forest-soft ring-1 ring-cream/10 sm:w-[46%] lg:w-auto"
              >
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[4/3.6]">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 1024px) 78vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-soft via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-gold font-serif text-base font-semibold text-forest-deep shadow-lg">
                    {i + 1}
                  </span>
                </div>
                <div className="p-5 pt-3">
                  <div className="flex items-center gap-2.5">
                    <step.icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <h3 className="font-serif text-lg leading-snug text-cream">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------ WHY CHOOSE US */}
      {/* Heading left + even 2x2 card grid; fits one screen */}
      <section className="flex items-center bg-white py-12 lg:min-h-[calc(100svh-92px)] lg:py-16">
        <div className="container-site grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="eyebrow">Why FARMAM ORGANIC</p>
            <h2 className="mt-3 font-serif text-[2rem] leading-[1.1] text-forest text-balance sm:text-4xl lg:text-5xl">
              Why Homes <em className="text-gold-dark italic">Choose Us</em>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65 lg:mt-6 lg:text-lg">
              Four simple commitments that shape everything we pack, from the
              field to your kitchen shelf.
            </p>
            <div className="mt-8 hidden flex-wrap gap-3 lg:flex">
              <Link href="/products" className="btn btn-primary">
                Explore Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:col-span-7">
            {reasons.map((reason, i) => (
              <li
                key={reason.title}
                className="group flex flex-col rounded-3xl border border-forest/10 bg-cream/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white hover:shadow-[0_24px_48px_-28px_rgba(7,59,32,0.35)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-forest-deep sm:h-13 sm:w-13">
                    <reason.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <span className="font-serif text-2xl text-forest/15 sm:text-3xl">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-base leading-snug text-forest sm:mt-6 sm:text-xl">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink/60 sm:mt-2 sm:text-sm">
                  {reason.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* --------------------------------------------- BRAND CTA */}
      <CTASection
        variant="light"
        script="From Farm to Food"
        title="Bring Nature's Goodness to Your Kitchen."
        description="Explore our range of traditional Indian ingredients, or write to us. We would love to hear from you."
        primaryLabel="Explore Products"
        primaryHref="/products"
        secondaryLabel="Contact Our Team"
        secondaryHref="/contact"
      />
    </>
  );
}
