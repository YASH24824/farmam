import Link from "next/link";
import Image from "next/image";
import { Wheat } from "lucide-react";

export const metadata = {
  title: "Page Not Found",
  description: "The page you're looking for seems to have wandered off to the fields.",
};

export default function NotFound() {
  return (
    <section className="texture-paper flex flex-col items-center justify-center bg-cream px-4 py-24 text-center md:py-32">
      <Image
        src="/images/farmam-logo-clean.png"
        alt="FARMAM ORGANIC logo"
        width={140}
        height={122}
        className="h-28 w-auto"
        priority
      />
      <p className="mt-8 flex items-center gap-3 text-sm font-bold tracking-[0.28em] text-gold-dark uppercase">
        <Wheat className="h-4 w-4" aria-hidden="true" />
        404
        <Wheat className="h-4 w-4" aria-hidden="true" />
      </p>
      <h1 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-forest text-balance md:text-4xl">
        This Page Seems to Have Wandered Off to the Fields.
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-ink/65">
        The page you're looking for isn't here, but our ingredients are
        always where they belong, in the kitchen.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link href="/products" className="btn btn-outline">
          Explore Products
        </Link>
      </div>
    </section>
  );
}
