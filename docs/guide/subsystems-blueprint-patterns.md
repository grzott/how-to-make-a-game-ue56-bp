# Subsystems: Services and events (Blueprint)

What/Why: Centralize cross-cutting logic in Subsystems with clean APIs and events.

Prereqs

- Understand GameInstanceSubsystem vs WorldSubsystem lifecycles

Steps

1) Choose scope
- Global service (saves, audio, telemetry) → GameInstanceSubsystem
- Per-level (encounters, time of day) → WorldSubsystem

2) API and events
- Expose functions (Request*, Get*) and dispatchers (On*)
- Avoid hard refs to heavy assets; use soft refs

3) Access
- `Get Game Instance Subsystem` or `Get World Subsystem` from BP

4) Examples
- SaveService queues saves (see page)
- TimeOfDay updates sky via curve and tick at low rate (or timer)

Data

- DataAssets configure rates, paths, and soft references

Networking

- Subsystems don’t replicate; replicate data on actors/components instead

Performance

- Avoid doing work every frame; use timers or events

Testing

- Unit-like BP tests that call API and observe events

## Suggested prompts

- “Create a `BP_TimeOfDaySubsystem` with a curve and timer updating sky light.”
- “Design a clean API for `AudioService` with play/stop and category volumes.”
- “Show safe access patterns to subsystems from Pawns/Widgets.”

Prompts for this example

- “Write nodes to get `BP_SaveService` from any Blueprint and call `RequestSave(ProfileId)`.”
