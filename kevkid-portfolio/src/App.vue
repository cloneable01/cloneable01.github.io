<template>
  <div class="min-h-screen" style="min-height: 200vh">
    <navbar></navbar>
    <div class="mt-20">
      <div class=" mx-24 border-2 border-black h-[45rem]">test</div>
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

export default {
  components: {
    styles: styles,
    Navbar: Navbar
  } 

};
</script>
