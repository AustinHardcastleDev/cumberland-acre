"use server";

import { Resend } from "resend";
import {
  PROPERTY_TYPES,
  SITE,
  SOURCES,
  TIMELINES,
} from "@/lib/site";

export type OfferState = {
  ok: boolean;
  error?: string;
};

const MAX = {
  name: 120,
  phone: 40,
  email: 160,
  address: 240,
  condition: 2000,
} as const;

function readString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function isAllowed<T extends readonly string[]>(
  value: string,
  list: T,
): value is T[number] {
  return list.includes(value);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitOffer(
  _prev: OfferState,
  formData: FormData,
): Promise<OfferState> {
  if (readString(formData, "company")) {
    return { ok: true };
  }

  const name = readString(formData, "name");
  const phone = readString(formData, "phone");
  const email = readString(formData, "email");
  const address = readString(formData, "address");
  const type = readString(formData, "type");
  const timeline = readString(formData, "timeline");
  const condition = readString(formData, "condition");
  const source = readString(formData, "source");

  if (!name || name.length > MAX.name) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!phone || phone.length < 7 || phone.length > MAX.phone) {
    return { ok: false, error: "Please enter a phone number we can reach." };
  }
  if (email && (!isValidEmail(email) || email.length > MAX.email)) {
    return { ok: false, error: "Please enter a valid email, or leave it blank." };
  }
  if (!address || address.length > MAX.address) {
    return { ok: false, error: "Please enter the property address." };
  }
  if (!isAllowed(type, PROPERTY_TYPES)) {
    return { ok: false, error: "Please choose a property type." };
  }
  if (!isAllowed(timeline, TIMELINES)) {
    return { ok: false, error: "Please choose a timeline." };
  }
  if (condition.length > MAX.condition) {
    return { ok: false, error: "Condition notes are a bit long. Please shorten them." };
  }
  if (!isAllowed(source, SOURCES)) {
    return { ok: false, error: "Please tell us how you heard about us." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false,
      error: "The form is temporarily unavailable. Please call or text us instead.",
    };
  }

  const from = process.env.RESEND_FROM ?? SITE.from;
  const to = process.env.CONTACT_EMAIL ?? SITE.email;
  const resend = new Resend(apiKey);

  const rows = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "Not provided"],
    ["Property address", address],
    ["Type", type],
    ["Timeline", timeline],
    ["Condition notes", condition || "None"],
    ["How they heard about us", source],
  ];

  const html = `
    <div style="font-family: Georgia, 'Times New Roman', serif; color: #17251C; line-height: 1.55;">
      <p style="margin: 0 0 16px;">A new property inquiry came in from cumberlandacre.com.</p>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding: 8px 12px 8px 0; border-bottom: 1px solid #DCE1D3; vertical-align: top; color: #6B7563; width: 180px;">${escapeHtml(label)}</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #DCE1D3; vertical-align: top; white-space: pre-wrap;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email || undefined,
    subject: `Property inquiry: ${address}`,
    html,
    text,
  });

  if (error) {
    console.error("Resend error:", error.message);
    return {
      ok: false,
      error: "We couldn't send that just now. Please call or text 615-212-5101.",
    };
  }

  return { ok: true };
}
