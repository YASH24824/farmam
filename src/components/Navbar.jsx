"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream transition-all duration-300 ${
        scrolled
          ? "border-b border-forest/10 shadow-[0_12px_32px_-24px_rgba(7,59,32,0.45)]"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className="container-site flex h-[76px] items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="relative shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          aria-label="FARMAM ORGANIC — go to home page"
        >
          <Image
            src="/images/farmam-logo.png"
            alt="FARMAM ORGANIC logo — From Farm to Food"
            width={150}
            height={131}
            priority
            className="h-13 w-auto md:h-14"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    active
                      ? "font-semibold text-forest"
                      : "font-medium text-ink/65 hover:text-forest"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-0.5 left-0 h-[2.5px] rounded-full bg-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link href="/products" className="btn btn-primary btn-sm">
            Explore Products
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-forest transition-colors hover:bg-forest/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-forest/10 bg-cream transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? "max-h-[480px]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="container-site flex flex-col gap-1 py-4">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-base transition-colors ${
                    active
                      ? "bg-forest text-cream"
                      : "font-medium text-ink/75 hover:bg-forest/5 hover:text-forest"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2 pb-1">
            <Link
              href="/products"
              onClick={() => setOpen(false)}
              className="btn btn-primary w-full"
            >
              Explore Products
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
