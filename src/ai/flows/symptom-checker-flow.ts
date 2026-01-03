'use server';
/**
 * @fileOverview An AI flow to analyze patient symptoms and suggest a specialist.
 *
 * - analyzeSymptoms - A function that takes a symptom description and returns a specialist suggestion.
 * - AnalyzeSymptomsInput - The input type for the analyzeSymptoms function.
 * - AnalyzeSymptomsOutput - The return type for the analyzeSymptoms function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeSymptomsInputSchema = z.object({
  description: z.string().describe('A description of the patient\'s symptoms.'),
});
export type AnalyzeSymptomsInput = z.infer<typeof AnalyzeSymptomsInputSchema>;

const AnalyzeSymptomsOutputSchema = z.object({
  specialist: z.string().describe('The suggested medical specialist to consult (e.g., Cardiologist, Dermatologist).'),
  explanation: z.string().describe('A brief explanation of why this specialist is recommended based on the symptoms.'),
});
export type AnalyzeSymptomsOutput = z.infer<typeof AnalyzeSymptomsOutputSchema>;

const prompt = ai.definePrompt({
    name: 'symptomAnalysisPrompt',
    input: { schema: AnalyzeSymptomsInputSchema },
    output: { schema: AnalyzeSymptomsOutputSchema },
    prompt: `You are an expert medical assistant. A patient has described their symptoms.
Based on the following description, suggest an appropriate medical specialist they should consult.
Provide the specialist's title and a brief, clear explanation for your recommendation.

Symptoms: {{{description}}}`,
});

const analyzeSymptomsFlow = ai.defineFlow(
  {
    name: 'analyzeSymptomsFlow',
    inputSchema: AnalyzeSymptomsInputSchema,
    outputSchema: AnalyzeSymptomsOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);


export async function analyzeSymptoms(input: AnalyzeSymptomsInput): Promise<AnalyzeSymptomsOutput> {
    return await analyzeSymptomsFlow(input);
}
