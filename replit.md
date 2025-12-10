# Portfolio Showcase

## Overview
A professional dark-themed portfolio website built with React, TypeScript, Express, and Tailwind CSS. Features elegant animations, a skills section, and a light/dark theme toggle.

## Recent Changes (December 2024)
- Added smooth scroll animations using Framer Motion
- Added a skills section with animated progress bars on the Experience page
- Added light/dark mode toggle in the navigation
- Added a loading animation on initial page load
- Fixed nested link issues across all pages
- Added hover-glow utility CSS class
- Added light theme CSS variables

## Project Architecture

### Frontend (client/)
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom theme
- **Animations**: Framer Motion
- **Routing**: Wouter
- **State**: React Query for server state

### Backend (server/)
- **Framework**: Express.js with TypeScript
- **Build**: Vite for development, esbuild for production

### Key Files
- `client/src/lib/content.ts` - All portfolio content (projects, skills, experience, blog posts)
- `client/src/components/layout.tsx` - Main layout with navigation
- `client/src/hooks/use-theme.tsx` - Theme provider and toggle hook
- `client/src/components/loading-screen.tsx` - Initial loading animation

## User Preferences
- Dark theme as default
- Minimalist, luxury aesthetic
- Serif fonts for headings, sans-serif for body

## How to Run
```bash
cd Portfolio-Showcase && npm run dev
```

## How to Customize
1. Edit `client/src/lib/content.ts` to update:
   - Personal info (name, email, social links)
   - Projects
   - Skills
   - Experience/Career history
   - Blog posts

2. Edit `client/src/index.css` to customize:
   - Theme colors (CSS variables)
   - Fonts
