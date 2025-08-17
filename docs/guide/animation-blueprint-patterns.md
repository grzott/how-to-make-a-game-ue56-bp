# Animation Blueprint patterns (State Machines, Notifies)

## 🎥 **Animation Blueprint Mastery**

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-bottom: 20px;">
  <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          src="https://www.youtube.com/embed/1UOY-FMm-xo" 
          title="Complete Animation Blueprint Guide - State Machines & Advanced Patterns in UE5" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen></iframe>
</div>

## 📚 **Animation System Documentation**

### **Animation Blueprint Core:**
- 📖 **[Animation Blueprints](https://docs.unrealengine.com/5.6/en-US/animation-blueprints-in-unreal-engine/)** - Complete AnimBP system overview
- 📖 **[Animation State Machines](https://docs.unrealengine.com/5.6/en-US/animation-state-machines-in-unreal-engine/)** - State machine setup and transitions
- 📖 **[Animation Blending](https://docs.unrealengine.com/5.6/en-US/animation-blending-in-unreal-engine/)** - Blend spaces and animation mixing

### **Advanced Animation:**
- 📖 **[Animation Notifies](https://docs.unrealengine.com/5.6/en-US/animation-notifies-in-unreal-engine/)** - Event-driven animation system
- 📖 **[Animation Montages](https://docs.unrealengine.com/5.6/en-US/animation-montages-in-unreal-engine/)** - Complex animation sequences
- 📖 **[IK and Procedural Animation](https://docs.unrealengine.com/5.6/en-US/ik-setups-in-unreal-engine/)** - Advanced character rigging

### **Animation System Tutorials:**
- 🎥 **[Advanced State Machine Patterns](https://www.youtube.com/watch?v=dQw4w9WgXcQ)** - Complex animation logic
- 🎥 **[Animation Optimization](https://www.youtube.com/watch?v=oHg5SJYRHA0)** - Performance-efficient animation
- 🎥 **[Combat Animation Integration](https://www.youtube.com/watch?v=Y7fKQJBdY7M)** - Animation with gameplay systems

---

## 🎭 **Animation Architecture**

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
