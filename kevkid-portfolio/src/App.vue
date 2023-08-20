<template>
  <div class="sm:min-h-screen block" style="min-height: 200vh">
    <navbar></navbar>
    <div class="mt-16 sm:mt-20"/>
      <Home />
    <div class="mt-8 sm:mt-20">
      <About />
    </div>
  </div>
</template>

<style>
body {
  font-family: "Monomaniac One", sans-serif;
}


</style>

<script>
import styles from "./style.css?inline"
import Navbar from "./components/navbar.vue"
import Home from "./components/Home.vue"
import About from "./components/About.vue"

export default {
  components: {
    styles: styles,
    Navbar: Navbar,
    Home: Home,
    About: About,
  },
};
</script>

<style scoped>

</style>