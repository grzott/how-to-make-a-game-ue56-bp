# UI with MVVM: Blueprint patterns (ViewModels, bindings, cues)

## 📚 **UI & MVVM Documentation**

### **MVVM System:**
- 📖 **[Model-View-ViewModel (MVVM)](https://docs.unrealengine.com/5.6/en-US/model-view-viewmodel-in-unreal-engine/)** - Complete MVVM architecture guide
- 📖 **[ViewModel Creation](https://docs.unrealengine.com/5.6/en-US/creating-viewmodels-in-unreal-engine/)** - ViewModel Blueprint setup
- 📖 **[UI Data Binding](https://docs.unrealengine.com/5.6/en-US/binding-viewmodels-to-widgets-in-unreal-engine/)** - Widget binding patterns

### **UMG & Widget System:**
- 📖 **[UMG Widget Blueprints](https://docs.unrealengine.com/5.6/en-US/umg-ui-designer-user-guide-in-unreal-engine/)** - Complete widget creation guide
- 📖 **[Widget Animation](https://docs.unrealengine.com/5.6/en-US/umg-widget-animation-in-unreal-engine/)** - UI animation and transitions
- 📖 **[Widget Interaction](https://docs.unrealengine.com/5.6/en-US/widget-interaction-component-in-unreal-engine/)** - 3D UI interaction

### **UI Architecture Tutorials:**
- 🎥 **[Advanced Widget Architecture](https://www.youtube.com/watch?v=oHg5SJYRHA0)** - Scalable UI system design
- 🎥 **[UI Performance Optimization](https://www.youtube.com/watch?v=Y7fKQJBdY7M)** - Efficient UI rendering
- 🎥 **[Responsive UI Design](https://www.youtube.com/watch?v=dQw4w9WgXcQ)** - Multi-resolution UI systems

---

## 🎨 **MVVM Architecture**

What/Why: Keep gameplay out of Widgets. MVVM makes UI robust and testable: ViewModels hold state; Widgets display and bind.

Prereqs

- Plugins: Model-View-ViewModel (MVVM)

Steps

1) Create ViewModel BP classes
- `VM_PlayerStatus`: Health (float), Stamina (float), HasInteract (bool), InteractPrompt (text)
- `VM_InputHints`: Move (text), Jump (text), Interact (text)

2) Create Widgets and bind
- `WBP_HUD`: progress bars bound to `VM_PlayerStatus`, prompt text bound to `VM_PlayerStatus.InteractPrompt`
- `WBP_InputHints`: texts bound to `VM_InputHints`

3) Route game events to ViewModels
- Player Pawn components emit events (OnDamage, OnStaminaChanged, OnTraceHitInteractable)
- In a UI Coordinator (Actor or Subsystem), listen and update ViewModels (no logic in Widgets)

4) Show/Hide UI via state
- Use Gameplay Tags (UI.HUD.Visible) to toggle visibility
- For menus, swap mapping context to `IMC_UI` and pause gameplay

Data

- DataAssets: `DA_UITheme` for colors/fonts/sizes; `DA_InputDisplay` for platform-specific glyphs

Networking

- ViewModels exist on owning client only; replicate underlying game state to drive them

Performance

- Avoid ticking Widgets; rely on bindings and events

Testing

- Toggle HUD tag → widgets visible/hidden
- Damage player → Health bar updates
- Look at interactable → Interact prompt shows correct text

## Suggested prompts

- “UE 5.6 Blueprints only. Define `VM_PlayerStatus` (Health, Stamina, HasInteract, InteractPrompt) and bind it in `WBP_HUD`. Show where to update the ViewModel from Pawn events.”
- “Explain how to avoid game logic in Widgets with MVVM. Provide a small ‘UI Coordinator’ pattern in Blueprints.”
- “How do I toggle HUD visibility with a Gameplay Tag and switch input contexts for UI?”
- “List common MVVM pitfalls in UE 5.6 and how to debug broken bindings quickly.”

Prompts for this example

- “Given `VM_PlayerStatus` and `WBP_HUD` progress bars, show the nodes to update Health/Stamina from a HealthComponent event.”
- “Provide Blueprint nodes to show/hide the HUD using tag `UI.HUD.Visible` and swap to `IMC_UI` when visible.”


