# UE5.6 Terms & Definitions

## Overview
Comprehensive glossary of Unreal Engine 5.6 terminology essential for Blueprint development. This reference covers core concepts, modern systems, and technical terms that every UE5.6 Blueprint developer should understand for professional game development.

## Core Engine Terminology

### Engine Architecture
- **Actor**: Base class for objects that can be placed or spawned in the world
- **Component**: Modular functionality that can be attached to Actors for specific behaviors
- **World**: Container for all game objects, levels, and systems
- **Level**: Individual scenes or maps within a World
- **Game Mode**: Defines rules and win conditions for a game type
- **Game State**: Manages game-wide information and state
- **Player Controller**: Handles input and controls a Pawn
- **Player State**: Stores player-specific information that persists across levels
- **Pawn**: Objects that can be possessed by a Player Controller
- **Character**: Specialized Pawn with built-in movement capabilities

### Blueprint System Core
- **Blueprint Class**: Visual scripting class that defines object behavior
- **Blueprint Interface**: Contract defining functions that implementing classes must provide
- **Event Graph**: Visual representation of event-driven logic flow
- **Function Graph**: Reusable code blocks that can return values
- **Macro**: Collapsed nodes that expand inline during compilation
- **Construction Script**: Runs when an object is created or modified in editor
- **Event Dispatcher**: Broadcasting system for loose coupling between objects
- **Blueprint Nativization**: Conversion of Blueprints to C++ for performance
- **Hot Reload**: Runtime recompilation of Blueprint changes without restart

## Modern UE5.6 Systems

### Enhanced Input System
- **Input Actions**: Abstract input definitions independent of device
- **Input Mapping Context**: Contextual mapping of inputs to actions
- **Input Modifiers**: Transformations applied to input values
- **Input Triggers**: Conditions that determine when actions activate
- **Action Value**: The processed input data passed to gameplay code
- **Chorded Action**: Input requiring multiple simultaneous inputs
- **Combo Action**: Sequence-based input requiring specific timing

### Gameplay Ability System (GAS)
- **Gameplay Ability**: Individual powers or skills characters can use
- **Ability System Component (ASC)**: Core component managing abilities and attributes
- **Gameplay Attributes**: Numeric properties like health, mana, or damage
- **Gameplay Effects**: Modifications to attributes or gameplay state
- **Gameplay Tags**: Hierarchical labels for categorizing gameplay elements
- **Gameplay Cues**: Audio/visual feedback triggered by gameplay events
- **Attribute Set**: Collection of related gameplay attributes
- **Execution Calculation**: Custom calculation for complex gameplay effects

### World Partition & Streaming
- **World Partition**: System for managing large, streaming worlds
- **Data Layers**: Organizational system for world content
- **Level Instances**: Reusable level content that can be placed multiple times
- **World Composition**: Legacy system for multi-level worlds
- **Streaming Volume**: Volume that controls what content loads/unloads
- **HLOD (Hierarchical Level of Detail)**: System for optimizing distant geometry
- **One File Per Actor (OFPA)**: File organization system for collaborative development

## Rendering & Graphics Terms

### Nanite & Lumen Systems
- **Nanite**: Virtualized geometry system for high-polygon meshes
- **Lumen**: Dynamic global illumination and reflections system
- **Global Illumination**: Lighting system accounting for indirect light bounces
- **Screen Space Reflections (SSR)**: Reflection technique using screen-space data
- **Temporal Upsampling (TSR)**: Anti-aliasing technique using temporal data
- **Virtual Shadow Maps (VSM)**: High-resolution shadow mapping system
- **Hardware Ray Tracing**: GPU-accelerated ray tracing for lighting and reflections
- **Path Tracer**: Offline rendering mode for cinematic quality

### Materials & Shading
- **Physical Based Rendering (PBR)**: Realistic shading model based on physical properties
- **Material Instance**: Parameterized version of a material for customization
- **Material Function**: Reusable material logic components
- **Material Layer**: System for combining multiple material components
- **Master Material**: Base material providing parameters for instances
- **Dynamic Material Instance**: Runtime-created material instance for modifications
- **Material Parameter Collection**: Shared parameters across multiple materials
- **Vertex Color**: Per-vertex color data for materials and shading

## Performance & Optimization

### Rendering Performance
- **Draw Call**: Command to GPU to render geometry
- **Batching**: Combining multiple objects into single draw calls
- **Instancing**: Rendering multiple copies of objects efficiently
- **Occlusion Culling**: Hiding objects blocked by other geometry
- **Frustum Culling**: Hiding objects outside camera view
- **LOD (Level of Detail)**: Simplified versions of objects at distance
- **Texture Streaming**: Loading textures on-demand to manage memory
- **Mesh LOD**: Geometric simplification for distance-based optimization

