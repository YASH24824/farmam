"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductDetailsDialog from "@/components/ProductDetailsDialog";

/**
 * Catalogue product card with enquiry CTA and details dialog.
 */
export default function ProductCard({ product }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <article className="card-frame group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_2px_2px_rgba(7,59,32,0.05),0_28px_48px_-28px_rgba(7,59,32,0.35)]">
        {/* Pack image */}
        <div className="texture-paper relative flex items-center justify-center overflow-hidden bg-cream p-7">
          <span className="chip absolute top-3.5 left-3.5 z-10 bg-white/95">
            {product.category}
          </span>
          <div className="relative aspect-[2/3] w-[62%] max-w-[220px] transition-transform duration-500 group-hover:scale-[1.05]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 35vw, 260px"
              className="object-contain drop-shadow-[0_20px_28px_rgba(7,59,32,0.2)]"
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <h3 className="font-serif text-2xl text-forest">{product.name}</h3>
            <span className="text-[10px] font-bold tracking-[0.18em] text-earth uppercase">
              {product.englishName}
            </span>
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
            {product.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {product.highlights.slice(0, 2).map((h) => (
              <span key={h} className="chip">
                {h}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-2.5 pt-6">
            <Link
              href={`/contact?product=${product.id}`}
              className="btn btn-primary btn-sm flex-1"
            >
              Enquire Now
            </Link>
            <button
              type="button"
              onClick={() => setDetailsOpen(true)}
              className="btn btn-outline btn-sm flex-1"
              aria-haspopup="dialog"
            >
              View Details
            </button>
          </div>
        </div>
      </article>

      <ProductDetailsDialog
        product={product}
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
      />
    </>
  );
}
