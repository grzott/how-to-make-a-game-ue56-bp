<template>
  <div v-if="isGuidePage" class="next-plan-cta">
    <a class="link" href="/plan">Next: Authoring Plan →</a>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { computed } from "vue";

const { page } = useData();
const isGuidePage = computed(() =>
  page.value.relativePath?.startsWith("guide/")
);
</script>

<style scoped>
.next-plan-cta {
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: flex-end;
}
.link {
  font-weight: 600;
}
</style>
