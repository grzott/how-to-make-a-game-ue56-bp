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
  { text: "Overview", link: "/guide/index" },
  { text: "UE5.6 Essentials", link: "/guide/ue56-essentials" },
  { text: "AAA Blueprint Patterns", link: "/guide/ue5-6-blueprint-aaa-patterns" },
  { text: "Enhanced Input (Blueprint)", link: "/guide/enhanced-input-blueprint-setup" },
  { text: "UI (MVVM) Blueprint Patterns", link: "/guide/ui-mvvm-blueprint-patterns" },
  { text: "Gameplay Tags", link: "/guide/gameplay-tags-blueprint-patterns" },
  { text: "Gameplay Ability System (GAS)", link: "/guide/gameplay-ability-system-blueprint" },
  { text: "Data Assets & Asset Manager", link: "/guide/data-assets-asset-manager" },
  { text: "Inventory (DataAssets + Replication)", link: "/guide/inventory-dataassets-replication-blueprint" },
  { text: "Interaction (Trace + Interface)", link: "/guide/interaction-trace-interface-blueprint" },
  { text: "Save/Load Service (Blueprint)", link: "/guide/save-load-service-blueprint" },
  { text: "Subsystems (Services & Events)", link: "/guide/subsystems-blueprint-patterns" },
  { text: "Animation Blueprint Patterns", link: "/guide/animation-blueprint-patterns" },
  { text: "World Partition & Streaming", link: "/guide/world-partition-level-streaming-blueprint" },
  { text: "Networking Basics", link: "/guide/networking-blueprint-basics" },
  { text: "Performance & Memory", link: "/guide/performance-optimization-blueprint" },
  { text: "Testing & Automation", link: "/guide/testing-automation-blueprint" },
  { text: "Interaction (Trace + Interface)", link: "/guide/interaction-trace-interface-blueprint" },
  { text: "Inventory (DataAssets + Replication)", link: "/guide/inventory-dataassets-replication-blueprint" },
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
      { icon: "github", link: "https://github.com/grzott/how-to-make-a-game-ue56-bp" },
    ],
  },
});
