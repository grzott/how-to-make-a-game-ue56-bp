# Enhanced Input Advanced Features (UE 5.6)

What/Why: Leverage UE5.6's full Enhanced Input capabilities including Player Mappable Configs, Input Debugging, Chorded Actions, and Input Replay for AAA-quality input handling.

Prereqs

- Enhanced Input plugin (default in UE 5.6)
- Understanding of basic Input Actions and Mapping Contexts

Steps

1) Player Mappable Input Configs
- Create `UPlayerMappableInputConfig` asset: `PMI_DefaultBindings`
- Define `FEnhancedActionKeyMapping` with `bIsPlayerMappable = true`
- Expose key remapping in UI: `GetPlayerMappableKeys()` and `AddPlayerMappedKey()`
- Save custom bindings via Enhanced Input Local Player Subsystem

2) Chorded Actions (Multi-Key Combinations)
- Create Input Action `IA_SuperAbility` with `EInputActionValueType::Boolean`  
- Add `Chorded Action` trigger: requires `IA_Modifier` + `IA_SuperAbility` pressed simultaneously
- Configure timing: `Hold Time Threshold` for precise chord detection
- Use in complex ability combinations: `Ctrl+Q`, `Shift+RClick`, multi-button combos

3) Input Debugging System
- Enable `Enhanced Input Developer Settings` → `Enable Debug Visualizations`
- Runtime debug: `showdebug enhancedinput` console command
- Blueprint debugging: `Print Enhanced Input Action Debug Info` node
- Create debug UI: display active contexts, triggered actions, and input values

4) Input Replay and Recording
- Use `Input Replay Subsystem` for gameplay recording/playback
- Record inputs: `StartRecording(SessionName)` → `StopRecording()` 
- Playback: `StartPlayback(SessionName)` with deterministic replay
- Testing automation: record player session, replay for consistent test scenarios

5) Context Stacking and Priority Management
- Stack contexts with explicit priorities: `AddMappingContext(Context, Priority)`
- Create context hierarchy: `Gameplay(0) → Vehicle(5) → UI(10) → Console(100)`
- Advanced transitions: `SwapMappingContext()` for instant context switching
- Conditional contexts: enable/disable based on Gameplay Tags

6) Advanced Triggers and Modifiers
- `Pulse` trigger: converts hold to repeated pulses (auto-fire weapons)
- `Tap` vs `Hold` distinction: short press vs long press different actions
- `Combo` trigger: sequence detection (fighting game combos, cheat codes)
- Custom modifiers: `Dead Zone`, `Response Curve`, `Smooth Delta`

7) Platform-Specific Input Handling
- Create platform variants: `PMI_PC`, `PMI_Console`, `PMI_Mobile`
- Auto-detection: `Get Platform Name` → apply appropriate config
- Input device switching: `On Input Device Change` event → swap contexts
- Handle controller/mouse+keyboard seamless transitions

8) Accessibility and Customization
- `Input Sensitivity` scaling per action type (look, move, aim)
- `Hold/Toggle` options: convert hold actions to toggles for accessibility
- Visual input indicators: show button prompts with current bindings
- Colorblind support: configurable input visualization colors

Data

- `DA_InputProfiles`: per-player input configurations and sensitivity settings
- `DA_PlatformInputMaps`: platform-specific default bindings and restrictions
- Input analytics data: track most-used bindings, chord success rates

Networking

- Input configs are client-only; don't replicate personal bindings
- Standardize server-side action names regardless of client bindings
- Input validation: server validates timing and possibility of client inputs

Performance

- Input processing budget: <0.5ms per frame for input evaluation
- Context switching cost: minimize during gameplay; batch changes
- Memory: ~50KB per player for custom binding storage

Testing

- **Automated Input Testing**: replay recorded sessions for regression testing
- **Chord Validation**: test multi-key combinations under various timings
- **Platform Testing**: validate bindings work on gamepad, mouse+keyboard, touch
- **Accessibility Testing**: verify hold-to-toggle conversions work correctly

## Advanced Patterns

1) Dynamic Input Context Generation
- Runtime context creation based on equipped items/abilities
- Vehicle-specific contexts generated from vehicle data assets
- UI contexts that adapt to current screen/widget focus

2) Input Analytics and Heatmaps  
- Track input usage patterns: most-used actions, timing distributions
- Performance analysis: input latency measurement and optimization
- Player behavior: identify unused bindings or problematic chord sequences

3) Cross-Platform Input Synchronization
- Seamless switching between controller and mouse+keyboard mid-game
- Input device capability detection: adaptive UI based on available inputs
- Cloud save integration: sync custom bindings across devices

## Suggested prompts

- "UE 5.6 Enhanced Input. Create Player Mappable Input Config with custom key bindings UI and save/load functionality."
- "Implement Chorded Actions for complex ability combinations with precise timing and debugging visualization."
- "Show Input Replay system for automated testing: record player session, replay deterministically for validation."
- "Create platform-specific input handling with seamless device switching and accessibility options."

Prompts for this example

- "Design Blueprint nodes for runtime key remapping UI that saves custom bindings per player profile."
- "Show Chorded Action setup for `Ctrl+Q` super ability with timing validation and input debugging display."
