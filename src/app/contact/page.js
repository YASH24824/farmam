import { Suspense } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Handshake,
  ArrowRight,
  Instagram,
  Facebook,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { business, whatsappLink } from "@/data/business";
import { CornerSprig, WheatDivider } from "@/components/Decorations";

export const metadata = {
  title: "Contact Us",
  description:
    "Let's bring good food to more homes. For product enquiries, retail partnerships, distribution opportunities or bulk orders — we'd love to hear from you.",
  openGraph: {
    title: "Contact Us — FARMAM ORGANIC",
    description:
      "For product enquiries, retail partnerships, distribution and bulk orders — we'd love to hear from you.",
  },
};

function ContactDetailsCard({ icon: Icon, title, children, href }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-forest/10 bg-white p-5 transition-colors hover:border-gold/40">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-dark">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-xs font-bold tracking-[0.18em] text-earth uppercase">
          {title}
        </h3>
        <div className="mt-1.5 text-sm leading-relaxed break-words text-ink/75">
          {children}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function ContactPage() {
  const wa = whatsappLink();
  const socials = [
    { label: "Instagram", href: business.social.instagram, Icon: Instagram },
    { label: "Facebook", href: business.social.facebook, Icon: Facebook },
  ].filter((s) => s.href);

  return (
    <>
      {/* ------------------------------------------------ HERO */}
      <section className="texture-paper relative overflow-hidden bg-cream">
        <CornerSprig className="pointer-events-none absolute -top-2 -right-2 h-28 w-28 text-earth/25" />
        <div className="container-site relative py-14 text-center md:py-20">
          <p className="eyebrow">Contact Us</p>
          <h1 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-[1.1] text-forest text-balance md:text-5xl">
            Let's Bring Good Food to{" "}
            <em className="text-gold-dark italic">More Homes.</em>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            For product enquiries, retail partnerships, distribution
            opportunities, or general questions — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ------------------------------- FORM + DETAILS */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Form */}
          <div className="card-frame p-6 md:p-9 lg:col-span-3">
            <h2 className="font-serif text-2xl text-forest md:text-3xl">
              Send Us a Message
            </h2>
            <p className="mt-2 mb-7 text-sm leading-relaxed text-ink/60">
              Fill in the form and our team will get back to you. Fields
              marked <span className="text-gold-dark">*</span> are required.
            </p>
            <Suspense
              fallback={
                <div className="flex items-center justify-center py-16 text-sm text-ink/50">
                  Loading enquiry form…
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Details */}
          <div className="space-y-4 lg:col-span-2">
            <ContactDetailsCard
              icon={Mail}
              title="Email Us"
              href={`mailto:${business.email}`}
            >
              {business.email}
            </ContactDetailsCard>

            <ContactDetailsCard icon={Phone} title="Call Us">
              {business.phone}
              <span className="mt-1 block text-xs text-ink/45">
                Business hours to be updated
              </span>
            </ContactDetailsCard>

            {wa ? (
              <ContactDetailsCard
                icon={MessageCircle}
                title="WhatsApp"
                href={wa}
              >
                Chat with us on WhatsApp
              </ContactDetailsCard>
            ) : null}

            <ContactDetailsCard icon={MapPin} title="Address">
              {business.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </ContactDetailsCard>

            {socials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-bold tracking-[0.18em] text-earth uppercase">
                  Follow Us
                </span>
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`FARMAM ORGANIC on ${label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors hover:border-gold hover:bg-gold hover:text-forest-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}

            {/* Retailer & distributor panel */}
            <div className="relative mt-6 overflow-hidden rounded-2xl bg-forest p-6 md:p-7">
              <WheatDivider tone="dark" className="mb-5 w-full" />
              <Handshake
                className="h-8 w-8 text-gold"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-serif text-2xl text-cream">
                Interested in Working With Us?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                We're keen to partner with retailers, distributors and bulk
                buyers who share our love for honest Indian ingredients.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact?type=Retail%20Partnership"
                  className="btn btn-gold btn-sm"
                >
                  Retail Partnership
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact?type=Distribution"
                  className="btn btn-outline-light btn-sm"
                >
                  Distribution
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
