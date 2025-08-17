# UE 5.6 Essentials (Official Docs)

These are the canonical Unreal Engine 5.6 documentation pages this guide builds on. Start here when you need authoritative references for concepts and node names.

- UE 5.6 Documentation Hub
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-5-6-documentation

Core building blocks

- Blueprints Visual Scripting (overview and best practices)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine
- Enhanced Input (contexts, actions, triggers/modifiers)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/enhanced-input-in-unreal-engine
- Gameplay Ability System (attributes, abilities, effects, cues)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-ability-system-in-unreal-engine
- Gameplay Tags (state and event routing)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/gameplay-tags-in-unreal-engine
- Subsystems (GameInstanceSubsystem, WorldSubsystem)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/subsystems-in-unreal-engine

Data-driven and async

- Primary Data Assets (data-driven configs)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/primary-data-assets-in-unreal-engine
- Asset Manager (soft references, loading policies)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/asset-manager-in-unreal-engine

World scale and streaming

- World Partition (open worlds, streaming sources, OFPA)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/world-partition-in-unreal-engine
- Level Streaming (legacy overview; prefer World Partition in UE5)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/level-streaming-in-unreal-engine

Characters and UI

- Animation Blueprints (state machines, montages, graphing)
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/animation-blueprints-in-unreal-engine
- UMG UI (widgets, layout) and MVVM framework
  - https://dev.epicgames.com/documentation/en-us/unreal-engine/creating-user-interfaces-with-umg-and-slate-in-unreal-engine

Notes

- Prefer Composition over Inheritance: use Actor Components, Interfaces, and Data Assets.
- Use soft references and async loading for heavy assets; avoid global hard references.
- For large worlds, use World Partition and One File Per Actor to enable team parallelism.
- Keep Widgets dumb; use MVVM ViewModels to hold state and react to game events.
