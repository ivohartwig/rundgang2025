import { promises as fs } from 'node:fs';
import path from 'node:path';
import { parse } from 'csv-parse/sync';

export const csvColumns = [
	// this order has to match the order of the columns in the csv files
	'project_title',
	'github_username',
	'student_repository_name',
	'student_repository_url',
	'project_url',
	'author',
	'authors',
	'id',

	// 'assignment_name',
	// 'assignment_url',
	// 'starter_code_url',
	// 'github_username',
	// 'roster_identifier',
	// 'student_repository_name',
	// 'student_repository_url',
	// 'submission_timestamp',
	// 'points_awarded',
	// 'points_available',
	// 'project_title',
];

export function parseCSV(content: string): Record<string, string>[] {
	return parse(content, {
		columns: true,
		skip_empty_lines: true,
		trim: true,
	});
}

export async function getAllCsvData(): Promise<
	{ filename: string; rows: Record<string, string>[] }[]
> {
	const dir = path.resolve('./src/data/projects');
	const files = await fs.readdir(dir);
	const csvFiles = files.filter((f) => f.endsWith('clean.csv'));
	const results = await Promise.all(
		csvFiles.map(async (filename) => {
			const filePath = path.join(dir, filename);
			const content = await fs.readFile(filePath, 'utf8');
			return {
				filename,
				rows: parseCSV(content),
			};
		}),
	);
	return results;
}
