# Gameplay Tags: State and event routing (Blueprint)

What/Why: Use tags as a shared language for state, queries, gating, and lightweight events.

Prereqs

- Gameplay Tags plugin enabled; define your tag list in Project Settings

Steps

1) Scheme
- Use namespaces: `State.*`, `Ability.*`, `UI.*`, `Cooldown.*`, `Interact.*`

2) Adding/removing
- On Pawn/Subsystem, add/remove tags via `Add Loose Gameplay Tag` and `Remove`
- For scoped tags, add on enter; remove on exit (timers or events)

3) Queries
- `Has Tag`, `Has Any`, `Has All` for gating input/abilities
- Switch on Tag for simple state machines

4) Events
- Treat add/remove as one-frame events (set then clear) to broadcast
- Use with MVVM to toggle UI visibility

Data

- Store tag lists in DataAssets for loadouts, UI states, interactions

Networking

- Replicate tag containers for Pawns; avoid spamming add/remove

Performance

- Prefer `Has Tag` checks over booleans spread across Blueprints

Testing

- Add/remove sequences update UI and block abilities as expected

## Suggested prompts

- “Design a tag scheme for my game and show where each tag is set/cleared.”
- “Convert boolean flags to tags and update checks in Blueprints.”
- “Show how to use tag adds/removes as one-frame events.”

Prompts for this example

- “Write nodes to toggle `UI.HUD.Visible` with a tag and bind the result to widget visibility.”
- “Provide a Switch-on-GameplayTag flow for a simple `State` machine.”
