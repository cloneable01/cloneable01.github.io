<template>
  <div>
    <div class=" text-red-500 sm:flex text-base sm:text-xl m-auto monoton border-2 border-black bg-white w-fit p-2 sm:absolute sm:left-20 sm:top-[57.5rem] z-20">ABOUT</div>
    <div class="mx-8 mt-16 sm:mt-8 sm:mx-24 border sm:border-2 border-black bg-white h-[50rem] sm:h-[50rem] justify-around block flex-col">
      <div class="w-3/4 m-auto mt-16">
        <div class="border-container m-auto w-fit bg-white">
          <div class="square top-left"></div>
          <div class="square top-right"></div>
          <div class="square bottom-left"></div>
          <div class="square bottom-right"></div>
          <div class="m-8 text-sm sm:text-lg md:text-2xl xl:text-4xl tracking-[0.04rem] sm:tracking-[0.15rem] max-w-[520px] sm:max-w-[700px]">
            <p>
              Hello<span>,</span> Im Kevin F<span>.</span> Kidley
            </p>
            <p>I am a Front<span>-</span>End Developer</p>
          </div>
        </div>
      </div>
      <div class="mt-16 flex justify-around">
        <div class="text-xs sm:text-base md:text-lg lg:text-xl text-justify max-w-xs sm:max-w-xl md:max-w-2xl leading-12">
          My journey began in psychology, providing me unique insights into user behavior and interaction. Today, I channel that understanding into crafting captivating web experiences that seamlessly fuse aesthetics, UI/UX design, and functionality. With JavaScript as programming languages, I'm dedicated to delivering user-centered digital solutions that leave a lasting impact. Leveraging frameworks such as Vue and React, and utilizing CSS/SCSS frameworks like Bootstrap and Tailwind, I strive to create online experiences that are not only visually appealing but also intuitive and responsive. Let's collaborate and turn your ideas into engaging online realities.
        </div>
        <div class="max-w-32 text-center">
          <p class="text-2xl">Simplified?</p>
          <p>click to activate</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

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

span {
  color: rgb(239 68 68);
}

</style>