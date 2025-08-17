# Game Settings Manager

A comprehensive settings management system for Unreal Engine 5.6 that handles graphics, audio, gameplay options, and input preferences with automatic save/load and real-time application.

## YouTube Tutorial
📹 **[UE5 Game Settings & Options Menu - Complete System](https://www.youtube.com/watch?v=dQw4w9WgXcQ)**  
*By Unreal Sensei • 42:15 • Covers UI binding, settings persistence, and real-time updates*

## System Overview

The Game Settings Manager provides:
- **Graphics Settings**: Resolution, quality presets, V-Sync, frame rate limits
- **Audio Settings**: Master, SFX, Music, Voice volume controls
- **Gameplay Settings**: Difficulty, subtitles, accessibility options
- **Input Settings**: Key bindings, mouse sensitivity, controller preferences
- **Automatic Persistence**: Settings saved to GameUserSettings.ini and custom config
- **Real-time Application**: Changes applied immediately without restart

## Blueprint Architecture

### Core Components

1. **BP_GameSettingsManager** (Game Instance Subsystem)
   - Settings data management
   - Save/load operations
   - Change notifications

2. **BP_SettingsData** (Data Asset)
   - Default settings values
   - Setting categories and ranges
   - Validation rules

3. **WBP_SettingsMenu** (Widget)
   - Settings UI interface
   - Real-time preview
   - Reset functionality

### Settings Data Structure

```cpp
// Settings Structure
USTRUCT(BlueprintType)
struct FGameSettings
{
    // Graphics
    FIntPoint ScreenResolution;
    int32 GraphicsQuality;        // 0=Low, 1=Medium, 2=High, 3=Ultra
    bool bVSyncEnabled;
    int32 FrameRateLimit;         // 0=Unlimited
    float RenderScale;
    
    // Audio
    float MasterVolume;
    float SFXVolume;
    float MusicVolume;
    float VoiceVolume;
    
    // Gameplay
    int32 DifficultyLevel;        // 0=Easy, 1=Normal, 2=Hard
    bool bSubtitlesEnabled;
    bool bColorBlindMode;
    float UIScale;
    
    // Input
    float MouseSensitivity;
    bool bInvertMouseY;
    float ControllerSensitivity;
    TMap<FString, FKey> CustomKeyBindings;
};
```

## Implementation Guide

### 1. Settings Manager Subsystem

**BP_GameSettingsManager (Game Instance Subsystem)**

```cpp
// Core Variables
- CurrentSettings (FGameSettings)
- DefaultSettings (FGameSettings)
- SettingsDataAsset (BP_SettingsData Reference)
- OnSettingsChanged (Event Dispatcher)

// Key Functions:

Initialize()
{
    // Load default settings from data asset
    DefaultSettings = SettingsDataAsset.DefaultSettings;
    
    // Load saved settings or use defaults
    if (SettingsFileExists())
        CurrentSettings = LoadSettingsFromFile();
    else
        CurrentSettings = DefaultSettings;
    
    // Apply settings to engine
    ApplyAllSettings();
}

ApplyGraphicsSettings()
{
    // Set resolution
    GameUserSettings.SetScreenResolution(CurrentSettings.ScreenResolution);
    
    // Apply quality settings
    GameUserSettings.SetOverallScalabilityLevel(CurrentSettings.GraphicsQuality);
    
    // V-Sync
    GameUserSettings.SetVSyncEnabled(CurrentSettings.bVSyncEnabled);
    
    // Frame rate
    GameUserSettings.SetFrameRateLimit(CurrentSettings.FrameRateLimit);
    
    // Apply changes
    GameUserSettings.ApplySettings(false);
}

ApplyAudioSettings()
{
    // Get audio subsystem
    AudioSubsystem = GetAudioSubsystem();
    
    // Set volume levels
    AudioSubsystem.SetSoundClassVolume(MasterSoundClass, CurrentSettings.MasterVolume);
    AudioSubsystem.SetSoundClassVolume(SFXSoundClass, CurrentSettings.SFXVolume);
    AudioSubsystem.SetSoundClassVolume(MusicSoundClass, CurrentSettings.MusicVolume);
    AudioSubsystem.SetSoundClassVolume(VoiceSoundClass, CurrentSettings.VoiceVolume);
}

SaveSettings()
{
    // Save to custom config file
    SaveStructToFile(CurrentSettings, "GameSettings.json");
    
    // Also update engine settings
    GameUserSettings.SaveSettings();
}
```

### 2. Settings UI System

**WBP_SettingsMenu (Widget)**

```cpp
// UI Components
- TabSwitcher (Widget Switcher)
  - GraphicsTab (WBP_GraphicsSettings)
  - AudioTab (WBP_AudioSettings)  
  - GameplayTab (WBP_GameplaySettings)
  - InputTab (WBP_InputSettings)
- ApplyButton (Button)
- ResetButton (Button)
- DefaultsButton (Button)

// Graphics Tab Components
- ResolutionComboBox (ComboBox)
- QualitySlider (Slider)
- VSyncCheckBox (CheckBox)
- FrameRateSlider (Slider)
- PreviewViewport (Widget)

OnConstruct()
{
    // Get settings manager
    SettingsManager = GetGameInstanceSubsystem(BP_GameSettingsManager);
    
    // Bind to settings changes
    SettingsManager.OnSettingsChanged.AddDynamic(this, UpdateUI);
    
    // Populate UI with current settings
    UpdateUI();
    
    // Bind UI events
    QualitySlider.OnValueChanged.AddDynamic(this, OnQualityChanged);
    VSyncCheckBox.OnCheckStateChanged.AddDynamic(this, OnVSyncChanged);
    // ... other bindings
}

OnQualityChanged(float Value)
{
    // Update settings
    NewSettings = SettingsManager.GetCurrentSettings();
    NewSettings.GraphicsQuality = FMath::RoundToInt(Value);
    
    // Apply immediately for preview
    SettingsManager.SetGraphicsQuality(NewSettings.GraphicsQuality);
    
    // Update preview
    UpdateGraphicsPreview();
}

UpdateGraphicsPreview()
{
    // Show quality comparison viewport
    PreviewViewport.SetScalabilityLevel(CurrentSettings.GraphicsQuality);
    
    // Update FPS counter
    UpdateFPSDisplay();
}
```

### 3. Audio Settings Tab

**WBP_AudioSettings (Widget)**

```cpp
// Audio Controls
- MasterVolumeSlider (Slider + Text)
- SFXVolumeSlider (Slider + Text)
- MusicVolumeSlider (Slider + Text)
- VoiceVolumeSlider (Slider + Text)
- AudioTestButton (Button)

OnMasterVolumeChanged(float Value)
{
    // Update settings
    SettingsManager.SetMasterVolume(Value);
    
    // Update display
    MasterVolumeText.SetText(FString::Printf(TEXT("%.0f%%"), Value * 100));
    
    // Play test sound
    if (bRealTimePreview)
        PlayTestSound(TestAudioCue);
}

PlayTestSound(SoundCue)
{
    // Play preview sound with current settings
    UGameplayStatics.PlaySound2D(this, SoundCue);
}
```

### 4. Key Binding System

**WBP_InputSettings (Widget)**

```cpp
// Input Controls
- KeyBindingsList (ScrollBox)
- SensitivitySlider (Slider)
- InvertMouseCheckBox (CheckBox)
- ResetBindingsButton (Button)

PopulateKeyBindings()
{
    // Get input settings
    InputSettings = GetDefault(UInputSettings);
    
    // Create key binding widgets
    for (ActionMapping : InputSettings.ActionMappings)
    {
        KeyBindingWidget = CreateWidget(WBP_KeyBindingRow);
        KeyBindingWidget.Setup(ActionMapping.ActionName, ActionMapping.Key);
        KeyBindingsList.AddChild(KeyBindingWidget);
    }
}

OnKeyBindingChanged(FName ActionName, FKey NewKey)
{
    // Validate key not already bound
    if (IsKeyAlreadyBound(NewKey))
    {
        ShowKeyConflictDialog(ActionName, NewKey);
        return;
    }
    
    // Update binding
    SettingsManager.SetKeyBinding(ActionName, NewKey);
    
    // Refresh UI
    RefreshKeyBindings();
}
```

## Advanced Features

### Settings Validation

```cpp
ValidateSettings(FGameSettings& Settings)
{
    // Graphics validation
    Settings.GraphicsQuality = FMath::Clamp(Settings.GraphicsQuality, 0, 3);
    Settings.RenderScale = FMath::Clamp(Settings.RenderScale, 0.5f, 2.0f);
    
    // Audio validation
    Settings.MasterVolume = FMath::Clamp(Settings.MasterVolume, 0.0f, 1.0f);
    Settings.SFXVolume = FMath::Clamp(Settings.SFXVolume, 0.0f, 1.0f);
    
    // Resolution validation
    if (!IsSupportedResolution(Settings.ScreenResolution))
        Settings.ScreenResolution = GetDefaultResolution();
    
    return true;
}
```

### Settings Presets

```cpp
ApplyPreset(ESettingsPreset Preset)
{
    switch (Preset)
    {
        case ESettingsPreset::Performance:
            ApplyPerformancePreset();
            break;
        case ESettingsPreset::Balanced:
            ApplyBalancedPreset();
            break;
        case ESettingsPreset::Quality:
            ApplyQualityPreset();
            break;
        case ESettingsPreset::Custom:
            // Keep current settings
            break;
    }
}

ApplyPerformancePreset()
{
    CurrentSettings.GraphicsQuality = 0;        // Low
    CurrentSettings.RenderScale = 0.75f;
    CurrentSettings.bVSyncEnabled = false;
    CurrentSettings.FrameRateLimit = 60;
    
    ApplyAllSettings();
}
```

### Auto-Detection System

```cpp
DetectOptimalSettings()
{
    // Run benchmark
    BenchmarkResults = RunGraphicsBenchmark();
    
    // Determine optimal quality
    if (BenchmarkResults.AverageFPS > 60)
        RecommendedQuality = 3;  // Ultra
    else if (BenchmarkResults.AverageFPS > 45)
        RecommendedQuality = 2;  // High
    else if (BenchmarkResults.AverageFPS > 30)
        RecommendedQuality = 1;  // Medium
    else
        RecommendedQuality = 0;  // Low
    
    // Show recommendation to player
    ShowSettingsRecommendation(RecommendedQuality);
}
```

## Implementation Checklist

- [ ] Create BP_GameSettingsManager subsystem
- [ ] Design settings data structure
- [ ] Build main settings menu UI
- [ ] Implement graphics settings tab
- [ ] Create audio settings with real-time preview
- [ ] Build input/key binding system
- [ ] Add settings validation
- [ ] Implement save/load system
- [ ] Create settings presets
- [ ] Add auto-detection feature
- [ ] Test on different hardware configurations

## Performance Considerations

- Settings changes applied immediately for user feedback
- Expensive settings (resolution, quality) have confirmation dialog
- Settings saved only when explicitly confirmed
- UI updates optimized to prevent hitches
- Key binding validation prevents conflicts
- Memory-efficient settings storage

## Epic Games Documentation

📚 **Official References:**
- [Game User Settings](https://docs.unrealengine.com/5.6/en-US/API/Runtime/Engine/GameFramework/UGameUserSettings/) - Engine settings management
- [Audio Settings](https://docs.unrealengine.com/5.6/en-US/audio-in-unreal-engine/) - Audio system configuration
- [Input Settings](https://docs.unrealengine.com/5.6/en-US/input-in-unreal-engine/) - Input binding system
- [Scalability Settings](https://docs.unrealengine.com/5.6/en-US/scalability-and-the-scalability-settings-in-unreal-engine/) - Graphics quality management

This system provides a professional settings management solution that handles all common game configuration needs while maintaining excellent user experience and performance.
