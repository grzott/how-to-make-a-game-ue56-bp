# Interaction: Traces + Blueprint Interface

What/Why: Simple, scalable interaction using a trace and a Blueprint Interface. Keeps props reusable and player logic thin.

Prereqs

- Collision channel for interactables (optional); or use Object Types (WorldDynamic) and tags
- Input: `IA_Interact (Bool)` bound in `IMC_Gameplay`

Steps

1) Create the interface
- Create `BPI_Interactable` with functions:
  - `Interact(Instigator: Actor)` — called on server
  - `Highlight(bEnable: bool)` — client-side feedback
  - `GetPrompt() -> Text` — UI hint

2) Build an Interaction Component (Actor Component)
- `BP_InteractionTraceComponent` (attach to Pawn):
  - Variables: TraceDistance (float = 300), TraceRadius (float = 8), bDrawDebug (bool)
  - Function `FindBestInteractable()`:
    - LineTrace or SphereTrace from camera forward; ignore owner; filter by `Does Implement Interface BPI_Interactable`
    - Track CurrentTarget; if changed, call `Highlight` on new/old
  - Function `TryInteract()`:
    - If CurrentTarget valid → run `Server_Interact(CurrentTarget)` RPC on owning client

3) Wire input to interaction
- In Pawn/Controller: bind `IA_Interact (Triggered)` → call `InteractionTraceComponent.TryInteract()`
- Call `FindBestInteractable()` on a low-frequency timer (e.g., 10–20 Hz) or when look direction changes (advanced)

4) Implement the prop side
- Any Actor can implement `BPI_Interactable`:
  - `Interact` → perform action (open door, pick up) on server
  - `Highlight` → enable outline/indicator locally
  - `GetPrompt` → return a short text for UI

Data

- Optional `DA_InteractConfig` for trace distance, prompt style, outline color
- Use Gameplay Tags on interactables for categories (Interact.Type.Door, Item, Terminal)

Networking

- Interact call is server-authoritative: Owning client → `Server_Interact(Target)` → validate → execute
- Highlight stays client-side; don’t replicate unless needed
- Replicate state changes (doors open, items gone) via normal replicated vars/Multicast

Performance

- Avoid per-tick heavy traces; use a timer at ~0.05–0.1s or event-driven updates
- Prefer LineTraceForObjects over complex channels; keep collision simple
- Cull highlight FX in distance; avoid material parameter spam every frame

Testing

- Add a debug print of `GetPrompt()` when a target is available
- Toggle bDrawDebug to see traces; verify highlight swaps when looking around
- Press Interact once; action triggers once on server (no client-only side effects)

## Suggested prompts

- “UE 5.6 Blueprints only. Create `BPI_Interactable` with `Interact(Instigator)`, `Highlight(bool)`, and `GetPrompt()`. Show a player component that traces and calls these functions.”
- “What timer rate is reasonable for interaction traces and how do I avoid spamming highlight?”
- “Show how to make `Interact` server-authoritative via RPC from the owning client.”
- “Provide a quick checklist for collision and trace filters when interactions don’t detect.”

Prompts for this example

- “Given my `BP_InteractionTraceComponent`, write the nodes to do a line trace from the camera and pick the nearest actor that implements `BPI_Interactable`.”
- “Show the RPC wiring for `Server_Interact(Target)` so Interact runs only on the server.”
