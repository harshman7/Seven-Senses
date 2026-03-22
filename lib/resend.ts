import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

export const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL ?? "hello@sevensenses.com";
export const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
