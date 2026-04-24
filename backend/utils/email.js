import { sendMail as sendGridMail } from "./sendgrid.js";
import { sendMail as sendMailgun } from "./mailgun.js";
import { sendMail as sendMailtrap } from "./mailtrap.js";
const buildHtml = ({ heading, body, code }) => `
  <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #1e293b;">
    <h2 style="color: #312e81;">${heading}</h2>
    <p style="font-size: 15px; line-height: 1.6;">${body}</p>
    <div style="margin: 24px 0; padding: 16px; font-size: 28px; font-weight: 700; letter-spacing: 6px; text-align: center; background: #eef2ff; color: #4338ca; border-radius: 12px;">
      ${code}
    </div>
    <p style="font-size: 13px; color: #64748b;">If you did not request this, you can safely ignore this email.</p>
  </div>
`;

const sendWithResend = async ({ to, subject, html }) => {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.EMAIL_FROM || "Campus Matrix <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend email failed with status ${response.status}`);
  }
};

const sendWithBrevo = async ({ to, subject, html }) => {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": process.env.BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        name: "Campus Matrix",
        email: process.env.EMAIL_FROM || "noreply@campusmatrix.app",
      },
      to: [{ email: to }],
      subject,
      htmlContent: html,
    }),
  });

  if (!response.ok) {
    throw new Error(`Brevo email failed with status ${response.status}`);
  }
};

  const html = buildHtml({ heading, body, code });

  if (process.env.MAILTRAP_API_TOKEN) {
    return sendMailtrap({ to, subject, html });
  }
  if (process.env.MAILGUN_API_KEY && process.env.MAILGUN_DOMAIN) {
    return sendMailgun({ to, subject, html });
  }
  if (process.env.SENDGRID_API_KEY) {
    return sendGridMail({ to, subject, html });
  }
  if (process.env.RESEND_API_KEY) {
    return sendWithResend({ to, subject, html });
  }
  if (process.env.BREVO_API_KEY) {
    return sendWithBrevo({ to, subject, html });
  }
  console.log(`[EMAIL FALLBACK] ${subject} -> ${to} :: OTP ${code}`);
};
