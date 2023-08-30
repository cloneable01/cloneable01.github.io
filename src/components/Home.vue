<template>
  <div class="relative">
    <div class=" text-red-500 sm:flex text-base sm:text-xl m-auto monoton border-2 border-black bg-white w-fit p-2 sm:absolute sm:left-20 sm:top-12 z-20">PHILOSOPHY</div>
    <div class="mx-8 sm:mx-24 sm:border-2 border-black sm:bg-white h-[30rem] sm:h-[45rem] justify-around flex flex-col">
      <div>
        <box-1 class="float-right sm:mr-12" :class="isScreenSmOrLarger ? 'delayed-scroll' : ''" />
      </div>
      <div>
        <box-2 class="float-left sm:ml-12" :class="isScreenSmOrLarger ? 'delayed-scroll' : ''" />
      </div>
      <div>
        <box-3 class="float-right sm:mr-12" :class="isScreenSmOrLarger ? 'delayed-scroll' : ''" />
      </div>
    </div>
  </div>
</template>

<script>
import Box1 from "./box/box1.vue";
import Box2 from "./box/box2.vue";
import Box3 from "./box/box3.vue";

export default {
  components: {
    Box1,
    Box2,
    Box3,
  },
  data() {
    return {
      isScreenSmOrLarger: window.innerWidth >= 640,
      delayedElements: null,
    };
  },
  mounted() {
    if (this.isScreenSmOrLarger) {
      this.delayedElements = this.$el.querySelectorAll('.delayed-scroll');
      window.addEventListener('scroll', this.handleScroll);
    }
  },
  beforeDestroy() {
    if (this.isScreenSmOrLarger) {
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      this.delayedElements.forEach((element) => {
        const scrollY = window.scrollY;
        const elementOffset = element.offsetTop;
        const direction = scrollY > elementOffset ? -1 : 1;
        const delay = 0.5;
        const maxOffset = 12;
        const resetDelay = 500;

        const offset = direction * Math.max(0, Math.min(maxOffset, Math.abs(scrollY - elementOffset) * delay));

        element.style.transform = `translateY(${offset}px)`;

        clearTimeout(element.timeoutId);
        element.timeoutId = setTimeout(() => {
          element.style.transform = 'translateY(0)';
        }, resetDelay);
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
</style>
