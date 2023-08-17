<template>
  <div class="main-container">
    <div class="navbar-container">
      <Navbar class="navbar"/>
    </div>
    <div class="content-container sm:mt-44 mt-36">
      <section ref="#lp" id="landing-page">
        <div class="block justify-between xl:flex">
          <div>
            <span class="font-le-genoss sm:text-2xl md:text-3xl secondary">Creative</span>
            <h1 class="font-le-genoss text-5xl sm:text-7xl md:text-8xl">Designer <br><span class="secondary">&</span> Developer</h1>
          </div>
          <div class="xl:max-w-lg text-justify xl:mt-52 mt-14">
            <div id="lp-text" class="sm:text-2xl text-base max-w-lg min-w-[200px] sm:min-w-[350px] m-auto mr-0 leading-relaxed sm:leading-loose">
              <h2 class="text-right">I'm a front-end developer</h2>
              <h2>from Bandung, Indonesia, with a background in psychology, passionate about creating visually stunning and user-friendly designs that merge technology, art, and psychology.</h2>
            </div>
          </div>
        </div>
        <div class="m-auto ml-0 mt-12 sm:mt-0">
          <TextSphere />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: { TextSphere },
  setup() {
    return {
    };
  }
};
</script>

<script setup>
import Navbar from './components/Navbar.vue'
import TextSphere from './components/TextSphere.vue';

</script>

<style scoped>
.navbar-container {
  position: fixed;
  top: 0;
  z-index: 100;
  transition: opacity 0.3s, visibility 0.3s;
  opacity: 1;
  visibility: visible;
  width: 100%;
}

.navbar-hidden {
  opacity: 0;
  visibility: hidden;
}

#landing-page{
  height: 100vh;
}

.main-container {
  min-height: 300vh;
}

.content-container {
  margin-left: max(5%,40px);
  margin-right: max(5%,40px);
}

.black-hole {
  z-index: -1;
  position: absolute;
  right: -250px;
  top: -250px;
  height: 900px;
  width: 900px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  display: inline-block;
  filter: blur(10px);
  opacity: 20;
}

.empty-space{
  min-width: 200px;
  display: inline-block;
}

@media only screen and (max-width: 600px) {
  .empty-space{
    min-width: 120px;
    display: inline-block;
  }
}
</style>
