# Agent 指导手册：上海 ClawCon 2026 幻灯片项目

本项目是为上海 ClawCon 2026 活动准备的基于 React 的幻灯片演示文稿。

## 技术栈
- **框架**: React 19 + Vite 6
- **样式**: Tailwind CSS 4
- **图标**: Lucide React
- **动画**: Motion (framer-motion)

## 核心约定
- **幻灯片开发**: 所有幻灯片组件位于 `src/components/slides/`。必须使用 `SlideWrapper` 包裹，以保持 16:9 的固定比例。
- **导航控制**: 幻灯片的播放顺序在 `src/App.tsx` 中定义。
- **部署**: 部署至 GitHub Pages。`vite.config.ts` 中的 `base` 路径已设置为 `/2026-05-11-shanghai-clawcon-slides/`。

## 工作流
- **本地开发**: `npm run dev`
- **构建项目**: `npm run build` (输出至 `dist/` 目录)
- **类型检查**: `npm run lint`

## GitHub Pages 部署
部署由 GitHub Actions 自动处理。推送到 `main` 分支将触发自动构建和发布。
