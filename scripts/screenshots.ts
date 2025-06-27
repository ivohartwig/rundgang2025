#!/usr/bin/env node

import {
	chromium,
	type Browser,
	type BrowserContext,
	type Page,
} from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { parse } from 'csv-parse/sync';

interface ProjectRecord {
	project_title: string;
	github_username: string;
	student_repository_name: string;
	student_repository_url: string;
	project_url: string;
	author: string;
	authors: string;
	id: string;
}

interface FailedScreenshot {
	id: string;
	url: string;
	csvFile: string;
	err: string;
}

class ScreenshotGenerator {
	private browser: Browser | null = null;
	private context: BrowserContext | null = null;
	private outputDir: string;
	private failed: FailedScreenshot[] = [];
	private successful: number = 0;
	private inputPath: string;

	constructor(
		outputDir: string = 'src/assets/screenshots',
		inputPath: string = 'src/data/projects',
	) {
		this.outputDir = path.resolve(outputDir);
		this.inputPath = path.resolve(inputPath);
	}

	async initialize(): Promise<void> {
		console.log('🚀 Launching Chromium...');
		this.browser = await chromium.launch();
		this.context = await this.browser.newContext({
			viewport: { width: 1440, height: 900 },
			permissions: [],
		});

		// Handle dialogs and media requests
		this.context.on('page', (page: Page) => {
			page.on('dialog', (dialog) => dialog.dismiss().catch(() => {}));
		});

		await this.context.route('**/*', (route) => {
			const req = route.request();
			if (['media', 'websocket'].includes(req.resourceType())) {
				route.abort().catch(() => {});
			} else {
				route.continue().catch(() => {});
			}
		});

		// Create output directory
		await fs.mkdir(this.outputDir, { recursive: true });
	}

	async readCsvFiles(): Promise<{ file: string; records: ProjectRecord[] }[]> {
		const stat = await fs.stat(this.inputPath);

		if (stat.isFile()) {
			// Single file mode
			if (!this.inputPath.endsWith('.csv')) {
				throw new Error('Input file must be a CSV file');
			}

			const fileName = path.basename(this.inputPath);
			const content = await fs.readFile(this.inputPath, 'utf-8');
			const records = await this.parseCsvContent(content, fileName);

			console.log(`📄 Processing single file: ${fileName}`);
			return [{ file: fileName, records }];
		} else {
			// Directory mode
			const files = await fs.readdir(this.inputPath);
			const csvFiles = files.filter((file) => file.endsWith('.csv'));

			console.log(`📄 Found ${csvFiles.length} CSV files in directory`);

			const results: { file: string; records: ProjectRecord[] }[] = [];

			for (const file of csvFiles) {
				const filePath = path.join(this.inputPath, file);
				const content = await fs.readFile(filePath, 'utf-8');
				const records = await this.parseCsvContent(content, file);

				if (records.length > 0) {
					results.push({ file, records });
				}
			}

			return results;
		}
	}

	private async parseCsvContent(
		content: string,
		fileName: string,
	): Promise<ProjectRecord[]> {
		try {
			// Try comma delimiter first
			const records = parse(content, {
				delimiter: ',',
				columns: true,
				skip_empty_lines: true,
				quote: '"',
			}) as ProjectRecord[];

			console.log(`✅ Parsed ${fileName}: ${records.length} projects`);
			return records;
		} catch (error) {
			// Fallback to pipe delimiter
			try {
				const records = parse(content, {
					delimiter: '|',
					columns: true,
					skip_empty_lines: true,
				}) as ProjectRecord[];

				console.log(
					`✅ Parsed ${fileName} (pipe delimited): ${records.length} projects`,
				);
				return records;
			} catch (fallbackError) {
				console.error(`❌ Failed to parse ${fileName}:`, fallbackError);
				return [];
			}
		}
	}

