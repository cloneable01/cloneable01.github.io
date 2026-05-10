<template>
  <div class="relative" ref="root">
    <div
      class="text-red-500 lg:flex text-base lg:text-xl m-auto monoton border-2 border-black bg-white w-fit p-2 lg:absolute lg:left-20 lg:top-12 z-20"
    >
      ABOUT
    </div>

    <div class="mx-8 mt-8 lg:mx-24 border lg:border-2 border-black bg-white">
      <div class="pt-16 flex justify-center px-4 lg:px-0">
        <div class="border-container bg-white">
          <div class="square top-left" />
          <div class="square top-right" />
          <div class="square bottom-left" />
          <div class="square bottom-right" />
          <div
            class="m-6 lg:m-8 text-sm md:text-lg lg:text-2xl xl:text-4xl tracking-[0.04rem] lg:tracking-[0.15rem]"
          >
            <p ref="line1" class="type-line whitespace-nowrap">
              Hello<span>,</span> I'm Kevin F<span>.</span> Kidley
            </p>
            <p ref="line2" class="type-line whitespace-nowrap">
              I am a Fullstack Developer
            </p>
          </div>
        </div>
      </div>
      <div class="mt-12 mb-12 px-8 lg:px-16">
        <div
          class="text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl lg:leading-loose mb-12 text-justify md:text-center mx-auto"
        >
          <p class="mb-6 reveal">
            I am a Fullstack Developer specializing in building scalable,
            high-performing web applications. I bridge the gap between complex
            backend services and intuitive, user-centered interfaces — aligning
            business goals with engineering excellence to deliver products that
            are efficient, maintainable, and impactful.
          </p>
          <p class="reveal" style="--reveal-delay: 120ms">
            My journey began in psychology, which gave me a unique lens on how
            people interact with technology. That background shapes how I
            approach every interface I build — not just as a technical artifact,
            but as an experience. Whether it's a responsive UI or a backend
            system, I care deeply about the human at the end of it. Let's team
            up and turn your ideas into engaging online realities.
          </p>
        </div>
        <div>
          <p
            class="text-lg md:text-2xl mb-8 reveal"
            style="--reveal-delay: 200ms"
          >
            Skill set
          </p>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            <div
              v-for="(group, i) in skills"
              :key="group.label"
              class="reveal"
              :style="`--reveal-delay: ${280 + i * 60}ms`"
            >
              <span class="text-xs sm:text-sm md:text-base lg:text-lg">{{
                group.label
              }}</span>
              <p
                v-for="item in group.items"
                :key="item"
                class="text-xs sm:text-sm md:text-base mt-1 opacity-60"
              >
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const SKILLS = [
  { label: "Languages", items: ["JavaScript", "TypeScript", "Python"] },
  { label: "Frontend", items: ["React", "Vue.js", "Next.js", "Nuxt.js"] },
  { label: "Backend", items: ["Node.js", "Nest.js", "Express.js", "FastAPI"] },
  { label: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL"] },
  {
    label: "DevOps & Tools",
    items: ["Docker", "AWS", "GCP", "CI/CD", "Jest", "Grafana K6"],
  },
  { label: "Design", items: ["Figma", "UI/UX Design", "System Architecture"] },
  { label: "Essentials", items: ["AI Automation", "AI Agents"] },
];

const CHAR_MS = 45;

export default {
  data() {
    return { skills: SKILLS };
  },

  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.startAnimations();
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(this.$refs.root);
  },

  methods: {
    startAnimations() {
      const { line1, line2 } = this.$refs;
      const dur1 = line1.textContent.trim().length * CHAR_MS;
      const dur2 = line2.textContent.trim().length * CHAR_MS;

      // Line 1 types, then line 2 picks up the cursor
      line1.style.animationDuration = `${dur1}ms, 0.6s`;
      line1.classList.add("typing");

      setTimeout(() => {
        line1.classList.remove("typing");
        line1.classList.add("typed");

        line2.style.animationDuration = `${dur2}ms, 0.6s`;
        line2.classList.add("typing");

        setTimeout(() => {
          line2.classList.remove("typing");
          line2.classList.add("typed-final");
        }, dur2);
      }, dur1);
      setTimeout(() => {
        this.$el
          .querySelectorAll(".reveal")
          .forEach((el) => el.classList.add("revealed"));
      }, 600);
    },
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

span {
  color: rgb(239 68 68);
}

@keyframes typewriter {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0% 0 0);
  }
}

@keyframes blink-cursor {
  50% {
    border-right-color: transparent;
  }
}

.type-line {
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
  border-right: 2px solid transparent;
}

.typing {
  animation:
    typewriter 1s linear forwards,
    blink-cursor 0.6s step-end infinite;
  border-right-color: #ef4444;
}

.typed {
  clip-path: inset(0 0% 0 0);
  border-right-color: transparent;
}

.typed-final {
  clip-path: inset(0 0% 0 0);
  border-right-color: #ef4444;
  animation: blink-cursor 0.6s step-end infinite;
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
