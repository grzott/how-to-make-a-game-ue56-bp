# Animation Blueprint patterns (State Machines, Notifies)

What/Why: Drive animation from data and events, keep logic out of montages, and connect gameplay cleanly.

Prereqs

- Skeletal mesh set up; AnimBP; input from movement component

Steps

1) Locomotion
- State Machine with Idle/Walk/Run/Jump; use blendspaces
- Transition rules read movement speed and grounded state

2) Gameplay notifies
- AnimNotifies fire Gameplay Tags or dispatchers for hit frames/footsteps

3) Montages
- Use for attacks/abilities; expose sections via DataAssets

4) Sync with gameplay
- MVVM updates HUD (stamina) from AnimBP events

Data

- `DA_AnimSet` references blendspaces/montages per archetype

Networking

- Montage play on server; replicate to clients; handle prediction if needed

Performance

- Keep graphs lean; reuse blendspaces; avoid heavy per-frame math

Testing

- Verify transitions and notify-driven events under latency

## Suggested prompts

- “Set up a locomotion state machine with idle/walk/run and a jump state in AnimBP.”
- “Emit gameplay tags from AnimNotifies and listen in Blueprint to trigger effects.”
- “Drive montage selection from a DataAsset.”

Prompts for this example

- “Provide transition rules for Idle→Walk→Run and Run→Idle based on speed thresholds.”
