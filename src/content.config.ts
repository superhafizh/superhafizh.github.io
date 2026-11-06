import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    // One sentence, shown in the work list and as the page description.
    summary: z.string(),
    // Shown as-is, e.g. "2021 – 2023" or "2023 – now".
    period: z.string(),
    // YYYY-MM, used only for sorting (newest first).
    start: z.string().regex(/^\d{4}-\d{2}$/),
    role: z.string(),
    org: z.string(),
    stack: z.array(z.string()),
    link: z.url().optional(),
    // Drafts are left out of the build entirely.
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
