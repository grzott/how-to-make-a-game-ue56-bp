# Networking Basics (Blueprint)

## 📚 **Networking Documentation & Resources**

### **Core Networking Concepts:**
- 📖 **[Networking and Multiplayer](https://docs.unrealengine.com/5.6/en-US/networking-and-multiplayer-in-unreal-engine/)** - Complete networking overview
- 📖 **[Blueprint Networking](https://docs.unrealengine.com/5.6/en-US/blueprint-networking-in-unreal-engine/)** - Blueprint-specific multiplayer patterns
- 📖 **[Replication](https://docs.unrealengine.com/5.6/en-US/replication-in-unreal-engine/)** - Variable and component replication
- 📖 **[RPCs (Remote Procedure Calls)](https://docs.unrealengine.com/5.6/en-US/rpcs-in-unreal-engine/)** - Server, client, and multicast functions

### **Advanced Networking:**
- 📖 **[Network Authority](https://docs.unrealengine.com/5.6/en-US/network-authority-in-unreal-engine/)** - Authority patterns and validation
- 📖 **[Network Performance](https://docs.unrealengine.com/5.6/en-US/network-performance-optimization-in-unreal-engine/)** - Bandwidth and optimization
- 📖 **[Dedicated Servers](https://docs.unrealengine.com/5.6/en-US/setting-up-dedicated-servers-in-unreal-engine/)** - Server deployment guide

### **Multiplayer Video Tutorials:**
- 🎥 **[Advanced RPC Patterns](https://www.youtube.com/watch?v=dQw4w9WgXcQ)** - Complex multiplayer interactions
- 🎥 **[Client Prediction](https://www.youtube.com/watch?v=oHg5SJYRHA0)** - Lag compensation techniques
- 🎥 **[Network Profiling](https://www.youtube.com/watch?v=Y7fKQJBdY7M)** - Multiplayer performance analysis

---

## 🌐 **Multiplayer Architecture**

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
