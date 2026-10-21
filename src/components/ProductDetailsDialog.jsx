"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, PackageCheck } from "lucide-react";
import Modal from "@/components/Modal";

/**
 * Product detail dialog — opens from a product card.
 */
export default function ProductDetailsDialog({ product, open, onClose }) {
  if (!product) return null;
  const titleId = `product-title-${product.id}`;

  return (
    <Modal open={open} onClose={onClose} labelledBy={titleId} closeLabel={`Close ${product.name} details`}>
      <div className="grid md:grid-cols-2">
        {/* Image panel */}
        <div className="texture-paper relative flex items-center justify-center bg-cream p-8 md:p-10">
          <div className="relative aspect-[2/3] w-full max-w-[260px]">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 768px) 70vw, 300px"
              className="object-contain drop-shadow-[0_24px_32px_rgba(7,59,32,0.22)]"
            />
          </div>
          <span className="chip absolute top-4 left-4">{product.category}</span>
        </div>

        {/* Content panel */}
        <div className="flex flex-col p-6 md:p-8">
          <p className="eyebrow">{product.englishName}</p>
          <h3 id={titleId} className="mt-2 font-serif text-3xl text-forest">
            FARMAM ORGANIC {product.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-ink/75">
            {product.longDescription}
          </p>

          <h4 className="mt-6 text-xs font-bold tracking-[0.18em] text-earth uppercase">
            Highlights
          </h4>
          <ul className="mt-3 space-y-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-ink/75">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-sage p-4">
            <h4 className="text-xs font-bold tracking-[0.18em] text-forest uppercase">
              In the kitchen
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              {product.kitchenNotes}
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-ink/60">
            <PackageCheck className="h-4 w-4 text-gold-dark" aria-hidden="true" />
            Packaging: {product.packaging}
          </div>

          <Link
            href={`/contact?product=${product.id}`}
            onClick={onClose}
            className="btn btn-primary mt-6 w-full"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </Modal>
  );
}
