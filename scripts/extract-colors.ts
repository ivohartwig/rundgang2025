#!/usr/bin/env node

import { Vibrant } from 'node-vibrant/node';
import fs from 'node:fs/promises';
import path from 'node:path';
import { parseArgs } from 'node:util';

interface ColorData {
	id: string;
	imagePath: string;
	colors: {
		rgb: [number, number, number];
		hex: string;
	}[];
	dominantColor: {
		rgb: [number, number, number];
		hex: string;
	};
}

interface ColorReport {
	timestamp: string;
	totalImages: number;
	processed: number;
	failed: number;
	outputPath: string;
	colors: ColorData[];
	errors: {
		imagePath: string;
		error: string;
	}[];
}

class ColorExtractor {
	private screenshotsDir: string;
	private outputPath: string;
	private colorData: ColorData[] = [];
	private errors: { imagePath: string; error: string }[] = [];

	constructor(
		screenshotsDir: string = 'src/assets/screenshots',
		outputPath?: string,
	) {
		this.screenshotsDir = path.resolve(screenshotsDir);
		this.outputPath =
			outputPath || path.resolve('src/data/projects/colors.json');
	}

	private rgbToHex(r: number, g: number, b: number): string {
		return '#' + [r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('');
	}

	async findScreenshots(): Promise<string[]> {
		const screenshots: string[] = [];

		try {
			const entries = await fs.readdir(this.screenshotsDir, {
				withFileTypes: true,
			});

			for (const entry of entries) {
				if (entry.isDirectory()) {
					const subDir = path.join(this.screenshotsDir, entry.name);
					const subFiles = await fs.readdir(subDir);

					for (const file of subFiles) {
						if (
							file.endsWith('.png') &&
							!file.startsWith('errors-') &&
							!file.startsWith('summary-')
						) {
							screenshots.push(path.join(subDir, file));
						}
					}
				} else if (
					entry.name.endsWith('.png') &&
					!entry.name.startsWith('errors-') &&
					!entry.name.startsWith('summary-')
				) {
					screenshots.push(path.join(this.screenshotsDir, entry.name));
				}
			}
		} catch (error) {
			console.error('Error reading screenshots directory:', error);
		}

		return screenshots;
	}

	async extractColors(imagePath: string): Promise<ColorData | null> {
		try {
			const palette = await Vibrant.from(imagePath).getPalette();

			const id = path.basename(imagePath, '.png');

			// Get the most vibrant color as dominant, fallback to others if null
			const dominantSwatch =
				palette.Vibrant ||
				palette.DarkVibrant ||
				palette.LightVibrant ||
				palette.Muted ||
				palette.DarkMuted ||
				palette.LightMuted;

			if (!dominantSwatch) {
				throw new Error('No colors could be extracted from image');
			}

			// Collect all available colors
			const availableColors = Object.values(palette).filter(
				(swatch) => swatch !== null,
			);

			const colorData: ColorData = {
				id,
				imagePath: path.relative(process.cwd(), imagePath),
				dominantColor: {
					rgb: dominantSwatch.rgb,
					hex: dominantSwatch.hex,
				},
				colors: availableColors.slice(0, 5).map((swatch) => ({
					rgb: swatch!.rgb,
					hex: swatch!.hex,
				})),
			};

			console.log(`✅ ${id}: ${colorData.dominantColor.hex}`);
			return colorData;
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : String(error);
			console.error(`❌ ${path.basename(imagePath)}: ${errorMessage}`);

			this.errors.push({
				imagePath: path.relative(process.cwd(), imagePath),
				error: errorMessage,
			});

			return null;
		}
	}

	async processAllImages(): Promise<void> {
		const screenshots = await this.findScreenshots();

		if (screenshots.length === 0) {
			console.log('No screenshots found in directory:', this.screenshotsDir);
			return;
		}

		console.log(
			`🎨 Processing ${screenshots.length} screenshots for color extraction...\n`,
		);

		for (const imagePath of screenshots) {
			const colorData = await this.extractColors(imagePath);
			if (colorData) {
				this.colorData.push(colorData);
			}
		}

		await this.generateReport();
	}

	async generateReport(): Promise<void> {
		const report: ColorReport = {
			timestamp: new Date().toISOString(),
			totalImages: this.colorData.length + this.errors.length,
			processed: this.colorData.length,
			failed: this.errors.length,
			outputPath: this.outputPath,
			colors: this.colorData,
			errors: this.errors,
		};

		await fs.writeFile(this.outputPath, JSON.stringify(report, null, 2));

		console.log(`\n📊 Color Extraction Summary:`);
		console.log(`   🎨 Total images: ${report.totalImages}`);
		console.log(`   ✅ Processed: ${report.processed}`);
		console.log(`   ❌ Failed: ${report.failed}`);
		console.log(`   📄 Colors saved to: ${this.outputPath}`);

		if (this.errors.length > 0) {
			console.log(
				`\n⚠️  ${this.errors.length} images failed color extraction. Check the report for details.`,
			);
		}
	}

	async run(): Promise<void> {
		try {
			await this.processAllImages();
		} catch (error) {
			console.error('💥 Fatal error:', error);
			process.exit(1);
		}

		if (this.errors.length > 0) {
			process.exit(1);
		}
	}
}

// Parse CLI arguments
const { values, positionals } = parseArgs({
	args: process.argv.slice(2),
	options: {
		input: {
			type: 'string',
			short: 'i',
			default: 'src/assets/screenshots',
		},
		output: {
			type: 'string',
			short: 'o',
		},
		help: {
			type: 'boolean',
			short: 'h',
		},
	},
	allowPositionals: false,
});

if (values.help) {
	console.log(`
Usage: node extract-colors.ts [options]

Options:
  -i, --input <dir>     Screenshots directory (default: src/assets/screenshots)
  -o, --output <file>   Output JSON file (default: src/data/projects/colors.json)
  -h, --help           Show this help message

Examples:
  node extract-colors.ts                           # Process screenshots in default directory
  node extract-colors.ts -i screenshots           # Process screenshots in custom directory
  node extract-colors.ts -o colors-report.json    # Save to custom output file
`);
	process.exit(0);
}

const inputDir = values.input!;
const outputPath = values.output;

// Run the color extractor
const extractor = new ColorExtractor(inputDir, outputPath);
extractor.run().catch(console.error);
