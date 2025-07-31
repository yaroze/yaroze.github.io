# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` - Starts Vite dev server with hot reload
- **Build for production**: `npm run build` - TypeScript compilation followed by Vite build
- **Run linter**: `npm run lint` - ESLint with current configuration
- **Preview production build**: `npm run preview` - Serve the production build locally

## Architecture Overview

This is a personal portfolio website built as a single-page React application with the following structure:

### Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4 with PostCSS
- **Icons**: Lucide React and React Icons
- **Type Checking**: TypeScript with strict configuration

### Application Structure
- **`src/App.tsx`**: Main application component rendering all sections sequentially
- **`src/sections/`**: Page sections (Hero, Skills, Projects, Experience, Education, Contact)
- **`src/components/`**: Reusable UI components (currently ThemeToggle)
- **`src/hooks/`**: Custom React hooks (useTheme for dark/light mode)
- **`src/utils/data.ts`**: All portfolio content and data definitions
- **`src/types/index.ts`**: TypeScript interfaces for all data structures

### Data Management
All portfolio content is centralized in `src/utils/data.ts` with typed interfaces:
- `personalInfo`: Basic contact and summary information
- `socialLinks`: Social media and contact links
- `skills`: Technical skills categorized by type with proficiency levels
- `experiences`: Work history with achievements and technologies
- `projects`: Featured projects with technical details
- `certifications`: Professional certifications
- `education`: Academic background

### Key Features
- Dark/light theme support with system preference detection
- Responsive design using Tailwind CSS
- Type-safe data structures for all portfolio content
- Section-based navigation structure with anchor links
- Icon-based skill visualization with proficiency indicators

### Development Notes
- ESLint is configured with React and TypeScript rules
- No test runner is currently configured
- Build outputs to `dist/` directory
- Uses ES modules throughout