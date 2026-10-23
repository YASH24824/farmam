import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Our Promise",
  description:
    "The promise behind every FARMAM ORGANIC product: nature first, quality you can trust, honest information and care in every detail.",
  openGraph: {
    title: "Our Promise | FARMAM ORGANIC",
    description:
      "Nature first, quality you can trust, honest information and care in every detail.",
  },
};

const promises = [
  {
    title: "Nature Comes First",
    text: "We believe good products begin with thoughtful choices. Our aim is to bring you products inspired by nature and selected with care.",
    image: "/images/farmers-harvest.jpg",
    alt: "A farmer sowing in a lush green paddy field",
  },
  {
    title: "Quality You Can Trust",
    text: "Every product deserves attention to quality, from ingredient selection to packaging, so you can shop with greater confidence.",
    image: "/images/millet-flour.jpg",
    alt: "Millet grains and freshly milled flour on a green leaf",
  },
  {
    title: "Honest by Nature",
    text: "We believe in clear product information, honest communication, and helping customers make informed choices.",
    image: "/images/cumin-seeds.jpg",
    alt: "Whole cumin seeds in wooden scoops",
  },
  {
    title: "Care in Every Detail",
    text: "From choosing products to presenting them thoughtfully, we focus on the details that make your shopping experience better.",
    image: "/images/spice-bowls.jpg",
    alt: "A traditional Indian masala dabba filled with spices",
  },
];

export default function PromisePage() {
  return (
    <>
      {/* ------------------------------------------------ HERO */}
      {/* Full-screen photo, centred heading, four promise cards along the bottom */}
      <section className="relative isolate flex min-h-[calc(100svh-76px)] flex-col overflow-hidden bg-forest-deep md:min-h-[calc(100svh-92px)]">
        <Image
          src="/images/farm-landscape.jpg"
          alt="Green farm fields and a village below a hill in rural India"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/70 via-forest-deep/55 to-forest-deep/95" />

        <div className="container-site flex flex-1 flex-col justify-center py-10 text-center">
          <p className="eyebrow-light">Our Promise</p>
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-[2.5rem] leading-[1.05] text-cream text-balance sm:text-6xl lg:text-7xl">
            A Promise Rooted in <em className="text-gold italic">Nature.</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">
            Four simple commitments guide everything we do, from the products
            we choose to the way we serve you.
          </p>
        </div>

        <div className="container-site pb-24 md:pb-10">
          <ol className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {promises.map((p, i) => (
              <li key={p.title}>
                <a
                  href={`#promise-${i + 1}`}
                  className="group flex h-full flex-col rounded-2xl border border-cream/15 bg-cream/10 p-4 backdrop-blur-md transition-colors hover:border-gold/60 hover:bg-cream/15 md:p-5"
                >
                  <span className="font-serif text-2xl text-gold md:text-3xl">
                    0{i + 1}
                  </span>
                  <span className="mt-1.5 font-serif text-base leading-snug text-cream md:text-lg">
                    {p.title}
                  </span>
                  <span className="mt-auto flex items-center gap-1.5 pt-3 text-xs font-semibold tracking-wide text-cream/60 transition-colors group-hover:text-gold">
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------ FOUR PROMISES */}
      {/* Each promise fills exactly one screen */}
      {promises.map((p, i) => {
        const flipped = i % 2 === 1;
        return (
          <section
            key={p.title}
            id={`promise-${i + 1}`}
            className={`flex min-h-[calc(100svh-76px)] md:min-h-[calc(100svh-92px)] scroll-mt-[76px] items-center py-8 md:scroll-mt-[92px] lg:py-16 ${
              flipped ? "texture-paper bg-cream" : "bg-white"
            }`}
          >
            <div className="container-site grid w-full items-center gap-6 md:grid-cols-2 md:gap-14">
              <div className={flipped ? "md:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl md:aspect-[4/3.4]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={flipped ? "md:order-1" : ""}>
                <span className="font-serif text-5xl leading-none text-gold/70 md:text-7xl">
                  0{i + 1}
                </span>
                <h2 className="mt-3 font-serif text-3xl text-forest md:mt-4 md:text-5xl">
                  {p.title}
                </h2>
                <div className="mt-4 h-0.5 w-14 rounded-full bg-gold" aria-hidden="true" />
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70 md:mt-5 md:text-lg">
                  {p.text}
                </p>
              </div>
            </div>
          </section>
        );
      })}

      {/* ------------------------------------------ PROMISE STRIP */}
      <section className="flex min-h-[calc(100svh-76px)] md:min-h-[calc(100svh-92px)] items-center bg-forest py-10 md:py-20">
        <div className="container-site w-full">
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-cream/10 lg:grid-cols-4">
            {promises.map((p, i) => (
              <li key={p.title} className="bg-forest p-5 md:p-8">
                <span className="font-serif text-sm text-gold">0{i + 1}</span>
                <p className="mt-2 font-serif text-lg leading-snug text-cream md:text-xl">{p.title}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="max-w-xl text-base leading-relaxed text-cream/70">
              Have a question about any of our products? Ask us directly and we
              will answer.
            </p>
            <Link href="/products" className="btn btn-gold">
              Explore Our Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        variant="light"
        script="From Farm to Food"
        title="Talk to Us About Our Products."
        description="For product questions, retail partnerships or bulk orders, our team is happy to help."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="About Us"
        secondaryHref="/about"
        fullScreen
      />
    </>
  );
}
