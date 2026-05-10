<template>
  <div class="w-full lg:w-3/4">
    <div
      class="border-container lg:float-right text-center lg:text-left w-full lg:w-fit bg-white"
    >
      <div class="square top-left"></div>
      <div class="square top-right"></div>
      <div class="square bottom-left"></div>
      <div class="square bottom-right"></div>
      <div
        class="m-8 text-base md:text-lg lg:text-2xl xl:text-4xl tracking-[0.04rem] lg:tracking-[0.1rem] max-w-[520px] lg:max-w-[720px]"
      >
        <p>I don't ship features<span class="text-red-500">.</span> I architect foundations<span class="text-red-500">.</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
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
