import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const trades = defineCollection({
  // One Markdown file per trade: src/content/trades/<slug>.md
  loader: glob({ pattern: '**/*.md', base: './src/content/trades' }),
  schema: z.object({
    trade: z.string(), // e.g. "Salons"
    title: z.string().min(20).max(70),
    description: z.string().min(70).max(160),
    lastUpdated: z.coerce.date(),
    summary: z.string(),
    commonQuestions: z.array(z.string()).min(4), // questions customers typically ask this trade
    leadFields: z.array(z.string()).min(3), // what the chatbot collects for a quote request
    handoff: z.string(), // when the bot hands over to a human
    partners: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).min(3),
  }),
});

export const collections = { trades };
