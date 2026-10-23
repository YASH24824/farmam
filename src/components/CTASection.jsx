import Link from "next/link";

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
  fullScreen = false,
}) {
  const dark = variant === "forest";

  return (
    <section
      className={`relative overflow-hidden ${
        fullScreen
          ? "flex min-h-[calc(100svh-76px)] items-center md:min-h-[calc(100svh-92px)]"
          : ""
      } ${
        dark ? "bg-forest" : "texture-paper bg-gold-soft"
      }`}
    >
      <div className="container-site relative w-full py-16 text-center md:py-24">
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
        <div className="mx-auto mt-9 flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
          <Link href={primaryHref} className={`justify-center ${dark ? "btn btn-gold" : "btn btn-primary"}`}>
            {primaryLabel}
          </Link>
          {secondaryLabel ? (
            <Link
              href={secondaryHref}
              className={`justify-center ${dark ? "btn btn-outline-light" : "btn btn-outline"}`}
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
