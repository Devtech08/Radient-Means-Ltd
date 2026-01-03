'use server';
/**
 * @fileOverview A mock email sending flow for the contact form.
 *
 * - sendContactEmail - A function that simulates sending an email.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { SendContactEmailInputSchema, type SendContactEmailInput } from '@/ai/schemas/contact-form-schema';


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
