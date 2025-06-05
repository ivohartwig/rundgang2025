import type { CollectionEntry } from 'astro:content';

/**
 * Filters out rows from each project where row.author.id === username.
 * Removes projects with no rows left.
 * @param projects Array of project entries from getCollection('projects')
 * @param username The username to exclude
 */
export function filterProjectRowsExcludingUsername(
	projects: CollectionEntry<'projects'>[],
	username: string,
): CollectionEntry<'projects'>[] {
	return projects
		.map((project) => ({
			...project,
			data: {
				...project.data,
				rows: project.data.rows.filter((row) => row.author.id !== username),
			},
		}))
		.filter((project) => project.data.rows.length > 0);
}

/**
 * Filters out authors where author.data.github_username === username.
 * @param authors Array of author entries from getCollection('authors')
 * @param username The username to exclude
 */
export function filterAuthorsExcludingUsername(
	authors: CollectionEntry<'authors'>[],
	username: string,
): CollectionEntry<'authors'>[] {
	return authors.filter((author) => author.data.github_username !== username);
}
