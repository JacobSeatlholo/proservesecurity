"use server";

import { z } from "zod";
import { db } from "@/lib/db";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  phone: z
    .string()
    .trim()
    .min(9, "Please enter a valid contact number")
    .max(20)
    .regex(/^[0-9+\s()-]+$/, "Phone number can only contain digits and + ( ) -"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(160)
    .optional()
    .or(z.literal("")),
  suburb: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please choose a service").max(120),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type LeadFormState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};

export async function submitLead(_prev: LeadFormState | null, formData: FormData): Promise<LeadFormState> {
  const parsed = leadSchema.safeParse({
    name: formData.get("name") ?? "",
    phone: formData.get("phone") ?? "",
    email: formData.get("email") ?? "",
    suburb: formData.get("suburb") ?? "",
    service: formData.get("service") ?? "",
    message: formData.get("message") ?? "",
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, error: "Please check the highlighted fields.", fieldErrors };
  }

  const data = parsed.data;

  try {
    await db.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        suburb: data.suburb || null,
        service: data.service,
        message: data.message || null,
      },
    });
  } catch (err) {
    console.error("Failed to store lead", err);
    return { ok: false, error: "Something went wrong on our side. Please call us instead." };
  }

  return { ok: true };
}
