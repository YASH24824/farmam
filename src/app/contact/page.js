import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { business, whatsappLink } from "@/data/business";

export const metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp or email FARMAM ORGANIC for product questions, bulk orders, retail and distribution.",
  openGraph: {
    title: "Contact Us | FARMAM ORGANIC",
    description:
      "Call, WhatsApp or email FARMAM ORGANIC for product questions, bulk orders, retail and distribution.",
  },
};

const telHref = `tel:${business.phone.replace(/\s/g, "")}`;

export default function ContactPage() {
  const wa = whatsappLink();

  const ways = [
    { label: "Call us", value: business.phone, href: telHref },
    wa ? { label: "WhatsApp", value: business.phone, href: wa, external: true } : null,
    { label: "Email", value: business.email, href: `mailto:${business.email}` },
  ].filter(Boolean);

  return (
    <section className="bg-cream py-14 md:py-20">
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: how to reach us */}
        <div className="lg:col-span-5">
          <h1 className="font-serif text-4xl text-forest md:text-5xl">
            Contact us
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/70">
            Have a question about our products, or want to place an order?
            Call or message us directly, or fill in the form and it will open
            in WhatsApp.
          </p>

          <dl className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
            {ways.map((w) => (
              <div key={w.label} className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-sm text-ink/55">{w.label}</dt>
                <dd>
                  <a
                    href={w.href}
                    {...(w.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-base font-semibold text-forest underline-offset-4 hover:underline"
                  >
                    {w.value}
                  </a>
                </dd>
              </div>
            ))}
            <div className="flex items-baseline justify-between gap-4 py-4">
              <dt className="text-sm text-ink/55">Based in</dt>
              <dd className="text-base text-ink/80">India</dd>
            </div>
          </dl>

          <div className="mt-10">
            <h2 className="font-serif text-xl text-forest">
              Shops, distributors and bulk buyers
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/65">
              We supply retailers, distributors and bulk buyers. Tell us what
              you need and the quantities, and we will share prices and
              availability.
            </p>
          </div>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-forest/10 bg-white p-6 md:p-10">
            <h2 className="font-serif text-2xl text-forest">Send us a message</h2>
            <div className="mt-6">
              <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
