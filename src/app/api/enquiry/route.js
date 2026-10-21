// In-memory enquiry store (cleared on server restart).
// Submissions are logged server-side; connect this endpoint to an
// email service or CRM when the business is ready to go live.
const enquiries = [];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function badRequest(message) {
  return Response.json({ success: false, error: message }, { status: 400 });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid request body.");
  }

  const { fullName, email, phone, enquiryType, product, message, consent } =
    body ?? {};

  if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
    return badRequest("Please provide your full name.");
  }
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return badRequest("Please provide a valid email address.");
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return badRequest("Please include a message of at least 10 characters.");
  }
  if (!consent) {
    return badRequest("Consent is required to submit an enquiry.");
  }

  const enquiry = {
    fullName: fullName.trim(),
    email: email.trim(),
    phone: typeof phone === "string" ? phone.trim() : "",
    enquiryType: typeof enquiryType === "string" ? enquiryType : "General Enquiry",
    product: typeof product === "string" ? product : "other",
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  enquiries.push(enquiry);
  console.log("[FARMAM ENQUIRY]", JSON.stringify(enquiry));

  return Response.json({
    success: true,
    message: "Your enquiry has been received. Our team will be in touch.",
  });
}
