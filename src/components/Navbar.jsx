"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { business } from "@/data/business";

const telHref = `tel:${business.phone.replace(/\s/g, "")}`;

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu with Escape
  useEffect(() => {-0
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-white">
      <nav
        aria-label="Main navigation"
        className="container-site flex h-[76px] items-center justify-between gap-6 md:h-[92px]"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          aria-label="FARMAM ORGANIC home"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <Image
            src="/images/farmam-logo-clean.png"
            alt="FARMAM ORGANIC logo"
            width={180}
            height={147}
            priority
            className="h-[60px] w-auto md:h-[74px]"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative block py-2 text-[15px] whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    active
                      ? "font-semibold text-forest"
                      : "font-medium text-ink/70 hover:text-forest"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-gold transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop call button */}
        <a
          href={telHref}
          aria-label={`Call us on ${business.phone}`}
          className="btn btn-primary hidden px-5 py-2.5 text-[15px] whitespace-nowrap lg:inline-flex"
        >
          <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
          {business.phone}
        </a>

        {/* Mobile: call + menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={telHref}
            aria-label={`Call us on ${business.phone}`}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream shadow-md transition-colors hover:bg-forest-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-forest/5"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-forest/10 bg-white lg:hidden">
          <ul className="container-site py-2">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <li key={link.href} className="border-b border-forest/5 last:border-0">
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3.5 text-base ${
                      active
                        ? "font-semibold text-forest"
                        : "font-medium text-ink/75"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="container-site pb-5">
            <a href={telHref} className="btn btn-primary w-full">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
