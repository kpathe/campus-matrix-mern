// utils/mailtrap.js
import fetch from 'node-fetch';

export async function sendMail({ to, subject, html, from }) {
  const response = await fetch('https://send.api.mailtrap.io/api/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.MAILTRAP_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: {
        email: from || process.env.EMAIL_FROM || 'noreply@campusmatrix.app',
        name: 'Campus Matrix',
      },
      to: [{ email: to }],
      subject,
      html,
    }),
  });
  if (!response.ok) {
    throw new Error(`Mailtrap email failed with status ${response.status}`);
  }
}
