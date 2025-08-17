# Performance and memory (Blueprint)

What/Why: Avoid the usual traps in BP-heavy projects and keep frames stable.

Prereqs

- Profiling tools: Stat Unit, Stat GPU, Insights

Steps

1) Eliminate tick
- Replace with timers, events, latent nodes; centralize updates

2) Async everything heavy
- Soft refs + async load; prefetch in transitions

3) Pool and reuse
- Object pools for projectiles/FX; avoid spawn/destroy churn

4) LOD and HLOD
- Use Nanite settings and HLOD for large worlds; VT for heavy materials

Data

- Keep heavy refs out of always-loaded assets

Testing

- Capture budgets; set gates for ms/frame and memory; regress regularly

## Suggested prompts

- “Replace a tick-based loop with timers and events; show before/after.”
- “Set up a basic object pool in a component.”
- “Checklist to find hidden tick costs in a Blueprint.”

Prompts for this example

- “Provide a timer-driven interaction scan at 10 Hz that replaces Tick.”
