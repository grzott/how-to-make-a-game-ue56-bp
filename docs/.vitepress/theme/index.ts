import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import NextPlanFooter from "./components/NextPlanFooter.vue";
import { h } from "vue";

const theme: Theme = {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "doc-after": () => h(NextPlanFooter),
    });
  },
};

export default theme;
