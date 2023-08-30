<template>
  <div class="sm:min-h-screen block">
    <Navbar @scrollToSection="scrollToSection" />
    <div class="mt-16 mb-4 sm:mt-[4.5rem] sm:mb-10">
      <Home />
    </div>
    <div class="my-4 sm:my-10">
      <About id="about" />
    </div>
    <footer>
      <Contact id="contact" />
    </footer>
  </div>
</template>

<script>
import Navbar from "./components/navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";

export default {
  components: {
    Navbar,
    Home,
    About,
    Contact,
  },
  methods: {
    scrollToSection(sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
};
</script>


<style>
body {
  font-family: "Monomaniac One", sans-serif;
}
</style>