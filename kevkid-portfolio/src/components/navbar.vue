<template>
  <div class="top-0 fixed bg-white border-black border-b-2 h-auto z-50 min-w-full flex justify-between sm:text-xl text-sm">
    <button class="ml-4 sm:hidden text-xl block">
      <div>x</div>
    </button>
    <ul class="hidden sm:flex monoton ml-4 md:ml-20 m-auto text-red-500 text-xs sm:text-xl">
      <li class="">
        <a href="#info" class="btn">ABOUT</a>
      </li>
      <li class="">
        <a href="#task" class="btn">PROJECT</a>
      </li>
      <li class="">
        <a href="#link" class="btn text-center">CONTACT</a>
      </li>
    </ul>
    <div class="flex py-1 mr-4 md:mr-20">
      <div class="m-auto text-center">Kevin F<span class="text-red-500">.</span> Kidley</div>
      <img src=".././assets/primedial.svg" alt="Logo" class="h-8 mx-4 rounded-full bg-black m-auto">
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

.btn {
  height: max-content;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

.btn:hover {
  background-color: lightgray;
  border-width: 2px;
  border-color: black;
}
</style>