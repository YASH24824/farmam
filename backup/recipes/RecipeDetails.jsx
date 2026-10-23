"use client";

import Image from "next/image";
import { Clock, Users, Gauge } from "lucide-react";
import Modal from "@/components/Modal";
import { difficultyTone } from "@/data/recipes";

/**
 * Full recipe details — accessible modal with ingredients & steps.
 */
export default function RecipeDetails({ recipe, open, onClose }) {
  if (!recipe) return null;
  const titleId = `recipe-title-${recipe.id}`;

  return (
    <Modal open={open} onClose={onClose} labelledBy={titleId} closeLabel={`Close ${recipe.title} recipe`}>
      {/* Header image */}
      <div className="relative aspect-[16/8] min-h-[220px] w-full overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-forest-deep/10 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5 sm:left-8">
          <h3 id={titleId} className="font-serif text-3xl text-cream drop-shadow-md">
            {recipe.title}
          </h3>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-sm leading-relaxed text-ink/75">{recipe.intro}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="chip">
            <Clock className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
            Preparation: {recipe.time}
          </span>
          <span className={`chip border ${difficultyTone[recipe.difficulty] ?? ""}`}>
            <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
            {recipe.difficulty}
          </span>
          <span className="chip">
            <Users className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
            Serves {recipe.serves}
          </span>
        </div>

        <div className="mt-7 grid gap-6 md:grid-cols-5">
          {/* Ingredients */}
          <section
            aria-labelledby={`ingredients-${recipe.id}`}
            className="texture-paper rounded-2xl bg-cream p-5 md:col-span-2 md:self-start"
          >
            <h4
              id={`ingredients-${recipe.id}`}
              className="text-xs font-bold tracking-[0.18em] text-earth uppercase"
            >
              Ingredients
            </h4>
            <ul className="mt-4 space-y-2.5">
              {recipe.ingredients.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-ink/75">
                  <span
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Steps */}
          <section aria-labelledby={`steps-${recipe.id}`} className="md:col-span-3">
            <h4
              id={`steps-${recipe.id}`}
              className="text-xs font-bold tracking-[0.18em] text-earth uppercase"
            >
              Preparation
            </h4>
            <ol className="mt-4 space-y-5">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest font-serif text-sm text-gold"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p className="pt-1 text-sm leading-relaxed text-ink/75">{step}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <p className="mt-8 rounded-xl bg-sage p-4 text-xs leading-relaxed text-ink/60">
          Tip: adjust salt and spice to your taste.
        </p>
      </div>
    </Modal>
  );
}
