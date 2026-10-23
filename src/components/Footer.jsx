import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { business } from "@/data/business";
import { navLinks } from "@/data/navigation";
import { products } from "@/data/products";

const socialIcons = [
  { key: "instagram", label: "Instagram", href: business.social.instagram, Icon: Instagram },
  { key: "facebook", label: "Facebook", href: business.social.facebook, Icon: Facebook },
  { key: "youtube", label: "YouTube", href: business.social.youtube, Icon: Youtube },
].filter((s) => s.href);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-forest-deep text-cream/75">
      <div className="container-site grid grid-cols-2 gap-x-6 gap-y-10 py-12 md:gap-12 md:py-16 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 lg:col-span-4">
          <div className="inline-flex items-center justify-center rounded-3xl bg-cream px-5 py-4 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)] ring-1 ring-gold/40 ring-offset-4 ring-offset-forest-deep">
            <Image
              src="/images/farmam-logo-clean.png"
              alt="FARMAM ORGANIC logo"
              width={150}
              height={123}
              className="h-20 w-auto"
            />
          </div>
          <p className="mt-5 font-script text-3xl text-gold">
            From Farm to Food
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
            Natural Indian food products inspired by traditional agriculture,
            quality ingredients, and authentic flavours.
          </p>
          {socialIcons.length > 0 && (
            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map(({ key, label, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`FARMAM ORGANIC on ${label}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="col-span-1 lg:col-span-2" aria-label="Footer navigation">
          <h3 className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Explore
          </h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/65 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Products */}
        <div className="col-span-1 lg:col-span-3">
          <h3 className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Our Range
          </h3>
          <ul className="mt-5 space-y-3">
            {products.map((product) => (
              <li key={product.id}>
                <Link
                  href="/products"
                  className="text-sm text-cream/65 transition-colors hover:text-gold"
                >
                  {product.name} ({product.englishName})
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-2 lg:col-span-3">
          <h3 className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-cream/65">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" aria-hidden="true" />
              <a
                href={`mailto:${business.email}`}
                className="break-all transition-colors hover:text-gold"
              >
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" aria-hidden="true" />
              <a href={`tel:${business.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/80" aria-hidden="true" />
              <span>
                {business.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col items-center justify-between gap-2 pt-5 pb-20 text-xs text-cream/45 sm:flex-row md:pb-5">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <p className="font-script text-lg text-gold/80">From Farm to Food</p>
        </div>
      </div>
    </footer>
  );
}
