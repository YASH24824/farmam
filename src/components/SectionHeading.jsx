import Reveal from "@/components/motion/Reveal";

/**
 * Section heading with eyebrow, serif title and optional description.
 * `tone="dark"` is for deep green sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className = "",
}) {
  const isCenter = align === "center";
  const dark = tone === "dark";

  return (
    <Reveal
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <p className={dark ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>
      ) : null}
      <h2
        className={`mt-4 font-serif text-3xl leading-[1.15] text-balance md:text-4xl ${
          dark ? "text-cream" : "text-forest"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            dark ? "text-cream/70" : "text-ink/70"
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
