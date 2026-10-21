"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle2,
  Loader2,
  Send,
  AlertTriangle,
} from "lucide-react";
import { products } from "@/data/products";
import { business } from "@/data/business";

const ENQUIRY_TYPES = [
  "Product Enquiry",
  "Retail Partnership",
  "Distribution",
  "Bulk Order",
  "General Enquiry",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?[0-9()\-\s]{7,18}$/;

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  enquiryType: "Product Enquiry",
  product: "other",
  message: "",
  consent: false,
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim() || values.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone.trim() && !PHONE_RE.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number (or leave it blank).";
  }
  if (!values.enquiryType) {
    errors.enquiryType = "Please select an enquiry type.";
  }
  if (!values.product) {
    errors.product = "Please select a product.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Please tell us a little more — at least 10 characters.";
  }
  if (!values.consent) {
    errors.consent = "Please tick the box so we can respond to your enquiry.";
  }
  return errors;
}

function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="field-error">
      {message}
    </p>
  );
}

export default function ContactForm() {
  const searchParams = useSearchParams();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  // Prefill from query params (?product=jeera&type=Retail Partnership)
  useEffect(() => {
    const product = searchParams.get("product");
    const type = searchParams.get("type");
    setValues((v) => ({
      ...v,
      product: product && products.some((p) => p.id === product) ? product : v.product,
      enquiryType: type && ENQUIRY_TYPES.includes(type) ? type : v.enquiryType,
    }));
  }, [searchParams]);

  const setField = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    // clear the field's error as the user fixes it
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const buildMailto = () => {
    const subject = encodeURIComponent(
      `Website enquiry — ${values.enquiryType}`
    );
    const body = encodeURIComponent(
      `Name: ${values.fullName}\nEmail: ${values.email}\nPhone: ${
        values.phone || "—"
      }\nEnquiry type: ${values.enquiryType}\nProduct: ${
        products.find((p) => p.id === values.product)?.name ?? "Other"
      }\n\nMessage:\n${values.message}`
    );
    return `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus("submitting");
    setErrorMessage("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          enquiryType: values.enquiryType,
          product: values.product,
          message: values.message.trim(),
          consent: values.consent,
        }),
      });
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      setSubmittedName(values.fullName.trim().split(" ")[0]);
      setStatus("success");
    } catch (err) {
      setErrorMessage(
        "We couldn't send your enquiry just now. Please try again in a moment, or email us directly using the button below."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex h-full flex-col items-center justify-center py-14 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-leaf/15">
          <CheckCircle2 className="h-8 w-8 text-leaf" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-serif text-3xl text-forest">
          Thank you{submittedName ? `, ${submittedName}` : ""}!
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70">
          Your enquiry has been received. Our team will get back to you at the
          earliest. For anything urgent, you're always welcome to write to us
          at{" "}
          <a
            href={`mailto:${business.email}`}
            className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-2"
          >
            {business.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setValues(initialValues);
            setStatus("idle");
          }}
          className="btn btn-outline btn-sm mt-8"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  const errorCount = Object.values(errors).filter(Boolean).length;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Full name */}
        <div>
          <label htmlFor="fullName" className="field-label">
            Full Name <span className="text-gold-dark">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g. Aarav Sharma"
            value={values.fullName}
            onChange={setField("fullName")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`input-field ${errors.fullName ? "input-field-error" : ""}`}
          />
          <FieldError id="fullName-error" message={errors.fullName} />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="field-label">
            Email Address <span className="text-gold-dark">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={setField("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`input-field ${errors.email ? "input-field-error" : ""}`}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="field-label">
            Phone Number{" "}
            <span className="font-normal text-ink/45">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            value={values.phone}
            onChange={setField("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={`input-field ${errors.phone ? "input-field-error" : ""}`}
          />
          <FieldError id="phone-error" message={errors.phone} />
        </div>

        {/* Enquiry type */}
        <div>
          <label htmlFor="enquiryType" className="field-label">
            Enquiry Type <span className="text-gold-dark">*</span>
          </label>
          <select
            id="enquiryType"
            name="enquiryType"
            value={values.enquiryType}
            onChange={setField("enquiryType")}
            aria-invalid={Boolean(errors.enquiryType)}
            aria-describedby={errors.enquiryType ? "enquiryType-error" : undefined}
            className={`input-field ${errors.enquiryType ? "input-field-error" : ""}`}
          >
            {ENQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <FieldError id="enquiryType-error" message={errors.enquiryType} />
        </div>

        {/* Product */}
        <div className="sm:col-span-2">
          <label htmlFor="product" className="field-label">
            Product <span className="text-gold-dark">*</span>
          </label>
          <select
            id="product"
            name="product"
            value={values.product}
            onChange={setField("product")}
            aria-invalid={Boolean(errors.product)}
            aria-describedby={errors.product ? "product-error" : undefined}
            className={`input-field ${errors.product ? "input-field-error" : ""}`}
          >
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} — {p.englishName}
              </option>
            ))}
            <option value="other">Other / Not product-specific</option>
          </select>
          <FieldError id="product-error" message={errors.product} />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="field-label">
            Message <span className="text-gold-dark">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your enquiry — quantities, retail interest, or simply say hello…"
            value={values.message}
            onChange={setField("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`input-field resize-y ${errors.message ? "input-field-error" : ""}`}
          />
          <FieldError id="message-error" message={errors.message} />
        </div>

        {/* Consent */}
        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
            <input
              type="checkbox"
              checked={values.consent}
              onChange={setField("consent")}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-forest/30 accent-[#2F7D32]"
            />
            <span>
              I agree that my enquiry details may be used to respond to my
              message. <span className="text-gold-dark">*</span>
            </span>
          </label>
          <FieldError id="consent-error" message={errors.consent} />
        </div>
      </div>

      {errorCount > 0 && status === "idle" && (
        <p className="mt-5 rounded-xl border border-red-700/25 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          Please review the highlighted fields — {errorCount} field
          {errorCount > 1 ? "s" : ""} need{errorCount > 1 ? "" : "s"} your
          attention.
        </p>
      )}

      {status === "error" && (
        <div
          className="mt-5 flex flex-col gap-3 rounded-xl border border-red-700/25 bg-red-50 px-4 py-4 text-sm text-red-800"
          role="alert"
        >
          <p className="flex items-start gap-2.5">
            <AlertTriangle className="mt-0.5 h-4.5 w-4.5 shrink-0" aria-hidden="true" />
            {errorMessage}
          </p>
          <a href={buildMailto()} className="btn btn-outline btn-sm self-start">
            Email Us Directly Instead
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn btn-primary mt-7 w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Enquiry
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-ink/50">
        Prefer email? Write to us anytime at{" "}
        <a
          href={`mailto:${business.email}`}
          className="font-semibold text-forest underline decoration-gold decoration-2 underline-offset-2"
        >
          {business.email}
        </a>
      </p>
    </form>
  );
}
