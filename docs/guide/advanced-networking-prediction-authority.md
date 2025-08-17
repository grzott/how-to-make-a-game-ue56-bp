# Advanced Networking: Prediction & Authority (Blueprint)

What/Why: Build responsive multiplayer with client-side prediction, lag compensation, and authoritative server validation for AAA-quality networking.

Prereqs

- Understanding of Has Authority vs Is Locally Controlled
- Network profiling tools: `stat net`, Network Emulation settings

Steps

1. Client-Side Prediction Pattern

- Input Component: store inputs locally, send to server via RPC with timestamp
- Movement Component: apply movement immediately on owning client
- Server validates and corrects; clients reconcile on authority mismatch
- Use `Smooth Client Position` for visual correction without snapping

2. Lag Compensation for Hit Registration

- Server stores player positions per tick in circular buffer (last 1 second)
- On hit RPC from client: rewind server state to client's perceived time
- Validate hit against rewound positions, apply damage if valid
- Use `GetWorld()->GetTimeSeconds()` and client RTT for rewind calculation

3. Authoritative Server Validation

- Server RPCs: validate all gameplay actions (jump height, ability cooldowns, item usage)
- Client optimization: show immediate feedback, roll back on server rejection
- Use Gameplay Tags for validation: server checks `CanUseAbility` tags before execution

4. Network Compression Patterns

- Quantize movement vectors: `FVector_NetQuantize10` for positions, `FVector_NetQuantizeNormal` for directions
- Pack boolean flags into bit fields using `UPROPERTY(Meta = (Bitmask))`
- Use `RepNotifyCondition = REPNOTIFY_OnChanged` to avoid redundant updates

5. Large-Scale Optimization

- Network Culling: override `IsNetRelevantFor()` based on distance and line of sight
- Update Frequency scaling: reduce `NetUpdateFrequency` for distant/occluded actors
- Batch small updates: collect per-tick changes, send as single RPC every 0.1s

6. Seamless World Travel

- Persistent player data via `GameInstanceSubsystem`
- Server transition: save player state, load new level, restore state
- Client loading screens: use `OpenLevel` with seamless travel options

Data

- `DA_NetworkSettings`: RTT thresholds, update frequencies, culling distances
- Client input buffer size and reconciliation tolerance settings

Networking

- Critical: all gameplay-affecting actions must be server-authoritative
- Optimization: predictive UI updates with server correction fallback

Performance

- Target: <100ms perceived input delay with 50ms+ RTT
- Server tick budget: 5-10ms for 20-tick dedicated server
- Memory: limit position history to 1-2 seconds (20-40 entries at 20Hz)

Testing

- Network Emulation: test with 100ms RTT, 5% packet loss
- Stress test: 50+ players with prediction and reconciliation active
- Edge cases: validate hit registration accuracy under high latency

## Suggested prompts

- "UE 5.6 Blueprints only. Implement client-side movement prediction with server reconciliation using smooth correction."
- "Show lag compensation for hit registration: client sends hit RPC, server rewinds state and validates."
- "Create network culling system that reduces update frequency for distant players dynamically."
- "Provide authoritative validation pattern for abilities with client prediction and rollback."

Prompts for this example

- "Write Blueprint RPC nodes for client input submission with timestamp and server validation with correction."
- "Show position buffer management for lag compensation: store, rewind, validate hit against historical positions."
