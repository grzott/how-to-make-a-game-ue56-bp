# AAA Blueprint Patterns for UE 5.6

This section distills modern patterns used in large UE projects—translated for Blueprint-only production. No C++ required.

> Reader profile: Experienced CG artist, junior UE 5.6 UI, no programming background. Each pattern includes a "What/Why", a production recipe, and pitfalls.

## Core architectural ideas

- Composition over inheritance

  - What: Favor Actor Components, Child Actors, and DataAssets over deep Blueprint class trees.
  - Why: Flexible reuse, fewer breakages, better team parallelism.
  - Recipe:
    - Create thin Actors. Put behavior in Actor Components (e.g., HealthComponent, InteractionComponent, InventoryComponent).
    - Use Child Actor Components to assemble complex props (doors, terminals) from reusable parts.
    - Drive configuration with PrimaryDataAssets (e.g., WeaponData, EnemyArchetypeData).
  - Pitfalls: Avoid circular dependencies. Keep components single-responsibility.

- Data-driven design with Primary Data Assets (PDA)

  - What: Author balance/config data as assets. Blueprints read them at runtime.
  - Why: Designers iterate quickly; easy A/B; per-platform overrides.
  - Recipe:
    - Create Blueprintable DataAssets for categories (Weapons, Abilities, Enemies, UI Themes).
    - Reference assets by Soft Object References; resolve on-demand to reduce cook size and memory.
  - Pitfalls: Don’t hard-reference heavy meshes/textures in always-loaded assets.

- Event-driven game flow

  - What: Push changes via events, not tick. Use Gameplay Tags, Delegates, and the Messaging/Blueprint Event Dispatcher pattern.
  - Why: Clear decoupling; scalable; fewer perf traps.
  - Recipe:
    - Use Gameplay Tags for state and queries (Actor has Tag "State.Combat").
    - For cross-system comms, prefer Subsystems (GameInstanceSubsystem/WorldSubsystem) exposing events.
    - Use Enhanced Input’s Triggers to gate actions by state tags.
  - Pitfalls: Don’t overuse tick. Prefer Timers and latent nodes.

- State machines (explicit and data-driven)

  - Use Animation Blueprints (AnimBPs) for locomotion; Gameplay Tags + Switch on Tag for lightweight logic states.
  - Centralize complex logic in a State Machine component with a DataAsset defining states, transitions, and entry/exit events.

- Subsystems as service locators

  - Create GameInstanceSubsystems for global services (SaveService, AudioService, AssetStreamingService).
  - WorldSubsystems for per-level services (EncounterDirector, TimeOfDay, CrowdService).
  - Access via Get Game Instance Subsystem / Get World Subsystem from Blueprints.

- Soft references, streaming, and async by default
  - Use SoftClass/SoftObject refs in data; Load Asset/Load Class Async when needed.
  - Use Streamable Manager (via Blueprint nodes or Async Load Asset nodes) to prepare assets before use.
  - Pair with Level Streaming and World Partition cells.

## Gameplay systems

- Input: Enhanced Input

  - Create Input Mapping Contexts per mode (Gameplay, UI, Vehicle). Apply/Remove contexts when modes change.
  - Use Actions with Triggers/Modifiers; route to Pawn/Player Controller; broadcast to interested components.

- Abilities: Gameplay Ability System (GAS) in Blueprints

  - Enable GAS plugins. Define Attributes via AttributeSets.
  - Implement Abilities in BP: Activation requirements (tags), costs, cooldowns, effects (Gameplay Effects), cues (Gameplay Cues).
  - Drive configs from DataAssets per archetype.

- Interaction: Traces + Interface

  - Define a Blueprint Interface (BPI_Interactable: Interact, Highlight, GetPrompt).
  - Use a Trace Component on the player to detect interactables and call the interface.

- Inventory and items

  - Represent items as DataAssets (ItemData) with soft refs to meshes/materials and metadata.
  - Use a replicated InventoryComponent holding item entries; spawn visuals from soft refs when equipped.

- Save/Load

  - Use SaveGame objects for player profile, world state, and options.
  - Centralize through SaveService (GameInstanceSubsystem) with async save queues and throttling.

- UI and MVVM

  - Use UMG + MVVM plugin. Create ViewModels as BP classes; bind to Widgets.
  - Route game events to ViewModels; keep Widgets dumb (no game logic).

- AI

  - Behavior Trees for high-level decisions; EQS for perception/positioning.
  - Blackboard keys mirror Gameplay Tags and Attributes for clarity.

- Networking
  - Design components to be replication-aware. Keep authority logic on server.
  - Use RPC categories: Server* (from client), Multicast* (broadcast), and OnRep for state sync.
  - Minimize per-tick RPCs; prefer tag-based events and compressed payloads.

## Production patterns and checklists

- Feature slice template

  1. Create DataAssets for configs
  2. Create Components (logic), thin Actor wrappers
  3. Define Interfaces for cross-talk
  4. Add Subsystem hooks/events
  5. Add UI ViewModel bindings
  6. Add async loading for heavy assets
  7. Add Save hooks if needed
  8. Add tests: map with debug cheats, automated functional tests

- Asset hygiene

  - Naming: Prefix_Type_Variant (e.g., DA_Weapon_Rifle_Mk1, BP_Enemy_Grunt_A, MI_Weapon_Rifle_Matte).
  - Folders by domain: /Game/Characters, /Game/Items, /Game/UI, /Game/World, /Game/Systems.

- Performance

  - Prefer Timers/Events over Tick; consolidate updates.
  - Profile with Stat Unit, Stat GPU, Unreal Insights.
  - LODs and HLODs; Nanite settings; Virtual Texturing for heavy materials.

- Testing and validation
  - Use Automation (Functional Testing) with simple BP tests for critical flows.
  - Add a "Debug Mode" DataAsset to unlock cheats and visual debug layers.

## Pitfalls to avoid

- Monolithic Blueprints with hundreds of nodes; split into components and interfaces.
- Hard references in global singletons that bloat memory.
- Hidden tick performance: look for latent loops and high-frequency timers.
- Over-coupled Event Dispatchers; prefer Subsystems with clear API.

## From CG to gameplay: mental mapping

- Materials → Material Instances with parameters driven by DataAssets and Curves.
- Animation → AnimBPs, State Machines, Montages; notify events trigger gameplay tags or ability events.
- Lighting → Time of Day Subsystem controls Sky/Exposure via Curves; level streaming swaps sets.
- Particles/FX → Niagara Systems triggered by Gameplay Cues (GAS) or Tag changes.

## Tiny blueprint patterns you can reuse today

- Debounced interaction: Only interact once per keypress using a Gate or bool flag reset by Timer.
- Cooldown: Timeline or Timer + Tag (e.g., Tag "Cooldown.Interact").
- Object pools: Keep pooled Actors in a Component; activate/deactivate instead of spawn/destroy.
- One-frame events: Use Tag Add/Remove as triggers; clear immediately after consumption.

---

Next: Review the LLM Instructions to co-author new sections with Copilot.
