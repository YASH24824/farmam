import JsonLd, { breadcrumbSchema } from "@/components/seo/JsonLd";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { LeafBranch } from "@/components/Decorations";
import { featuredProducts } from "@/data/products";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "About Us",
  description:
    "Our roots are in the land we love. Learn about FARMAM ORGANIC, a food brand inspired by Indian agriculture, traditional ingredients, and the everyday act of good cooking.",
  openGraph: {
    url: "/about",
    images: ["/opengraph-image"],
    title: "About Us | FARMAM ORGANIC",
    description:
      "Our roots are in the land we love. The story and values behind FARMAM ORGANIC.",
  },
};

const values = [
  {
    title: "Respect for Nature",
    text: "Fields, seasons, rains and soil. Everything we sell begins with nature.",
  },
  {
    title: "Appreciation for Indian Farming",
    text: "India's farmers feed the nation. We choose our ingredients with gratitude for the hands that grow them.",
  },
  {
    title: "Attention to Ingredient Quality",
    text: "Look, aroma, feel and cleanliness. Small checks make a big difference.",
  },
  {
    title: "Respect for Traditional Food Practices",
    text: "Stone grinding, hand-patted rotis and slow tempering shape how we think about food.",
  },
];

const farmToFoodSteps = [
  {
    image: "/images/farmer-hands-grain.jpg",
    alt: "A hand brushing over ripe golden grain in the field",
    step: "01",
    title: "Ingredient Selection",
    text: "It starts in the field, with crops grown on Indian farms.",
  },
  {
    image: "/images/millet-flour.jpg",
    alt: "Millet grains and freshly milled flour on a green leaf",
    step: "02",
    title: "Careful Processing",
    text: "Cleaned and milled gently, the traditional way.",
  },
  {
    image: "/images/live/jeera.jpg",
    alt: "Whole cumin seeds in a wooden spoon",
    step: "03",
    title: "Careful Packing",
    text: "Packed fresh and checked before it leaves us.",
  },
  {
    image: "/images/roti-making.jpg",
    alt: "A roti rolled out with a wooden rolling pin",
    step: "04",
    title: "Your Kitchen",
    text: "Tadkas, rotis, dals and everyday family meals.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema("About Us", "/about")} />
      {/* ------------------------------------------------ HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/farm-landscape.jpg"
            alt="Green farm fields and a village below a hill in rural India"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/55 to-forest-deep/20" />
        </div>
        <div className="container-site relative flex min-h-[420px] items-end py-14 md:min-h-[520px] md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow-light">About Us</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-cream text-balance md:text-5xl lg:text-[3.4rem]">
              Our Roots Are in the Land{" "}
              <em className="text-gold italic">We Love.</em>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/80 md:text-lg">
              FARMAM ORGANIC is a food brand inspired by Indian agriculture,
              traditional ingredients, and the everyday joy of cooking.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------- BRAND STORY */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative mx-auto w-full max-w-lg">
            <div
              className="absolute inset-0 -rotate-2 rounded-[2rem] border-2 border-gold/35"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/farmers-harvest.jpg"
                  alt="A farmer sowing in a lush green paddy field"
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={
                <>
                  A Brand Born in the{" "}
                  <em className="text-gold-dark italic">Indian Kitchen</em>
                </>
              }
            />
            <p className="mt-6 text-base leading-relaxed text-ink/75">
              FARMAM ORGANIC began with a love for the taste of
              food made from pure, traditional Indian ingredients. The
              jeera that perfumes a dal. The bajra that makes winter rotis
              worth waiting for. The mung that turns a quiet evening into a
              comforting one.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              We are building a food brand around that fondness. Our focus is
              on choosing quality ingredients carefully, handling them
              with care, and bringing them to your kitchen in a form your
              family already knows how to love.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              We are a young brand and we take our time, because
              good food, like good farming, takes its time.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------ OUR MISSION */}
      <section className="texture-paper bg-cream py-16 md:py-24">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-3xl text-gold-dark md:text-4xl">
              our mission
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-forest text-balance md:text-4xl">
              Making Everyday Food Feel{" "}
              <em className="text-gold-dark italic">Closer to Nature.</em>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink/70 md:text-lg">
              To bring traditional Indian ingredients to modern kitchens with
              quality-first thinking, careful sourcing and deep respect
              for the food culture we grew up in.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              "Quality-first thinking",
              "Careful sourcing",
              "Traditional food culture",
            ].map((pillar) => (
              <div
                key={pillar}
                className="rounded-2xl border border-forest/10 bg-white px-5 py-6 text-center shadow-sm"
              >
                <p className="font-serif text-lg text-forest">{pillar}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------ OUR VALUES */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        <LeafBranch className="pointer-events-none absolute -bottom-6 -left-8 h-72 w-44 -rotate-45 text-sage" />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Our Values"
            title={
              <>
                What We <em className="text-gold-dark italic">Stand For</em>
              </>
            }
            description="Four simple values that guide how we choose, source and pack."
          />
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="border-t-2 border-forest/10 pt-6 transition-colors hover:border-gold/50"
              >
                <span className="font-serif text-4xl text-gold/70">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-serif text-2xl text-forest">
                  {v.title}
                </h3>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-ink/65">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------ FROM FARM TO FOOD */}
      <section className="bg-forest py-16 md:py-24">
        <div className="container-site">
          <SectionHeading
            tone="dark"
            eyebrow="From Farm to Food"
            title={
              <>
                The Approach We Bring to{" "}
                <em className="text-gold italic">Every Pack</em>
              </>
            }
            description="Every ingredient follows the same path, from the field to the food on your plate."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {farmToFoodSteps.map((step) => (
              <figure
                key={step.step}
                className="group overflow-hidden rounded-2xl bg-forest-soft ring-1 ring-cream/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-forest-deep/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-forest-deep/70 px-3 py-1 font-serif text-sm text-gold backdrop-blur-sm">
                    {step.step}
                  </span>
                </div>
                <figcaption className="p-5">
                  <h3 className="font-serif text-lg text-cream">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">
                    {step.text}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------- CLOSING CTA */}
      <CTASection
        variant="light"
        script="From Farm to Food"
        title="Discover What We Bring to Your Kitchen."
        description={`Start with our ${featuredProducts[0].name} and ${featuredProducts[1].name}, two everyday essentials packed with care.`}
        primaryLabel="Explore Our Products"
        primaryHref="/products"
      />
    </>
  );
}
