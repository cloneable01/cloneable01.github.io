<template>
  <div class="top-0 fixed border-black border-b-2 h-auto z-50 min-w-full flex justify-between md:text-xl text-sm">
    <button class=" md:hidden text-2xl">
      x
    </button>
    <ul class="hidden md:inline-flex monoton h-max">
      <li class="btn m-auto">
        <a href="#home">HOME</a>
      </li>
      <li class="btn m-auto">
        <a href="#info">INFO</a>
      </li>
      <li class="btn m-auto">
        <a href="#task">TASK</a>
      </li>
      <li class="btn m-auto">
        <a href="#link">LINK</a>
      </li>
    </ul>
    <div class="flex my-1">
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
li {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
}

.monoton {
  font-family: "Monoton", cursive;
  color: red;
}


.btn {
  height: max-content;
  border-width: 1px;
  border-color: white;
}

.btn:hover {
  background-color: lightgray;
  border-width: 1px;
  border-color: black;
}
</style>