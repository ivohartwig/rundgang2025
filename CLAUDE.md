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
- Authors collection extracts unique GitHub usernames from CSV data
- Briefings collection loads markdown files from `src/data/briefings/`

**Data Processing**:
- `src/lib/utils.ts` contains `getAllCsvData()` function for CSV processing
- CSV data is cleaned and normalized with computed fields for project URLs and references
- Cross-references between collections using Astro's `reference()` function

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