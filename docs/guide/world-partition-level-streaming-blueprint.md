# World Partition + Streaming (Blueprint)

What/Why: Stream the world efficiently and script transitions without blocking gameplay.

Prereqs

- World Partition enabled; OFPA for collaborative edits

Steps

1) Streaming basics
- Use Streaming Sources on Pawns/cameras
- Tag critical cells to always loaded or use HLOD

2) Scripting transitions
- Use Level Streaming Volumes or scripted sources for doors/elevators
- Preload cells before teleport; fade UI while loading

3) Data loads
- Pair streaming with async asset loads for set pieces

Data

- `DA_StreamingSetup` listing critical cells/regions

Networking

- Ensure server loads regions before spawning AI/players

Performance

- Keep cell sizes reasonable; leverage HLOD; profile streaming times

Testing

- Teleport across regions; verify no major hitching and proper activation

## Suggested prompts

- “Blueprint-only approach to preload a region before teleporting the player.”
- “Best practices for Streaming Sources with large maps.”
- “Checklist for hitch causes during streaming and how to mitigate.”

Prompts for this example

- “Show a door trigger that fades UI, preloads cells, teleports, then restores control.”
