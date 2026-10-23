"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { business, whatsappLink } from "@/data/business";

const TOPICS = [
  "Buying for my home",
  "Bulk order",
  "Retail / distribution",
  "Something else",
];

// Older links used ?type=Retail Partnership etc.
const LEGACY_TOPICS = {
  "Retail Partnership": "Retail / distribution",
  Distribution: "Retail / distribution",
  "Bulk Order": "Bulk order",
};

export default function ContactForm() {
  const searchParams = useSearchParams();
  const productParam = products.find((p) => p.id === searchParams.get("product"));
  const typeParam = searchParams.get("type");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState(LEGACY_TOPICS[typeParam] ?? TOPICS[0]);
  const [message, setMessage] = useState(
    productParam ? `I'd like to know more about ${productParam.name}.` : ""
  );
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please add your name and a short message.");
      return;
    }
    setError("");

    const text = [
      `Hi FARMAM ORGANIC, this is ${name.trim()}.`,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
      `About: ${topic}`,
      "",
      message.trim(),
    ]
      .filter((line) => line !== null)
      .join("\n");

    const href =
      whatsappLink(text) ??
      `mailto:${business.email}?subject=${encodeURIComponent(
        `Enquiry: ${topic}`
      )}&body=${encodeURIComponent(text)}`;

    window.open(href, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="field-label">Your name</span>
          <input
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field mt-1.5"
          />
        </label>
        <label className="block">
          <span className="field-label">
            Phone <span className="font-normal text-ink/45">(optional)</span>
          </span>
          <input
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="input-field mt-1.5"
          />
        </label>
      </div>

      <fieldset>
        <legend className="field-label">What is it about?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={topic === t}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                topic === t
                  ? "border-forest bg-forest text-cream"
                  : "border-forest/15 bg-white text-ink/70 hover:border-forest/40"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block">
        <span className="field-label">Message</span>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input-field mt-1.5 resize-y"
        />
      </label>

      {error ? (
        <p role="alert" className="field-error">
          {error}
        </p>
      ) : null}

      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Send on WhatsApp
      </button>

      {sent ? (
        <p className="text-sm text-leaf" role="status">
          WhatsApp should now be open with your message. Just press send there.
        </p>
      ) : null}
    </form>
  );
}
