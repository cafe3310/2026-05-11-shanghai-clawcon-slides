# Project Overview: Presentation - Agents and Tools

This project is a high-quality, React-based slide presentation titled **"别被 AI 焦虑带着跑：从 LLM Client 到 Agent 的务实使用指南"** (Practical Guide from LLM Client to Agent). It is built using **Vite**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

The application features a custom slide engine that ensures a consistent 16:9 aspect ratio (1920x1080) across different screen sizes using a scaling wrapper.

## Architecture

- **`src/main.tsx`**: Entry point of the application.
- **`src/App.tsx`**: Main component managing the slide list, keyboard navigation (Arrows/Space), and the navigation UI.
- **`src/components/SlideWrapper.tsx`**: A responsive container that scales the 1920x1080 slide content to fit the viewport using `ResizeObserver`.
- **`src/components/slides/`**: Individual slide components. Each slide is typically a functional component wrapped in `SlideWrapper`.
- **`src/index.css`**: Global styles and Tailwind CSS imports.
- **`metadata.json`**: AI Studio application metadata.

## Tech Stack

- **Framework**: React 19 + Vite 6
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Animation**: Motion (framer-motion)
- **AI Integration**: `@google/genai` (prepared for AI-driven features)

## Building and Running

### Development
```bash
npm install
npm run dev
```
The development server runs on [http://localhost:3000](http://localhost:3000).

### Production
```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

### Maintenance
```bash
# Type-checking
npm run lint

# Clean build artifacts
npm run clean
```

## Development Conventions

- **Slide Structure**: Every new slide should be a component in `src/components/slides/` and must be wrapped with `SlideWrapper` to maintain the 16:9 layout.
- **Styling**: Use Tailwind CSS for all styling. Follow the existing aesthetic: clean layouts, subtle backgrounds (like isometric grids), and modern typography.
- **Navigation**: Add new slides to the `slides` array in `src/App.tsx` to include them in the presentation flow.
- **Assets**: Prefer inline SVGs for illustrations to keep them crisp and easily customizable.
- **Scaling**: All slide content is designed for a fixed coordinate space of 1920x1080.
