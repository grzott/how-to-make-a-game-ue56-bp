/// <reference types="node" />
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "UE5.6 Blueprint AAA Guide",
  description:
    "AAA production patterns for Unreal Engine 5.6 using Blueprints only—written for CG artists, no C++ required.",
  base: process.env.DOCS_BASE || "/",
  lastUpdated: true,
  ignoreDeadLinks: true, // Allow development with missing pages
  themeConfig: {
    // Enable prev/next navigation
    docFooter: {
      prev: "Previous",
      next: "Next",
    },
    // Configure search
    search: {
      provider: "local",
      options: {
        detailedView: true,
      },
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" },
      { text: "LLM & AI", link: "/llm/" },
      { text: "Glossary", link: "/glossary/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "🚀 Getting Started",
          collapsed: false,
          items: [
            { text: "Overview", link: "/guide/" },
            { text: "UE5.6 Essentials", link: "/guide/ue56-essentials" },
            {
              text: "AAA Blueprint Patterns",
              link: "/guide/ue5-6-blueprint-aaa-patterns",
            },
          ],
        },
        {
          text: "⚙️ Core Systems",
          collapsed: false,
          items: [
            {
              text: "Enhanced Input (Basic)",
              link: "/guide/enhanced-input-blueprint-setup",
            },
            {
              text: "Enhanced Input Advanced",
              link: "/guide/enhanced-input-advanced-features",
            },
            {
              text: "UI (MVVM) Patterns",
              link: "/guide/ui-mvvm-blueprint-patterns",
            },
            {
              text: "Gameplay Tags",
              link: "/guide/gameplay-tags-blueprint-patterns",
            },
            {
              text: "Data Assets & Asset Manager",
              link: "/guide/data-assets-asset-manager",
            },
            {
              text: "Subsystems (Services)",
              link: "/guide/subsystems-blueprint-patterns",
            },
            {
              text: "Save/Load Service",
              link: "/guide/save-load-service-blueprint",
            },
          ],
        },
        {
          text: "🎮 Gameplay Systems",
          collapsed: false,
          items: [
            {
              text: "Gameplay Ability System (GAS)",
              link: "/guide/gameplay-ability-system-blueprint",
            },
            {
              text: "GAS Advanced Patterns",
              link: "/guide/gameplay-ability-system-advanced",
            },
            {
              text: "Interaction (Trace + Interface)",
              link: "/guide/interaction-trace-interface-blueprint",
            },
            {
              text: "Inventory (DataAssets + Replication)",
              link: "/guide/inventory-dataassets-replication-blueprint",
            },
            {
              text: "Example: Interaction + Inventory Loop",
              link: "/guide/example-interaction-inventory-blueprint",
            },
            {
              text: "Animation Blueprint Patterns",
              link: "/guide/animation-blueprint-patterns",
            },
          ],
        },
        {
          text: "🚀 Advanced UE5.6 Systems",
          collapsed: false,
          items: [
            {
              text: "Nanite + Lumen Integration",
              link: "/guide/nanite-lumen-blueprint-integration",
            },
            {
              text: "Mass Entity Framework",
              link: "/guide/mass-entity-blueprint-integration",
            },
            {
              text: "World Partition & Streaming",
              link: "/guide/world-partition-level-streaming-blueprint",
            },
            {
              text: "World-Scale Seamless Architecture",
              link: "/guide/world-streaming-seamless-architecture",
            },
          ],
        },
        {
          text: "🌐 Networking & Multiplayer",
          collapsed: false,
          items: [
            {
              text: "Networking Basics",
              link: "/guide/networking-blueprint-basics",
            },
            {
              text: "Advanced Networking (Prediction)",
              link: "/guide/advanced-networking-prediction-authority",
            },
          ],
        },
        {
          text: "⚡ Performance & Optimization",
          collapsed: false,
          items: [
            {
              text: "Performance & Memory",
              link: "/guide/performance-optimization-blueprint",
            },
            {
              text: "Performance Budgets & Profiling",
              link: "/guide/performance-budgets-profiling-blueprint",
            },
            {
              text: "Blueprint Compiler & VM Optimization",
              link: "/guide/blueprint-compiler-vm-optimization",
            },
          ],
        },
        {
          text: "🏢 Production & Enterprise",
          collapsed: false,
          items: [
            {
              text: "AI-Powered Blueprint Development",
              link: "/guide/ai-powered-blueprint-development",
            },
            {
              text: "Production Pipeline (CI/CD)",
              link: "/guide/production-pipeline-blueprint-cicd",
            },
            {
              text: "Testing & Automation",
              link: "/guide/testing-automation-blueprint",
            },
            {
              text: "Testing & Automation Advanced",
              link: "/guide/testing-automation-advanced",
            },
          ],
        },
      ],
      "/llm/": [
        {
          text: "🤖 AI & LLM Integration",
          collapsed: false,
          items: [
            { text: "Overview", link: "/llm/" },
            { text: "Getting Started with AI", link: "/llm/getting-started" },
            {
              text: "UE5.6 Editor Integration",
              link: "/llm/ue56-editor-integration",
            },
          ],
        },
        {
          text: "🚀 Productivity & Workflows",
          collapsed: false,
          items: [
            {
              text: "AI-Enhanced Development",
              link: "/llm/productivity-workflows",
            },
            { text: "Blueprint Generation", link: "/llm/blueprint-generation" },
            {
              text: "Code Review & Optimization",
              link: "/llm/code-review-optimization",
            },
            {
              text: "Debugging & Troubleshooting",
              link: "/llm/debugging-troubleshooting",
            },
          ],
        },
        {
          text: "📝 Prompts & Templates",
          collapsed: false,
          items: [
            {
              text: "General LLM Instructions",
              link: "/llm/general.instructions",
            },
            {
              text: "Blueprint Development Prompts",
              link: "/llm/blueprint-prompts",
            },
            {
              text: "Performance Optimization Prompts",
              link: "/llm/performance-prompts",
            },
            {
              text: "Asset Generation Prompts",
              link: "/llm/asset-generation-prompts",
            },
          ],
        },
        {
          text: "🎨 Asset Creation & Tools",
          collapsed: false,
          items: [
            {
              text: "Best Models for Game Assets",
              link: "/llm/best-models-assets",
            },
            {
              text: "Texture & Material Generation",
              link: "/llm/texture-material-generation",
            },
            {
              text: "3D Model & Animation AI",
              link: "/llm/model-animation-ai",
            },
            {
              text: "Audio & Sound Generation",
              link: "/llm/audio-sound-generation",
            },
          ],
        },
        {
          text: "⚡ Advanced Techniques",
          collapsed: false,
          items: [
            {
              text: "Custom Model Training",
              link: "/llm/custom-model-training",
            },
            {
              text: "API Integration Patterns",
              link: "/llm/api-integration-patterns",
            },
            {
              text: "Team Collaboration with AI",
              link: "/llm/team-collaboration",
            },
            { text: "Future Technologies", link: "/llm/future-technologies" },
          ],
        },
      ],
      "/glossary/": [
        {
          text: "📚 Reference & Glossary",
          items: [
            { text: "Overview", link: "/glossary/" },
            { text: "UE5.6 Terms & Concepts", link: "/glossary/ue56-terms" },
            {
              text: "Blueprint Patterns Dictionary",
              link: "/glossary/blueprint-patterns",
            },
            { text: "AI & LLM Terminology", link: "/glossary/ai-llm-terms" },
            {
              text: "Performance Metrics Guide",
              link: "/glossary/performance-metrics",
            },
          ],
        },
      ],
      "/": [{ text: "Home", link: "/" }],
    },
    outline: "deep",
    editLink: {
      pattern:
        "https://github.com/grzott/how-to-make-a-game-ue56-bp/edit/main/docs/:path",
      text: "Suggest changes to this page",
    },
    lastUpdated: {
      text: "Last updated",
      formatOptions: { dateStyle: "medium", timeStyle: "short" },
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/grzott/how-to-make-a-game-ue56-bp",
      },
    ],
  },
});
