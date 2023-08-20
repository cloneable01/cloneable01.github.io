<template>
  <div class="w-full sm:w-3/4">
    <div class="border-container float-right text-right w-full sm:w-fit bg-white">
      <div class="square top-left"></div>
      <div class="square top-right"></div>
      <div class="square bottom-left"></div>
      <div class="square bottom-right"></div>
      <div class="m-8 text-base sm:text-lg md:text-2xl xl:text-4xl tracking-[0.04rem] sm:tracking-[0.1rem] max-w-[520px] sm:max-w-[720px]">
        <p>
          Elevating User Experiences through Elegant Front-End Solutions <span class=" text-red-500">.</span>
        </p>
      </div>
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

<style scoped>

.border-container {
  position: relative;
  border: 1px solid #000;
}

.square {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #000000;
}

.top-left {
  top: -4px;
  left: -4px;
}

.top-right {
  top: -4px;
  right: -4px;
}

.bottom-left {
  bottom: -4px;
  left: -4px;
}

.bottom-right {
  bottom: -4px;
  right: -4px;
}

</style>