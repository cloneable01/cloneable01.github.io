<template>
  <div class="min-h-screen" style="min-height: 200vh">
    <navbar class="fixed"></navbar>
    <div class="">
      <div class="m-auto">test</div>
    </div>
  </div>
</template>

<style scoped>
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
