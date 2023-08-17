<template>
  <nav class="nav text-white py-6 flex justify-between">
    <button class="font-le-genoss" @click="toHome()">Kevin F<span>.</span> Kidley</button>
    <button class="hamburger" text @click="dialogVisible = true">
      <div class="block secondary">
        x
      </div>
    </button>
    <div class="flex nav-items">
      <ul class="flex">
        <li>
          <a href="" class="mx-2">About</a>
        </li>
        <li>
          <a href="" class="mx-2">Works</a>
        </li>
        <li>
          <a href="" class="mx-2">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  <el-dialog v-model="dialogVisible" fullscreen open-delay="150" close-delay="150">
    <ul class="font-le-genoss text-7xl absolute left-12 bottom-8 inline-block text-red-500">
      <li class="py-4">
        <a href="" class="mx-2">About</a>
      </li>
      <li class="py-4">
        <a href="" class="mx-2">Works</a>
      </li>
      <li class="py-4">
        <a href="" class="mx-2">Contact</a>
      </li>
    </ul>
    <component :is="activeComponent">
    </component>
  </el-dialog>
  <div class="scroll-indicator">
    <div class="progress-bar" id="myBar"></div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  setup() {
    const dialogVisible = ref(false);
    const activeComponent = ref(null);

    function scrollIndicator() {
      window.onscroll = function() {
        var winScroll = document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
      };
    }

    function active(componentName) {
      dialogVisible.value = true;
      activeComponent.value = componentName;
    }

    function toHome() {
      const duration = 800; // Duration of the scroll animation in milliseconds
      const start = window.pageYOffset; // Starting scroll position
      const end = 0; // Ending scroll position
      const startTime = performance.now(); // Start time of the animation

      function scrollAnimation(currentTime) {
        const elapsed = currentTime - startTime; // Time elapsed since the animation started
        const progress = Math.min(elapsed / duration, 1); // Progress of the animation (between 0 and 1)
        const easedProgress = easeInOutCubic(progress); // Apply easing function to the progress
        const position = start + (end - start) * easedProgress; // Calculate the current scroll position

        window.scrollTo(0, position); // Scroll to the current position

        if (elapsed < duration) {
          // Request the next frame if the animation is not finished
          window.requestAnimationFrame(scrollAnimation);
        }
      }

      function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      }

      // Start the scroll animation
      window.requestAnimationFrame(scrollAnimation);
    }

    return {
      dialogVisible,
      activeComponent,
      scrollIndicator,
      active,
      toHome
    };
  },
  mounted() {
    this.scrollIndicator();
  }
};
</script>

<style scoped>

span{
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.nav a:hover {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.nav {
  backdrop-filter: blur(10px);
  background-color: transparent;
  width: 90%;
  margin: 0 auto;
  padding-left: max(5%, 40px);
  padding-right: max(5%, 40px);
}

.scroll-indicator {
  margin: 0 auto;
  width: 90%;
  height: 4px;
  background-color: #a1a1a1;
  z-index: 999;
}

.progress-bar {
  height: 100%;
  background-color: crimson;
  width: 0;
}

.hamburger{
  display: none;
}

@media only screen and (max-width: 640px) {
  .nav {
    font-size: 14px;
    width: 100%;
    margin: 0 auto;
    padding-left: max(5%, 40px);
    padding-right: max(5%, 40px);
  }

  .scroll-indicator {
    margin: 0 auto;
    width: 100%;
    height: 2px;
  }

  .nav-items{
    display: none;
  }

  .hamburger{
    display: flex;
  }
}
</style>

