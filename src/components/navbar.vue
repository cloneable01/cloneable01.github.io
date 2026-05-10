<template>
  <div
    class="top-0 fixed bg-white border-black border-b-4 z-50 w-full h-12 lg:h-16 flex items-stretch justify-between"
  >
    <div class="flex items-stretch">
      <ul
        class="hidden lg:flex items-stretch monoton ml-4 lg:ml-20 text-red-500 text-xl"
      >
        <li class="flex items-stretch">
          <a href="#about" class="btn">ABOUT</a>
        </li>
        <li class="flex items-stretch">
          <a href="#experience" class="btn">EXPERIENCE</a>
        </li>
        <li class="flex items-stretch">
          <a href="#project" class="btn">PROJECT</a>
        </li>
        <li class="flex items-stretch">
          <a href="#contact" class="btn">CONTACT</a>
        </li>
      </ul>
      <div class="flex lg:hidden items-center ml-4 text-sm">
        Kevin F<span class="text-red-500">.</span> Kidley
      </div>
    </div>
    <div class="flex items-center gap-3 mr-4 md:mr-20">
      <div class="hidden lg:block text-[0.75rem] lg:text-xl">
        Kevin F<span class="text-red-500">.</span> Kidley
      </div>
      <button
        @click="toggleMenu"
        class="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
        aria-label="Toggle menu"
      >
        <span :class="['bar', menuOpen && 'bar-1-open']" />
        <span :class="['bar', menuOpen && 'bar-2-open']" />
        <span :class="['bar', menuOpen && 'bar-3-open']" />
      </button>
    </div>
    <div :class="['mobile-menu', { open: menuOpen }]">
      <button
        @click="closeMenu"
        class="close-btn"
        :class="{ 'close-visible': menuOpen }"
        :style="{ transitionDelay: menuOpen ? '300ms' : '0ms' }"
        aria-label="Close menu"
      >
        ✕
      </button>

      <nav
        class="h-full flex flex-col items-center justify-center gap-10 pt-12"
      >
        <a
          v-for="(link, i) in links"
          :key="link.href"
          :href="link.href"
          @click="closeMenu"
          class="menu-link monoton text-red-500 text-3xl tracking-widest"
          :class="{ 'link-visible': menuOpen }"
          :style="{ transitionDelay: menuOpen ? `${180 + i * 80}ms` : '0ms' }"
          >{{ link.label }}</a
        >
      </nav>
    </div>
  </div>
</template>

<script>
const LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#project", label: "PROJECT" },
  { href: "#contact", label: "CONTACT" },
];

export default {
  data() {
    return { menuOpen: false, links: LINKS };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      document.body.style.overflow = this.menuOpen ? "hidden" : "";
    },
    closeMenu() {
      this.menuOpen = false;
      document.body.style.overflow = "";
    },
  },
  beforeUnmount() {
    document.body.style.overflow = "";
  },
};
</script>

<style lang="scss" scoped>
/* Desktop nav hover (unchanged) */
.btn {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border: 4px solid transparent;
  transition:
    background-color 0.12s ease,
    color 0.12s ease,
    border-color 0.12s ease;
}

.btn:hover {
  background-color: #000;
  color: #fff;
  border-top-color: transparent;
  border-left-color: #000;
  border-right-color: #000;
  border-bottom-color: #000;
  margin-bottom: -4px;
}

/* Hamburger → X */
.bar {
  display: block;
  width: 1.25rem;
  height: 2px;
  background-color: #000;
  border-radius: 1px;
  transform-origin: center;
  transition:
    transform 0.3s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.3s ease;
}

/* bar center-to-center distance = bar height (2px) + gap (5px) = 7px */
.bar-1-open {
  transform: translateY(7px) rotate(45deg);
}
.bar-2-open {
  opacity: 0;
  transform: scaleX(0);
}
.bar-3-open {
  transform: translateY(-7px) rotate(-45deg);
}

/* Circle spread overlay */
.mobile-menu {
  position: fixed;
  inset: 0;
  background-color: white;
  z-index: 45;
  clip-path: circle(0px at calc(100% - 2rem) 1.5rem);
  transition: clip-path 0.65s cubic-bezier(0.77, 0, 0.175, 1);
  pointer-events: none;

  &.open {
    clip-path: circle(200vmax at calc(100% - 2rem) 1.5rem);
    pointer-events: auto;
  }
}

/* Close button */
.close-btn {
  position: absolute;
  top: 4rem;
  right: 1rem;
  width: 2.75rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef4444;
  font-size: 1.25rem;
  opacity: 0;
  transform: rotate(-90deg) scale(0.8);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    color 0.15s ease,
    border-color 0.15s ease;

  &.close-visible {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }

  &:hover {
    color: #ef4444;
    border-color: #ef4444;
  }
}

/* Menu links */
.menu-link {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.35s ease,
    transform 0.35s ease,
    color 0.15s ease;

  &.link-visible {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    color: #ef4444;
  }
}
</style>
