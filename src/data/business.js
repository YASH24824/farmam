/* ------------------------------------------------------------------ */
/*  FARMAM ORGANIC — Business configuration                            */
/*  ------------------------------------------------------------------ */
/*  IMPORTANT: These are PLACEHOLDER contact details.                  */
/*  Replace each value with the business's real information            */
/*  before launching the website. Nothing here should be presented     */
/*  to customers as final until it is updated by the business.         */
/* ------------------------------------------------------------------ */

export const business = {
  name: "FARMAM ORGANIC",
  tagline: "From Farm to Food",

  // TODO: replace with the actual business email address
  email: "hello@farmamorganic.com",

  // TODO: replace with the actual business phone number
  phone: "+91 XXXXX XXXXX",

  // WhatsApp number in international format, digits only (e.g. "919876543210").
  // Leave empty ("") to hide all WhatsApp buttons until a real number exists.
  whatsapp: "",

  // TODO: replace with the registered business address lines
  addressLines: ["FARMAM ORGANIC", "Address to be updated", "India"],

  // Social profiles — replace with real profile URLs (empty strings are hidden)
  social: {
    instagram: "https://instagram.com/farmamorganic",
    facebook: "https://facebook.com/farmamorganic",
    youtube: "",
  },
};

/** Builds a wa.me enquiry link. Returns null when WhatsApp is not configured. */
export function whatsappLink(
  message = "Hello FARMAM ORGANIC team, I would like to make an enquiry."
) {
  if (!business.whatsapp) return null;
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}
