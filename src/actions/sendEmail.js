"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.EMAIL_API);

export const sendEmail = async (formData) => {
  const email = formData.get("email");
  const message = formData.get("message");

  if (!email || typeof email !== "string") {
    return {
      error: "Invalid",
    };
  }

  try {
    await resend.emails.send({
      from: "roman@sleboda.eu",
      to: "roman.sleboda@yahoo.com",
      subject: `LEAD ${email}`,
      text: message,
    });

    return { success: true };
  } catch (error) {
    return { success: false };
  }
};
