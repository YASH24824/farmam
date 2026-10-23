"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

/**
 * Interactive product catalogue — search, category filters,
 * responsive grid and empty state.
 */
export default function ProductCatalogue() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Products");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory =
        category === "All Products" || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.englishName.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const isFiltered = query.trim() !== "" || category !== "All Products";

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Search */}
        <div className="relative w-full lg:max-w-sm">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-ink/40"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, e.g. jeera, millet, dal"
            aria-label="Search products by name"
            className="input-field rounded-full py-3 pl-11"
          />
        </div>

        {/* Category filters */}
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter products by category"
        >
          {categories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  active
                    ? "border-forest bg-forest text-cream shadow-md shadow-forest/20"
                    : "border-forest/20 bg-white text-ink/65 hover:border-forest/50 hover:text-forest"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>


      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-5 flex flex-col items-center rounded-3xl border border-dashed border-forest/25 bg-white/60 px-6 py-20 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-dark">
            <SearchX className="h-7 w-7 text-earth" aria-hidden="true" />
          </span>
          <h3 className="mt-5 font-serif text-2xl text-forest">
            No products found
          </h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/60">
            We couldn't find anything matching your search. Try a different
            keyword or browse the full range instead.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All Products");
            }}
            className="btn btn-outline btn-sm mt-7"
          >
            Clear Search & Filters
          </button>
        </div>
      )}
    </div>
  );
}
