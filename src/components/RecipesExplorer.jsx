"use client";

import { useState } from "react";
import { recipes } from "@/data/recipes";
import RecipeCard from "@/components/RecipeCard";
import RecipeDetails from "@/components/RecipeDetails";

/**
 * Client wrapper that holds the currently-open recipe modal state.
 */
export default function RecipesExplorer() {
  const [active, setActive] = useState(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} onOpen={setActive} />
        ))}
      </div>

      <RecipeDetails
        recipe={active}
        open={active !== null}
        onClose={() => setActive(null)}
      />
    </>
  );
}
