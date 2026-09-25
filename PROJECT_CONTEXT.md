# Monsoon & Matcha Project Context

Last updated: 2026-09-25

## Current State

The project is a React + Vite + TypeScript + Tailwind CSS v4 site for Monsoon & Matcha, a Pan-Asian tea atelier and dessert bar in Dhaka.

Git is configured and pushed:

- Remote: `https://github.com/animeshdashtirtha/Monsoon_And_Matcha.git`
- Branch: `main`
- Worktree: clean and synchronized with `origin/main`

Latest commit:

```text
bd16209 feat: build static homepage
```

## Completed Parts

### Part 01: Project Foundation

Commit: `125c8da feat: establish design system`

- React 19
- Vite 8
- TypeScript 6
- Tailwind CSS 4 using `@tailwindcss/vite`
- ESLint flat config
- shadcn-compatible `components.json`
- `@/*` alias mapped to `src/*`
- `clsx`, `tailwind-merge`, `class-variance-authority`
- `lucide-react` installed
- Source folders created: `assets`, `components`, `data`, `hooks`, `lib`, `pages`, `styles`
- No GSAP, Three.js, R3F, Lenis, shaders, or WebGL dependencies

### Part 02: Design System

Commit: `746107b refine design system showcase`

Design tokens live in `src/index.css` under Tailwind `@theme`:

- `paper`
- `ink`
- `deep-slate`
- `botanical`
- `matcha`
- `sesame`
- `chili`
- `editorial` font role
- `technical` font role
- `sans` font role

Reusable primitives live in `src/components/`:

- `Container`
- `Section`
- `SectionLabel`
- `DisplayHeading`
- `TechnicalLabel`
- `Button`
- `IconButton`
- `Divider`
- `GridLines`
- `ImageFrame`
- `PageTransition`

All are static and work without animation.

### Part 03: Static Homepage

Commit: `bd16209 feat: build static homepage`

`src/App.tsx` now contains the homepage sections:

1. Navigation
2. Hero with editorial headline and tea photograph
3. Introduction
4. Featured menu
5. Local botanicals
6. Philosophy quote
7. Brand story
8. Visit / CTA
9. Footer

The page uses stable Unsplash image URLs for the hero and story photography because no image-generation tool was available in the workspace.

## Validation

These commands currently pass:

```text
npm run build
npm run lint
```

Browser validation completed at desktop and mobile widths:

- Main sections render
- Both remote images load
- No horizontal overflow at 1440px and 390px widths
- Navigation links and footer are present

Start the local server with:

```text
npm run dev -- --host 127.0.0.1
```

Then open:

```text
http://127.0.0.1:5173/
```

## Important Current Files

- `src/App.tsx`: current homepage and temporary inline menu/botanical data
- `src/index.css`: Tailwind theme tokens and global styles
- `src/components/`: reusable static design-system primitives
- `src/lib/utils.ts`: `cn()` helper
- `components.json`: shadcn configuration
- `vite.config.ts`: React, Tailwind, and `@/*` alias setup
- `eslint.config.js`: ESLint 10 flat configuration
- `package.json`: scripts and dependencies

## Known Caveats

- Menu data is still inline in `src/App.tsx`; Part 04 should extract it into `src/data/`.
- Hero and story images are remote Unsplash URLs; replace with curated local assets when the final image direction is available.
- The CTA and menu buttons are currently visual buttons only. Product/menu routing comes later.
- There are old unused Vite starter files still committed, including `src/App.css`, `src/assets/hero.png`, `src/assets/react.svg`, `src/assets/vite.svg`, and `.oxlintrc.json`. They do not participate in the current app.
- No animation system has been added yet by design.

## Next Step: Part 04

Build the menu and product data architecture before adding product detail pages.

Recommended continuation:

1. Create typed menu data in `src/data/menu.ts`.
2. Define product types for tea, dessert, botanical, price, origin, tasting notes, image, and availability.
3. Replace the inline `menuItems` in `src/App.tsx` with imported data.
4. Add a small reusable menu/product card component using existing tokens.
5. Keep the homepage static and avoid GSAP, Three.js, R3F, Lenis, and shaders.
6. Run `npm run build` and `npm run lint`.
7. Commit with `feat: establish menu data architecture`.
8. Push to `origin/main`.

After that, the next planned part is Part 05: Product Detail Experience.
