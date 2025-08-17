# PROJECT_PLAN: Build and Publish the UE5.6 Blueprint AAA Guide

This plan shows how to grow this documentation site and publish it to GitHub Pages.

## Objectives

- Author a clear, scalable guide for building AAA-quality UE 5.6 games entirely in Blueprints.
- Enable collaborative writing with GitHub Copilot and other LLMs.
- Publish via VitePress + GitHub Pages.

## Repository structure

- `docs/` — VitePress site
  - `.vitepress/config.ts` — site config (nav, sidebar)
  - `index.md` — homepage
  - `guide/` — main guide content
  - `llm/` — instructions for LLMs and contributors
- `PROJECT_PLAN.md` — this meta-guide

## Authoring workflow

1. Plan topics using “feature slices” (one slice per gameplay system or pipeline area).
2. For each slice, create a page under `docs/guide/` with:
   - What/Why (1–2 sentences)
   - Prereqs (plugins, settings)
   - Steps (numbered, editor-focused)
   - Data (DataAssets, tags, attributes)
   - Networking (authority/replication notes)
   - Performance (tick/events/async)
   - Testing (functional test map/steps)
   - Next (adjacent improvements)
3. Update sidebar in `docs/.vitepress/config.ts`.
4. Preview locally and fix broken links.

## Writing style guide (audience: CG artist, junior UE UI)

- Minimize jargon; explain terms the first time.
- Map systems to familiar CG concepts (materials, animation, lighting, FX).
- Prefer step-by-step instructions with exact node names and asset types.
- Use lists and short paragraphs; avoid large uninterrupted prose blocks.
- Include pitfalls and validation steps.

## Local development

- Install dependencies
  - `npm install`
- Start preview server
  - `npm run docs:dev`
- Build static site
  - `npm run docs:build`
- Preview build
  - `npm run docs:preview`

## GitHub Pages deployment

- A GitHub Actions workflow is included under `.github/workflows/deploy.yml`.
- It builds the site and publishes to GitHub Pages automatically on pushes to `main`.
- If using a Project Pages site (https://<user>.github.io/<repo>/), set the base path by environment variable:
  - The workflow sets `DOCS_BASE` to `/${{ github.event.repository.name }}/`.
- If using a User/Org Pages site (https://<user>.github.io/), set `DOCS_BASE` to `/`.

## Adding new content

- Create a new file under `docs/guide/` (e.g., `ui-mvvm-patterns.md`).
- Add a sidebar entry in `config.ts`.
- Cross-link related pages at the top and bottom of each page.
- Commit with messages describing the slice (e.g., `guide: add MVVM UI patterns with ViewModel examples`).

### LLM starter prompts for slice planning

- “Create a UE 5.6 Blueprint-only feature slice for [topic]. Return: What/Why, Prereqs, Steps (numbered, with exact node and asset names), Data (PDAs, soft refs), Networking, Performance, Testing.”
- “Given these constraints (no C++, event-driven, async loads), propose a minimal end-to-end example and a test map checklist.”
- “List common pitfalls and a troubleshooting checklist specific to [topic]. Keep answers concise and production-focused.”

## Review and quality gates

- Check for: clear steps, no C++, event-driven logic, soft refs for heavy assets.
- Confirm performance guidance is present.
- Add a minimal test map/process in each feature slice.
- Verify the site builds and previews without errors.

## Roadmap ideas

- Add pattern templates (copyable page skeletons).
- Add simple example project layouts and naming presets.
- Expand networking, GAS, and performance deep-dives.

## Navigation and UX (VitePress 1.6.4)

Goal: Enable full navigation capabilities available in VitePress 1.6.4 for a smooth, discoverable docs experience.

Must-haves

- Global nav bar (top): Guide, UE5.6 Essentials, LLM Instructions, GitHub link.
- Contextual sidebars: section-aware for `/guide/` and `/llm/` with nested groups.
- Auto-generated headers outline (right rail) with `outline: 'deep'`.
- Breadcrumbs via theme default (page title + section context) where applicable.
- Prev/Next page links at the bottom of guide pages.
- Search box (client-side) enabled by default VitePress search.
- Active link highlighting for both nav and sidebar.
- Mobile-friendly drawer for nav and sidebar.

Nice-to-haves

- Home hero with quick links to Guide, Essentials, and LLM.
- Custom 404 page under `docs/404.md`.
- Edit link and last updated (enable in config if desired).
- Social links (GitHub) visible in the header.

Implementation notes

- Configure `docs/.vitepress/config.ts`:
  - `themeConfig.nav` for top-level sections.
  - `themeConfig.sidebar` for contextual sidebars; avoid deep nesting beyond 2–3 levels for scanability.
  - `outline: 'deep'` for H2/H3 anchors; ensure headings are structured consistently in pages.
  - Set `socialLinks` to the repo.
- Keep routes stable and kebab-cased; avoid renaming paths without updating links.
- Cross-link related pages at top and bottom of each page.

Acceptance criteria

- All top-level sections are reachable from the header nav.
- On any `/guide/*` page, the sidebar reflects the current section and highlights the active page.
- Right-rail outline appears and matches page headings.
- Prev/Next links show on guide pages and navigate correctly.
- Search returns results for guide and LLM pages.
