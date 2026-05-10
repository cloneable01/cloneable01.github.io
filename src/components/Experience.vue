<template>
  <div class="relative" ref="root">
    <div
      class="text-red-500 lg:flex text-base lg:text-xl m-auto monoton border-2 border-black bg-white w-fit p-2 lg:absolute lg:left-20 lg:top-12 z-20"
    >
      EXPERIENCE
    </div>

    <div
      class="mx-8 mt-8 lg:mx-24 border lg:border-2 border-black bg-white pb-16"
    >
      <div class="pt-16 px-8 lg:px-16 lg:mt-16">
        <div
          v-for="(job, i) in jobs"
          :key="job.company"
          class="job-entry reveal"
          :style="`--reveal-delay: ${i * 150}ms`"
        >
          <div
            class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3"
          >
            <div class="text-base md:text-xl lg:text-2xl">
              <a
                :href="job.url"
                target="_blank"
                rel="noopener noreferrer"
                class="font-semibold hover:underline decoration-red-500 underline-offset-2 inline-flex items-center gap-1"
                >{{ job.company }}<span class="text-xs text-red-500">↗︎</span></a
              >
              <span class="text-red-500 mx-2">·</span>
              <span>{{ job.role }}</span>
            </div>
            <span class="text-xs sm:text-sm shrink-0 opacity-50">{{
              job.period
            }}</span>
          </div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            <span
              v-for="tech in job.stack"
              :key="tech"
              class="text-xs border border-black px-2 py-0.5 leading-tight"
              >{{ tech }}</span
            >
          </div>
          <ul class="text-xs sm:text-sm md:text-base space-y-2">
            <li v-for="h in job.highlights" :key="h" class="flex gap-3">
              <span class="text-red-500 shrink-0 mt-0.5">—</span>
              <span>{{ h }}</span>
            </li>
          </ul>

          <div
            v-if="i < jobs.length - 1"
            class="mt-12 mb-12 border-t border-black/20"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const JOBS = [
  {
    company: "Dolpheen.id",
    url: "https://dolpheen.id",
    role: "Fullstack Developer",
    period: "Sept 2024 — Present",
    stack: ["Next.js", "React", "Nest.js", "FastAPI", "GraphQL"],
    highlights: [
      "Spearheaded migration from WordPress to Next.js, optimizing Core Web Vitals and delivering a 20% sales uplift upon release.",
      "Implemented AI-driven OCR for ID verification and WhatsApp automation for HRIS, achieving full attendance workflow automation.",
      "Led end-to-end architecture and development of an internal HRIS with scalable payroll, attendance, and performance modules.",
      "Established a unified design system and reusable component library, improving development efficiency across all platforms.",
    ],
  },
  {
    company: "PT SISI",
    url: "https://sisi.id/",
    role: "Fullstack Developer",
    period: "Sept 2023 — Oct 2024",
    stack: ["React", "Next.js", "Node.js", "Nest.js", "Docker", "REST"],
    highlights: [
      "Led frontend and backend development of an ERP-integrated internal dashboard for Wika Realty.",
      "Designed and implemented the public-facing interface for Kominfo's standar.sdmdigital.id, focused on UX quality.",
      "Mentored junior developers through code reviews, hands-on support, and collaborative architecture decisions.",
      "Built a comprehensive data management dashboard supporting manual and automated import/export workflows.",
    ],
  },
  {
    company: "Primedial.io",
    url: "https://primedial.io",
    role: "Fullstack Developer",
    period: "Jan 2022 — Sept 2023",
    stack: ["Vue.js", "Nuxt.js", "Node.js", "Express.js", "AWS", "REST"],
    highlights: [
      "Built and maintained custom CMS platforms enabling clients to manage content and campaigns without technical dependency.",
      "Designed modular, scalable system architectures ensuring platforms could grow alongside client business needs.",
      "Handled full-stack delivery across multiple client projects — from requirements and system design through to production.",
    ],
  },
];

export default {
  data() {
    return { jobs: JOBS };
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
.job-entry {
  border-left: 2px solid #ef4444;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 10px;
    width: 8px;
    height: 8px;
    background: #ef4444;
  }
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
