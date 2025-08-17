<template>
  <div v-if="isGuidePage" class="smart-navigation">
    <!-- Previous/Next Navigation -->
    <div class="nav-links" v-if="prevNext.prev || prevNext.next">
      <div class="nav-item prev" v-if="prevNext.prev">
        <span class="nav-label">← Previous</span>
        <a :href="prevNext.prev.link" class="nav-title">{{
          prevNext.prev.text
        }}</a>
      </div>
      <div class="nav-item next" v-if="prevNext.next">
        <span class="nav-label">Next →</span>
        <a :href="prevNext.next.link" class="nav-title">{{
          prevNext.next.text
        }}</a>
      </div>
    </div>

    <!-- Section Overview -->
    <div class="section-overview" v-if="currentSection">
      <h3>{{ currentSection.emoji }} {{ currentSection.name }}</h3>
      <div class="section-progress">
        <div class="progress-bar">
          <div
            class="progress-fill"
            :style="{ width: currentSection.progress + '%' }"
          ></div>
        </div>
        <span class="progress-text">
          {{ currentSection.currentIndex + 1 }} of
          {{ currentSection.total }} completed
        </span>
      </div>

      <div class="section-links">
        <div
          class="section-link"
          v-for="(item, index) in currentSection.items"
          :key="index"
        >
          <span
            class="link-status"
            :class="{
              completed: index <= currentSection.currentIndex,
              current: index === currentSection.currentIndex,
            }"
          >
            {{
              index === currentSection.currentIndex
                ? "📍"
                : index < currentSection.currentIndex
                ? "✅"
                : "⏳"
            }}
          </span>
          <a
            :href="item.link"
            :class="{ 'current-page': index === currentSection.currentIndex }"
          >
            {{ item.text }}
          </a>
        </div>
      </div>
    </div>

    <!-- Learning Path Recommendations -->
    <div class="learning-recommendations" v-if="recommendations.length > 0">
      <h4>💡 Recommended Next Steps</h4>
      <div class="recommendations-list">
        <div
          class="recommendation"
          v-for="rec in recommendations"
          :key="rec.link"
        >
          <span class="rec-type">{{ rec.type }}</span>
          <a :href="rec.link" class="rec-title">{{ rec.title }}</a>
          <span class="rec-reason">{{ rec.reason }}</span>
        </div>
      </div>
    </div>

    <!-- Fallback CTA -->
    <div class="fallback-cta" v-if="!prevNext.next && !recommendations.length">
      <a class="cta-link" href="/plan">📋 View Complete Authoring Plan →</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from "vitepress";
import { computed } from "vue";

const { page, theme } = useData();

const isGuidePage = computed(() =>
  page.value.relativePath?.startsWith("guide/")
);

// Extract navigation structure from config
const guideNavigation = computed(() => {
  const sidebar = theme.value.sidebar?.["/guide/"] || [];
  return sidebar.flatMap(
    (section) =>
      section.items?.map((item) => ({
        ...item,
        section: section.text,
        sectionEmoji: section.text.split(" ")[0], // Extract emoji
      })) || []
  );
});

// Current page index in navigation
const currentIndex = computed(() => {
  const currentPath = page.value.relativePath?.replace(/\.md$/, "");
  const currentLink = `/guide/${currentPath?.replace("guide/", "") || ""}`;
  return guideNavigation.value.findIndex(
    (item) =>
      item.link === currentLink ||
      (currentLink === "/guide/" && item.link === "/guide/")
  );
});

// Previous and next pages
const prevNext = computed(() => {
  const current = currentIndex.value;
  const nav = guideNavigation.value;

  return {
    prev: current > 0 ? nav[current - 1] : null,
    next: current >= 0 && current < nav.length - 1 ? nav[current + 1] : null,
  };
});

