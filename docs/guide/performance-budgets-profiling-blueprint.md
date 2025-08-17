# Performance Budgets & Profiling (Blueprint Production)

What/Why: Establish concrete performance targets and profiling workflows to maintain 60fps+ on target platforms with Blueprint-heavy projects.

Prereqs

- Unreal Insights installed and configured
- Target platform dev kits for accurate profiling

Performance Budgets (Concrete Targets)

## Memory Budgets

- **Mobile (iOS/Android)**: Total 2GB, Game 1.2GB, Blueprints 200MB, Audio 300MB
- **Console (PS5/XSX)**: Total 8GB, Game 6GB, Blueprints 800MB, Audio 1GB
- **PC High-end**: Total 16GB+, Game 12GB, Blueprints 1.5GB, Audio 2GB
- **VR (Quest/PICO)**: Total 1.5GB, Game 900MB, Blueprints 150MB, Audio 200MB

## Frame Time Budgets (60fps = 16.67ms total)

- **Game Thread**: 8-10ms (Blueprint logic, gameplay updates)
- **Render Thread**: 10-12ms (draw calls, state changes)
- **GPU Frame**: 14-16ms (geometry, lighting, effects)
- **Blueprint VM**: 2-3ms maximum (event processing, calculations)

## Blueprint-Specific Optimization

Steps

1. Blueprint Profiling Setup

- Enable `Blueprint Profiler` in Editor Preferences → Performance
- Use `Stat BlueprintGraph` to see per-Blueprint execution time
- Monitor with `Stat Memory` for Blueprint memory allocation
- Profile on device: package Development build with Blueprint profiling enabled

2. Blueprint Performance Patterns

- **Avoid**: Complex math in Tick; use Timers at 10-20Hz instead
- **Cache**: Expensive lookups (GetPlayerController, GetGameMode) in Begin Play
- **Pool**: Arrays and objects; clear/reuse vs create/destroy
- **Batch**: Multiple small operations into single events (inventory updates)

3. Memory Management

- Use `Stat Memory Blueprint` to track Blueprint object allocation
- Clear large arrays when not needed: `Array.Empty()` vs `Array.Reset()`
- Avoid circular references in Blueprint object graphs
- Use Soft References for non-critical assets; Hard References for critical gameplay

4. GPU Performance with Blueprints

- Use `Stat GPU` and `ProfileGPU` console command
- Monitor Blueprint-driven material parameter changes (avoid per-frame updates)
- Batch Blueprint FX spawning; use object pools for particles
- Control LOD via Blueprint: `Set LOD` on Skeletal/Static Mesh Components

5. Insights Integration Workflow

- Launch game with `-trace=cpu,gpu,memory,blueprint`
- Capture 30-60 seconds of typical gameplay
- Analyze in Insights: find Blueprint hotspots in CPU timeline
- Focus on: Event frequency, large allocations, long-running functions

6. Automated Performance Gates

- Create `BP_PerformanceMonitor` (GameInstanceSubsystem)
- Functions: `CheckFrameRate()`, `CheckMemoryUsage()`, `LogPerformanceWarning()`
- Trigger warnings when budgets exceeded; disable features dynamically
- Use DataAsset for platform-specific thresholds

Data

- `DA_PlatformBudgets`: frame time, memory, and quality targets per platform
- Performance telemetry: log framerate percentiles, memory peaks, Blueprint hotspots

Networking

- Network thread budget: 2-3ms for replication processing
- Monitor with `Stat Net`: packet size, send rate, processing time

Performance

- Critical: maintain budgets under stress (100+ Blueprints active, heavy combat)
- Profile worst-case scenarios: maximum players, complex UI, streaming loads

Testing

- Automated tests: spawn 100+ Blueprint actors, measure frame time consistency
- Platform validation: run on minimum spec hardware for each target
- Stress scenarios: memory pressure, thermal throttling, background apps

## Production Monitoring

1. Runtime Performance Telemetry

- Collect frame rate percentiles (1%, 5%, average) per play session
- Track Blueprint execution spikes and memory allocation peaks
- Log when dynamic quality scaling triggers due to performance pressure

2. Blueprint Complexity Metrics

- Nodes per Blueprint (target: <500 for gameplay, <100 for UI)
- Function call depth (target: <10 levels)
- Array sizes and iteration counts in hot paths

3. Platform-Specific Validation

- iOS/Android: thermal throttling response, memory warnings
- Console: loading time validation, suspend/resume handling
- PC: wide hardware range testing, driver compatibility

## Suggested prompts

- "UE 5.6 Blueprints only. Create a `BP_PerformanceMonitor` subsystem that warns when frame time exceeds platform budgets and disables features dynamically."
- "Show Blueprint profiling workflow using Stat commands and Insights to find performance bottlenecks in Blueprint execution."
- "Provide memory budget breakdown for Blueprint-heavy mobile game with concrete MB targets per system."
- "Create automated performance testing Blueprint that spawns stress scenarios and validates frame rate consistency."

Prompts for this example

- "Write Blueprint nodes to measure current frame time and trigger performance warnings when exceeding 16.67ms budget."
- "Show memory profiling setup to track Blueprint object allocation and identify memory leaks in large Blueprint graphs."
