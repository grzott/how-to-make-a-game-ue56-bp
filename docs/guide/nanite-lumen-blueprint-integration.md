# Nanite + Lumen: Blueprint Integration (UE 5.6)

What/Why: Control UE5.6's Nanite virtualized geometry and Lumen global illumination from Blueprints for dynamic quality scaling and performance optimization.

Prereqs

- UE 5.6 project with Nanite and Lumen enabled (default for new projects)
- Hardware-accelerated raytracing support for full Lumen features

Steps

1) Nanite Blueprint Control
- Use `Set Console Variable by Name`: `r.Nanite.MaxPixelsPerEdge` (0.5-2.0) for quality scaling
- `r.Nanite.ViewMeshLODBias` (-2 to 2) for aggressive LOD control under performance pressure
- Runtime mesh complexity via `Nanite Settings` on Static Mesh Components: Override `Position Precision` and `Percent Triangles`

2) Lumen Dynamic Control
- `Set Console Variable by Name`: `r.LumenScene.GlobalIllumination` (0/1) to toggle GI
- `r.Lumen.TraceMeshSDFs` (0/1) for mesh distance field tracing vs surface cache
- Use `Post Process Volume` → Lumen Global Illumination: `Intensity`, `Max Trace Distance`, `Scene Lighting Update Speed`

3) TSR Quality Management
- `r.TSR.ShadingRate` (0.5-2.0) for performance vs quality balance
- `r.TemporalAA.Upsampling` (0/1) to toggle upsampling
- Monitor GPU time with `Stat GPU` and adjust TSR shading rate dynamically

4) Performance Scaling Pipeline
- Create `BP_RenderingQualityManager` (GameInstanceSubsystem)
- Functions: `SetNaniteQuality(Low/Medium/High)`, `SetLumenQuality(Low/Medium/High)`, `ScaleTSR(float Quality)`
- Auto-scale based on `Stat Unit` frametime thresholds (16ms = 60fps, 8ms = 120fps)

5) Platform-Specific Presets
- DataAsset `DA_PlatformRenderSettings` with Nanite/Lumen/TSR presets per platform
- On Begin Play: apply settings from platform-detected preset

Data

- `DA_RenderQualityPresets`: arrays of console variable settings per quality tier
- Soft references to quality-specific texture/mesh variants

Networking

- Quality settings per-client; don't sync visual settings across players
- Use Server RPC for shared world state (time of day affecting Lumen intensity)

Performance

- Budget GPU ms per frame: Mobile 20ms, Console 13ms (75fps), PC High-end 8ms (120fps)
- Profile with `r.ShaderComplexity` overlay and `Stat RHI` for draw call analysis
- Nanite reduces draw calls but increases GPU compute; balance with triangle density

Testing

- Test map with high-density Nanite meshes and complex Lumen lighting scenarios
- Profile across quality tiers; ensure 60fps minimum on target hardware
- Validate TSR upsampling doesn't introduce visible artifacts during fast movement

## Suggested prompts

- "UE 5.6 Blueprints only. Create a `BP_RenderingQualityManager` subsystem that scales Nanite, Lumen, and TSR settings dynamically based on framerate."
- "Show Blueprint console variable nodes to control Nanite triangle density and Lumen trace distance at runtime."
- "Provide a platform detection system that applies optimal Nanite/Lumen settings for Mobile, Console, and PC targets."
- "Create a DataAsset for render quality presets and show how to apply them via Blueprint on startup."

Prompts for this example

- "Write the Blueprint nodes to monitor GPU frametime and reduce Nanite quality when exceeding 16ms per frame."
- "Show how to toggle Lumen GI and mesh SDF tracing via console variables in a performance scaling system."
