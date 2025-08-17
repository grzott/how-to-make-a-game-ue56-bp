/// <reference types="node" />
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "UE5.6 Blueprint AAA Guide",
  description:
    "AAA production patterns for Unreal Engine 5.6 using Blueprints only—written for CG artists, no C++ required.",
  base: process.env.DOCS_BASE || "/",
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "UE5.6 Essentials", link: "/guide/ue56-essentials" },
      { text: "LLM Instructions", link: "/llm/general.instructions" },
      { text: "Authoring Plan", link: "/plan" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "Getting Started",
          items: [
            { text: "Overview", link: "/guide/index" },
            { text: "UE5.6 Essentials", link: "/guide/ue56-essentials" },
            {
              text: "AAA Blueprint Patterns",
              link: "/guide/ue5-6-blueprint-aaa-patterns",
            },
          ],
        },
        {
          text: "Core Systems",
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
          text: "Gameplay Systems",
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
          text: "Advanced UE5.6 Systems",
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
          text: "Networking & Multiplayer",
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
          text: "Performance & Optimization",
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
          text: "Production & Enterprise",
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
        { text: "General LLM Instructions", link: "/llm/general.instructions" },
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
