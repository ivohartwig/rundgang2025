import { z, defineCollection, reference } from 'astro:content';
import { getAllCsvData, csvColumns } from './lib/utils.js';
import { glob } from 'astro/loaders';

// const projects = defineCollection({
// 	loader: glob({ pattern: '**/*.json', base: './src/data' }),
// 	schema: z.object({}),
// });

const projects = defineCollection({
	loader: async () => {
		const csvData = await getAllCsvData();
		return csvData.map(({ filename, rows }) => ({
			id: filename.replace(/\.csv$/, ''),
			filename,
			rows: rows.map((row) => ({
				...row,
				project_title: row.project_title,
				project_url: row.student_repository_name
					? `https://hbk-bs.github.io/${row.student_repository_name}`
					: null,
				briefing: filename.replace(/\.csv$/, ''),
				author: row.github_username,
			})),
		}));
	},
	schema: z.object({
		id: z.string(),
		filename: z.string(),
		rows: z.array(
			z.object({
				...Object.fromEntries(csvColumns.map((col) => [col, z.string()])),
				project_url: z.string().nullable(),
				project_title: z.string().nullable(),
				briefing: reference('briefings'),
				author: reference('authors'),
			}),
		),
	}),
});

const briefings = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/data/briefings' }),
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
	}),
});
const authors = defineCollection({
	loader: async () => {
		const csvData = await getAllCsvData();
		const usernames = new Set<string>();
		for (const { rows } of csvData) {
			for (const row of rows) {
				if (row.github_username && row.github_username.trim() !== '') {
					usernames.add(row.github_username.trim());
				}
			}
		}
		return Array.from(usernames).map((username) => ({
			id: username,
			github_username: username,
			url: `https://github.com/${username}`,
		}));
	},
	schema: z.object({
		id: z.string(),
		github_username: z.string(),
		url: z.string(),
	}),
});

export const collections = {
	projects,
	authors,
	briefings,
};
