import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    // Opt a post into the left-anchored wide canvas (text stays at a reading
    // measure; wide figures may bleed rightward). Plain posts keep the default
    // centered narrow column.
    wide: z.boolean().default(false),
  }),
});

export const collections = { posts };
