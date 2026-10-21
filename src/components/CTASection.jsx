import Link from "next/link";
import { Wheat } from "lucide-react";

/**
 * Reusable closing CTA band.
 * variant="light" — warm gold band for light pages
 * variant="forest" — deep green band for dramatic closings
 */
export default function CTASection({
  script,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  variant = "light",
}) {
  const dark = variant === "forest";

  return (
    <section
      className={`relative overflow-hidden ${
        dark ? "bg-forest" : "texture-paper bg-gold-soft"
      }`}
    >
      {/* subtle botanical corners */}
      <Wheat
        className="absolute -top-4 -left-3 h-24 w-24 rotate-[24deg] text-gold/15"
        aria-hidden="true"
      />
      <Wheat
        className="absolute -right-3 -bottom-4 h-24 w-24 rotate-[204deg] text-gold/15"
        aria-hidden="true"
      />

      <div className="container-site relative py-16 text-center md:py-24">
        {script ? (
          <p className={`font-script text-3xl md:text-4xl ${dark ? "text-gold" : "text-gold-dark"}`}>
            {script}
          </p>
        ) : null}
        <h2
          className={`mx-auto mt-2 max-w-2xl font-serif text-3xl leading-[1.15] text-balance md:text-[2.6rem] ${
            dark ? "text-cream" : "text-forest"
          }`}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={`mx-auto mt-4 max-w-xl text-base leading-relaxed ${
              dark ? "text-cream/70" : "text-ink/70"
            }`}
          >
            {description}
          </p>
        ) : null}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href={primaryHref} className={dark ? "btn btn-gold" : "btn btn-primary"}>
            {primaryLabel}
          </Link>
          {secondaryLabel ? (
            <Link
              href={secondaryHref}
              className={dark ? "btn btn-outline-light" : "btn btn-outline"}
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
