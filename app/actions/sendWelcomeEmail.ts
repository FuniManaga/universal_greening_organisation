import { Resend } from 'resend';
import { WelcomeEmail } from '@/emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(name: string, email: string, level: string) {
  try {
    await resend.emails.send({
      from: 'UGO Network <no-reply@universalgreening.org>',
      to: email,
      subject: 'Welcome to UGO Network!',
      react: WelcomeEmail({ name, level }),
    });
  } catch (error) {
    console.error('Failed to send welcome email:', error);
  }
}