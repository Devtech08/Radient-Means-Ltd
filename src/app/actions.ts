'use server';

import { sendContactEmail, type SendContactEmailInput } from '@/ai/flows/send-contact-email-flow';

/**
 * Server action to send the contact form email.
 * This function is executed on the server and can be safely called from client components.
 * @param data The contact form data.
 * @returns A promise that resolves when the email is sent.
 */
export async function sendContactEmailAction(data: SendContactEmailInput) {
  try {
    await sendContactEmail(data);
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error('Error sending contact email:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}
