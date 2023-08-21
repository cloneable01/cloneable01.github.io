<template>
  <div class="top-0 fixed bg-white border-black border-b-2 h-auto z-50 min-w-full flex justify-between sm:text-xl text-sm">
    <!-- <button class="ml-4 sm:hidden text-xl block">
      <div>x</div>
    </button> -->
    <ul class="flex monoton ml-4 md:ml-20 m-auto text-red-500 text-[0.6rem] sm:text-xl">
      <li>
        <a href="#about" class="btn" @click="scrollToSection('about')">ABOUT</a>
      </li>
      <li>
        <a href="#project" class="btn">PROJECT</a>
      </li>
      <li>
        <a href="#contact" class="btn">CONTACT</a>
      </li>
    </ul>
    <div class="flex py-1 mr-4 md:mr-20">
      <div class="m-auto text-center text-[0.75rem] sm:text-xl">Kevin F<span class="text-red-500">.</span> Kidley</div>
      <img src=".././assets/primedial.svg" alt="Logo" class="h-6 sm:h-8 mx-4 rounded-full bg-black m-auto">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      this.$emit('scrollToSection', sectionId);
    }
  }
};
</script>

<style lang="scss" scoped>

.btn {
  height: max-content;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border: 2px solid transparent;
}

.btn:hover {
  background-color: lightgray;
  border: 2px solid black;
}

@media only screen and (max-width: 640px) {
  .btn {
    padding-left: 0.15rem;
    padding-right: 0.15rem;
  }
}
</style>