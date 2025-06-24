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
 * Filters out rows from each project where row.project_title is in titles array.
 * Removes projects with no rows left.
 * @param titles Array of project titles to exclude
 * @param projects Array of project entries from getCollection('projects')
 * @returns Filtered array of projects with matching rows removed
 */
export function filterProjectsExcludingRowsWithTitle(
	titles: string[],
	projects: CollectionEntry<'projects'>[],
): CollectionEntry<'projects'>[] {
	return projects
		.map((project) => ({
			...project,
			data: {
				...project.data,
				rows: project.data.rows.filter(
					(row) => !titles.includes(row.project_title ?? ''),
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

export function filterProjects({
	projects,
	usersToFilter,
	titlesToFilter,
	projectOrder,
}: {
	projects: CollectionEntry<'projects'>[];
	usersToFilter: string[];
	titlesToFilter: string[];
	projectOrder: string[];
}) {
	const filteredByUser = filterProjectRowsExcludingUsername(
		projects,
		usersToFilter,
	);
	const filteredByTitle = filterProjectsExcludingRowsWithTitle(
		titlesToFilter,
		filteredByUser,
	);

	const projectsOrdered = projectOrder.map((id) =>
		filteredByTitle.find((p) => p.data.id === id),
	);

	const projectsOrderedDeduped = projectsOrdered
		.filter(isProjectEntry)
		.map(dedupeProjectRowsByUrl);

	return projectsOrderedDeduped;
}

export function isProjectEntry(
	project: CollectionEntry<'projects'> | undefined | null,
): project is CollectionEntry<'projects'> {
	return !!project;
}

// Deduplicate project rows by project_url and aggregate authors
export function dedupeProjectRowsByUrl(
	project: CollectionEntry<'projects'>,
): CollectionEntry<'projects'> {
	if (!project || !project.data || !project.data.rows) return project;
	type Row = (typeof project.data.rows)[number] & { authors?: string[] };
	const rowsByUrl: Record<string, Row> = {};
	(project.data.rows as Row[]).forEach((row) => {
		const url = row.project_url;
		if (!url) return;
		if (!rowsByUrl[url]) {
			rowsByUrl[url] = { ...row, authors: [row.author.id] };
		} else {
			if (!rowsByUrl[url].authors!.includes(row.author.id)) {
				rowsByUrl[url].authors!.push(row.author.id);
			}
		}
	});
	const dedupedRows = Object.values(rowsByUrl);
	return {
		...project,
		data: {
			...project.data,
			rows: dedupedRows,
		},
	};
}
