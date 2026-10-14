"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const senderEmail = formData.get("senderEmail");
  const website = formData.get("website");
  const message = formData.get("message");

  if (!validateString(name, 120)) return { error: "Please enter your name." };
  if (!validateString(senderEmail, 500)) return { error: "Please enter a valid email." };
  if (website && !validateString(website, 500)) return { error: "Website URL is too long." };
  if (!validateString(message, 5000)) return { error: "Please describe what you need help with." };

  const safeWebsite = typeof website === "string" && website.trim() ? website.trim() : "Not provided";

  try {
    const data = await resend.emails.send({
      from: "Portfolio Services <onboarding@resend.dev>",
      to: "adityachaturvedi2906@gmail.com",
      reply_to: senderEmail,
      subject: `New freelance enquiry from ${name}`,
      text: `New freelance enquiry\n\nName:\n${name}\n\nEmail:\n${senderEmail}\n\nWebsite:\n${safeWebsite}\n\nRequirement:\n${message}`,
    });
    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