	async takeScreenshot(record: ProjectRecord, csvFile: string): Promise<void> {
		if (!this.context) throw new Error('Browser context not initialized');

		const page = await this.context.newPage();
		const url = record.project_url || record.student_repository_url;

		if (!url) {
			this.failed.push({
				id: record.id,
				url: 'No URL found',
				csvFile,
				err: 'Missing both project_url and student_repository_url',
			});
			await page.close();
			return;
		}

		// Create subdirectory for this CSV file
		const csvDir = path.join(this.outputDir, path.basename(csvFile, '.csv'));
		await fs.mkdir(csvDir, { recursive: true });

		const screenshotPath = path.join(csvDir, `${record.id}.png`);

		try {
			await page.goto(url, { timeout: 10000, waitUntil: 'networkidle' });
			await page.waitForTimeout(1000); // Extra settle time

			await page.screenshot({
				path: screenshotPath,
				type: 'png',
				fullPage: false,
			});

			console.log('✅', record.id, record.project_title);
			this.successful++;
		} catch (err) {
			const errorMessage = err instanceof Error ? err.message : String(err);
			console.error('❌', record.id, errorMessage);
			this.failed.push({
				id: record.id,
				url,
				csvFile,
				err: errorMessage,
			});
		} finally {
			await page.close();
		}
	}

	async processAllProjects(): Promise<void> {
		const csvData = await this.readCsvFiles();
		const totalProjects = csvData.reduce(
			(sum, { records }) => sum + records.length,
			0,
		);

		console.log(`\n📸 Starting screenshots for ${totalProjects} projects...\n`);

		for (const { file, records } of csvData) {
			console.log(`\n🔄 Processing ${file}...`);

			for (const record of records) {
				await this.takeScreenshot(record, file);
			}
		}

		await this.generateReport();
	}

	async generateReport(): Promise<void> {
		const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
		const reportPath = path.join(this.outputDir, `errors-${timestamp}.json`);

		if (this.failed.length > 0) {
			await fs.writeFile(reportPath, JSON.stringify(this.failed, null, 2));
			console.log(`\n📄 Error report saved to: ${reportPath}`);
		}

		// Generate summary report with both successes and failures
		const summaryPath = path.join(this.outputDir, `summary-${timestamp}.json`);
		const summary = {
			timestamp: new Date().toISOString(),
			total: this.successful + this.failed.length,
			successful: this.successful,
			failed: this.failed.length,
			outputDirectory: this.outputDir,
			errors: this.failed
		};
		
		await fs.writeFile(summaryPath, JSON.stringify(summary, null, 2));
		console.log(`📄 Summary report saved to: ${summaryPath}`);

		console.log(`\n📊 Summary:`);
		console.log(`   ✅ Successful: ${this.successful}`);
		console.log(`   ❌ Failed: ${this.failed.length}`);
		console.log(`   📁 Output directory: ${this.outputDir}`);

		if (this.failed.length > 0) {
			console.log(
				`\n⚠️  ${this.failed.length} screenshots failed. Check error report for details.`,
			);
		}
	}

	async cleanup(): Promise<void> {
		if (this.browser) {
			await this.browser.close();
		}
	}

	async run(): Promise<void> {
		try {
			await this.initialize();
			await this.processAllProjects();
		} catch (error) {
			console.error('💥 Fatal error:', error);
			process.exit(1);
		} finally {
			await this.cleanup();
		}

		// Exit with error code if any screenshots failed
		if (this.failed.length > 0) {
			process.exit(1);
		}
	}
}

// Parse CLI arguments
const { values, positionals } = parseArgs({
	args: process.argv.slice(2),
	options: {
		output: {
			type: 'string',
			short: 'o',
			default: 'src/assets/screenshots',
		},
		help: {
			type: 'boolean',
			short: 'h',
		},
	},
	allowPositionals: true,
});

if (values.help) {
	console.log(`
Usage: node screenshots.ts [options] [file-or-directory]

Options:
  -o, --output <dir>    Output directory for screenshots (default: src/assets/screenshots)
  -h, --help           Show this help message

Arguments:
  file-or-directory    CSV file or directory containing CSV files
                       (default: src/data/projects)

Examples:
  node screenshots.ts                                    # Process all CSV files in src/data/projects
  node screenshots.ts src/data/projects/example.csv     # Process single CSV file
  node screenshots.ts -o public/screenshots src/data/   # Store in public/ (direct URLs)
`);
	process.exit(0);
}

const inputPath = positionals[0] || 'src/data/projects';
const outputDir = values.output!;

// Run the screenshot generator
const generator = new ScreenshotGenerator(outputDir, inputPath);
generator.run().catch(console.error);
