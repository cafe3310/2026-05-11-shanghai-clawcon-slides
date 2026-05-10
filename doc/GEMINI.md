# 项目概览：演示文稿 - Agent 与工具 (Presentation - Agents and Tools)

本项目是一个高质量的、基于 React 的演示文稿，题目为 **“别被 AI 焦虑带着跑：从 LLM Client 到 Agent 的务实使用指南”**。它使用 **Vite**、**React 19**、**TypeScript** 和 **Tailwind CSS 4** 构建。

该应用包含一个自定义的幻灯片引擎，通过缩放容器（scaling wrapper）确保在不同屏幕尺寸下保持一致的 16:9 比例（1920x1080）。

## 初始大纲

以下是本演示文稿的核心结构，主要参考了 `src/components/slides/TocSlide.tsx` 中的内容：

### Part 1: 诊断焦虑
- **焦虑从哪来**：为什么最近大家这么 FOMO？

### Part 2: 撕开包装
- **Agent 到底是什么？**：别被包装名词带着跑。
- **Agent 工具选择**：如何进行工具选择和避坑？

### Part 3: 建立框架
- **合理的学习路径**：什么值得学，什么值得无视？
- **任务分配**：什么适合交给 Agent，什么不适合？
- **Vibe Coding**：跨界 Vibe Coding 有用吗？如何避免浪费时间。

### Part 4: 面向未来
- **新挑战**：对非技术岗位成员的新挑战是什么？
- **精神健康**：时间精力有限的人，怎么持续跟上技能更新而保持一定的精神健康。

## 架构说明

- **`src/main.tsx`**：应用入口。
- **`src/App.tsx`**：主组件，负责幻灯片列表管理、键盘导航（方向键/空格）和导航 UI。
- **`src/components/SlideWrapper.tsx`**：响应式容器，使用 `ResizeObserver` 将 1920x1080 的内容缩放至适配窗口。
- **`src/components/slides/`**：具体的幻灯片组件。每个幻灯片通常是一个包裹在 `SlideWrapper` 中的功能组件。
- **`src/index.css`**：全局样式和 Tailwind CSS 导入。
- **`metadata.json`**：AI Studio 应用元数据。

## 技术栈

- **框架**：React 19 + Vite 6
- **样式**：Tailwind CSS 4
- **图标**：Lucide React
- **动画**：Motion (framer-motion)
- **AI 集成**：`@google/genai` (为 AI 驱动功能做准备)

## 参考配色与素材

- **配色方案**：已在 `src/index.css` 中定义（基于 `@theme`），包含以下核心色系：
  - `ivory`: `#FDFCF8` (背景)
  - `slate`: `#2D2B2A` (文字/深色)
  - `terracotta`: `#D47A6A` (强调色)
  - `sage`: `#8F9E8B` (辅助色)
- **素材**：参考图片和设计素材位于 `doc/ref` 目录中，包含：
  - Anthropic 风格的图形规范。
  - Pragmatic AI Blueprint 相关的视觉参考截图。

## 构建与运行

### 开发环境
```bash
npm install
npm run dev
```
开发服务器运行在 [http://localhost:3000](http://localhost:3000)。

### 生产环境
```bash
# 构建项目
npm run build

# 预览生产环境构建
npm run preview
```

### 代码维护
```bash
# 类型检查
npm run lint

# 清理构建产物
npm run clean
```

## 开发规范

- **幻灯片结构**：每个新幻灯片都应在 `src/components/slides/` 中作为一个组件创建，且必须使用 `SlideWrapper` 包裹以保持 16:9 布局。
- **样式风格**：使用 Tailwind CSS 进行样式开发。遵循现有的审美风格：整洁的布局、微妙的背景（如等轴测网格）和现代排版。
- **导航管理**：将新幻灯片添加到 `src/App.tsx` 中的 `slides` 数组中，以包含在演示流程中。
- **资源使用**：优先使用内联 SVG 进行插图绘制，以确保清晰度并方便自定义。
- **缩放逻辑**：所有幻灯片内容均基于 1920x1080 的固定坐标空间进行设计。
