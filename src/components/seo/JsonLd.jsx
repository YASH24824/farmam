import { siteUrl } from "@/data/navigation";
import { business } from "@/data/business";
import { products } from "@/data/products";

/** Renders one or more schema.org objects as a JSON-LD script tag. */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here; "<" is escaped to avoid closing the tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\u003c") }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: business.name,
  slogan: business.tagline,
  url: siteUrl,
  logo: `${siteUrl}/images/farmam-logo-clean.png`,
  email: business.email,
  telephone: business.phone,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  sameAs: Object.values(business.social).filter(Boolean),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: business.phone,
    email: business.email,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "hi", "gu"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: business.name,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en-IN",
};

export const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "FARMAM ORGANIC products",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `${p.name} (${p.englishName})`,
      description: p.description,
      image: `${siteUrl}${p.image}`,
      category: p.category,
      brand: { "@type": "Brand", name: business.name },
    },
  })),
};

export function breadcrumbSchema(name, path) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name, item: `${siteUrl}${path}` },
    ],
  };
}
