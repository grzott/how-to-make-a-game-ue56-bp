import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import SmartNavigation from "./components/SmartNavigation.vue";
import { h } from "vue";

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "doc-after": () => h(SmartNavigation),
    });
  },
};

export default theme;
