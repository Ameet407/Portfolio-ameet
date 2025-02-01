"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail") as string;
  const message = formData.get("message") as string;

  
  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  try {
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ameetkumar119@gmail.com", 
      subject: "Message from contact form",
      headers: {
        "Reply-To": senderEmail, 
      },
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });

    return { data };
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }
};
