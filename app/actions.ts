"use server";

import { contactFormSchema } from "@/schemas";
import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: process.env.EMAIL_SUBJECT,
  text: "",
};

// In-memory store for rate limiting (consider using Redis for production)
const submissionStore: { [key: string]: number[] } = {};

const RATE_LIMIT = 5; // Max submissions per hour
const COOLDOWN = 60 * 1000; // 1 minute cooldown between submissions

export async function sendContactForm(prevState: any, formData: FormData) {
  const ip = "127.0.0.1"; // You'll need to implement a way to get the real IP in production
  const now = Date.now();

  // Check rate limit
  if (submissionStore[ip]) {
    const recentSubmissions = submissionStore[ip].filter(
      (timestamp) => now - timestamp < 60 * 60 * 1000, // 1 hour
    );

    if (recentSubmissions.length >= RATE_LIMIT) {
      return { error: "Too many requests" };
    }

    // Check cooldown
    const lastSubmission = recentSubmissions[recentSubmissions.length - 1];
    if (lastSubmission && now - lastSubmission < COOLDOWN) {
      return { error: "Please wait before submitting again" };
    }
  }

  try {
    const data = contactFormSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    mailOptions.text = `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;

    const result = await transporter.sendMail(mailOptions);

    // Record submission
    submissionStore[ip] = [...(submissionStore[ip] || []), now];

    if (result.accepted) {
      return { message: "Message sent successfully" };
    } else {
      return { error: "Failed to send message" };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { error: "Invalid form data" };
    }
    return { error: "An error occurred" };
  }
}
