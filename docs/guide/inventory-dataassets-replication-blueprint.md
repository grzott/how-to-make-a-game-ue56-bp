# Inventory: DataAssets + Replication (Blueprint)

What/Why: A minimal, replicated inventory that keeps logic in components and data in PDAs. Spawns visuals from soft references.

Prereqs

- Gameplay Tags plugin (for categorization and cooldowns)
- `DA_ItemData` from the Data Assets section

Steps

1) Inventory Component
- `BP_InventoryComponent` (replicated): Array of `FItemEntry { Id: Name, Count: int }`
- Events: `OnItemAdded(Id, Count)`, `OnItemRemoved(Id, Count)` (dispatchers)
- Functions:
  - `AddItem(Id, Delta)` (Server): find or add entry; clamp non-negative; Fire `OnItemAdded`
  - `RemoveItem(Id, Delta)` (Server): reduce; remove when zero; Fire `OnItemRemoved`
  - `HasItem(Id, Count) -> bool`
- Replication: mark array Replicated; OnRep to update UI/ViewModels

2) Equipping visuals
- `EquipItem(Id)`:
  - Resolve `DA_ItemData` via Asset Manager
  - Async load Mesh/MI; set on a Mesh Component (or attach spawned Actor)
  - Store current equipped Id for replication; OnRep apply visuals on clients

3) UI bindings
- ViewModel `VM_Inventory` with a list of entries (Id, Count, DisplayName)
- Listen to InventoryComponent dispatchers; update VM; bind to `WBP_Inventory`

4) Pickup and use
- Pickup Actor implements `BPI_Interactable.Interact` → calls `Server AddItem(Id, Count)` on the player’s InventoryComponent
- Use action calls `Server RemoveItem` and triggers gameplay effect/animation

Data

- `DA_ItemData` holds DisplayName, Soft Mesh/Icon, Weight, Tags (Item.Type.*, Rarity.*)

Networking

- Only server mutates inventory; clients request via Server RPC
- Replicate inventory entries to owning client; keep visuals authoritative but synced

Performance

- Batch UI updates; debounce OnRep calls to avoid re-render storms
- Async load visuals once per equip; reuse instances

Testing

- Single and multiplayer test maps: pick up items, verify counts replicate
- Equip an item and confirm visuals appear on all clients

## Suggested prompts

- “Blueprint-only. Create a replicated `BP_InventoryComponent` with add/remove, OnRep updates, and dispatchers for UI.”
- “Show how to equip an item by resolving a `DA_ItemData` and async-loading its mesh, then replicating the equipped state.”
- “Provide a pickup interactable that calls `Server AddItem` on the player’s component.”

Prompts for this example

- “Write the OnRep logic to rebuild `VM_Inventory` from the replicated array and update `WBP_Inventory`.”
- “Show nodes to resolve an item Id to PDA via Asset Manager, then async-load and set the mesh on a component.”
