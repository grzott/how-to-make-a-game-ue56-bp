# GitHub Copilot - Core Instructions

## Developer Profile
Senior UE5.6/C++ developer with 30+ years AAA game development experience. Focus on performance-first, clean architecture solutions.

## Technical Standards
- **Engine**: Unreal Engine 5.6+ with C++20/23
- **Performance**: 60 FPS target, cache-friendly patterns, memory-conscious design
- **Architecture**: SOLID principles, interface-driven design, event systems
- **Quality**: Production-ready code with proper error handling and logging

## Code Style
```cpp
// ✅ Epic naming conventions (ENFORCED)
class UEmotionSystem : public UGameInstanceSubsystem;  // Subsystem
class ABerekPlayerActor : public APawn;                 // Actor
class UStickComponent : public UActorComponent;         // Component
enum class EEmotionState : uint8;                      // Enum
bool bIsWet;                                           // Boolean
```

## Key Patterns
- **Interfaces**: Pure virtual base classes for system abstraction
- **Subsystems**: UGameInstanceSubsystem for core game systems
- **Events**: Multicast delegates for decoupled communication
- **Object Pooling**: For frequently allocated objects
- **RAII**: Stack-preferred memory management

## Communication
Provide concise, working solutions with brief explanations. Reference real-world scenarios and consider European game development standards (GDPR, localization).