// Current section information
const currentSection = computed(() => {
  if (currentIndex.value === -1) return null;

  const currentPage = guideNavigation.value[currentIndex.value];
  if (!currentPage) return null;

  const sectionPages = guideNavigation.value.filter(
    (item) => item.section === currentPage.section
  );

  const sectionCurrentIndex = sectionPages.findIndex(
    (item) => item.link === currentPage.link
  );

  return {
    name: currentPage.section?.replace(/^[^\s]*\s/, "") || "Guide", // Remove emoji
    emoji: currentPage.sectionEmoji || "📚",
    items: sectionPages,
    currentIndex: sectionCurrentIndex,
    total: sectionPages.length,
    progress: Math.round(
      ((sectionCurrentIndex + 1) / sectionPages.length) * 100
    ),
  };
});

// Intelligent recommendations based on current page
const recommendations = computed(() => {
  const currentPath = page.value.relativePath;
  const recs = [];

  // Context-aware recommendations
  if (currentPath?.includes("enhanced-input-blueprint-setup")) {
    recs.push({
      type: "🔧 Advanced",
      title: "Enhanced Input Advanced Features",
      link: "/guide/enhanced-input-advanced-features",
      reason: "Learn advanced input patterns like Player Mappable Configs",
    });
  }

  if (currentPath?.includes("gameplay-ability-system-blueprint")) {
    recs.push({
      type: "🚀 Production",
      title: "GAS Advanced Patterns",
      link: "/guide/gameplay-ability-system-advanced",
      reason: "Scale to AAA production with combo systems and optimization",
    });
  }

  if (currentPath?.includes("networking-blueprint-basics")) {
    recs.push({
      type: "⚡ Enterprise",
      title: "Advanced Networking (Prediction)",
      link: "/guide/advanced-networking-prediction-authority",
      reason: "Add client prediction and lag compensation",
    });
  }

  if (currentPath?.includes("performance-optimization-blueprint")) {
    recs.push({
      type: "📊 Monitoring",
      title: "Performance Budgets & Profiling",
      link: "/guide/performance-budgets-profiling-blueprint",
      reason: "Set up concrete performance monitoring and budgets",
    });
  }

  if (currentPath?.includes("ai-powered-blueprint-development")) {
    recs.push({
      type: "🏢 Pipeline",
      title: "Production Pipeline (CI/CD)",
      link: "/guide/production-pipeline-blueprint-cicd",
      reason: "Integrate AI workflows into production pipeline",
    });
  }

  return recs;
});
</script>

<style scoped>
.smart-navigation {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}

.nav-links {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.nav-item.next {
  align-items: flex-end;
  text-align: right;
}

.nav-label {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 4px;
  font-weight: 500;
}

.nav-title {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-size: 16px;
  line-height: 1.3;
}

.nav-title:hover {
  text-decoration: underline;
}

.section-overview {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
}

.section-overview h3 {
  margin: 0 0 16px 0;
  color: var(--vp-c-text-1);
  font-size: 20px;
}

.section-progress {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: var(--vp-c-default-soft);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--vp-c-brand-1);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 14px;
  color: var(--vp-c-text-2);
  font-weight: 500;
}

.section-links {
  display: grid;
  gap: 8px;
}

.section-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.section-link:hover {
  background: var(--vp-c-default-soft);
}

.link-status {
  font-size: 16px;
  width: 24px;
  text-align: center;
}

.section-link a {
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-weight: 500;
}

.section-link a.current-page {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.section-link a:hover {
  color: var(--vp-c-brand-1);
}

.learning-recommendations {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  border-left: 4px solid var(--vp-c-brand-1);
}

.learning-recommendations h4 {
  margin: 0 0 16px 0;
  color: var(--vp-c-text-1);
  font-size: 18px;
}

.recommendations-list {
  display: grid;
  gap: 12px;
}

.recommendation {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px;
  background: var(--vp-c-bg-elv);
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.rec-type {
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.rec-title {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
}

.rec-title:hover {
  text-decoration: underline;
}

.rec-reason {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

.fallback-cta {
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
}

.cta-link {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
  padding: 12px 24px;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 8px;
  transition: all 0.2s;
}

.cta-link:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-bg);
  text-decoration: none;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    gap: 16px;
  }

  .nav-item.next {
    align-items: flex-start;
    text-align: left;
  }

  .section-progress {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .recommendations-list {
    gap: 8px;
  }

  .recommendation {
    padding: 12px;
  }
}
</style>
