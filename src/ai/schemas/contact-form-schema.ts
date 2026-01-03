/**
 * @fileOverview Defines the Zod schema and TypeScript type for the contact form.
 */
import { z } from 'zod';

export const SendContactEmailInputSchema = z.object({
  name: z.string().describe('The full name of the person sending the message.'),
  email: z.string().email().describe('The email address of the sender.'),
  subject: z.string().describe('The subject of the message.'),
  service: z.string().optional().describe('The service the user is interested in.'),
  message: z.string().describe('The content of the message.'),
});

export type SendContactEmailInput = z.infer<typeof SendContactEmailInputSchema>;
