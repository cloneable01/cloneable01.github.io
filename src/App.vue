<template>
  <div class="sm:min-h-screen block">
    <Navbar />
    <div class="mt-16 mb-4 lg:mt-[4.5rem] lg:mb-10">
      <Home />
    </div>
    <div class="my-4 lg:my-10">
      <About id="about" />
    </div>
    <div class="my-4 lg:my-10">
      <Experience id="experience" />
    </div>
    <div class="my-4 lg:my-10">
      <Projects id="project" />
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
import Experience from "./components/Experience.vue";
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";

export default {
  components: {
    Navbar,
    Home,
    About,
    Experience,
    Projects,
    Contact,
  },
};
</script>

<style>
body {
  font-family: "Monomaniac One", sans-serif;
}
</style>
