<template>
  <div class="relative" ref="root">
    <div
      class="text-red-500 lg:flex text-base lg:text-xl m-auto monoton border-2 border-black bg-white w-fit p-2 lg:absolute lg:left-20 lg:top-12 z-20"
    >
      PROJECTS
    </div>

    <div
      class="mx-8 mt-8 lg:mx-24 border lg:border-2 border-black bg-white pb-16"
    >
      <div class="pt-16 px-8 lg:px-16 lg:mt-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div
            v-for="(project, i) in projects"
            :key="project.name"
            class="border-container reveal"
            :style="`--reveal-delay: ${i * 150}ms`"
          >
            <div class="square top-left" />
            <div class="square top-right" />
            <div class="square bottom-left" />
            <div class="square bottom-right" />

            <div class="m-6 sm:m-8">
              <div
                class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1"
              >
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-base md:text-xl lg:text-2xl font-semibold hover:underline decoration-red-500 underline-offset-2 inline-flex items-center gap-1"
                  >{{ project.name
                  }}<span class="text-xs text-red-500">↗︎</span></a
                >
                <span class="text-xs sm:text-sm shrink-0 opacity-50">{{
                  project.period
                }}</span>
              </div>
              <p class="text-sm mb-3 text-red-500">{{ project.role }}</p>
              <div class="flex flex-wrap gap-1.5 mb-5">
                <span
                  v-for="tech in project.stack"
                  :key="tech"
                  class="text-xs border border-black px-2 py-0.5 leading-tight"
                  >{{ tech }}</span
                >
              </div>
              <ul class="text-xs sm:text-sm space-y-2">
                <li v-for="h in project.highlights" :key="h" class="flex gap-2">
                  <span class="text-red-500 shrink-0">—</span>
                  <span>{{ h }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const PROJECTS = [
  {
    name: "Datafindo.id",
    url: "https://datafindo.id",
    role: "Frontend Developer",
    period: "Dec 2025 — Jan 2026",
    stack: ["Next.js", "GCP"],
    highlights: [
      "Built and launched a modern, responsive company profile website from scratch.",
      "Managed full GCP deployment lifecycle including environment configuration and high-availability setup.",
      "Implemented a multi-stage CI/CD pipeline (Dev → Staging → Production) for zero-downtime releases.",
      "Engineered secure form submission and automated email communication workflows.",
    ],
  },
  {
    name: "Bintang Agency",
    url: "https://bintangagency.com",
    role: "Fullstack Developer",
    period: "Apr 2023 — Jul 2023",
    stack: ["Nuxt.js", "Node.js", "Express.js", "AWS"],
    highlights: [
      "Developed and maintained the bintangagency.com dashboard with seamless UI/UX implementation.",
      "Identified and resolved bugs through thorough testing, ensuring a smooth user experience.",
      "Collaborated with lead developers and product owner across cross-functional team reviews.",
    ],
  },
];

export default {
  data() {
    return { projects: PROJECTS };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.$el
            .querySelectorAll(".reveal")
            .forEach((el) => el.classList.add("revealed"));
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(this.$refs.root);
  },
};
</script>

<style lang="scss" scoped>
.border-container {
  position: relative;
  border: 1px solid #000;
}

.square {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #000;
}

.top-left {
  top: -4px;
  left: -4px;
}
.top-right {
  top: -4px;
  right: -4px;
}
.bottom-left {
  bottom: -4px;
  left: -4px;
}
.bottom-right {
  bottom: -4px;
  right: -4px;
}

.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
  transition-delay: var(--reveal-delay, 0ms);
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
