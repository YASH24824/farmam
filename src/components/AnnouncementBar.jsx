import { Wheat } from "lucide-react";

/** Slim announcement bar shown above the sticky navbar. */
export default function AnnouncementBar() {
  return (
    <div className="bg-forest-deep text-cream/90">
      <div className="container-site flex h-9 items-center justify-center gap-2.5">
        <Wheat className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
        <p className="truncate text-center text-[11px] font-medium tracking-[0.14em] uppercase sm:text-xs">
          Bringing the goodness of Indian farms to your kitchen
        </p>
        <Wheat
          className="hidden h-3.5 w-3.5 shrink-0 text-gold sm:block"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
