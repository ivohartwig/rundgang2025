# System Patterns

## System Architecture
- Modular frontend using Astro and TypeScript.
- Component-driven design for reusability and maintainability.

## Key Technical Decisions
- Astro for static site generation and performance.
- TypeScript for type safety.
- Directory structure separates assets, components, layouts, and pages.

## Design Patterns
- Presentational and container component split where needed.
- Use of context for shared state if required.

## Component Relationships
- Layouts wrap pages and provide shared UI.
- Components are composed within pages and layouts.

## Critical Implementation Paths
- Navigation, event listing, and filtering are core flows. 