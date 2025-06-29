# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Installation**: Use `npm ci` (exact versions, respects package-lock.json)
**Development**: `npm run dev` - starts Astro dev server
**Build**: `npm run build` - builds for production
**Preview**: `npm run preview` - preview production build

## Project Architecture

This is an **Astro 5** project showcasing student projects from University of Arts Braunschweig's "Fundamentals of Digital Communication" seminar. The architecture centers around content collections that dynamically load and process CSV project data.

### Key Architecture Patterns

**Content Collections System**: 
- `src/content.config.ts` defines three interconnected collections: `projects`, `authors`, and `briefings`
- Projects collection dynamically loads CSV files from `src/data/projects/` and transforms them into structured data
- Each project gets a computed `project_url` based on GitHub Pages pattern: `https://hbk-bs.github.io/{student_repository_name}`
- Projects include screenshot paths and color data automatically loaded from generated assets
- Authors collection extracts unique GitHub usernames from CSV data
- Briefings collection loads markdown files from `src/data/briefings/`

**Data Processing**:
- `src/lib/utils.ts` contains `getAllCsvData()` function for CSV processing
- CSV data is cleaned and normalized with computed fields for project URLs and references
- Cross-references between collections using Astro's `reference()` function
- Screenshots automatically linked from `src/assets/screenshots/{csv-name}/{uuid}.png`
- Color data loaded from `src/data/projects/colors.json` using UUID matching

**Styling**: TailwindCSS 4.1.8 integrated via Vite plugin (not PostCSS)

## Important Rules from Cursor Configuration

- **Dependencies**: Always use exact versions, no semver ranges
- **Installation**: Use `npm ci` with package-lock.json for consistent builds  
- **Git Commits**: Use conventional commit format: `type(scope): description`
- **Code Style**: Be terse, provide actual code solutions, treat as expert-level
- **Comments**: Respect existing code comments, only remove if completely irrelevant

## Project Context

- **Purpose**: Student project showcase website for academic seminar
- **Deployment**: Netlify hosting
- **Data Source**: CSV files containing project grades and metadata
- **URL Pattern**: Student projects hosted on GitHub Pages with predictable URLs
- **Asset Pipeline**: Automated screenshot capture and color extraction for visual content

## Scripts and Asset Generation

Located in `/scripts/` directory:

1. **`add-uuid.ts`** - Adds unique UUIDs to CSV files for consistent project identification
2. **`screenshots.ts`** - Automated Playwright-based screenshot capture of all project URLs
   - Saves to `src/assets/screenshots/{csv-name}/{uuid}.png` for Astro optimization
   - Generates error reports and processing summaries
3. **`extract-colors.ts`** - Color palette extraction using node-vibrant
   - Analyzes screenshots to extract dominant colors and 5-color palettes
   - Outputs to `src/data/projects/colors.json` for content integration

**Workflow**: Run `npm run screenshots` then `npm run extract-colors` to generate all visual assets

## Enhanced Project Schema

Each project in content collections now includes:
- `screenshot`: Path to generated screenshot or placeholder fallback
- `colors`: Object with `dominantColor` and `colors` array containing RGB/hex values
- Standard CSV fields: `id`, `project_title`, `github_username`, `project_url`, etc.