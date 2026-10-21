import Image from "next/image";
import Link from "next/link";
import { PackageCheck, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCatalogue from "@/components/ProductCatalogue";
import { WheatDivider, CornerSprig } from "@/components/Decorations";
import { products } from "@/data/products";

export const metadata = {
  title: "Our Products",
  description:
    "Discover ingredients inspired by Indian farms and traditional kitchens — FARMAM ORGANIC Jeera, Bajri Atta, millets, pulses and more. Enquire for retail, distribution and bulk.",
  openGraph: {
    title: "Our Products — FARMAM ORGANIC",
    description:
      "Discover ingredients inspired by Indian farms and traditional kitchens.",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className="texture-paper relative overflow-hidden bg-cream">
        <CornerSprig className="pointer-events-none absolute -top-2 -right-2 h-28 w-28 text-earth/25" />
        <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">Our Range</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-forest text-balance md:text-5xl lg:text-[3.4rem]">
              Our <em className="text-gold-dark italic">Products</em>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink/70 md:text-lg">
              Discover ingredients inspired by Indian farms and traditional
              kitchens — packed with care, and made for everyday cooking.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              <span className="chip">
                <PackageCheck
                  className="h-3.5 w-3.5 text-gold-dark"
                  aria-hidden="true"
                />
                {products.length} products
              </span>
              <span className="chip">Whole spices</span>
              <span className="chip">Millets & flours</span>
              <span className="chip">Pulses & dals</span>
            </div>
          </div>

          {/* floating pack trio */}
          <div className="relative hidden h-64 lg:col-span-5 lg:block">
            <div
              className="absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-earth/20 bg-gold-soft"
              aria-hidden="true"
            />
            {products.slice(0, 3).map((p, i) => {
              const pos = [
                "top-2 left-6 -rotate-6",
                "top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rotate-2",
                "right-4 bottom-0 rotate-6",
              ][i];
              return (
                <div
                  key={p.id}
                  className={`absolute w-36 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl ${pos}`}
                >
                  <div className="relative aspect-[2/3]">
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------------------------------- CATALOGUE */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-site">
          <ProductCatalogue />
        </div>
      </section>

      {/* ------------------------------------ PRODUCT STORYTELLING */}
      <section className="texture-paper bg-cream py-16 md:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo collage */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/cumin-tempering.jpg"
                  alt="Cumin tadka sizzling in hot oil — the classic Indian tempering"
                  fill
                  sizes="(max-width: 1024px) 90vw, 480px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -right-3 -bottom-10 hidden w-48 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:block md:-right-8">
              <div className="relative aspect-square">
                <Image
                  src="/images/millet-grains.jpg"
                  alt="Pearl millet grains resting in a wooden spoon"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="In the Indian Kitchen"
              title={
                <>
                  Ingredients That{" "}
                  <em className="text-gold-dark italic">Belong</em> to Indian
                  Cooking
                </>
              }
            />
            <p className="mt-6 text-base leading-relaxed text-ink/75">
              A pinch of jeera in smoking oil is the beginning of half the
              dishes India cooks at home. Pearl millet has fed families for
              generations — in rotis that warm winter evenings, and khichdi
              that comforts like a blanket.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Our range is built around these humble, essential ingredients.
              No novelty, no shortcuts — just the spices, millets, pulses and
              grains that Indian kitchens actually reach for, every single
              day.
            </p>
            <blockquote className="mt-7 border-l-4 border-gold pl-5 font-serif text-xl leading-snug text-forest italic md:text-2xl">
              "The best Indian food has always been simple food, made well."
            </blockquote>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/recipes" className="btn btn-primary btn-sm">
                Recipes & Benefits
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/about" className="btn btn-outline btn-sm">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        <WheatDivider className="mx-auto mt-20 max-w-md" />
        <p className="mt-6 text-center text-sm leading-relaxed text-ink/55">
          Looking to stock FARMAM ORGANIC in your store, or interested in
          distribution?{" "}
          <Link
            href="/contact?type=Retail%20Partnership"
            className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-leaf"
          >
            Partner with us
          </Link>
          .
        </p>
      </section>
    </>
  );
}
