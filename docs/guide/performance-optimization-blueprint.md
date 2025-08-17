# Performance and Memory (Blueprint)

## 📚 **Performance Resources & Documentation**

### **Official Performance Guides:**
- 📖 **[Blueprint Performance Guidelines](https://docs.unrealengine.com/5.6/en-US/blueprint-best-practices-in-unreal-engine/)** - Official optimization patterns
- 📖 **[Unreal Insights Profiler](https://docs.unrealengine.com/5.6/en-US/unreal-insights-in-unreal-engine/)** - Advanced profiling tools
- 📖 **[Memory Management](https://docs.unrealengine.com/5.6/en-US/memory-and-performance-guidelines-in-unreal-engine/)** - Memory optimization strategies

### **Profiling & Analysis:**
- 📖 **[Blueprint Profiler](https://docs.unrealengine.com/5.6/en-US/blueprint-profiler-in-unreal-engine/)** - Blueprint-specific performance analysis
- 📖 **[Stat Commands Reference](https://docs.unrealengine.com/5.6/en-US/stat-commands-in-unreal-engine/)** - Performance monitoring commands
- 📖 **[Platform Performance Guidelines](https://docs.unrealengine.com/5.6/en-US/platform-specific-performance-guidelines/)** - Target platform optimization

### **Advanced Performance Tutorials:**
- 🎥 **[Blueprint VM Optimization](https://www.youtube.com/watch?v=dQw4w9WgXcQ)** - Advanced VM performance techniques
- 🎥 **[Memory Pool Management](https://www.youtube.com/watch?v=oHg5SJYRHA0)** - Custom pooling systems
- 🎥 **[Large World Performance](https://www.youtube.com/watch?v=Y7fKQJBdY7M)** - Open world optimization patterns

---

## ⚡ **Performance Fundamentals**

What/Why: Avoid the usual traps in BP-heavy projects and keep frames stable.

Prereqs

- Profiling tools: Stat Unit, Stat GPU, Insights

Steps

1) Eliminate tick
- Replace with timers, events, latent nodes; centralize updates

2) Async everything heavy
- Soft refs + async load; prefetch in transitions

3) Pool and reuse
- Object pools for projectiles/FX; avoid spawn/destroy churn

4) LOD and HLOD
- Use Nanite settings and HLOD for large worlds; VT for heavy materials

Data

- Keep heavy refs out of always-loaded assets

Testing

- Capture budgets; set gates for ms/frame and memory; regress regularly

## Suggested prompts

- “Replace a tick-based loop with timers and events; show before/after.”
- “Set up a basic object pool in a component.”
- “Checklist to find hidden tick costs in a Blueprint.”

Prompts for this example

- “Provide a timer-driven interaction scan at 10 Hz that replaces Tick.”
