import { MessageCircle } from "lucide-react";
import { business, whatsappLink } from "@/data/business";

/**
 * Floating WhatsApp enquiry button.
 * Renders nothing until a real WhatsApp number is configured in
 * src/data/business.js — this keeps the site honest about what works.
 */
export default function WhatsAppButton() {
  const href = whatsappLink();
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with ${business.name} on WhatsApp`}
      className="fixed right-4 bottom-4 z-40 flex h-12 w-12 md:right-5 md:bottom-5 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#1faa53] text-white shadow-[0_10px_30px_-8px_rgba(31,170,83,0.6)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
    </a>
  );
}
