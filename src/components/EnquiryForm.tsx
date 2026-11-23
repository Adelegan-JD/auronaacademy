"use client";

import { useState, type FormEvent } from "react";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2, "Enter your name."),
  email: z.email("Enter a valid email address."),
  country: z.enum(["Canada", "Nigeria", "Other"]),
  programme: z.string().min(1, "Choose a programme."),
  level: z.string().optional(),
  contactMethod: z.enum(["email", "whatsapp"]),
  message: z.string().trim().max(1500, "Message is too long."),
  consent: z.literal(true, { error: "Please confirm the privacy notice." }),
  website: z.string().max(0).optional(),
});

export default function EnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const rawData = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      country: String(formData.get("country") ?? ""),
      programme: String(formData.get("programme") ?? ""),
      level: String(formData.get("level") ?? ""),
      contactMethod: String(formData.get("contactMethod") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    const result = enquirySchema.safeParse(rawData);
    if (!result.success) {
      setStatus("error");
      setFeedback(result.error.issues[0]?.message ?? "Please check your entries.");
      return;
    }

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      const body = await response.json() as { error?: string; notificationStatus?: string };
      if (!response.ok) throw new Error(body.error ?? "The enquiry could not be submitted.");

      setStatus("success");
      setFeedback(body.notificationStatus === "pending"
        ? "Your enquiry was received and saved. Our email notification is delayed, but your message is safe."
        : "Your enquiry has been received. We will be in touch.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "We could not submit your enquiry. Please try again or contact us directly.");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="form-field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" autoComplete="name" required minLength={2} maxLength={100} />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
      </div>
      <div className="form-field">
        <label htmlFor="country">Country</label>
        <select id="country" name="country" required defaultValue="">
          <option value="" disabled>Select your country</option>
          <option value="Canada">Canada</option><option value="Nigeria">Nigeria</option><option value="Other">Other</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="programme">Programme of interest</label>
        <select id="programme" name="programme" required defaultValue="">
          <option value="" disabled>Select a programme</option>
          <option value="STEM and Digital Learning">STEM and Digital Learning</option>
          <option value="English and Language Arts">English and Language Arts</option>
          <option value="Academic Support">Academic Support</option>
          <option value="Professional Development">Professional Development</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="level">Educational level (optional)</label>
        <select id="level" name="level" defaultValue="">
          <option value="">Select an educational level</option>
          <option value="Primary">Primary school</option>
          <option value="Junior Secondary">Junior secondary school</option>
          <option value="Senior Secondary">Senior secondary school</option>
          <option value="University">University</option>
          <option value="Adult Professional">Adult or professional</option>
        </select>
      </div>
      <fieldset className="form-field">
        <legend>Preferred contact method</legend>
        <label className="radio-option"><input type="radio" name="contactMethod" value="email" defaultChecked />Email</label>
        <label className="radio-option"><input type="radio" name="contactMethod" value="whatsapp" />WhatsApp</label>
      </fieldset>
      <div className="form-field">
        <label htmlFor="message">Tell us what you would like to learn (optional)</label>
        <textarea id="message" name="message" rows={5} maxLength={1500} />
      </div>
      <div className="form-field consent-field">
        <label><input type="checkbox" name="consent" required /><span>I have read the privacy notice and understand how my enquiry information will be handled.</span></label>
      </div>
      {status === "error" && <p className="form-message form-error" role="alert">{feedback}</p>}
      {status === "success" && <p className="form-message form-success" role="status">{feedback}</p>}
      <button className="button button-primary form-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
