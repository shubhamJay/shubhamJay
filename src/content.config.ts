import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		/** If set, list/card links out instead of an on-site post page. */
		externalUrl: z.string().url().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		year: z.number(),
		stack: z.array(z.string()).default([]),
		summary: z.string(),
		cover: z.string().optional(),
		links: z
			.array(
				z.object({
					label: z.string(),
					url: z.string(),
				}),
			)
			.default([]),
		featured: z.boolean().default(false),
		order: z.number().default(99),
	}),
});

const series = defineCollection({
	loader: glob({ base: './src/content/series', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		year: z.number(),
		genres: z.array(z.string()).default([]),
		cover: z.string(),
		summary: z.string(),
		featured: z.boolean().default(false),
	}),
});

const photos = defineCollection({
	loader: glob({ base: './src/content/photos', pattern: '**/*.{yaml,yml}' }),
	schema: z.object({
		src: z.string(),
		title: z.string(),
		genre: z.string(),
		series: z.string().optional(),
		date: z.coerce.date(),
		alt: z.string(),
		featured: z.boolean().default(false),
	}),
});

const achievements = defineCollection({
	loader: glob({ base: './src/content/achievements', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		category: z.enum(['award', 'talk', 'cert', 'contest', 'other']),
		summary: z.string(),
		link: z.string().optional(),
	}),
});

const genres = defineCollection({
	loader: glob({ base: './src/content/genres', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		label: z.string(),
		description: z.string(),
		order: z.number().default(99),
	}),
});

const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
	}),
});

const experience = defineCollection({
	loader: glob({ base: './src/content/experience', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		company: z.string(),
		role: z.string(),
		start: z.string(),
		end: z.string().default('Present'),
		summary: z.string(),
		tech: z.array(z.string()).default([]),
		order: z.number().default(99),
	}),
});

export const collections = {
	blog,
	projects,
	series,
	photos,
	achievements,
	genres,
	pages,
	experience,
};
