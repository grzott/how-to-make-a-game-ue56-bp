# Data Assets + Asset Manager: data-driven gameplay

What/Why: Centralize tunables and content references in Primary Data Assets (PDAs). Use Asset Manager to async-load by soft reference.

Prereqs

- Project Settings → Asset Manager: register Primary Asset Types (e.g., `ItemData`, `AbilityData`, `EnemyArchetype`)

Steps

1) Create Primary Data Asset classes (BP)
- `DA_ItemData`: Id (Name), DisplayName (Text), Mesh (SoftObject), Icon (SoftObject), Weight (float)
- `DA_AbilityData`: Id, Cost (float), Cooldown (float), Cue (GameplayCue Tag)

2) Configure Asset Manager
- Add Primary Asset Types in settings: Type = `ItemData`, Base Class = your BP base, Directory = `/Game/Data/Items`, Cook Rule = “Always Cook” or “Development Only”

3) Reference by soft path
- In gameplay PDAs, use Soft Object/Class; load via `Async Load Asset` before use

4) Spawn visuals from data
- Equip item → async load Mesh → set on Skeletal/Static Mesh Component → apply MI from data

Data

- Keep heavy assets referenced softly in PDAs; separate visuals from logic fields

Networking

- Replicate only IDs; resolve to data on clients (reduces bandwidth)

Performance

- Batch async loads; prefetch in transitions (loading screens, doors, elevators)

Testing

- In a test map, press a key to equip several items → verify async pops are minimal and non-blocking

## Suggested prompts

- “UE 5.6 Blueprints only. Design PDAs for items and abilities with soft refs for heavy assets. Show how to resolve an item ID to a PDA and async-load mesh/icon before use.”
- “How should I configure Asset Manager (Primary Asset Types, directories, cook rules) for items and abilities?”
- “Provide a client-safe pattern to replicate only item IDs and resolve visuals on the owning client.”
- “Give a checklist for common async loading issues (timing, missing cooks, null soft refs).”

Prompts for this example

- “Using `DA_ItemData` with Mesh/Icon soft refs, show Blueprint nodes to async load and apply the mesh on an equipped SkeletalMeshComponent.”
- “Given an item ID string, show the steps to find the PDA via Asset Manager and handle failure gracefully.”


