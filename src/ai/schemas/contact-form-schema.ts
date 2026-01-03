/**
 * @fileOverview Defines the Zod schema and TypeScript type for the contact form.
 */
import { z } from 'zod';

export const SendContactEmailInputSchema = z.object({
  name: z.string().min(1, 'Full Name is required.').describe('The full name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().min(1, 'Subject is required.').describe('The subject of the message.'),
  service: z.string().optional().describe('The service the user is interested in.'),
  message: z.string().min(1, 'Message is required.').describe('The content of the message.'),
});

export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;
