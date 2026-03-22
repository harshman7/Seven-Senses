"use server";

import { resend, NOTIFICATION_EMAIL, FROM_EMAIL } from "@/lib/resend";

interface InquiryResult {
  success: boolean;
  message: string;
}

export async function submitInquiry(email: string): Promise<InquiryResult> {
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Please provide a valid email address." };
  }

  if (!resend) {
    console.log(`[Seven Senses] Inquiry from: ${email} (Resend not configured)`);
    return {
      success: true,
      message: "Thank you. We will be in touch shortly.",
    };
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: FROM_EMAIL,
        to: NOTIFICATION_EMAIL,
        subject: "New Retreat Inquiry — Seven Senses",
        html: `
          <div style="font-family: Georgia, serif; color: #1C1A17; padding: 40px;">
            <h2 style="font-weight: 400; letter-spacing: 0.1em;">New Inquiry</h2>
            <p style="margin-top: 20px;">A guest has expressed interest in learning more.</p>
            <p style="margin-top: 12px;"><strong>Email:</strong> ${email}</p>
            <hr style="border: none; border-top: 1px solid #8A9E8C; margin: 30px 0;" />
            <p style="font-size: 12px; color: #999;">Seven Senses — Bespoke Global Retreats</p>
          </div>
        `,
      }),
      resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "Your Inquiry — Seven Senses",
        html: `
          <div style="font-family: Georgia, serif; color: #1C1A17; padding: 40px; background: #F5F0E8;">
            <h2 style="font-weight: 400; letter-spacing: 0.15em;">SEVEN SENSES</h2>
            <p style="margin-top: 24px; line-height: 1.8;">
              Thank you for your inquiry. A member of our team will be in touch within 48 hours
              to begin a confidential conversation about your retreat.
            </p>
            <p style="margin-top: 16px; line-height: 1.8;">
              In the meantime, know that every experience we curate is shaped around you — 
              your rhythm, your intentions, your sense of what matters.
            </p>
            <p style="margin-top: 24px; font-style: italic; color: #8A9E8C;">
              With warmth,<br/>The Seven Senses Team
            </p>
          </div>
        `,
      }),
    ]);

    return {
      success: true,
      message: "Thank you. We will be in touch shortly.",
    };
  } catch (error) {
    console.error("Failed to send inquiry emails:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again or contact us directly.",
    };
  }
}