### Blueprint Performance
- **Tick Function**: Per-frame update function (expensive if overused)
- **Event-Driven Architecture**: Using events instead of continuous polling
- **Blueprint Compilation**: Process of converting visual scripts to executable code
- **Blueprint VM**: Virtual machine that executes Blueprint bytecode
- **Pure Function**: Function with no side effects, can be optimized
- **Latent Function**: Function that executes over multiple frames
- **Execution Pin**: White connector determining execution flow order
- **Data Pin**: Colored connector for passing data between nodes

## Networking & Multiplayer

### Network Architecture
- **Replication**: Synchronizing data between server and clients
- **Authority**: Server's authoritative control over game state
- **Client Prediction**: Local simulation to hide network latency
- **Rollback**: Correcting client state when predictions are wrong
- **RPC (Remote Procedure Call)**: Function calls across network
- **Network Relevancy**: System determining what data each client needs
- **Network LOD**: Distance-based optimization for networked objects
- **Connection**: Network link between server and individual client

### Replication Concepts
- **Replicated Variable**: Variable synchronized across network
- **RepNotify**: Function called when replicated variable changes
- **Multicast**: RPC sent to all connected clients
- **Server RPC**: Function call sent from client to server
- **Client RPC**: Function call sent from server to specific client
- **Reliable**: Guaranteed delivery of network messages
- **Unreliable**: Fast delivery without delivery guarantees
- **Net Delta Serialization**: Efficient replication of only changed data

## Animation & Audio

### Animation Systems
- **Animation Blueprint**: Blueprint controlling character animation logic
- **State Machine**: System managing different animation states
- **Blend Space**: Multi-dimensional blending of animations
- **Animation Montage**: Composite animation with sections and slots
- **Skeletal Mesh**: Mesh with bone hierarchy for animation
- **Animation Sequence**: Individual animation data
- **Bone**: Individual element in skeletal hierarchy
- **Socket**: Attachment point on skeletal mesh for objects

### Audio Systems
- **MetaSound**: Node-based audio generation and processing system
- **Audio Component**: Component for playing sounds in world space
- **Sound Cue**: Node-based audio processing graph
- **Sound Class**: Categorization system for audio management
- **Sound Mix**: Runtime audio mixing and processing
- **Attenuation**: Distance-based volume and processing changes
- **Reverb Volume**: Spatial audio processing based on environment
- **Audio Bus**: Routing system for audio processing chains

## Blueprint-Specific Terminology

### Visual Scripting Elements
- **Node**: Individual functional element in Blueprint graph
- **Pin**: Connection point on nodes for data or execution
- **Wire**: Connection between pins showing data/execution flow
- **Variable**: Data storage accessible throughout Blueprint
- **Local Variable**: Variable scoped to single function
- **Timeline**: Node for time-based animation and interpolation
- **Comment Box**: Documentation element for organizing Blueprint graphs
- **Reroute Node**: Organizational node for cleaner wire routing

### Advanced Blueprint Concepts
- **Blueprint Communication**: Methods for Blueprints to interact
- **Blueprint Interface**: Contract for consistent function implementation
- **Event Dispatcher**: Broadcasting mechanism for decoupled communication
- **Delegate**: Function pointer for callback functionality
- **Struct**: Custom data type combining multiple variables
- **Enum**: Enumerated type with named values
- **Data Table**: Spreadsheet-like data storage for Blueprints
- **Curve**: Mathematical curve for interpolation and animation

## Development & Production

### Asset Management
- **Content Browser**: Interface for managing project assets
- **Asset Registry**: System tracking all project assets
- **Primary Asset**: Important assets marked for cooking and loading
- **Data Asset**: Simple asset for storing game data
- **Redirector**: System handling moved or renamed assets
- **Asset Bundle**: Group of assets loaded together
- **Soft Reference**: Lazy-loaded reference to avoid hard dependencies
- **Hard Reference**: Direct reference that forces asset loading

### Development Tools
- **Blueprint Debugger**: Tool for stepping through Blueprint execution
- **Visual Logger**: System for recording and analyzing gameplay data
- **Stat System**: Performance monitoring and profiling tools
- **Console Commands**: Developer commands for debugging and testing
- **Editor Utility Widget**: Custom editor tools using UMG
- **Commandlet**: Command-line tool for batch operations
- **Cook**: Process preparing assets for target platform
- **Package**: Final build containing game assets and code

This comprehensive glossary serves as a quick reference for UE5.6 Blueprint development, ensuring consistent understanding of terminology across development teams and providing clarity for complex technical concepts.
