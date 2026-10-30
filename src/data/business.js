/* ------------------------------------------------------------------ */
/*  FARMAM ORGANIC — Business configuration                            */
/*  ------------------------------------------------------------------ */
/* ------------------------------------------------------------------ */

export const business = {
  name: "FARMAM ORGANIC",
  tagline: "From Farm to Food",

  email: "info@farmamorganic.in",

  phone: "+91 81601 58274",

  // WhatsApp number in international format, digits only (e.g. "919876543210").
  // Leave empty ("") to hide all WhatsApp buttons until a real number exists.
  whatsapp: "918160158274",

  addressLines: ["FARMAM ORGANIC", "India"],

  // Social profiles — replace with real profile URLs (empty strings are hidden)
  social: {
    instagram: "https://instagram.com/farmamorganic",
    facebook: "https://facebook.com/farmamorganic",
    youtube: "",
  },
};

/** WhatsApp link for a specific product enquiry (falls back to the contact page). */
export function productEnquiryLink(product) {
  const message =
    `Hello FARMAM ORGANIC, I would like to enquire about ${product.name}` +
    ` (${product.englishName}), ${product.packaging}. Please share price and availability.`;
  return whatsappLink(message) ?? `/contact?product=${product.id}`;
}

/** Builds a wa.me enquiry link. Returns null when WhatsApp is not configured. */
export function whatsappLink(
  message = "Hello FARMAM ORGANIC team, I would like to make an enquiry."
) {
  if (!business.whatsapp) return null;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
