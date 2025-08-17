# Save/Load Service: Blueprint architecture

What/Why: Reliable saves without tangling logic; centralize in a GameInstanceSubsystem with async throttling.

Prereqs

- Project Settings → enable `SaveGame` usage

Steps

1) Create `BP_SaveService` (GameInstanceSubsystem)
- Events: `RequestSave(ProfileId)`, `RequestLoad(ProfileId)`, `OnSaved`, `OnLoaded`
- Internals: queue requests; Timer to process one at a time (avoid spikes)

2) Define SaveGame classes (BP)
- `SG_PlayerProfile`: progression, options
- `SG_WorldState`: level streaming state, global flags

3) Callers
- On level transition or checkpoint, call `RequestSave`
- On startup, call `RequestLoad` → broadcast loaded data

4) Versioning
- Use a `SaveVersion` int; if mismatch, run migration or defaults

Data

- Keep references as IDs; resolve to data assets at runtime

Networking

- Server-authoritative saves; clients request via RPC if needed

Performance

- Compress large blobs only off the game thread (async blueprint nodes)

Testing

- “Dirty flag” changes trigger a queued save
- Quit/restart → state restored properly

## Suggested prompts

- “UE 5.6 Blueprints only. Create `BP_SaveService` (GameInstanceSubsystem) with queued `RequestSave/RequestLoad`. Show events and timers to throttle saves.”
- “How do I version SaveGame data with a `SaveVersion` int and migrate safely?”
- “Outline a test plan to validate save requests, throttle behavior, and load-on-startup.”
- “List pitfalls for save spikes and how to avoid blocking the game thread.”

Prompts for this example

- “Provide Blueprint nodes to enqueue a save on checkpoint and emit `OnSaved` when complete.”
- “Show how to load `SG_PlayerProfile` on startup and broadcast the data to interested systems.”


