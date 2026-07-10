import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    period: z.string(),
    context: z.string(), // e.g. "Clear Timber Analytics", "TU Delft thesis"
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    // Optional single-series bar chart rendered above the prose.
    chart: z
      .object({
        caption: z.string(),
        max: z.number(),
        baseline: z.number(),
        note: z.string().optional(),
        items: z.array(
          z.object({
            label: z.string(),
            value: z.number(),
            best: z.boolean().default(false),
          })
        ),
      })
      .optional(),
  }),
});

export const collections = { projects };
