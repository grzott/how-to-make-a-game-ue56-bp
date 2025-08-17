/// <reference types="node" />
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "UE5.6 Blueprint AAA Guide",
  description:
    "Professional patterns and workflows for building a AAA-quality game in Unreal Engine 5.6 using Blueprints only.",
  base: process.env.DOCS_BASE || "/",
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
        {
          text: "AAA Blueprint Patterns",
          link: "/guide/ue5-6-blueprint-aaa-patterns",
        },
      ],
      "/llm/": [
        { text: "General LLM Instructions", link: "/llm/general.instructions" },
      ],
      "/": [{ text: "Home", link: "/" }],
    },
    outline: "deep",
    socialLinks: [{ icon: "github", link: "https://github.com/USER/REPO" }],
  },
});
