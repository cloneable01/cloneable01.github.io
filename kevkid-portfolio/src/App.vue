<template>
  <div class="min-h-screen" style="min-height: 200vh">
    <navbar></navbar>
    <div class="mt-20">
      <div class="mx-8 md:mx-24 md:border-2 border-black h-[45rem]">
        <div>
          <box-1 class=" float-right md:mr-12 mt-4 md:mt-14" />
          <box-2 class=" float-left md:ml-12 mt-6 md:mt-16" />
          <box-1 class=" float-right md:mr-12 mt-6 md:mt-16" />
        </div>
      </div>
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
import Box1 from "./components/box/box1.vue"
import Box2 from "./components/box/box2.vue"

export default {
  components: {
    styles: styles,
    Navbar: Navbar,
    Box1: Box1,
    Box2: Box2,
  } 

};
</script>
