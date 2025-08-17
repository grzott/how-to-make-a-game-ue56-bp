# Enhanced Input: Blueprint setup (contexts, actions, triggers)

What/Why: Modern input that’s context-aware (gameplay, UI, vehicle) without per-tick logic. Cleanly routes events to Blueprints.

Prereqs

- Plugins: Enhanced Input (enabled by default in UE 5.6)
- Project Settings → Input → Default Classes use Enhanced Input

Steps

1) Create assets
- Create Input Actions: `IA_Move (Axis2D)`, `IA_Look (Axis2D)`, `IA_Interact (Bool)`, `IA_Jump (Bool)`
- Create Mapping Contexts: `IMC_Gameplay`, `IMC_UI`

2) Bind hardware in Mapping Contexts
- In `IMC_Gameplay`: map WASD to `IA_Move`, Mouse to `IA_Look`, Space to `IA_Jump`, E to `IA_Interact`
- Add relevant Triggers/Modifiers (e.g., Press and Release for interact; Dead Zone for sticks)

3) Apply/Remove contexts at runtime
- In Player Controller or Pawn BP: On Begin Play → Get Local Player → Enhanced Input Local Player Subsystem → Add Mapping Context (`IMC_Gameplay`, Priority = 0)
- When opening UI: Add `IMC_UI` (Priority 10). When closing UI: Remove `IMC_UI`

4) Listen to input in Blueprints
- In the Pawn or a dedicated Input Component BP: add `IA_* (Triggered)` events
- Broadcast to gameplay components (e.g., MovementComponent, InteractionComponent)

Data

- DataAssets (optional): `DA_InputSettings` with soft refs to `IMC_*` and `IA_*` to centralize configuration

Networking

- Bind and process input only on owning client Pawn/Controller. Run gameplay logic on server via RPC (Server_*). Use tags/UI state to gate context swaps.

Performance

- Prefer event-driven `IA_*` events over Tick. Use Triggers for holds/double-taps.

Testing

- Create a map with the Pawn/Controller setup
- Press E → print “Interact” once; hold Space → jump once (no spamming); move/look axes update debug text

Notes

- For platform variants, use Player Mappable Input Configs; add per-platform redirects in Enhanced Input → Platform Settings.

## Suggested prompts

- “UE 5.6 Blueprints only. Create `IA_Move (Axis2D)`, `IA_Look (Axis2D)`, `IA_Interact (Bool)`, `IA_Jump (Bool)` and mapping contexts `IMC_Gameplay` and `IMC_UI`. Show the exact Blueprint nodes to add/remove contexts at runtime in Player Controller or Pawn.”
- “Explain which Triggers/Modifiers to add for interact (pressed once), jump (no spam), and move/look (dead zones). Return exact settings.”
- “Where should I listen for `IA_*` events (Pawn vs Controller vs Component) and how do I broadcast them to components cleanly?”
- “Give a troubleshooting checklist when actions fire twice or not at all. Include common causes and quick fixes.”

Prompts for this example

- “Using my current `IMC_Gameplay` and `IA_Interact`, show the nodes to print ‘Interact’ once on press and never repeat on hold.”
- “Given two contexts `IMC_Gameplay` (0) and `IMC_UI` (10), write the BP logic to swap to `IMC_UI` on menu open and back on close.”


