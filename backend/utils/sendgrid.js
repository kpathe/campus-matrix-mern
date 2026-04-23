// utils/sendgrid.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendMail({ to, subject, html, from }) {
  const msg = {
    to,
    from: from || process.env.EMAIL_FROM || 'noreply@campusmatrix.app',
    subject,
    html,
  };
  await sgMail.send(msg);
}
