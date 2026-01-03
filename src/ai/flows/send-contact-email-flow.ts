'use server';
/**
 * @fileOverview A mock email sending flow for the contact form.
 *
 * - sendContactEmail - A function that simulates sending an email.
 * - SendContactEmailInput - The input type for the sendContactEmail function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const SendContactEmailInputSchema = z.object({
  name: z.string().describe('The full name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  service: z.string().optional().describe('The service the user is interested in.'),
  message: z.string().describe('The content of the message.'),
});
export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;


const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: SendContactEmailInputSchema,
    outputSchema: z.void(),
  },
  async (input) => {
    // This is a mock implementation.
    // In a real application, you would integrate with an email service
    // like SendGrid, AWS SES, or similar to dispatch the email.

    console.log('---------- MOCK EMAIL SENT ----------');
    console.log(`To: radiantmeansltd@gmail.com`);
    console.log(`From: ${input.name} <${input.email}>`);
    console.log(`Subject: ${input.subject}`);
    console.log('------------------------------------');
    console.log(`Service of Interest: ${input.service || 'Not specified'}`);
    console.log('------------------------------------');
    console.log('Message:');
    console.log(input.message);
    console.log('------------------------------------');

    // Since this is a mock, we just resolve the promise.
    return;
  }
);


export async function sendContactEmail(input: SendContactEmailInput): Promise<void> {
  await sendContactEmailFlow(input);
}
