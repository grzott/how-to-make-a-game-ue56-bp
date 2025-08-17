# Networking basics (Blueprint)

What/Why: Build multiplayer-ready Blueprints with clear authority, replication, and RPCs.

Prereqs

- Understand listen vs dedicated server; PIE with multiple clients

Steps

1) Authority
- Use `Has Authority` to guard server logic; clients request via Server RPCs

2) Replication
- Mark relevant variables and components replicated; implement OnRep handlers

3) RPC patterns
- Server_*, Multicast_*, Client_*; throttle and batch updates

4) Movement and input
- Use built-in movement replication; avoid custom per-tick RPCs

Data

- Replicate IDs and small payloads; resolve data client-side

Performance

- Compress where possible; avoid chatty RPCs; profile packet sizes

Testing

- PIE with 2+ clients; validate authority, replication, and latency behavior

## Suggested prompts

- “Show a Server RPC from owning client to pick up an item, and a Multicast to play FX.”
- “Convert per-tick updates to batched events with replication.”
- “Checklist for common replication pitfalls in Blueprints.”

Prompts for this example

- “Write OnRep logic to update equipped mesh when `EquippedItemId` changes.”
