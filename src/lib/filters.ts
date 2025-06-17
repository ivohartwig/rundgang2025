import type { CollectionEntry } from 'astro:content';

/**
 * Filters out rows from each project where row.author.id === username.
 * Removes projects with no rows left.
 * @param projects Array of project entries from getCollection('projects')
 * @param usernames The usernames to exclude
 */
export function filterProjectRowsExcludingUsername(
	projects: CollectionEntry<'projects'>[],
	usernames: string[],
): CollectionEntry<'projects'>[] {
	return projects
		.map((project) => ({
			...project,
			data: {
				...project.data,
				rows: project.data.rows.filter(
					(row) => !usernames.includes(row.author.id),
				),
			},
		}))
		.filter((project) => project.data.rows.length > 0);
}

/**
 * Filters out authors where author.data.github_username is in usernames array.
 * @param authors Array of author entries from getCollection('authors')
 * @param usernames The usernames to exclude
 */
export function filterAuthorsExcludingUsername(
	authors: CollectionEntry<'authors'>[],
	usernames: string[],
): CollectionEntry<'authors'>[] {
	return authors.filter(
		(author) => !usernames.includes(author.data.github_username),
	);
}
