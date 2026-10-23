"use client";

import { useState } from "react";
import Image from "next/image";
import ProductDetailsDialog from "@/components/ProductDetailsDialog";
import { productEnquiryLink } from "@/data/business";

/**
 * Catalogue product card with enquiry CTA and details dialog.
 */
export default function ProductCard({ product }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <article className="card-frame group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_2px_2px_rgba(7,59,32,0.05),0_28px_48px_-28px_rgba(7,59,32,0.35)]">
        {/* Pack image */}
        <div className="relative overflow-hidden bg-cream">
          <span className="chip absolute top-3.5 left-3.5 z-10 bg-white/95">
            {product.category}
          </span>
          <div className="relative aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.05]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div>
            <h3 className="font-serif text-2xl text-forest">{product.name}</h3>
            <p className="mt-1 text-[11px] font-bold tracking-[0.16em] text-earth uppercase">
              {product.englishName}
            </p>
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/70">
            {product.description}
          </p>

          <div className="mt-auto flex gap-2.5 pt-6">
            <a
              href={productEnquiryLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex-1"
            >
              Enquire Now
            </a>
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
