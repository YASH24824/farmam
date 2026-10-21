"use client";

import { Clock, Users, Gauge, ArrowRight } from "lucide-react";
import Image from "next/image";
import { difficultyTone } from "@/data/recipes";

/**
 * Recipe card — opens the full recipe in a modal dialog.
 */
export default function RecipeCard({ recipe, onOpen }) {
  return (
    <article className="card-frame group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_2px_2px_rgba(7,59,32,0.05),0_28px_48px_-28px_rgba(7,59,32,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/35 via-transparent to-transparent" />
        <span
          className={`chip absolute bottom-3 left-3 border ${difficultyTone[recipe.difficulty] ?? ""} bg-white/95`}
        >
          <Gauge className="h-3.5 w-3.5" aria-hidden="true" />
          {recipe.difficulty}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-serif text-2xl text-forest">{recipe.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">{recipe.intro}</p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="chip">
            <Clock className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
            {recipe.time}
            <span className="text-ink/45">(est.)</span>
          </span>
          <span className="chip">
            <Users className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
            Serves {recipe.serves}
          </span>
        </div>

        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={() => onOpen(recipe)}
            className="btn btn-outline btn-sm w-full"
            aria-haspopup="dialog"
          >
            View Recipe
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
