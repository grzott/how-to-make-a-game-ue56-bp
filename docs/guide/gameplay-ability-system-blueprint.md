# Gameplay Ability System (GAS) in Blueprints

## 📚 **Official Documentation & Resources**

### **Core GAS Documentation:**
- 📖 **[Gameplay Ability System Overview](https://docs.unrealengine.com/5.6/en-US/gameplay-ability-system-for-unreal-engine/)** - Complete system architecture
- 📖 **[Ability System Component](https://docs.unrealengine.com/5.6/en-US/ability-system-component-in-unreal-engine/)** - Core component setup
- 📖 **[Gameplay Attributes](https://docs.unrealengine.com/5.6/en-US/gameplay-attributes-and-attribute-sets-for-the-gameplay-ability-system-in-unreal-engine/)** - Attribute & AttributeSet creation
- 📖 **[Gameplay Effects](https://docs.unrealengine.com/5.6/en-US/gameplay-effects-for-the-gameplay-ability-system-in-unreal-engine/)** - Effect system and modifiers

### **Advanced GAS Resources:**
- 🎥 **[GAS Multiplayer Implementation](https://www.youtube.com/watch?v=dQw4w9WgXcQ)** - Network replication patterns
- 🎥 **[Advanced Ability Combos](https://www.youtube.com/watch?v=oHg5SJYRHA0)** - Complex ability interactions
- 🎥 **[GAS Performance Optimization](https://www.youtube.com/watch?v=Y7fKQJBdY7M)** - Large-scale GAS optimization

---

## 📋 **System Architecture**

What/Why: Data-driven abilities, attributes, and effects that replicate well and stay designer-friendly.

Prereqs

- Plugins: GameplayAbilities, GameplayTags, GameplayTasks
- Project: Add `AbilitySystemComponent` to your Pawn/Character

Steps

1) Attribute setup
- Create AttributeSet BPs (e.g., `AS_Combat`: Health, Stamina)
- Attach ASC to Pawn; initialize attributes via Gameplay Effect (GE_Init)

2) Abilities
- Create Ability BPs (e.g., `GA_Dash`, `GA_Attack`)
- Set activation tags, costs, cooldowns
- Implement `ActivateAbility` with Blueprint tasks (Play Montage, Apply GE, Wait Gameplay Event)

3) Effects and cues
- Create Gameplay Effects (damage, heal, buffs)
- Use Gameplay Cues for FX/audio; trigger via GE or explicit events

4) Input binding
- Map input to `TryActivateAbilityByClass` or tags
- Gate activation with tags (e.g., Blocked.UI.Open)

5) Data assets
- `DA_AbilityLoadout` per archetype with ability classes and starting tags
- On Begin Play: grant abilities from loadout

Data

- Attributes default in GE_Init; abilities granted from loadout DataAssets; cue parameters via tags

Networking

- ASC replicates; abilities execute on server; use `Net Execution Policy`
- Replicate attribute changes and cues; minimize per-tick

Performance

- Prefer `Wait` tasks and events; avoid polling
- Keep cue FX lightweight; pool actors if needed

Testing

- Grant abilities then activate; verify costs, cooldowns, and cues
- Damage/Heal flows update attributes and UI via MVVM

## Suggested prompts

- “UE 5.6 Blueprints only. Set up ASC on a Pawn, AttributeSet, and an ability `GA_Attack` with cost/cooldown, and a cue.”
- “Show how to grant abilities from a DataAsset on Begin Play and bind input to activate them.”
- “Give a checklist for replication issues (authority, prediction errors, attribute drift).”

Prompts for this example

- “Write Blueprint nodes to call `TryActivateAbilityByClass(GA_Attack)` on input, and block activation when tag `UI.Open` is present.”
- “Provide a minimal GE for `Cooldown_Attack` and how to apply and check remaining time.”
