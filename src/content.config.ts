import { z, defineCollection, reference } from 'astro:content';
import { getAllCsvData, csvColumns } from './lib/utils.js';
import { glob } from 'astro/loaders';
import fs from 'node:fs';
import path from 'node:path';

// const projects = defineCollection({
// 	loader: glob({ pattern: '**/*.json', base: './src/data' }),
// 	schema: z.object({}),
// });

// Helper function to check if screenshot exists
function getScreenshotPath(id: string, csvFilename: string): string | null {
	const csvBaseName = csvFilename.replace(/\.csv$/, '');
	const screenshotPath = path.resolve(
		`src/assets/screenshots/${csvBaseName}/${id}.png`,
	);

	if (fs.existsSync(screenshotPath)) {
		return `../assets/screenshots/${csvBaseName}/${id}.png`;
	}

	// Fallback to placeholder
	const placeholderPath = path.resolve('src/assets/placeholder.png');
	if (fs.existsSync(placeholderPath)) {
		return '../assets/placeholder.png';
	}

	return null;
}

// Helper function to get color data for a project
function getColorData(id: string): any | null {
	const colorsPath = path.resolve('src/data/projects/colors.json');

	if (!fs.existsSync(colorsPath)) {
		console.error('no colors path found');
		return null;
	}

	try {
		const colorsContent = fs.readFileSync(colorsPath, 'utf-8');

		const colorsReport = JSON.parse(colorsContent);

		// Extract colors array from report structure
		const colorsArray = colorsReport.colors || [];
		const projectColor = colorsArray.find((color: any) => color.id === id);

		if (!projectColor) {
			console.warn(`No color data for image id: ${id}`);
		}
		return projectColor || null;
	} catch (error) {
		console.warn('Failed to load color data:', error);
		return null;
	}
}

const projects = defineCollection({
	loader: async () => {
		const csvData = await getAllCsvData();
		return csvData.map(({ filename, rows }) => ({
			id: filename.replace(/\.csv$/, ''),
			filename,
			rows: rows.map((row) => {
				if (!row.id) {
					console.warn('Row missing id:', row);
				}
				return {
					...row,
					project_title: row.project_title,
					project_url: row.student_repository_name
						? `https://hbk-bs.github.io/${row.student_repository_name}`
						: null,
					briefing: filename.replace(/\.csv$/, ''),
					author: row.github_username,
					screenshot: getScreenshotPath(row.id, filename),
					colors: row.id ? getColorData(row.id) : null,
				};
			}),
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
				screenshot: z.string().nullable(),
				colors: z
					.object({
						id: z.string(),
						imagePath: z.string(),
						dominantColor: z.object({
							rgb: z.tuple([z.number(), z.number(), z.number()]),
							hex: z.string(),
						}),
						colors: z.array(
							z.object({
								rgb: z.tuple([z.number(), z.number(), z.number()]),
								hex: z.string(),
							}),
						),
					})
					.nullable(),
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
// Helper function to download avatar at build time
async function downloadAvatar(username: string): Promise<string | null> {
	const avatarDir = 'public/avatars';
	const avatarPath = path.resolve(`${avatarDir}/${username}.png`);
	
	// Create directory if it doesn't exist
	if (!fs.existsSync(avatarDir)) {
		fs.mkdirSync(avatarDir, { recursive: true });
	}
	
	// Return existing avatar path if it exists
	if (fs.existsSync(avatarPath)) {
		return `/avatars/${username}.png`;
	}
	
	try {
		const response = await fetch(`https://github.com/${username}.png?size=200`);
		if (!response.ok) {
			console.warn(`Failed to fetch avatar for ${username}: ${response.status}`);
			return null;
		}
		
		const buffer = await response.arrayBuffer();
		fs.writeFileSync(avatarPath, new Uint8Array(buffer));
		console.log(`✅ Downloaded avatar: ${username}`);
		return `/avatars/${username}.png`;
	} catch (error) {
		console.warn(`Error downloading avatar for ${username}:`, error);
		return null;
	}
}

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
		
		// Download avatars for all authors
		const authorsWithAvatars = await Promise.all(
			Array.from(usernames).map(async (username) => {
				const avatarPath = await downloadAvatar(username);
				return {
					id: username,
					github_username: username,
					url: `https://github.com/${username}`,
					avatar: avatarPath,
				};
			})
		);
		
		return authorsWithAvatars;
	},
	schema: z.object({
		id: z.string(),
		github_username: z.string(),
		url: z.string(),
		avatar: z.string().nullable(),
	}),
});

export const collections = {
	projects,
	authors,
	briefings,
};
