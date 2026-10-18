import { CONTACT_EMAIL, WEB3FORMS_KEY } from "./site";

export type FormResult = { ok: true } | { ok: false; error: string };

const FALLBACK_ERROR = `Sorry, we couldn't send that. Please email us at ${CONTACT_EMAIL}.`;

// Sends a form submission to the Wadee Harvest inbox via Web3Forms.
// Every field in `fields` appears in the email, labelled by its key.
export async function submitForm(
  subject: string,
  fields: Record<string, string | boolean | undefined>
): Promise<FormResult> {
  if (!WEB3FORMS_KEY) {
    return { ok: false, error: FALLBACK_ERROR };
  }

  const payload: Record<string, string | boolean> = {
    access_key: WEB3FORMS_KEY,
    subject,
    from_name: "Wadee Harvest website",
  };
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === "") continue;
    payload[key] = typeof value === "boolean" ? (value ? "Yes" : "No") : value;
  }
  // Lets the visitor's address work with "Reply" in the inbox.
  if (typeof fields.Email === "string") payload.replyto = fields.Email;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => null);
    if (response.ok && data?.success) return { ok: true };
    return { ok: false, error: FALLBACK_ERROR };
  } catch {
    return { ok: false, error: FALLBACK_ERROR };
  }
}
