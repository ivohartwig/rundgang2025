# Scripts

This directory contains utility scripts for managing student project data and generating screenshots.

## Scripts Overview

### 1. `add-uuid.ts` - UUID Generator
Adds unique UUIDs to CSV files that are missing them in the `id` column.

### 2. `screenshots.ts` - Screenshot Generator  
Automated screenshot generator for student projects using Playwright. Takes screenshots of all project URLs found in CSV files and organizes them by project category.

### 3. `extract-colors.ts` - Color Extractor
Extracts dominant colors from generated screenshots using ColorThief. Analyzes each image to find the 5 most prominent colors plus the single most dominant color.

## Prerequisites

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Chromium browser (if not already installed):
   ```bash
   npx playwright install chromium
   ```

## UUID Generator (`add-uuid.ts`)

### Purpose
Ensures all CSV files have unique UUID identifiers in the `id` column. Required before running the screenshot generator.

### Usage

Add UUIDs to a single CSV file:
```bash
node scripts/add-uuid.ts src/data/projects/example.csv
```

Add UUIDs to all CSV files:
```bash
# Process each file individually
node scripts/add-uuid.ts src/data/projects/a-generative-graphic-novel-grades-1750141106_clean.csv
node scripts/add-uuid.ts src/data/projects/blinkenlichten-grades-1748958812_clean.csv
# ... etc
```

### How It Works
- Reads the CSV file and looks for the `id` column
- Generates a new UUID for any empty or missing `id` values
- Preserves existing UUIDs and other data
- Only writes to file if changes are made
- Handles quoted CSV values properly

## Screenshot Generator (`screenshots.ts`)

### Usage

### Basic Usage

Process all CSV files in the default directory:
```bash
npm run screenshots
```

### Single File Testing

Process a single CSV file (recommended for testing):
```bash
npm run screenshots src/data/projects/example.csv
```

### Custom Output Directory

Save screenshots to a custom directory:
```bash
npm run screenshots -- -o test-screenshots
npm run screenshots -- --output my-screenshots src/data/projects/example.csv
```

### Help

Show all available options:
```bash
npm run screenshots -- --help
```

## How It Works

1. **Input**: Reads CSV files containing project data with columns:
   - `id` (UUID) - Used as screenshot filename
   - `project_url` - Primary URL for screenshots
   - `student_repository_url` - Fallback URL
   - `project_title` - For logging

2. **Processing**: 
   - Launches Chromium browser with 1024x1024 viewport
   - Blocks media/websocket requests for faster loading
   - Navigates to each project URL with 10s timeout
   - Takes PNG screenshot after content settles

3. **Output**:
   - Creates subdirectories by CSV filename
   - Saves screenshots as `{uuid}.png`
   - Generates error report for failed captures
   - Prints progress and summary

## Output Structure

```
screenshots/
├── a-generative-graphic-novel-grades-1750141106_clean/
│   ├── 12345678-1234-5678-9abc-123456789012.png
│   └── 87654321-4321-8765-cba9-210987654321.png
├── blinkenlichten-grades-1748958812_clean/
│   └── ...
└── errors-20250627.json
```

## Error Handling

- Failed screenshots are logged to `errors-YYYYMMDD.json`
- Script exits with code 1 if any failures occur
- Individual page errors don't stop the entire process
- Network timeouts and missing URLs are handled gracefully

## Performance

- Processes ~114 projects across 6 categories
- Estimated runtime: 5-10 minutes for all projects
- Use single file mode for faster testing iterations

## Color Extractor (`extract-colors.ts`)

### Purpose
Analyzes screenshot images to extract dominant color palettes using ColorThief library. Generates color data that can be used for theming and visual design.

### Usage

Extract colors from all screenshots:
```bash
npm run extract-colors
```

Extract colors from custom directory:
```bash
npm run extract-colors -- -i screenshots
```

Save colors to custom output file:
```bash
npm run extract-colors -- -o custom-colors.json
```

### How It Works
- Scans all PNG files in screenshot directories recursively  
- Uses ColorThief to extract 5 dominant colors + 1 primary dominant color
- Outputs both RGB values `[r, g, b]` and hex codes `#rrggbb`
- Generates JSON report with color data indexed by image UUID
- Saves to `src/data/projects/colors.json` by default

### Output Structure
```json
{
  "timestamp": "2025-06-27T...",
  "totalImages": 114,
  "processed": 110,
  "failed": 4,
  "colors": [
    {
      "id": "uuid-here", 
      "imagePath": "src/assets/screenshots/project/uuid.png",
      "dominantColor": { "rgb": [45, 123, 200], "hex": "#2d7bc8" },
      "colors": [
        { "rgb": [45, 123, 200], "hex": "#2d7bc8" },
        { "rgb": [200, 45, 123], "hex": "#c82d7b" }
      ]
    }
  ]
}
```

## Workflow

Typical workflow for processing student project data:

1. **Ensure UUIDs exist** (run once or when adding new CSV files):
   ```bash
   node scripts/add-uuid.ts src/data/projects/new-file.csv
   ```

2. **Test screenshots on single file**:
   ```bash
   npm run screenshots src/data/projects/small-file.csv
   ```

3. **Generate all screenshots**:
   ```bash
   npm run screenshots
   ```

4. **Extract colors from screenshots**:
   ```bash
   npm run extract-colors
   ```

5. **Check results**:
   - Review screenshot files in `src/assets/screenshots/` directory
   - Review color data in `src/data/projects/colors.json`
   - Check error reports if any failures occurred