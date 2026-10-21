import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    genre: z.string().default('Story'),
    summary: z.string(),
    emoji: z.string().default('📖'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { stories };
