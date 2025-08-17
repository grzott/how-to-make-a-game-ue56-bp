---
title: LLM + Copilot Instructions
---

# Guidance for AI assistants and contributors

Purpose: Help you author reliable UE 5.6 Blueprint-only docs, ready for VitePress 1.6.4 and GitHub Pages.

Key constraints

- Audience: CG artists and juniors. Explain terms briefly the first time.
- No C++; Blueprints only. Prefer Subsystems, Actor Components, Interfaces, Data Assets.
- Event-driven over tick; async where heavy; soft references for content.
- Production tone: short sentences, numbered steps, copyable node names.
- Vue-safe Markdown: avoid raw angle-bracket placeholders. Use backticks or brackets like `[placeholder]`.

Editing rules

- Keep paths stable. Files live under `docs/guide/` or `docs/llm/`.
- Maintain headings order: H1 title, short What/Why, Prereqs, Steps, Data, Networking, Performance, Testing.
- Cross-link related pages at top and bottom.
- Don’t introduce custom HTML; stick to Markdown for compatibility.

VitePress specifics

- Outline depth is `deep`. Use H2/H3 consistently: `## Section`, `### Subsection`.
- Internal links: use absolute site paths like `/guide/ue56-essentials`.
- New pages must be added to the sidebar in `docs/.vitepress/config.ts`.
Authoring template

```
# [Feature]: [short benefit]

What/Why: [one or two sentences that say why this exists]

Prereqs

- [plugins, settings, folders]
Steps

1) [concrete step]
- [node names, asset names, exact menus]

Data

- [which PDAs, soft refs]

Networking

- [authority, replication, RPCs]

Performance

- [avoid tick, async loading, batching]

Testing

- [quick map or checklist to validate]

```

Quality gates

- Build locally: `npm run docs:build` then preview `npm run docs:preview`.
- No broken links; headings appear in the right-rail outline.
- Language is concise, actionable, and Blueprint-only.

Footguns to avoid

- Hard references to heavy assets in global singletons.
- Tick-based polling for input or UI. Prefer events and triggers.
- Angle-bracket pseudo-tags that break Vue parsing.
## Include prompts per topic and per example

- Each guide topic must end with a “Suggested prompts” section containing 3–6 copy-paste prompts specific to that topic.
- For every concrete example or test flow in a topic, add a short “Prompts for this example” block right after it with 2–3 focused prompts.
- Keep prompts short, action-oriented, and Blueprint-only. Avoid raw angle brackets.

