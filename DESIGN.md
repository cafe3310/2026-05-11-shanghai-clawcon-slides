---
name: Shanghai ClawCon 2026 Slides
description: Presentation deck for OpenClaw next-generation agents
colors:
  prussian: "#0B25B3"
  paper: "#F3F3EF"
  midnight: "#111111"
  structural-gray: "#E0E0DB"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 5vw, 9rem)"
    fontWeight: 500
    letterSpacing: "tighter"
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3vw, 4rem)"
    fontWeight: 500
  body:
    fontFamily: "PingFang SC, Hiragino Sans GB, Microsoft YaHei, SF Pro, sans-serif"
    fontSize: "24px"
    fontWeight: 300
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, Sarasa Mono SC, monospace"
    fontSize: "24px"
    fontWeight: 400
    letterSpacing: "widest"
    textTransform: "uppercase"
rounded:
  sm: "4px"
  md: "8px"
  lg: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  glass-panel:
    backgroundColor: "rgba(255, 255, 255, 0.1)"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "32px"
  solid-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.midnight}"
    rounded: "0px"
    padding: "32px"
---

# Design System: Shanghai ClawCon 2026

## 1. Overview

**Creative North Star: "Rational Design"**

This system represents a technical, editorial, and highly structured presentation aesthetic. It leans into architectural precision, combining Swiss-style typography with code-centric monospace elements. The layout relies heavily on strict grid systems, wireframe-like borders, and purposeful whitespace to convey engineering rigor. It explicitly rejects SaaS marketing tropes, soft gradients, and generic decorative illustrations.

**Key Characteristics:**
- High-contrast, restricted color palette.
- Extreme typographic hierarchy (massive display text vs. strictly 24px mono annotations).
- Structural linework over filled backgrounds.
- Minimalist terminal and interface abstractions.

## 2. Colors

A highly restricted palette that relies on intense contrast and one bold anchor hue.

### Primary
- **Prussian Blue** (`#0B25B3`): The sole brand color. Used for accents, key borders, semantic success states, and occasional high-impact full-bleed backgrounds.

### Neutral
- **Technical Paper** (`#F3F3EF`): The default slide background. A warm, tactile off-white that reduces eye strain compared to pure white.
- **Midnight** (`#111111`): The primary text and structural border color. Deep, almost-black.
- **Structural Gray** (`#E0E0DB`): Used for secondary backgrounds, grid lines, and subtle dividers.

**The Restraint Rule.** The palette is limited to these four colors. Gradients are only used as subtle radial dot-patterns for background texture, never as color transitions on UI elements.

## 3. Typography

**Display Font:** Space Grotesk
**Body Font:** PingFang SC / SF Pro
**Label/Mono Font:** JetBrains Mono

**Character:** A tension between expressive, tight-tracked grotesque headers and rigid, technical monospace annotations.

### Hierarchy
- **Display** (Medium, 4rem-9rem, tight tracking): Slide titles and major thematic numbers.
- **Headline** (Medium, 3rem-4rem, normal tracking): Section headers and quadrant titles.
- **Title** (Bold, 32px, wide tracking): Mono eyebrow labels and category tags.
- **Body** (Light, 24px, relaxed line-height): Explanatory text and prose.
- **Label** (Regular, 24px, wide tracking, uppercase): Terminal output, metadata, and structural annotations.

**The 24px Minimum Rule.** No text on any slide may be smaller than 24px. Hierarchy must be established through scale (going larger) and font-weight, never by shrinking text below the baseline.

## 4. Elevation

The system is fundamentally flat, relying on borders and tonal contrast rather than shadows to define structure. 

### Shadow Vocabulary
- **Ambient Low** (`0 20px 40px rgba(0,0,0,0.2)`): Used exclusively for lifting high-contrast elements (like a dark panel on a light background or a glass panel over a dark background) to give them presence.

**The Structural Line Rule.** Depth is secondary to structure. Use 1px borders of `prussian/20` or `dark/10` to delineate zones before resorting to shadows.

## 5. Components

### Glass Panel
- **Shape:** 16px radius, mimicking a physical lens.
- **Background:** `bg-white/10` with `backdrop-blur-md`.
- **Border:** `border-white/20`.
- **Usage:** Floating metadata cards over dark or textured backgrounds.

### Solid Panel
- **Shape:** 0px radius (sharp corners).
- **Background:** `bg-paper`.
- **Border:** `border-dark/10`.
- **Usage:** Grounded content blocks and structural content zones.

### Terminal Abstraction
- **Style:** Deep gray/black (`#1A1A1A`), rounded corners, top traffic-light window controls (`#FF5F56`, `#FFBD2E`, `#27C93F`).
- **Text:** Vibrant green (`#27C93F`) or white mono for output logs.

## 6. Do's and Don'ts

### Do:
- **Do** use strict grid alignments and visible 1px borders to separate content areas.
- **Do** uppercase monospace fonts for small labels, eyebrows, and metadata to give a technical feel.
- **Do** ensure all body text is at least 24px.

### Don't:
- **Don't** use SaaS landing-page clichés like neon gradients, bubbly 3D icons, or soft pastel illustrations.
- **Don't** mix multiple vibrant accent colors; stick to Prussian Blue as the sole highlight.
- **Don't** use border radii on structural layout elements; save them for specific floating panels or UI abstractions (like the terminal).