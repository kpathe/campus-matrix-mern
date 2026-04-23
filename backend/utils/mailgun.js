// utils/mailgun.js
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

export async function sendMail({ to, subject, html, from }) {
  await mg.messages.create(process.env.MAILGUN_DOMAIN, {
    from: from || process.env.EMAIL_FROM || 'noreply@campusmatrix.app',
    to,
    subject,
    html,
  });
}
