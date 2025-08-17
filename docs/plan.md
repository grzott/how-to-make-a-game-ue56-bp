# Authoring Plan

This is the working plan for growing and maintaining the UE5.6 Blueprint AAA Guide. It’s concise, practical, and tuned for VitePress 1.6.4 + GitHub Pages.

## Objectives

- Blueprint-only, production-ready patterns for UE 5.6.
- Clear steps for CG artists (short, concrete, event-driven).
- Easy to contribute; safe deploys via GitHub Pages.

## Structure

- Guide topics live under `/guide/` and follow the same skeleton:
  - What/Why • Prereqs • Steps • Data • Networking • Performance • Testing
  - Each topic ends with “Suggested prompts” + per-example prompt blocks.
- LLM instructions live under `/llm/` (policy and template only).

## Authoring workflow

1) Pick a feature slice (e.g., Enhanced Input, Inventory, Interaction).
2) Create a page under `/guide/` using the template.
3) Wire it into the sidebar (`docs/.vitepress/config.ts`).
4) Cross-link related pages (top and bottom) and add prompts.
5) Build locally; fix links; commit and push.

## Writing rules (for contributors)

- Explain first use of terms; keep sentences short.
- No C++; prefer Subsystems, Actor Components, Interfaces, Data Assets.
- Prefer events/timers to Tick; async-load heavy assets; soft refs by default.
- Use exact Blueprint node/asset names in steps.

## Navigation and UX (VitePress 1.6.4)

Must-haves

- Top nav: Guide, UE5.6 Essentials, LLM Instructions, Authoring Plan, GitHub.
- Contextual sidebars for `/guide/` and `/llm/`.
- Right-rail outline with `outline: 'deep'`.
- Prev/Next links on guide pages; mobile-friendly drawer.

Nice-to-haves

- Custom 404 page; social links; edit link; last updated.

Acceptance

- All sections reachable; active links highlighted; no broken links.

## LLM prompts policy

- Every topic ends with 3–6 “Suggested prompts”.
- Every concrete example adds 2–3 “Prompts for this example”.
- Prompts are short, action-oriented, and Blueprint-only.

## Quality gates

- Build: `npm run docs:build` and preview.
- Outline renders correctly; no broken links.
- Includes Performance and Testing sections with practical checks.

## Roadmap (next slices)

- GAS + Gameplay Cues focused examples (dash/attack).
- Save/Load deep dive: migration patterns and stress tests.
- Networking gotchas: prediction and reconciliation basics.
