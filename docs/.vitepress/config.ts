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
    ],
    sidebar: {
      "/guide/": [
  { text: "Overview", link: "/guide/index" },
  { text: "UE5.6 Essentials", link: "/guide/ue56-essentials" },
  { text: "AAA Blueprint Patterns", link: "/guide/ue5-6-blueprint-aaa-patterns" },
  { text: "Enhanced Input (Blueprint)", link: "/guide/enhanced-input-blueprint-setup" },
  { text: "UI (MVVM) Blueprint Patterns", link: "/guide/ui-mvvm-blueprint-patterns" },
  { text: "Data Assets & Asset Manager", link: "/guide/data-assets-asset-manager" },
  { text: "Save/Load Service (Blueprint)", link: "/guide/save-load-service-blueprint" },
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
