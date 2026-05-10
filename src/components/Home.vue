<template>
  <div class="relative">
    <div
      ref="label"
      class="label-entrance text-red-500 lg:flex text-base lg:text-xl m-auto monoton border-2 border-black bg-white w-fit p-2 lg:absolute lg:left-20 lg:top-12 z-20"
    >
      PHILOSOPHY
    </div>
    <div
      class="mx-8 lg:mx-24 lg:border-2 border-black lg:bg-white flex flex-col gap-6 py-10 lg:py-0 lg:gap-0 lg:justify-around lg:h-[45rem]"
    >
      <div ref="w1" class="entrance enter-right">
        <box-1
          class="lg:float-right lg:mr-12"
          :class="isScreenSmOrLarger ? 'delayed-scroll' : ''"
        />
      </div>
      <div ref="w2" class="entrance enter-left">
        <box-2
          class="lg:float-left lg:ml-12"
          :class="isScreenSmOrLarger ? 'delayed-scroll' : ''"
        />
      </div>
      <div ref="w3" class="entrance enter-right">
        <box-3
          class="lg:float-right lg:mr-12"
          :class="isScreenSmOrLarger ? 'delayed-scroll' : ''"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Box1 from "./box/box1.vue";
import Box2 from "./box/box2.vue";
import Box3 from "./box/box3.vue";

export default {
  components: { Box1, Box2, Box3 },

  data() {
    return {
      isScreenSmOrLarger: window.innerWidth >= 1024,
      delayedElements: null,
    };
  },

  mounted() {
    // Staggered entrance — label first, then boxes from their natural sides
    setTimeout(() => this.$refs.label.classList.add("visible"), 50);
    [this.$refs.w1, this.$refs.w2, this.$refs.w3].forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), 200 + i * 180);
    });

    // Scroll parallax (sm+ only)
    if (this.isScreenSmOrLarger) {
      this.delayedElements = this.$el.querySelectorAll(".delayed-scroll");
      window.addEventListener("scroll", this.handleScroll);
    }
  },

  beforeUnmount() {
    if (this.isScreenSmOrLarger) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },

  methods: {
    handleScroll() {
      this.delayedElements.forEach((element) => {
        const scrollY = window.scrollY;
        const elementOffset = element.offsetTop;
        const direction = scrollY > elementOffset ? +1 : -1;
        const offset =
          direction *
          Math.max(0, Math.min(12, Math.abs(scrollY - elementOffset) * 0.5));

        element.style.transform = `translateY(${offset}px)`;

        clearTimeout(element.timeoutId);
        element.timeoutId = setTimeout(() => {
          element.style.transform = "translateY(0)";
        }, 500);
      });
    },
  },
};
</script>

<style scoped>
.delayed-scroll {
  transition: transform 0.8s ease-out;
  transform: translateY(0);
}

/* ── PHILOSOPHY label entrance ───────────────────── */
.label-entrance {
  opacity: 0;
  transition: opacity 0.6s ease;
}
.label-entrance.visible {
  opacity: 1;
}

/* ── Box wrapper entrances (separate from parallax) ─ */
.entrance {
  opacity: 0;
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.enter-right {
  transform: translateX(50px);
}
.enter-left {
  transform: translateX(-50px);
}

@media (max-width: 1023px) {
  .enter-right,
  .enter-left {
    transform: translateY(40px);
  }
}

.entrance.visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
