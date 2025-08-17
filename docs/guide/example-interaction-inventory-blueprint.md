# Example: Interaction + Inventory Loop (Blueprint)

This runnable example stitches together Interaction (trace + interface) and Inventory (DataAssets + replication) into a minimal, network-ready flow.

Goal

- Look at an item, press Use to pick it up, it goes to inventory, UI updates, save/load works, and it replicates correctly.

What you build

- Player Controller: Enhanced Input mapping for Use (IE_Triggered from an Action "IA_Use").
- Character: Line Trace for Objects + Interface call `IInteractable.Interact(Instigator)` on focus actor.
- Item Actor: Implements `IInteractable`; has a `PrimaryDataAsset` reference defining ItemID, StackSize, Tags.
- Inventory Component: ActorComponent with `ReplicatedUsing` array of FItemStacks; RPCs `Server_AddItem`, `Server_RemoveItem`.
- UI: MVVM ViewModel observes Inventory; Widget binds to VM; shows item list.
- SaveGame: Struct snapshot of Inventory; Save/Load Service calls `UGameplayStatics` save functions.

Blueprint steps (high level)

1. Create GameplayTags: Item.Consumable, Item.Weapon, Item.Currency.
2. Create PDA `DA_Item_<Name>` with fields: `FName ItemID`, `FGameplayTagContainer Tags`, `int32 MaxStack`.
3. Interface `BPI_Interactable`: `Interact(Actor Instigator)`.
4. Actor `BP_Pickup_<Name>`: StaticMesh, PDA ref; Implements BPI_Interactable → On Interact: `GetOwnerInventory(Instigator) → Server_AddItem(PDA, Count=1) → DestroyActor`.
5. Character `BP_Character`: Camera; Tick or timer → `LineTraceSingleByChannel` (Visibility), if Hit Actor `ImplementsInterface`, set `FocusedActor`; On Use Input: `Execute_Interact(FocusedActor, self)`.
6. Component `BP_InventoryComponent`: `Replicates` true; Array `Items` of `FItemStack { PDA, Count }` with `ReplicatedUsing OnRep_Items`. RPCs: `Server_AddItem(PDA, Count)`; validate and merge stacks; `OnRep_Items` → Broadcast `OnInventoryChanged`.
7. ViewModel `BP_InventoryVM`: Expose `Items` as Array of `FItemView { Name, Icon, Count }`; Bind to Inventory component via `OnInventoryChanged`.
8. Widget `WBP_Inventory`: ListView bound to VM `Items`.
9. Save/Load: `USaveGame_BP_Inventory` with `TArray<FItemSave { ItemID, Count }>`; Service saves/loads and reconstructs using AssetManager `GetPrimaryAssetIdList`.
10. Networking: Ensure Use input runs on owning client; Interact triggers Server RPC to mutate inventory; pickups are `bReplicates` with `bNetLoadOnClient` false.

Testing

- Singleplayer: pick up/destroy, UI updates, save then reload map, inventory restored.
- Multiplayer PIE 2 clients: authority-only mutations; late joiner sees current inventory via replication and OnRep.

Suggested prompts

- Add/extend prompts from the Interaction and Inventory pages to generate specific Blueprints and validation tests.

Prompts for this example

- "Generate the Blueprint steps to add `BP_InventoryComponent` with `Server_AddItem` RPC and `OnRep_Items` hook; include variables and replication settings."
- "Generate the Interactable interface (`BPI_Interactable`) and implement it in `BP_Pickup_Apple` to add one item to the instigator's inventory on interact, then destroy self."
- "Generate the MVVM ViewModel `BP_InventoryVM` that maps inventory items into a `TArray` view for a ListView; detail bindings on the `WBP_Inventory` widget."
- "Write a Save/Load service Blueprint that snapshots and restores the inventory using `USaveGame`; include a quick test sequence to verify."
