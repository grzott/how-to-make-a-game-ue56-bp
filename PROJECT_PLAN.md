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

## Review and quality gates

- Check for: clear steps, no C++, event-driven logic, soft refs for heavy assets.
- Confirm performance guidance is present.
- Add a minimal test map/process in each feature slice.
- Verify the site builds and previews without errors.

## Roadmap ideas

- Add pattern templates (copyable page skeletons).
- Add simple example project layouts and naming presets.
- Expand networking, GAS, and performance deep-dives.
