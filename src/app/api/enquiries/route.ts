import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  country: z.enum(["Canada", "Nigeria", "Other"]),
  programme: z.enum([
    "STEM and Digital Learning",
    "English and Language Arts",
    "Academic Support",
    "Professional Development",
    "Other",
  ]),
  level: z.string().trim().max(80).optional().default(""),
  contactMethod: z.enum(["email", "whatsapp"]),
  message: z.string().trim().max(1500).optional().default(""),
  consent: z.literal(true),
  website: z.string().max(0).optional(),
});

const json = (body: Record<string, unknown>, status: number) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) return json({ error: "Request is too large." }, 413);

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Please submit a valid enquiry." }, 400);
  }

  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) {
    return json({ error: "Please check the form fields and try again." }, 400);
  }
  if (parsed.data.website) return json({ received: true }, 202);

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.ENQUIRY_FROM_EMAIL;
  const toEmail = process.env.ENQUIRY_TO_EMAIL ?? "auronaacademy@gmail.com";
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const salt = process.env.RATE_LIMIT_SALT;

  if (!supabaseUrl || !serviceKey || !salt) {
    console.error("Enquiry service is missing required database configuration.");
    return json({ error: "The enquiry service is temporarily unavailable. Please contact us directly." }, 503);
  }

  const ipHash = createHash("sha256").update(`${salt}:${ip}`).digest("hex");
  const headers = {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
    "Content-Type": "application/json",
  };

  try {
    const limitResponse = await fetch(`${supabaseUrl}/rest/v1/rpc/check_enquiry_rate_limit`, {
      method: "POST",
      headers,
      body: JSON.stringify({ p_ip_hash: ipHash }),
      cache: "no-store",
    });
    if (!limitResponse.ok) {
      console.error("Enquiry rate-limit check failed:", limitResponse.status);
      return json({ error: "We could not process your enquiry right now. Please try again shortly." }, 503);
    }
    const allowed = await limitResponse.json();
    if (allowed !== true) {
      return json({ error: "Too many enquiries from this connection. Please try again in an hour." }, 429);
    }

    const { website: _website, ...enquiry } = parsed.data;
    const insertResponse = await fetch(`${supabaseUrl}/rest/v1/enquiries`, {
      method: "POST",
      headers: { ...headers, Prefer: "return=representation" },
      body: JSON.stringify({ ...enquiry, ip_hash: ipHash, notification_status: "pending" }),
      cache: "no-store",
    });
    if (!insertResponse.ok) {
      console.error("Enquiry persistence failed:", insertResponse.status, await insertResponse.text());
      return json({ error: "We could not save your enquiry. Please try again." }, 503);
    }
    const rows = (await insertResponse.json()) as Array<{ id: string }>;
    const enquiryId = rows[0]?.id;

    let notificationStatus: "sent" | "pending" = "pending";
    if (resendKey && fromEmail && enquiryId) {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: enquiry.email,
          subject: `New Aurona Academy enquiry: ${enquiry.programme}`,
          text: [
            `Enquiry ID: ${enquiryId}`,
            `Name: ${enquiry.name}`,
            `Email: ${enquiry.email}`,
            `Country: ${enquiry.country}`,
            `Programme: ${enquiry.programme}`,
            `Educational level: ${enquiry.level || "Not provided"}`,
            `Preferred contact: ${enquiry.contactMethod}`,
            `Message: ${enquiry.message || "Not provided"}`,
          ].join("\n"),
        }),
        cache: "no-store",
      });
      if (emailResponse.ok) {
        notificationStatus = "sent";
        await fetch(`${supabaseUrl}/rest/v1/enquiries?id=eq.${encodeURIComponent(enquiryId)}`, {
          method: "PATCH",
          headers: { ...headers, Prefer: "return=minimal" },
          body: JSON.stringify({ notification_status: "sent", notification_sent_at: new Date().toISOString() }),
          cache: "no-store",
        });
      } else {
        console.error("Enquiry notification failed:", emailResponse.status);
      }
    }

    return json({ received: true, notificationStatus }, 201);
  } catch (error) {
    console.error("Unexpected enquiry API error:", error);
    return json({ error: "Something went wrong while submitting your enquiry. Please try again." }, 500);
  }
}
