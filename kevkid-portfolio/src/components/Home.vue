<template>
  <div>
    <div class="text-red-500 sm:flex text-xl m-auto monoton border-2 border-black bg-white w-fit p-2 sm:absolute sm:left-20 sm:top-28 z-20">PHILOSOPHY</div>
    <div class="mx-8 sm:mx-24 sm:border-2 border-black sm:bg-white h-[30rem] sm:h-[45rem] justify-around flex flex-col">
      <div>
        <box-1 class=" float-right sm:mr-12" />
      </div>
      <div>
        <box-2 class=" float-left sm:ml-12" />
      </div>
      <div>
        <box-3 class=" float-right sm:mr-12" />
      </div>
    </div>
  </div>
</template>

<script>
import Box1 from "./box/box1.vue"
import Box2 from "./box/box2.vue"
import Box3 from "./box/box3.vue"

export default {
  components: {
    Box1: Box1,
    Box2: Box2,
    Box3: Box3,
  }
}
</script>
